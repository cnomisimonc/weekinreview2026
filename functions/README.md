# Access gate — setup

`_middleware.js` puts an email allowlist + shared password in front of the whole
Pages project. It protects `index.html`, `data.js`, `fulltext.js` and every PDF
under `reports/`, because it runs before any asset is served.

**No secret is stored in this repo.** The site fails closed (HTTP 503) until the
three variables below exist, so a misconfiguration can never quietly serve the
dashboard to the public.

## One-time configuration

Cloudflare dashboard → Workers & Pages → **weekinreview2026** → Settings →
Environment variables → Production (repeat for Preview if you use it):

| Variable | Type | Value |
|---|---|---|
| `SITE_PASSWORD` | **Secret** | the shared password you hand out |
| `SESSION_SECRET` | **Secret** | long random string, used to sign cookies |
| `ALLOWED_EMAILS` | Plaintext | permitted addresses, comma or newline separated |

Generate a `SESSION_SECRET` locally — don't reuse the site password:

```sh
openssl rand -base64 48
```

Redeploy (or push any commit) after saving. Variables are only picked up by a
new deployment.

## Day-to-day

- **Add or remove a reader:** edit `ALLOWED_EMAILS` and redeploy. The allowlist
  is re-checked on every request, so removing someone signs them out
  immediately — you do not need to rotate the password or wait for expiry.
- **Rotate the password:** change `SITE_PASSWORD`. Existing sessions survive,
  since cookies are signed with `SESSION_SECRET`, not the password.
- **Sign everyone out at once:** change `SESSION_SECRET`. Every cookie becomes
  invalid instantly.
- **Sign yourself out:** visit `/__logout`.
- Sessions last 30 days (`MAX_AGE`). Email matching is case-insensitive.

## What this does and doesn't do

It is a genuine server-side gate: the password is compared inside the Worker and
never reaches the browser, and unauthenticated requests for `data.js` or a PDF
get the login page rather than the file.

It is still a *shared* password, so it is only as private as the least careful
person you give it to — the allowlist limits who can use it, but anyone on the
list can pass it on. If you later want per-person credentials with no shared
secret, Cloudflare Access (Zero Trust → Applications, free to 50 users) gives
each reader an emailed one-time PIN and replaces this middleware entirely.

## Note

The dashboard's own Recall card links to `weekinreview2026.pages.dev`, which now
prompts for sign-in. The weekly rebuild task is unaffected: it pushes to GitHub
and verifies via `raw.githubusercontent.com`, neither of which is behind this gate.
