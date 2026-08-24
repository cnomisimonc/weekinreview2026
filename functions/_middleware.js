// Access gate for the Global Week in Review dashboard.
// Runs on EVERY request to the Pages project, so index.html, data.js,
// fulltext.js and reports/*.pdf are all protected — not just the page.
//
// Required Cloudflare Pages environment variables (Settings > Environment
// variables). Mark SITE_PASSWORD and SESSION_SECRET as "Secret" (encrypted):
//   SITE_PASSWORD   the shared password you give readers
//   SESSION_SECRET  a long random string used to sign session cookies
//   ALLOWED_EMAILS  comma- or newline-separated list of permitted addresses
//
// Nothing secret is stored in this repo. If the variables are missing the
// site fails closed (503) rather than serving unprotected content.

const COOKIE  = "wir_session";
const MAX_AGE = 60 * 60 * 24 * 30;      // 30 days
const enc     = new TextEncoder();

function b64url(bytes) {
  const s = btoa(String.fromCharCode(...new Uint8Array(bytes)));
  return s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function unb64url(s) {
  return atob(s.replace(/-/g, "+").replace(/_/g, "/"));
}

async function hmac(secret, msg) {
  const key = await crypto.subtle.importKey(
    "raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64url(await crypto.subtle.sign("HMAC", key, enc.encode(msg)));
}

// Length-independent comparison, so the password can't be recovered by timing.
function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function allowlist(env) {
  return (env.ALLOWED_EMAILS || "")
    .split(/[,\n\r\s]+/)
    .map(s => s.trim().toLowerCase())
    .filter(Boolean);
}

async function issue(env, email) {
  const payload = `${email}|${Date.now() + MAX_AGE * 1000}`;
  return b64url(enc.encode(payload)) + "." + (await hmac(env.SESSION_SECRET, payload));
}

// Returns the signed-in email, or null. Re-checks the allowlist on every
// request, so deleting someone from ALLOWED_EMAILS logs them out immediately
// rather than waiting for their cookie to expire.
async function verify(env, token) {
  if (!token || !token.includes(".")) return null;
  const [body, sig] = token.split(".");
  let payload;
  try { payload = unb64url(body); } catch { return null; }
  if (!safeEqual(sig, await hmac(env.SESSION_SECRET, payload))) return null;
  const [email, exp] = payload.split("|");
  if (!exp || Date.now() > Number(exp)) return null;
  if (!allowlist(env).includes(email)) return null;
  return email;
}

function loginPage(message, email = "", status = 401) {
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Global Week in Review — Sign in</title>
<style>
  :root{ --bg:#0d1220; --panel:#151c30; --line:#26304f; --txt:#e8ecf6;
         --dim:#93a0bd; --faint:#5c6a8c; --amber:#d9a441; --dn:#f0596b; }
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
       background:var(--bg);color:var(--txt);
       font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
       padding:24px}
  .card{width:100%;max-width:380px;background:var(--panel);border:1px solid var(--line);
        border-radius:12px;padding:30px 28px}
  h1{margin:0 0 4px;font-size:19px;letter-spacing:-.01em}
  .sub{margin:0 0 22px;color:var(--dim);font-size:13px}
  .bar{width:34px;height:3px;background:var(--amber);border-radius:2px;margin-bottom:18px}
  label{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.06em;
        color:var(--faint);margin:0 0 6px}
  input{width:100%;padding:10px 12px;margin-bottom:16px;background:#0f1526;
        border:1px solid var(--line);border-radius:7px;color:var(--txt);font-size:15px}
  input:focus{outline:none;border-color:var(--amber)}
  button{width:100%;padding:11px;background:var(--amber);color:#1a1206;border:0;
         border-radius:7px;font-size:15px;font-weight:600;cursor:pointer}
  button:hover{filter:brightness(1.07)}
  .err{background:rgba(240,89,107,.12);border:1px solid var(--dn);color:#ffc9d0;
       padding:9px 11px;border-radius:7px;font-size:13px;margin-bottom:16px}
  .foot{margin-top:18px;color:var(--faint);font-size:12px;text-align:center}
</style></head><body>
  <form class="card" method="POST" action="/__auth">
    <div class="bar"></div>
    <h1>Global Week in Review</h1>
    <p class="sub">This dashboard is private. Sign in to continue.</p>
    ${message ? `<div class="err">${esc(message)}</div>` : ""}
    <label for="email">Email</label>
    <input id="email" name="email" type="email" autocomplete="username"
           required autofocus value="${esc(email)}">
    <label for="password">Password</label>
    <input id="password" name="password" type="password"
           autocomplete="current-password" required>
    <button type="submit">Sign in</button>
    <div class="foot">Access is limited to approved addresses.</div>
  </form>
</body></html>`;
  return new Response(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }
  });
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // Fail closed: never serve the dashboard unprotected because of a config slip.
  if (!env.SITE_PASSWORD || !env.SESSION_SECRET || allowlist(env).length === 0) {
    return new Response(
      "Access control is not configured. Set SITE_PASSWORD, SESSION_SECRET and " +
      "ALLOWED_EMAILS in the Cloudflare Pages project settings, then redeploy.",
      { status: 503, headers: { "Cache-Control": "no-store" } });
  }

  if (url.pathname === "/__logout") {
    return new Response(null, { status: 302, headers: {
      Location: "/",
      "Set-Cookie": `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`
    }});
  }

  if (url.pathname === "/__auth") {
    if (request.method !== "POST") return loginPage(null, "", 405);
    const form  = await request.formData();
    const email = String(form.get("email") || "").trim().toLowerCase();
    const pass  = String(form.get("password") || "");

    // Evaluate both checks before branching, and give one generic message,
    // so a wrong password can't be distinguished from an unlisted address.
    const okEmail = allowlist(env).includes(email);
    const okPass  = safeEqual(pass, env.SITE_PASSWORD);
    if (!okEmail || !okPass) {
      await new Promise(r => setTimeout(r, 400 + Math.floor(Math.random() * 400)));
      return loginPage("Email or password not recognised.", email, 401);
    }

    return new Response(null, { status: 302, headers: {
      Location: "/",
      "Set-Cookie": `${COOKIE}=${await issue(env, email)}; Path=/; Max-Age=${MAX_AGE}` +
                    `; HttpOnly; Secure; SameSite=Lax`
    }});
  }

  const match = (request.headers.get("Cookie") || "")
    .match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`));
  if (!match || !(await verify(env, match[1]))) return loginPage(null, "", 401);

  // Authenticated: serve the real asset, but keep it out of shared caches.
  const res = await next();
  const out = new Response(res.body, res);
  out.headers.set("Cache-Control", "private, no-store");
  return out;
}
