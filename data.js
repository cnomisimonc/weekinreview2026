// Global Week in Review — dashboard data
// One object per week. The Saturday rebuild task APPENDS a new week object
// extracted from that week's "Global Week in Review_YYYY-MM-DD.docx" and pushes.
// Keep series keys stable so trend charts track across weeks.
const WEEKS = [
{
  id: "2026-07-17",
  weekEnding: "Friday 17 July 2026",
  published: "Saturday 18 July 2026",
  pdf: "reports/2026-07-17.pdf",
  pdfName: "Global Week in Review_2026-07-18.pdf",
  tldr: "A crowded-momentum unwind — not a broad risk-off — dragged the cap-weighted indices lower (Nasdaq −2.9%) as TSMC's capex hike reignited AI-overspend fears and Netflix was punished for a soft guide, even as 8 of 11 sectors rose. Soft CPI flipped the Fed from hike-risk to cuts-back-on-the-table, while a US–Iran oil spike (WTI +10%) powered energy and knocked gold −3.4%. Banks printed a record quarter.",
  metrics: { spx:7457.69, nasdaq:25520.24, dow:52146.42, us10y:4.55, us2y:4.18, dxy:100.76, gold:3980, silver:55.58, brent:85, wti:80.86, btc:63800, vix:18.77 },
  snapshot: [
    ["S&P 500","7,457.69","−1.5%","YTD ~+9%"],
    ["Nasdaq Composite","25,520.24","−2.9%","YTD ~+10% · tech-led"],
    ["Dow Jones","52,146.42","−0.4%","YTD ~+10% · held up"],
    ["Russell 2000","2,962.22","~flat","YTD ~+20% · small-caps outperformed"],
    ["US 10Y Treasury","4.55%","−1bp","2Y 4.18% · 2s10s +37bp"],
    ["Dollar (DXY)","100.76","softer","EUR/USD 1.144 · USD/JPY 162.4"],
    ["Gold (spot)","~$3,980","−3.4%","Nov-2025 levels"],
    ["Silver (spot)","$55.58","−6.9%","8-month low"],
    ["Brent / WTI","~$85 / $80.86","↑ >10% (WTI)","1-mo high · Hormuz risk"],
    ["Natural gas","~$2.92","↓","2-month low · ample supply"],
    ["Copper","$6.22/lb","↓","metals sold off"],
    ["Bitcoin","~$63,800","+0.9%","range-bound"],
    ["VIX","18.77","↑","popped Fri on tech rout"]
  ],
  themes: [
    { t:"The AI trade de-rated — on capex, not demand",
      b:"TSMC blew the doors off (net profit +77%, a 5th straight record) but raised 2026 capex to $60–64bn and added $100bn to Arizona — the tape read that as 'AI overspend'. SOX −13% over the month; Goldman's High-Beta Momentum basket −28.9% in a month. IBM had its worst day since 1987.",
      r:"A positioning event in the most crowded longs, not a demand scare — 74% of S&P names rose Thursday even as the index fell. Picks-and-shovels intact; the froth in high-beta momentum is what's unwinding." },
    { t:"Netflix punished for merely-good",
      b:"Revenue $12.56bn (+13%), EPS $0.80 beat — but a merely in-line Q3 guide sent the stock −8% to a 52-week low.",
      r:"Zero tolerance for growth deceleration in premium-multiple compounders — a warning shot into the rest of earnings season." },
    { t:"Oil reflation on geopolitics",
      b:"A fragile US–Iran / Strait of Hormuz situation drove WTI +10% to a one-month high ($80.86) and Brent to ~$85. Energy was the week's best sector.",
      r:"Hedgeye's frame — #Quad3 'oil reflation': growth slowing while an oil breakout pushes long-run inflation expectations up. Keeps yields sticky-high and caps gold." },
    { t:"The disinflation flip",
      b:"June CPI +3.5% y/y (vs 3.9% expected; −0.1% m/m, biggest monthly drop since Apr 2020) and soft PPI collapsed July-hike odds to ~8% and put a September cut back on the table.",
      r:"The Fed narrative swung from 'possible hike' to 'cuts back in play' in five days — but the oil breakout is the offsetting risk to that dovish repricing." },
    { t:"Banks printed a record quarter",
      b:"JPMorgan net $21.2bn, Goldman revenue +39% (equities +72%), Citi's best revenue in a decade — a trading/IB boom lifted all five majors (~+39% y/y combined).",
      r:"Leadership is broadening out of megacap tech into financials, insurers, energy, healthcare and small-caps — a healthier tape underneath a weak headline index." }
  ],
  regime: {
    label:"#Quad3 — 'Oil Reflation' (exiting monthly #Quad4)",
    note:"From Hedgeye's 17 Jul Early Look ('Widely-Held Momentum Crashing'). Growth decelerating while an Oil TRADE breakout gives inflation a second-derivative push, even as trailing CPI cools.",
    ranges: [
      ["S&P 500","7,425 – 7,575","Bullish"],
      ["Nasdaq Composite","25,305 – 26,299","Neutral"],
      ["Russell 2000","2,925 – 3,019","Bullish"],
      ["US 10Y yield","4.46% – 4.62%","Bullish"],
      ["US Dollar (DXY)","100.35 – 101.27","Bullish"],
      ["Gold (spot)","$3,950 – $4,163","Bearish"],
      ["Silver (spot)","$53 – $60","Bearish"],
      ["WTI crude","$68.55 – $83.92","Bearish*"],
      ["Nat gas","$2.67 – $3.09","Bearish"],
      ["Copper","$6.03 – $6.33","Neutral"],
      ["VIX","15.03 – 17.61","Bearish"],
      ["HY credit (HYG)","79.51 – 79.95","Bullish"],
      ["IG credit (LQD)","106.6 – 108.2","Bearish"],
      ["Tech (XLK)","$172 – $185","Neutral"],
      ["Health Care (XLV)","$158 – $166","Bullish"]
    ],
    where:"S&P (7,458) mid-range and bullish; gold ($3,980) bearish TREND; VIX popped to 18.77 — above the range top, the one sign of stress in an otherwise orderly tape. *Hedgeye long the oil TRADE breakout within a bearish TREND."
  },
  mag7: [
    { tk: "NVDA", n: "Nvidia", p: 202.81, wk: "−3.9%", wkPct: -3.9, cap: "~$5.0T", pe: "31.1" },
    { tk: "AAPL", n: "Apple", p: 333.74, wk: "+5.8%", wkPct: 5.8, cap: "~$4.9T", pe: "40.5" },
    { tk: "GOOGL", n: "Alphabet", p: 346.77, wk: "−2.9%", wkPct: -2.9, cap: "~$4.3T", pe: "27.0" },
    { tk: "MSFT", n: "Microsoft", p: 393.82, wk: "+2.3%", wkPct: 2.3, cap: "~$3.0T", pe: "23.5" },
    { tk: "AMZN", n: "Amazon", p: 247.23, wk: "+0.8%", wkPct: 0.8, cap: "~$2.7T", pe: "29.6" },
    { tk: "META", n: "Meta", p: 646.01, wk: "−3.5%", wkPct: -3.5, cap: "~$1.7T", pe: "23.5" },
    { tk: "TSLA", n: "Tesla", p: 380.84, wk: "−6.6%", wkPct: -6.6, cap: "~$1.5T", pe: "370" }
  ],
  mag7Read: "The Mag7 is no longer one trade. On earnings, cloud-monetizers (MSFT, AMZN) were rewarded while capex-spenders (GOOGL, META) and Apple were punished — though all except Apple joined Friday's broad bounce, and Nvidia round-tripped. Only Apple's memory-cost '100-year flood' left a lasting hole, its worst single-day drop in ~16 months, erasing much of a YTD lead that had been the best in the group. Intra-group dispersion is the widest in years — a stock-picker's tape hiding inside a cap-weighted index. Hedgeye's momentum signals agree: only MSFT bullish, AMZN neutral, the rest bearish/mixed. Data note: prices are actual regular-session closes for the Friday shown and the week column is a true Friday-to-Friday close-over-close move, both taken from the market-data feed (EOD series) rather than from the source report, which could not verify them. Market caps and P/E ratios are as carried in that week's source report and remain approximate.",
  sectors: [
    { n:"Energy (XLE)", m:"Leader", pct:null, d:"The oil spike — the standout" },
    { n:"Consumer Staples (XLP)", m:"Up", pct:null, d:"Defensive bid" },
    { n:"Health Care (XLV)", m:"+2.2%", pct:2.2, d:"Rotation leader" },
    { n:"Financials (XLF)", m:"Up", pct:null, d:"Travelers +9% dragged insurers higher" },
    { n:"Technology (XLK)", m:"~−4.3%", pct:-4.3, d:"Weakest — semi rout, SOX −13% on the month" },
    { n:"Comm. Services (XLC)", m:"Down", pct:null, d:"Laggard with tech" }
  ],
  sectorsRead:"8 of 11 sectors closed the week up. Rotating out of semis/high-beta into energy, financials, healthcare, real estate and broad small-caps — value and breadth over concentration.",
  positioning:"VIX popped to 18.77 Friday (+12% on the day) off a sub-16 base as the chip unwind bit. 17.6 is the level Hedgeye flags — a sustained break above it signals regime change rather than a momentum flush. No credit stress: HYG bullish, spreads near cycle-tights. Net read: a momentum crash inside a calm-credit, broadening-breadth tape = a pricing/positioning event, not a systemic one.",
  corporate: [
    "Big banks — record Q2: JPM net $21.2bn; GS rev +39%, net $6.6bn; BofA net +27%; Citi best revenue in a decade; Wells net +17%.",
    "TSMC: record Q2 (net profit +77%), HPC/AI = 66% of revenue; 2026 capex raised to $60–64bn; +$100bn Arizona.",
    "Netflix: EPS beat, revenue light; −8% after hours on an in-line Q3 guide — 52-week low.",
    "Alphabet: −4.4% Friday on a reported Gemini model launch delay.",
    "Travelers: +9% on a large Q2 beat — lifted the whole P&C insurance complex.",
    "IBM: reportedly its worst day since 1987, caught in the AI-capex de-rating."
  ],
  macro: [
    "US: CPI June +3.5% y/y (vs 3.9%; −0.1% m/m); PPI −0.3% m/m; retail sales +0.2%; claims ~208k; UMich 54.4. Net: disinflation + resilient consumer → September cut back in play. Fed on hold at 3.50–3.75%.",
    "China: Q2 GDP +4.3% y/y (missed; weakest since Q4 2022). June retail +1.0%, IP +5.3%, FAI −5.7% YTD. Net: factory side resilient, domestic demand slumping → louder stimulus calls.",
    "Rest of world: back-loaded calendar — Fed 29 Jul, ECB & BoE 30 Jul, BOJ 30–31 Jul; UK June CPI 22 Jul."
  ],
  geo: [
    "US–Iran / Strait of Hormuz: fragile on-off ceasefire kept an oil risk premium in place — the week's swing factor for crude, inflation and yields.",
    "Russia/Ukraine: Senate deal to advance a sanctions bill incl. secondary tariffs on buyers of Russian oil — a new oil-supply wildcard.",
    "US–China: trade truce holding; next hard marker is the mid-August truce expiry."
  ],
  ahead: {
    published: "Sunday 19 July 2026",
    weekOf: "Mon 20 July 2026",
    pdf: "reports/2026-07-17-ahead.pdf",
    pdfName: "Global Week Ahead_2026-07-19.pdf",
    tldr: "Two things define the week: the Iran / Strait of Hormuz oil shock and a wall of mega-cap earnings. Wednesday 22 Jul is the pivot — Alphabet, Tesla, IBM and ServiceNow all report after the US close, straight into a chip tape already down ~11% on the week. The ECB decides Thursday (hold at 2.25% the base case), and the whole week trades under the shadow of a 28–29 Jul FOMC where — remarkably — the market is now debating a hike, not a cut. Regime is #Quad3: favour energy, cash and USD; fade high-beta tech strength.",
    setup: [
      ["S&P 500","7,533.77","−0.51%","Futures reopen Mon 06:00; gap risk on weekend Iran headlines"],
      ["Nasdaq Composite","25,881.95","−1.47%","Semis the epicentre; NDX led lower"],
      ["Dow Jones","52,552.97","−0.20%","Energy cushioned the blue chips"],
      ["US 10Y yield","4.55%","higher","~16-mo high zone; bear-steepening on oil"],
      ["US 2Y yield","4.18%","higher","16-mo high; front end pricing Fed-hike risk"],
      ["DXY (dollar)","100.83","firm","Haven + rate bid; USD the winner in Quad 3"],
      ["Gold (spot)","~$3,995","−3.4% wk","Lower highs as real yields/USD climb"],
      ["Brent crude","~$86","+","Hormuz supply premium in the price"],
      ["WTI crude","$81.02","+","Above $81; energy the week's leadership"],
      ["Bitcoin","$63,140","lower","Risk-off + strong USD weighing"],
      ["VIX","18.57","+11%","1-week high; still below panic"]
    ],
    setupNote: "Tokyo is CLOSED Monday 20 Jul (Marine Day) — thinner Asia liquidity into the open.",
    themes: [
      { t:"The oil / Hormuz supply shock is the master variable", b:"The 2026 Strait of Hormuz crisis is live and escalating. Brent near $86 / WTI above $81 with a fat war premium; earlier phases spiked Brent past $126. Every risk asset is now a derivative of the tanker headlines.", w:"A weekend escalation gaps oil up and equities down at the Monday 06:00 futures reopen. Energy and defensives are the hedge; long-duration tech is the funding source. Size for both tails." },
      { t:"The semiconductor rout — capitulation or the start?", b:"The SOX shed ~11% on the week and sits ~24% below its record. Wednesday night's mega-cap prints (Alphabet, Tesla) land into an already-broken chip tape.", w:"Whether AI-capex commentary from Alphabet stabilises or accelerates the semis bleed. A soft Mag-7 guide risks a Thursday gap-down; a clean beat could spark a violent oversold bounce." },
      { t:"The Fed dragged hawkish by energy — into 28–29 Jul", b:"June CPI cooled, yet the oil shock flipped the conversation: 2Y at a 16-month high and traders pricing hold-to-hike odds, not cuts. Blackout week — data and oil do all the talking.", w:"The 2s10s and the front end. Bear-steepening = Quad-3 confirmation; a bull-flatten on de-escalation is the pain trade for energy longs." },
      { t:"The dollar is quietly winning — that's the tell", b:"DXY 100.83 with gold making lower highs is the classic Quad-3 signature (oil up + dollar up). A firm USD tightens global conditions.", w:"USDJPY and EM FX. A dollar breakout adds a second tightening impulse on top of oil — a cross-check on the equity tape all week." },
      { t:"ECB Thursday: hawkish CB meets an oil shock", b:"After June's surprise hike to 2.25%, markets price ~88% hold with a 2.50% hike as the tail. Oil cuts both ways for Europe.", w:"EUR and Bunds at 19:45/20:30. Hawkish hold = EUR bid, European equities capped; a dovish lean extends the USD trade." },
      { t:"Positioning fragile, not yet panicked", b:"VIX popped 11% to 18.57 — off the lows, nowhere near capitulation. Mega-cap earnings + war headlines stacked = sharp two-way moves.", w:"VIX through 20–22 signals genuine de-risking and often marks a tradable low; failure to spike on bad news flags complacency." }
    ],
    calendar: [
      ["Mon 20","China LPR (09:15) · Japan holiday · US Leading Index (22:00)","LPR unchanged expected; Tokyo closed (thin liquidity); recession-watch gauge"],
      ["Tue 21","Philadelphia Fed Non-Mfg Survey (20:30)","Regional services read into the soft-landing debate"],
      ["Wed 22","No major data","Airtime belongs to earnings — Alphabet/Tesla night"],
      ["Thu 23","ECB decision (19:45, Lagarde 20:30) · US jobless claims (20:30)","Hold at 2.25% base case; labour still firm"],
      ["Fri 24","EZ/UK flash PMIs (~15:00) · US flash PMIs (21:45) · New home sales (22:00)","First July growth read; watch prices-paid on oil"]
    ],
    cbs: [
      ["ECB","Thu 23 Jul 19:45 / 20:30","Hold at 2.25% (~88%)","Energy pass-through language; hike to 2.50% is the tail"],
      ["PBOC","Mon 20 Jul 09:15","LPR unchanged","A surprise cut = pro-cyclical signal for HK/China"],
      ["Fed","Blackout — meets 28–29 Jul","Two-way risk","Market debating hold-to-hike, a stark reversal from cuts"],
      ["BOJ","No meeting (end-July)","—","Yen sensitive to USD move and oil terms of trade"]
    ],
    earnings: [
      ["Tue 21","GM · 3M (pre)","Tariff/EV cost guidance; industrial demand pulse"],
      ["Wed 22","Alphabet · Tesla · IBM · ServiceNow (AMC); GE Vernova, AT&T, CME, PM (pre)","AI-capex guide + Search/Cloud resilience — the tape's key print; TSLA margins/robotaxi"],
      ["Thu 23","Intel (AMC)","Foundry turnaround + guide into a ~24%-off-highs chip rout"],
      ["Fri 24","American Express · Verizon (pre)","High-end consumer credit health; defensive yield"]
    ],
    catalysts: [
      "FOMC overhang (28–29 Jul): every tape this week front-runs it — a live hike debate makes each oil print a policy input.",
      "Iran / Hormuz headline risk — 24/7; the dominant discretionary catalyst.",
      "Post-OpEx dealer gamma resets into a cleaner, potentially more volatile week.",
      "San Diego Comic-Con (Wed 22 – Sun 26): media/streaming catalyst with Netflix's guide-down fresh."
    ],
    regime: {
      label:"#Quad3 — growth slowing, inflation re-accelerating",
      note:"Anchored to Hedgeye's published 'Oil Up, Dollar Up = #Quad3' framework; ranges derived from Friday closes — confirm against the live Early Look.",
      ranges: [
        ["S&P 500","7,410 – 7,635","Bearish"],
        ["Nasdaq Composite","25,300 – 26,450","Bearish"],
        ["US 10Y yield","4.42% – 4.63%","Bullish (yields up)"],
        ["US 2Y yield","4.05% – 4.28%","Bullish (yields up)"],
        ["DXY (USD)","100.0 – 101.7","Bullish"],
        ["Gold","$3,860 – $4,120","Bearish"],
        ["WTI crude","$77.50 – $84.50","Bullish"],
        ["Brent crude","$82.00 – $89.50","Bullish"],
        ["VIX","16.5 – 22.0","Bullish (vol up)"],
        ["Bitcoin","$60,000 – $67,500","Bearish"]
      ],
      where:"Deep in Quad 3, driven by an exogenous oil shock. It flips only if (a) Hormuz de-escalates and oil air-pockets lower, or (b) growth rolls hard enough to tip Quad 3 into Quad 4 — which would flip the trade from long energy/USD to long bonds/USD, short everything cyclical. Until then, respect the ranges and trade the edges."
    },
    positioning:"Semis and AI-capex names remain the most crowded long even after an ~11% weekly drawdown. Leadership: energy and select defensives. VIX 18.57 — elevated, not panicked; no credit stress yet. Tells: the 2Y (tightening thermostat), a DXY breakout, semis' reaction to Alphabet/Tesla, gold's refusal to rally on war, and oil gaps on Hormuz headlines.",
    geo: [
      "Iran / Strait of Hormuz: the defining macro event — escalated into the weekend; earlier phases spiked Brent past $126; ceasefire attempts have failed.",
      "Prediction markets (stale, ~mid-June): Hormuz traffic normalisation ~65% by 31 Jul, ~90% by year-end — a slow reopening expected, not a clean resolution."
    ],
    asia:"Asia opens Monday into a risk-off Friday close with Tokyo shut for Marine Day — thin liquidity, no Japan lead. Dominant tell: oil. A weekend Hormuz escalation gaps energy up and pressures HK tech and Korean/Taiwanese semis. China's LPR at 09:15 is the one data point. Net: a defensive, oil-led open — watch Hang Seng, KOSPI, TAIEX, and CME S&P futures at the 06:00 reopen.",
    beyond: [
      "Tour de France final week — Stage 16 ITT Tue, back-to-back Alpe d'Huez finishes Fri/Sat, Paris Sun 26.",
      "San Diego Comic-Con Thu 23–Sun 26 — studio/streaming slate reveals.",
      "SpaceX Falcon 9 cadence continues; confirm windows live."
    ]
  },
  recall: {
    window: "Mon 13 – Sun 19 Jul 2026",
    readings: [
      { t:"AGI Is Here — And Society Isn't Ready | Peter Diamandis", d:"15 Jul", g:"Technology/AI", u:"https://www.youtube.com/watch?v=eHqIZInOxeE", x:"The choice people have to make is whether they are happy with what they have or if they want to use AI technologies to dream bigger and create something of value — a product, service, or company — done individually or as a solopreneur, taking the future into their own hands…" },
      { t:"Clarifying Myths in the US vs China War", d:"15 Jul", g:"Technology/AI", u:"https://thewhitebox.beehiiv.com/p/clarifying-myths-in-the-us-vs-china-war", x:"Debunks prevalent myths regarding the competition between the US and China for AI supremacy, particularly in the context of open models and AI progress — starting with the idea that China is 'catching up' to the US in AI development…" },
      { t:"China is having another AI moment", d:"15 Jul", g:"Technology/AI", u:"https://www.economist.com/china/2026/06/21/china-is-having-another-ai-moment", x:"China's lead in AI is narrowing the gap with America, with new models that are not only capable but affordable and openly available — Beijing-based Zhipu (Z.ai) announced its latest system, GLM 5.2…" },
      { t:"The Heretic's Guide to AI's Stars Part III: Tracepalooza & the Bezzle", d:"15 Jul", g:"Technology/Semiconductors", u:"https://michaeljburry.substack.com/p/the-heretics-guide-to-ais-stars-part", x:"NVIDIA's strong demand comes with risks from a concentrated set of buyers — Microsoft is likely its biggest customer with significant influence over NVIDIA's revenue; customer concentration is unusually high…" },
      { t:"Why Anthropic's Mess Doesn't Matter & The Era of Sophistication", d:"15 Jul", g:"Saved link", u:"https://thewhitebox.beehiiv.com/p/why-anthropic-s-mess-doesn-t-matter-the-era-of-sophistication", x:"TheWhiteBox argues the US government's unprecedented export control on Anthropic's Fable/Mythos models — barring all foreign nationals — won't slow AI diffusion: China's latest models (Kimi K2.7, GLM-5.2, DeepSeek V4) are near-frontier on their own merits, not just distillation, and America's real edge is compute, not models. It ushers in an 'era of sophistication' that pressures frontier-lab economics. (summary generated — not from Recall)" },
      { t:"China's First Frontier Model?", d:"15 Jul", g:"Saved link", u:"https://thewhitebox.beehiiv.com/p/china-s-first-frontier-model", x:"Zhipu's GLM-5.2 may be China's first genuinely frontier-competitive model — beating GPT-5.5 on several benchmarks using DeepSeek-style sparse attention plus IndexShare (~3x compute saving) while staying 10–60x cheaper per task. Also covers Microsoft weighing DeepSeek for Copilot, SpaceX's $60B Anysphere acquisition, and SK Hynix's planned ADR listing. (summary generated — not from Recall)" },
      { t:"How Small Firms Use Claude to Quit Salesforce — The Information", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — The Information piece on small firms replacing Salesforce-based workflows with Claude. (no Recall summary; description from title)" },
      { t:"Eye on the Market", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — J.P. Morgan's Eye on the Market strategy note. (no Recall summary; description from title)" },
      { t:"Donald Trump is kicking out Chinese firms, but keeping their tech", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — on US policy pushing out Chinese firms while retaining their technology. (no Recall summary; description from title)" },
      { t:"SFC Annual Report Summary", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — summary of the Hong Kong SFC annual report. (no Recall summary; description from title)" },
      { t:"ASEAN Labour Markets 2026: Growth Is Back. The Hard Part Starts Now.", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — report on ASEAN labour markets in 2026: growth returning, structural challenges ahead. (no Recall summary; description from title)" },
      { t:"Made in Europe vs Made in America vs Made in China", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — comparative piece on manufacturing competitiveness across Europe, the US and China. (no Recall summary; description from title)" },
      { t:"Gold – A longer road to new highs", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — research note on gold's path back to record highs. (no Recall summary; description from title)" },
      { t:"Why OpenAI and Anthropic may struggle to float", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — on the obstacles to OpenAI and Anthropic IPOs. (no Recall summary; description from title)" },
      { t:"The US-China AI Contest", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — report on the US–China AI rivalry. (no Recall summary; description from title)" },
      { t:"Strategy & Asset Allocation & Performance of High Conviction Ideas", d:"15 Jul", g:"Upload", u:null, x:"Uploaded PDF — strategy and asset-allocation review with performance of high-conviction ideas. (no Recall summary; description from title)" }
    ],
    cards: [
      { t:"Steven Kotler", g:"Person", u:"https://en.wikipedia.org/wiki/Steven_Kotler" },
      { t:"Abundance: The Future Is Better Than You Think", g:"Book", u:"https://en.wikipedia.org/wiki/Abundance:_The_Future_Is_Better_Than_You_Think" },
      { t:"Xprize Foundation", g:"Organization", u:"https://en.wikipedia.org/wiki/Xprize_Foundation" },
      { t:"Z.ai", g:"Organization", u:"https://en.wikipedia.org/wiki/Z.ai" },
      { t:"Claude Mythos", g:"Software Application", u:"https://en.wikipedia.org/wiki/Claude_Mythos" },
      { t:"GPT-3", g:"Software Application", u:"https://en.wikipedia.org/wiki/GPT-3" },
      { t:"Black Mirror", g:"TV Series", u:"https://en.wikipedia.org/wiki/Black_Mirror" },
      { t:"Star Trek", g:"TV Series", u:"https://en.wikipedia.org/wiki/Star_Trek" },
      { t:"Ex Machina (film)", g:"Movie", u:"https://en.wikipedia.org/wiki/Ex_Machina_(film)" },
      { t:"The Terminator", g:"Movie Series", u:"https://en.wikipedia.org/wiki/The_Terminator" },
      { t:"Google I/O", g:"Event", u:"https://en.wikipedia.org/wiki/Google_I/O" }
    ]
  }
},
{
  id: "2026-07-24",
  weekEnding: "Friday 24 July 2026",
  published: "Saturday 25 July 2026",
  pdf: "reports/2026-07-24.pdf",
  pdfName: "Global Week in Review_2026-07-25.pdf",
  tldr: "The week the AI trade cracked and the Fed-hike scare came back. Alphabet's record ~$205B capex guide and Tesla's margin miss triggered an ~$800B mega-cap wipeout on Thursday — the worst day for Big Tech since April 2025. Brent vaulted above $100 (first time since May) as the US-Iran war entered its third week, and record-low jobless claims (187k, lowest since 1969) plus a services-PMI beat pushed 2Y/10Y yields up ~16–19bp and flipped rate markets to pricing a possible July/September hike, not a cut. Value and energy held; the Nasdaq fell 2.1%, its second straight weekly loss. Credit stayed calm — this was a rotation and a rates scare, not a crisis.",
  metrics: { spx:7411.98, nasdaq:24975.82, dow:51947.25, us10y:4.71, us2y:4.37, dxy:101.5, gold:4050, silver:58, brent:96.78, wti:89.31, btc:65030, vix:18.6 },
  snapshot: [
    ["S&P 500","7,411.98","−0.6%","2nd straight weekly loss; AI-capex + oil scare; Fri flat"],
    ["Nasdaq Composite","24,975.82","−2.1%","Mega-cap tech gutted Thu; worst mega-cap day since Apr '25 (~$800B wiped)"],
    ["Dow Jones Ind.","51,947.25","−0.4%","Held up on value/defensive bid; Fri +0.46%"],
    ["US 10Y Treasury","4.71%","+16bp","Bear-flattener on oil-inflation + Fed-hike bets (was 4.55%)"],
    ["US 2Y Treasury","4.37%","+19bp","Front end led; hike-not-cut now the base case (was 4.18%)"],
    ["Dollar (DXY)","~101.5","firmer","One-month high on hawkish Fed repricing"],
    ["Gold (spot)","~$4,050","lower","Slid on rising real yields + firm USD; defends $4,000"],
    ["Silver (spot)","~$58","lower","Followed gold down; bounced Fri (+1.3%)"],
    ["Brent crude","$96.78","higher","Topped $100 mid-week (1st since May) on US-Iran war"],
    ["WTI crude","$89.31","higher","Hormuz/Red Sea supply squeeze; pared on peace-talk chatter"],
    ["Bitcoin","~$65,030","~flat","Consolidating below $66k; ~48% under Oct-'25 ATH"],
    ["VIX","~18.6","~flat","No fresh vol spike despite Thu rout — already elevated"]
  ],
  themes: [
    { t:"① The AI-capex bill came due",
      b:"Alphabet beat but raised 2026 capex to a record ~$205B; Tesla posted an EPS miss on margin pressure. Thursday saw ~$800B of Mag7 value erased. The tell: Nvidia +2% on the week while the AI spenders were dumped — Alphabet −7.8%, Meta −7.9%, Amazon −6.1%.",
      r:"Leadership is narrowing to the picks-and-shovels / compute toll-takers (NVDA). Stay long the compute layer, fade the hyperscalers paying the bill until free-cash-flow visibility improves." },
    { t:"② Oil is back as the macro swing factor",
      b:"Brent topped $100 for the first time since May as the US-Iran war escalated (11th straight night of strikes; Houthi Red Sea blockade), before easing to ~$96.78 Friday on Pakistan-brokered talk of negotiations. XLE +3.7%, the week's best sector.",
      r:"Energy is the hedge that works in this tape. An oil-driven inflation impulse is the single biggest threat to the rate-cut trade — own XLE as ballast." },
    { t:"③ A Fed-hike scare, not a cut",
      b:"With a Warsh-led Fed in blackout ahead of the 28–29 July FOMC, jobless claims at 187k (lowest since 1969) and a services-PMI beat flipped markets to pricing tighter policy: Kalshi 92% hold / ~8% hike; September hike odds ~80%.",
      r:"Front-end risk is asymmetric to the upside in yields. Stay up-in-quality, keep duration short, don't reach for rate-cut-sensitive longs into the meeting." },
    { t:"④ Rotation: growth → value & defensives",
      b:"Energy +3.7%, Real Estate +1.4% and Financials (~flat) led; Discretionary −5.2%, Tech ~−4% and Comms −3.9% lagged. The Dow (−0.4%) crushed the Nasdaq (−2.1%) on a relative basis.",
      r:"The equal-weight / value tilt is working as rates rise and AI mega-caps de-rate. Rotate toward energy, financials and bond-proxy defensives." },
    { t:"⑤ Credit refused to blink",
      b:"Through the equity drawdown, HY OAS held ~268bp (~5bp tighter on the week) and IG ~78bp — both historically tight. No funding stress, no contagion.",
      r:"This is a growth/rate scare, not a credit event. Buy-the-dip stays valid selectively — but let the extreme-bullish positioning unwind first." },
    { t:"⑥ China soft, Europe reviving",
      b:"China Q2 GDP +4.3% y/y was the weakest in 3+ years and the PBoC held the LPR a 14th month. Euro-area flash PMIs beat across the board (composite 51.9; German mfg 52.2, a 4.5-yr output high); ECB held at 2.25%.",
      r:"The relative-growth trade is tilting toward Europe ex-energy-shock. Keep China exposure tactical and stimulus-contingent." }
  ],
  regime: {
    label:"#Quad2 shading toward #Quad3 — 'Flation Now, Stag-On-A-Lag'",
    note:"In-house read this week: Hedgeye's subscriber feed was not reachable in the unattended run. Ranges below are derived from verified Friday closes ± volatility-scaled bands — they approximate the Risk Range™ construct but are NOT Hedgeye's official signals.",
    ranges: [
      ["S&P 500","~7,340 – 7,520","Bullish, momentum fading"],
      ["Nasdaq Composite","~24,550 – 25,700","Bullish turning neutral"],
      ["US 10Y Yield","~4.48% – 4.80%","Bullish (yields rising)"],
      ["Gold","~$3,950 – $4,130","Bullish"],
      ["Brent crude","~$92 – $104","Bullish (geopolitical bid)"],
      ["Bitcoin","~$61,000 – $68,500","Bearish"],
      ["VIX","~16 – 22","Bullish (vol biased up)"]
    ],
    where:"Long-duration growth is on the wrong side of a rising-rates, rising-oil regime; energy, financials and cash-flow value are on the right side. With positioning at a multi-year bullish extreme and a live FOMC next week, risk/reward favors carrying hedges, holding energy, and staying up-in-quality rather than chasing the AI dip on day one."
  },
  mag7: [
    { tk: "NVDA", n: "Nvidia", p: 206.84, wk: "+2.0%", wkPct: 2.0, cap: "$5.01T", pe: "31.7" },
    { tk: "AAPL", n: "Apple", p: 333.02, wk: "−0.2%", wkPct: -0.2, cap: "$4.89T", pe: "39.0" },
    { tk: "GOOGL", n: "Alphabet", p: 319.74, wk: "−7.8%", wkPct: -7.8, cap: "$3.91T", pe: "15.9" },
    { tk: "MSFT", n: "Microsoft", p: 381.7, wk: "−3.1%", wkPct: -3.1, cap: "$2.84T", pe: "22.7" },
    { tk: "AMZN", n: "Amazon", p: 232.11, wk: "−6.1%", wkPct: -6.1, cap: "$2.50T", pe: "27.8" },
    { tk: "META", n: "Meta", p: 595.19, wk: "−7.9%", wkPct: -7.9, cap: "$1.51T", pe: "22.1" },
    { tk: "TSLA", n: "Tesla", p: 313.03, wk: "−17.8%", wkPct: -17.8, cap: "~$1.0T", pe: "~290" }
  ],
  mag7Read:"Nvidia was the last mega-cap standing — the compute toll-taker held up (+2%) while the AI spenders (Alphabet, Meta, Amazon) and Tesla were sold hard on capex and margin fears. The market is now demanding the 'spend-your-way-to-AI' cohort show a return on the outlay. Alphabet at ~16x screens cheap, but it needs FCF proof before the multiple re-rates.",
  sectors: [
    { n:"Energy (XLE)", m:"+3.7%", pct:3.7, d:"Oil >$100 on the Iran war; the week's clear leader" },
    { n:"Real Estate (XLRE)", m:"+1.4%", pct:1.4, d:"Bond-proxy bid despite higher yields" },
    { n:"Financials (XLF)", m:"~flat", pct:0, d:"Steeper front-end and calm credit cushioned banks" },
    { n:"Health Care (XLV)", m:"−1.0%", pct:-1.0, d:"Modest defensive underperformance" },
    { n:"Industrials (XLI)", m:"−1.9%", pct:-1.9, d:"Cyclical wobble on growth/oil cross-currents" },
    { n:"Comm. Services (XLC)", m:"−3.9%", pct:-3.9, d:"Dragged by Alphabet & Meta capex sell-off" },
    { n:"Technology (XLK)", m:"~−4.0%", pct:-4.0, d:"Semis and software led the drawdown" },
    { n:"Cons. Discretionary (XLY)", m:"−5.2%", pct:-5.2, d:"Worst sector — Tesla & Amazon did the damage" }
  ],
  sectorsRead:"Leadership rotating out of secular growth/AI into rate-and-oil-sensitive value (energy) and bond-proxy defensives — classic inflation-up / growth-questioned behavior, i.e. the #Quad2→#Quad3 rotation.",
  positioning:"VIX ~18.6 and essentially flat on the week — a genuinely notable non-event given Thursday's rout. Credit calm: HY OAS ~268bp, IG ~78bp, both tight. But the BofA Bull & Bear Indicator sits at 9.5 — above the 8.0 contrarian-sell threshold and the most extreme since 2021 (fund-manager positioning in the 100th percentile). Thursday's breadth: NYSE decliners led ~3-to-1. Read: complacent vol + extreme bullish positioning + a narrowing tape = a vulnerable setup. Own protection, don't sell it.",
  corporate: [
    "Season scorecard (FactSet, 24 Jul): 27% of the S&P 500 reported — 86% EPS beats, 80% revenue beats, blended earnings +37.9% y/y, highest since Q4 2021.",
    "Tesla (22 Jul): revenue $28.24B (+26%, beat), record 480k deliveries, but adj. EPS $0.33 missed on margins — stock −14.5% Thursday.",
    "Alphabet (22 Jul): revenue $119.8B (+24%), Cloud +82% — but 2026 capex raised to a record ~$205B; stock ~−7%.",
    "Intel (23 Jul): revenue $16.1B (+25%, beat), adj. EPS $0.42 (big beat), strong Q3 guide; +12–13% after hours.",
    "ServiceNow (23 Jul): beat, raised subscription guide, AI ACV >$1B; ~+6%.",
    "GM (22 Jul): adj. EPS $3.57 (+41%, beat), raised FY guide a 2nd time despite a $2.5–3.5B tariff hit — 16th straight beat; ~+5%.",
    "IBM (22 Jul): missed and cut FY cc growth to 4–5%; bounced on 'less-bad-than-feared' after the 14-Jul crash."
  ],
  macro: [
    "US: initial claims 187k vs 212k exp — lowest since 1969. Flash services PMI 53.6 (big beat); composite 53.6, an 8-month high. New home sales 628k SAAR. Net: red-hot labor + accelerating growth — hawkish.",
    "China: Q2 GDP +4.3% y/y (weakest in 3+ years); LPR held a 14th month; June IP and retail beat but FAI still contracting. Net: soft top-line, stimulus on hold — keep China tactical.",
    "Europe: ECB held at 2.25% (unanimous), September live pending the energy/inflation read. Flash PMIs beat broadly — eurozone composite 51.9, German mfg 52.2 (4.5-yr high), UK composite 52.1."
  ],
  geo: [
    "US-Iran war escalated: 11th straight night of strikes; US servicemembers killed in Jordan; Houthi Red Sea blockade. Qatar/Egypt/Pakistan/Oman floated a 10-day cessation to reopen Hormuz — the driver behind oil >$100.",
    "Trade: Section 122 10% duty expired 24 Jul; Canada hit with 50% Section 338 tariffs on autos/alcohol/dairy (eff. 19 Aug); Brazil drew a 25% Section 301 duty.",
    "Russia-Ukraine: Zelenskyy replaced military chief Syrskyi (21 Jul) after days of Kyiv protests.",
    "FOMC 28–29 Jul pricing: Kalshi Hold 92% / Hike ~8% / Cut ~4%; September hike odds ~80%."
  ],
  ahead: {
    published: "Sunday 26 July 2026",
    weekOf: "Mon 27 July 2026",
    pdf: "reports/2026-07-24-ahead.pdf",
    pdfName: "Global Week Ahead_2026-07-26.pdf",
    tldr: "The whole week bends around one 48-hour window. The FOMC decision (Thu 30 Jul, 02:00 GMT+8) — a hawkish hold expected at 3.50–3.75% under Chair Warsh, no dot plot — collides with the mega-cap gauntlet (MSFT & META Thu; AAPL & AMZN Fri) and the Q2 GDP + PCE prints (Thu night). Overlaid: a live oil/Iran shock with Brent hovering near $100 and the Strait of Hormuz in play. This is a two-tail week — an AI-capex wobble or a hawkish Warsh could snap the S&P's record streak, while a dovish tilt + clean earnings extends it. Keep risk small into Wednesday night.",
    setup: [
      ["S&P 500","7,411.98","+0.05%","Flat finish; chip drag vs. defensives. Futures steady Sun night"],
      ["Nasdaq Composite","24,975.82","−0.64%","Semis the sore spot (SanDisk −11%); capex angst into MSFT/META"],
      ["Dow Jones","51,947.25","+0.46%","Value/defensive bid; best relative of the majors"],
      ["US 10Y yield","4.67%","lower","Bid on Iran/haven flows; FOMC & GDP the pivots"],
      ["US 2Y yield","~3.90% (confirm)","rangebound","Anchored to a hawkish-hold Fed at 3.50–3.75%"],
      ["DXY","~100.9 (confirm)","firm","Haven bid vs. hawkish ECB/BoJ; two-way into FOMC"],
      ["Gold (spot)","~$4,030","below $4,100","Consolidating under record zone ahead of the Fed"],
      ["Brent crude","$98.38","−2.3%","Off the >$100 spike; Hormuz/Red Sea risk premium live"],
      ["WTI crude","$92.19","lower","Same war premium; supply-shock tail still fat"],
      ["Bitcoin","~$65,760","+1.1%","'Clarity Act' + Fed-hold bid"]
    ],
    setupNote: "2Y, DXY, silver and VIX levels flagged for live confirmation.",
    themes: [
      { t:"The Fed: a hawkish hold, with a hike whispered", b:"FOMC decides 02:00 GMT+8 Thu 30 Jul; Warsh presser 02:30. Consensus and prediction markets favour a hold at 3.50–3.75% (~80–95% no-change) but a stubborn ~1-in-3 tail prices a hike. No SEP this meeting — the statement wording carries the tape.", w:"The 2Y and front-end SOFR for hawkish repricing. A 'not pre-committing' Warsh keeps the dollar bid and caps duration; any nod to soft labour data (57k June payrolls) is the dovish release valve." },
      { t:"Mega-cap earnings: AI capex on trial", b:"Microsoft & Meta after Wed close (~04:00–05:00 GMT+8 Thu), Apple & Amazon after Thu close. After soft Alphabet/Tesla reactions, the market is hunting for capex discipline and AI monetisation, not just beats.", w:"Guidance on AI capex and Azure/AWS growth is the swing factor for the whole Nasdaq. 'Spend more, monetise later' risks a semis-led drawdown; evidence of ROI re-rates the complex. Hedge index beta." },
      { t:"The growth-inflation double-header: Q2 GDP + PCE", b:"Advance Q2 GDP and PCE prices land Thu 30 Jul, 20:30 GMT+8 — hours after the Fed. The cleanest read yet on whether the oil shock is bleeding into a stagflationary mix.", w:"Hot PCE + soft GDP is the stagflation signature — bearish long duration and cyclicals, bullish gold and the dollar. A benign PCE hands the doves the mic." },
      { t:"The oil/Iran risk premium", b:"Brent slipped to $98 Friday but the war premium is intact: Houthi Red Sea strikes and Hormuz headlines (>20% of seaborne oil) keep a fat supply-shock tail.", w:"Brent $100 is the psychological line. Break-and-hold above re-arms the inflation trade and pressures the Fed's hold; a de-escalation headline is the fastest tailwind for equities and bonds." },
      { t:"BoJ & China data into the Asia bell", b:"BoJ concludes Fri 31 Jul — hold at 1.00% expected after June's 31-year-high hike, with upgraded FY26 GDP. China NBS PMIs Fri 09:30 set the Asia risk tone.", w:"A hawkish BoJ 'tactical pause' keeps USD/JPY and JGBs jumpy; a sub-50 China mfg PMI weighs on commodities and regional beta." },
      { t:"Month-end mechanics", b:"Fri 31 Jul: rebalancing flows, Q2 Employment Cost Index, and a bunched Eurozone flash CPI/GDP slate amplify moves into an event-heavy close. July has been a record month for the S&P.", w:"Pension/index rebalance flows can overwhelm fundamentals on the 31st. Expect elevated closing-auction volume; fade or follow with tight risk." }
    ],
    calendar: [
      ["Mon 27","US Durable Goods (Jun); Dallas Fed mfg","Capex demand pulse before the mega-cap prints"],
      ["Tue 28","CB Consumer Confidence; JOLTS (22:00)","Labour demand + household mood into the Fed"],
      ["Wed 29","ADP payrolls (20:15); FOMC begins","Private-jobs warm-up for the decision"],
      ["Thu 30","FOMC 02:00 + Warsh presser 02:30; Q2 GDP (adv.) + PCE prices + claims 20:30","The week's fulcrum; then the stagflation tell"],
      ["Fri 31","ECI (Q2); Personal Income/PCE; China NBS PMIs 09:30; BoJ decision; EZ flash HICP/GDP","Wage pressure + month-end; Asia risk tone; ECB Sept debate"]
    ],
    cbs: [
      ["US Federal Reserve","Decision Thu 30 Jul 02:00; presser 02:30","Hold 3.50–3.75%","How hawkish is Warsh? Any 2026 hike still live?"],
      ["Bank of Japan","Decision Fri 31 Jul; Outlook Report","Hold 1.00%","Is the pause tactical? FY26 GDP upgrade path"],
      ["ECB (context)","No meeting — held 23 Jul at 2.25%","2.25%","Lagarde flagged a possible Sept move; watch HICP"]
    ],
    earnings: [
      ["Tue 28","Visa · Coca-Cola · Boeing · PayPal +many","Payments volume; staples pricing power; BA cash burn"],
      ["Wed 29","Microsoft & Meta — after close","Azure growth + AI capex; Meta ad strength vs. capex guide"],
      ["Thu 30","Apple & Amazon — after close; Exxon, Chevron (confirm)","iPhone/services + China; AWS margin; energy cash returns"],
      ["Fri 31","Supermajors (confirm)","Supermajor FCF at Brent ~$100"]
    ],
    catalysts: [
      "Month-end (Fri 31 Jul): index rebalancing, closing-auction flows, ECI + Eurozone slate.",
      "Crypto/regulation: 'Clarity Act' momentum behind Bitcoin >$65k — watch legislative/ETF-flow headlines.",
      "Energy/OPEC+ chatter: production or Hormuz-security headlines move the whole inflation complex intraday.",
      "Post-July-opex positioning; heavy single-stock gamma around the mega-cap prints."
    ],
    regime: {
      label:"#Quad3 — 'flation now, stag on a lag'",
      note:"Directional, from the most recent verified Hedgeye commentary (July 2026); the live feed was not reachable. Quad 3 playbook: gold, energy/commodities, long-duration Treasuries; caution on high-multiple growth. Oil-shock overlay pulls toward Quad 3→4 risk if growth rolls faster than inflation cools.",
      ranges: [
        ["S&P 500 (7,412)","Buy low / sell high of range","Bullish TREND, stretched"],
        ["Nasdaq (24,976)","Wider band on capex risk","Bullish TREND, fragile"],
        ["US 10Y (4.67%)","Lower-end bias on haven bid","Neutral/lower"],
        ["Gold (~$4,030)","Rangebound ±5% under records","Bullish TREND"],
        ["Brent ($98)","$90s with $100 pivot","Bullish TREND (war premium)"],
        ["Bitcoin (~$65.7k)","High-beta, wide band","Bullish TREND"]
      ],
      where:"Late-cycle and stretched: equities at/near records into a stagflationary Quad 3 with a fat oil tail. What flips it: a hawkish Warsh + hot PCE pushing real rates up; an AI-capex disappointment cracking the Nasdaq TREND; or a Hormuz escalation spiking Brent through $100. A dovish Fed + clean earnings + oil de-escalation is the bullish counter that extends the streak."
    },
    positioning:"Crowded: mega-cap AI/semis leadership and the record S&P streak — concentration risk is the single biggest tell into four mega-cap prints. FOMC + GDP/PCE + mega-caps in 48h is a classic vol-of-vol setup: expect a pre-Fed VIX bid and post-event crush if outcomes are benign. Watch IG/HY spreads on any hawkish surprise. Tells: SOX leadership, the 2Y on Fed wording, Brent $100, USD/JPY on BoJ, closing-auction volume into month-end.",
    geo: [
      "The 2026 Iran war remains the dominant macro overlay: Houthi Red Sea/Bab-al-Mandeb blockade threats, reported Iranian fire toward Jordan/Kuwait, recurring Hormuz closure risk.",
      "Escalation = instant risk-off, Brent >$100, bid to gold/USD/Treasuries; de-escalation = fastest tailwind for equities and duration.",
      "Polymarket Fed-July 'no change' swung ~74–95% through the week, settling ~80–85% into the meeting."
    ],
    asia:"Asia likely opens cautious-to-mixed Monday: Friday was a split tape (Dow up, Nasdaq down) and futures were steady over the weekend. With the Fed, mega-caps and GDP/PCE all mid-to-late week, expect low-conviction, range-bound trade early as desks de-risk. Intraday tells: Brent vs. $100 at the open, USD/JPY into the Fri BoJ, semis/SOX sympathy, weekend Hormuz headlines. China names trade the Fri NBS PMI in anticipation.",
    beyond: [
      "Mega-cap earnings double as product-signal events — the week's real 'launches' are on the calls.",
      "Busy late-July launch cadence (SpaceX Starlink/Falcon 9) — confirm schedules live.",
      "Peak northern-summer sport & festival season — colour, low direct market impact."
    ]
  },
  recall: {
    window: "Mon 20 – Sun 26 Jul 2026",
    readings: [
      { t:"One Hundred Years in the U.S. Stock Markets", d:"20 Jul", g:"Economics/Investing", u:null, x:"Hendrik Bessembinder (ASU W.P. Carey) analyzes investment outcomes for 29,754 common stocks listed on U.S. public markets between January 1926 and December 2025, using data from the Center for Research in Security Prices (CRSP) database…" },
      { t:"China Is Preparing For $38,000 Gold", d:"23 Jul", g:"Economics/Commodities", u:"https://www.youtube.com/watch?v=dFjvcY9Tth0", x:"For the first time, a gold ETF has become the largest ETF in China, surpassing the country's equivalent of the S&P 500 — the Guan Yu Gold ETF holds $13 billion in assets vs. $12 billion for the primary stock-based ETF…" },
      { t:"What the New Kimi K3 Model Really Means for the U.S.-China AI Race — The Information", d:"26 Jul", g:"AI", u:null, x:"Beijing-based Moonshot released Kimi K3, the world's largest open-source model at 2.8 trillion parameters — topping Arena's coding leaderboard above GPT-5.6 and Claude Fable 5, challenging the assumption that Chinese labs rely on distillation. Microsoft is adding it to Azure and testing it for Copilot; Redwood Research estimates it is roughly 10 months behind Anthropic in pretraining and less useful in practice than benchmarks suggest…" },
      { t:"The Gold-Miner Paradox | July 2026", d:"26 Jul", g:"Investing", u:null, x:"Gold miners have had a far harder market than the metal itself — a 'gold-miner paradox' testing investor confidence in mining equities. Miners are operating businesses exposed to wages, diesel, political risk and capex, and operating leverage magnifies both profits and losses. The World Gold Council reports gold hit a record $5,405/oz in late January 2026 before a sharp correction…" },
      { t:"DeepSeek Investor Call — Lessons Learned", d:"26 Jul", g:"AI", u:null, x:"The compute constraint: four Huawei cards ≈ one Nvidia card, compounded by a two-year technological lag. DeepSeek holds ~20,000 H-equivalent units; its 16,000 Huawei Ascend 950s equal ~4,000 Nvidia B-series — an order of magnitude below major Chinese internet firms. Training an 800B-class frontier model would need ~50,000 GB300s; DeepSeek aims to compress its lag to 3–6 months rather than close the compute gap…" },
      { t:"Tokenized Stocks Hit Records as US Access Opens", d:"26 Jul", g:"Investing", u:null, x:"The tokenized-equity market hit a record $2.3 billion in mid-July, nearly doubling March's $1 billion. On July 21 Ondo recorded 514.5m tokenized shares outstanding, Backed Finance a $579.4m tokenized market cap, and Robinhood Chain 126,720 shares. Ondo's broker-dealer Oasis Pro Markets was authorized to sell tokenized equities, ETFs and funds to US investors under SEC/FINRA oversight…" },
      { t:"China's Banks Halt Paper Gold: Risk or Real Price Shift?", d:"26 Jul", g:"Commodities", u:null, x:"Major Chinese banks — ICBC, Postal Savings Bank, Ping An, Guangfa and CCB — are discontinuing retail paper-gold products linked to the Shanghai Gold Exchange after the 24 July 2026 settlement; retail clients were told to close positions, liquidate, or take physical delivery before the deadline…" },
      { t:"How America's 250-year China dream became its greatest strategic challenge", d:"26 Jul", g:"International Relations", u:null, x:"SCMP: in February 1784 the Empress of China departed New York for Canton, beginning the US-China relationship. Historians note the US has repeatedly reinvented its perception of China over 250 years — coveted market, admired civilization, missionary project, strategic rival…" },
      { t:"Made in Europe vs Made in America vs Made in China", d:"26 Jul", g:"Economics", u:null, x:"Heyokha Brothers report (10 Jul 2026): 'Made in Europe' is not traditional reshoring but a strategic push to ensure European institutions can function if access to foreign cloud, AI or semiconductor technology is interrupted. The June 2026 technology-sovereignty package shifts from regulating foreign tech to building domestic capacity — Cloud & AI Development Act, Chips Act 2.0, open-source strategy, energy digitalisation roadmap…" },
      { t:"13D_ WATMTU 24Aug2025", d:"26 Jul", g:"Economics", u:null, x:"Uploaded 13D Research 'What Are The Markets Telling Us' issue. (Recall has not generated a summary for this upload yet)" }
    ],
    cards: [
      { t:"Johnson & Johnson", g:"Organization/Corporation", u:"https://en.wikipedia.org/wiki/Johnson_&_Johnson" },
      { t:"Vulcan Materials Company", g:"Organization/Corporation", u:"https://en.wikipedia.org/wiki/Vulcan_Materials_Company" },
      { t:"Altria", g:"Organization/Corporation", u:"https://en.wikipedia.org/wiki/Altria" },
      { t:"Home Depot", g:"Organization/Corporation", u:"https://en.wikipedia.org/wiki/Home_Depot" },
      { t:"Jamieson Greer", g:"Person", u:"https://en.wikipedia.org/wiki/Jamieson_Greer" },
      { t:"Zocdoc", g:"Web Site", u:"https://en.wikipedia.org/wiki/Zocdoc" }
    ]
  }
}
,
{
  id: "2026-07-31",
  weekEnding: "Friday 31 July 2026",
  published: "Saturday 1 August 2026",
  pdf: "reports/2026-07-31.pdf",
  pdfName: "Global Week in Review_2026-08-01.pdf",
  tldr: "A stagflationary week that stocks shrugged off. US Q2 GDP slowed to 1.5% while June core PCE held at 3.3%, and a Fed under new Chair Kevin Warsh held at 3.50–3.75% on a divided 9–3 vote with three hawkish dissents — driving the 30Y to its highest since 2007 and the 10Y back above 4.7%. Yet indices rallied into month-end as the AI-capex reckoning split Big Tech: Microsoft (+8–9%) and Amazon (+8–10%) soared on cloud, while Alphabet and Meta were punished for spending and Apple slid on a memory crunch and soft China. July was the worst month for levered consensus hedge-fund positioning since 2023 — TMT memory −30.5%, high-beta momentum −30.9% — while GARP software, healthcare and REITs paid. Leadership rotated hard into energy, healthcare and defensives, and Hedgeye's Nowcast flipped July's #Quad4 to #Quad3 for August as oil and commodities re-accelerate inflation.",
  metrics: {
    spx: 7489.72,
    nasdaq: 25373.85,
    dow: 52485.03,
    us10y: 4.70,
    us2y: 4.31,
    dxy: 100.19,
    gold: 4086,
    silver: 58,
    brent: 88,
    wti: 85,
    btc: 63870,
    vix: 16.4
  },
  snapshot: [
    ["S&P 500", "7,489.72", "+1.05%", "Bounced into month-end on MSFT/AMZN; July finished ~flat (≈−0.6% MTD)"],
    ["Nasdaq Composite", "25,373.85", "+1.59%", "Round-tripped a vicious mid-week AI/semis drawdown; TREND still bearish"],
    ["Dow Jones Ind.", "52,485.03", "+1.04%", "Fourth straight winning month; value/defensive tilt helped"],
    ["US 10Y Treasury", "≈4.70%", "higher", "Highest since Jan 2025 on sticky inflation + heavy supply"],
    ["US 2Y Treasury", "≈4.31%", "~flat", "Anchored by the Fed's hold at 3.50–3.75%"],
    ["US 30Y Treasury", "≈5.25%", "higher", "Highest since 2007 — the week's loudest macro signal"],
    ["Dollar (DXY)", "100.19", "~flat", "Capped by suspected Japanese yen intervention; TREND bullish"],
    ["Gold (spot)", "≈$4,086", "+~1%", "Held the ≈$4,100 shelf; Hedgeye TREND bearish (extended)"],
    ["Silver (spot)", "≈$58", "+~2%", "Briefly >$59 on Mideast headlines; supply-tight, TREND bearish"],
    ["Brent crude", "≈$88", "~flat", "+~20% in July on Iran/Hormuz; eased late-week on US airstrike pause"],
    ["WTI crude", "≈$85", "~flat", "Mid-$80s; the macro pivot for inflation and the Fed's September call"],
    ["Bitcoin", "≈$63,870", "−~2%", "Slid into month-end though broad crypto had its best month in a year"],
    ["VIX", "≈16.4", "lower", "Spiked to ≈20.7 on 29 Jul, then round-tripped; July range 14.96–20.88"]
  ],
  themes: [
    {
      t: "① The AI-capex verdict split Big Tech",
      b: "Microsoft rose ~8–9% (Azure +43%, RPO $678B, 30M Copilot seats) and Amazon surged +15.3% on Friday alone (AWS +37%, first $200.6B quarter). Alphabet fell ~15% despite Cloud +82%, and Meta ~10% despite revenue +28% — both punished for AI capex. Apple slid on a memory/chip crunch and soft China/Services.",
      r: "Owning 'AI infrastructure' is no longer a free pass — the market now demands ROIC visibility. Barbell toward hyperscalers monetizing cloud (MSFT, AMZN) and fade those still spending into the promise."
    },
    {
      t: "② A factor unwind, not an index crash",
      b: "Per Hedgeye, July was the worst month for levered consensus hedge-fund positioning since 2023: TMT memory −30.5%, GS high-beta momentum −30.9%, AI data centers −19.4%. The same month paid GARP software +8.4%, US healthcare +5.3% and REITs +4.5%. Even on down-momentum days, 71% of SPY names were green.",
      r: "This is a crowded-trade purge, not a market breakdown. Fade strength in momentum/growth; own dividends, healthcare, energy and equal-weight."
    },
    {
      t: "③ Rates repriced higher — stagflation, not disinflation",
      b: "The 30Y hit its highest since 2007 and the 10Y topped 4.7%, its highest since January 2025 — the collision of sticky 3.3% core PCE, slowing 1.5% growth and a hawkish Warsh Fed.",
      r: "Duration is a source of risk, not safety. The long end is doing the Fed's tightening; long bonds remain a poor hedge in a Quad3 tape."
    },
    {
      t: "④ Oil is the macro pivot",
      b: "Brent gained ~20% in July on Iran / Strait-of-Hormuz escalation before a late-week US airstrike pause eased the spike and helped equities bounce.",
      r: "Energy is simultaneously the inflation driver and the leadership trade. Own the cash-flow (XLE, refiners); the commodity itself is the swing factor for the September Fed decision."
    },
    {
      t: "⑤ The Fed held — but the hawks are restless",
      b: "The FOMC held 3.50–3.75% on a 9–3 vote, with three officials (incl. Logan, Hammack) dissenting for hikes. Warsh shortened the statement and stressed conditions over guidance; markets now price the first 2026 hike for September.",
      r: "'Higher for longer' has mutated into 'maybe higher.' Front-end carry is fine; the tail risk is a hawkish surprise, not a cut."
    },
    {
      t: "⑥ Regime shift: Quad4 → Quad3",
      b: "Hedgeye's US monthly Nowcast was #Quad4 for July (growth and inflation both slowing) and flips to #Quad3 for August (growth slowing, inflation re-accelerating) on the commodity breakout.",
      r: "Quad3 favors energy, gold/precious, commodities and value/quality; it punishes long-duration growth and long bonds. Position for the inflation re-acceleration."
    }
  ],
  regime: {
    label: "#Quad4 (July) → #Quad3 (August) — 'growth slowing, inflation re-accelerating'",
    note: "Hedgeye's own Risk Range™ signals this week, sourced to the Early Look 'Crash, Bounce, Then?' (31 Jul, 07:38 ET ≈ 19:38 GMT+8) and 'Quad Candy vs. Crowded Carnage' (29 Jul). Unlike the prior two weeks, the subscriber feed was reachable — these are Hedgeye's published levels, not derived bands.",
    ranges: [
      ["US 10Y Yield", "4.59 – 4.71", "Bullish"],
      ["S&P 500 (SPX)", "7,316 – 7,538", "Bullish"],
      ["Nasdaq Comp (COMPQ)", "24,314 – 25,569", "Bearish"],
      ["Russell 2000 (RUT)", "2,904 – 2,990", "Bullish"],
      ["Technology (XLK)", "165 – 181", "Bearish"],
      ["Health Care (XLV)", "159 – 168", "Bullish"],
      ["Real Estate (XLRE)", "44.99 – 46.40", "Bullish"],
      ["High Yield (HYG)", "78.97 – 79.76", "Neutral"],
      ["Inv. Grade (LQD)", "105.7 – 107.3", "Bearish"],
      ["Volatility (VIX)", "15.77 – 20.56", "Bearish"],
      ["US Dollar (DXY)", "99.76 – 102.01", "Bullish"],
      ["WTI Crude", "79.27 – 92.90", "Bullish"],
      ["Natural Gas", "2.61 – 2.93", "Bearish"],
      ["Gold (spot)", "3,991 – 4,139", "Bearish"],
      ["Copper (spot)", "6.19 – 6.59", "Bullish"],
      ["Silver (spot)", "55 – 60", "Bearish"]
    ],
    where: "Friday was explicitly framed as 'Day 1 of a bounce' off immediate-term oversold in tech — XLK closed ≈166 versus its 165–181 range. The SPX TREND is bullish but Nasdaq and XLK TREND are bearish: own the index, rent the tech bounce. McCullough cut his XLK short to minimum size near the lows and will stop out only on a close back above $180; he added Energy via XLE and CRAK and stays long healthcare, REITs, dividends and precious-adjacent. Net: respect the bounce, but the TREND signals still say growth/tech is guilty until it recaptures its levels."
  },
  mag7: [
    { tk: "NVDA", n: "Nvidia", p: 200.75, wk: "−2.9%", wkPct: -2.9, cap: "≈$4.9T", pe: "~40" },
    { tk: "AAPL", n: "Apple", p: 308.91, wk: "−7.2%", wkPct: -7.2, cap: "≈$4.5T", pe: "~36" },
    { tk: "MSFT", n: "Microsoft", p: 464.72, wk: "+21.8%", wkPct: 21.8, cap: "≈$3.5T", pe: "~37" },
    { tk: "AMZN", n: "Amazon", p: 271.58, wk: "+17.0%", wkPct: 17.0, cap: "≈$2.9T", pe: "~35" },
    { tk: "GOOGL", n: "Alphabet", p: 356.13, wk: "+11.4%", wkPct: 11.4, cap: "≈$4.3T", pe: "~27" },
    { tk: "META", n: "Meta", p: 556.71, wk: "−6.5%", wkPct: -6.5, cap: "≈$1.4T", pe: "~28" },
    { tk: "TSLA", n: "Tesla", p: 311.21, wk: "−0.6%", wkPct: -0.6, cap: "≈$1.0T", pe: "~297" }
  ],
  mag7Read: "The Mag7 is no longer one trade. Cloud-monetizers (MSFT, AMZN) were rewarded; capex-spenders (GOOGL, META) and hardware (NVDA, AAPL) were punished. Intra-group dispersion is the widest in years — a stock-picker's tape hiding inside a cap-weighted index. Hedgeye's momentum signals agree: only MSFT bullish, AMZN neutral, the rest bearish/mixed. Data note: prices are actual regular-session closes for the Friday shown and the week column is a true Friday-to-Friday close-over-close move, both taken from the market-data feed (EOD series) rather than from the source report, which could not verify them. This supersedes the earlier reconstructed figures: Alphabet and Tesla now show clean week-on-week moves rather than post-print reactions overlapping the 24 July entry. Market caps and P/Es are as carried in the source report and remain approximate.",
  sectors: [
    { n:"Energy (XLE)", m:"#1 weekly rank", pct:6.0, d:"Top weekly sector on the oil breakout (Brent +~20% in July); KM bought XLE and CRAK. Source gave rank, not a weekly %, so the bar is directional." },
    { n:"Health Care (XLV)", m:"+5.3% (Jul)", pct:5.3, d:"Led the daily ETF re-rank (+12); Hedgeye TREND bullish 159–168" },
    { n:"Real Estate (XLRE)", m:"+4.5% (Jul)", pct:4.5, d:"Quad3 bond-proxy winner; TREND bullish 44.99–46.40" },
    { n:"Equal-weight (RSP)", m:"+9 re-rank", pct:2.0, d:"Breadth beat cap-weight — 71% of SPY names green even on down-momentum days" },
    { n:"Financials (XLF)", m:"firmer", pct:1.5, d:"Value/cyclical bid alongside industrials as the rotation ran" },
    { n:"Industrials (XLI)", m:"firmer", pct:1.2, d:"Cyclical leg of the rotation out of long-duration growth" },
    { n:"Technology (XLK)", m:"laggard", pct:-4.0, d:"Memory −30.5% and AI data centers −19.4% in July; TREND bearish 165–181, closed ≈166" }
  ],
  sectorsRead: "Leadership is rotating from long-duration growth to value/quality/commodity-linked — the textbook Quad3 playbook (energy, healthcare, REITs, dividends). KM put money where the model is, buying XLE/CRAK. Data note: the source reported July monthly sector returns and daily ETF re-ranks rather than clean weekly percentages; figures labelled '(Jul)' are monthly, and the unlabelled bars are directional from the source's rank ordering.",
  positioning: "VIX spiked from ≈16.6 (22 Jul) to ≈20.7 (29 Jul) as the tech unwind peaked, then faded to ≈16.4 by Friday; the July range was 14.96–20.88. Hedgeye's VIX TREND is bearish (15.77–20.56) — vol keeps trending lower despite the pops. Credit split by duration, not quality: high-yield spreads stayed contained (HYG neutral, 78.97–79.76) while investment grade (LQD, 105.7–107.3) was pressured as the long end sold off. Net read: this was a positioning/factor purge, not a systemic event — credit calm, VIX spike round-tripped. Use vol spikes to add to Quad3 winners; the pain is concentrated in crowded growth, not the broad market.",
  corporate: [
    "Microsoft (29 Jul): beat; Azure +43%, RPO $678B, 30M Copilot seats; stock +~8–9% — the only Mag7 name with a bullish Hedgeye TREND.",
    "Meta (29 Jul): revenue $60.8B (+28%) but an EPS miss and heavy AI capex; stock −8% on the 30 Jul session, then +3.3% Friday (−6.5% on the week).",
    "Amazon (30 Jul): first $200.6B quarter, AWS +37% (fastest since 2021), capex ~$220B; stock +15.3% Friday — the earnings reaction, and the best Mag7 week (+17.0%).",
    "Apple (30 Jul): record June-quarter revenue $109.4B but Services and China soft amid a memory-cost '100-year flood'; stock −7.4% Friday, its worst single-day drop in ~16 months, and likely ceded the #1 market-cap spot back to Nvidia.",
    "Alphabet (prior week): Cloud +82% but capex worries drove the stock −~15% off the print.",
    "Tesla (prior week): shares dropped post-earnings; valuation the richest in the group (~297x).",
    "Semis broadly weak mid-week on AI-spend and geopolitics, but Nvidia round-tripped: NVDA closed Friday at $200.75 (+2.9% on the day, −2.9% on the week).",
    "Apple held the world's most valuable company title on 27 Jul but likely ceded it back on Friday after its −7.4% slump left it at ≈$4.5T against Nvidia's ≈$4.9T."
  ],
  macro: [
    "US Q2 GDP (advance): 1.5% annualized, a step down from Q1. Net: the 'slowing' half of Quad3 is confirmed — growth momentum is fading even before the rate hit fully bites.",
    "US June core PCE: 3.3% y/y (from 3.4%), headline 3.7%, core +0.1% m/m; energy fell 5.9% (gasoline −9.2%) on a temporary Mideast ceasefire. Net: still well above target and the energy relief looks temporary — disinflation has stalled just as oil re-accelerates.",
    "FOMC (28–29 Jul): held 3.50–3.75%, 9–3, three hawkish dissents; Warsh's statement notably shorter. Net: no cuts on the horizon; the market now prices the first 2026 hike for September and the risk is a hawkish surprise.",
    "China July manufacturing PMI: 49.2 (from 50.3) — back in contraction, ending a four-month growth run; high-tech mfg 53.3 held up. Net: demand is soft and stimulus pressure on Beijing builds — a disinflationary global offset, not yet a reflation signal.",
    "Eurozone Q2 GDP: +0.4% q/q, +1.0% y/y — a beat. Net: Europe is firmer than feared, which keeps the ECB's tightening bias and a September hike live."
  ],
  geo: [
    "The US–Iran confrontation escalated through July: Iranian strikes on commercial vessels drew US CENTCOM strikes on Iranian targets; Trump declared the June Islamabad truce over (8 Jul) and tit-for-tat strikes followed, with US operations pushing deeper into Iran and Iranian missiles targeting regional US positions.",
    "Strait of Hormuz disruption drove oil +~20% before a late-week US airstrike pause cooled both crude and equity nerves.",
    "Prediction markets (Polymarket): the Iran complex is heavily traded — ~191 Iran markets (36 on oil); the 'US × Iran ceasefire by…?' market has >$280M of volume, and 'Strait of Hormuz traffic returns to normal by 31 July?' was among the most active. Specific live odds not captured — verify on Polymarket.",
    "Read: oil is hostage to headlines. A durable ceasefire is the single biggest disinflationary catalyst (bearish energy longs, bullish duration/growth); renewed escalation is the Quad3 accelerant. Keep the book barbelled to survive either tape.",
    "Trade: the Aug 1 reciprocal-tariff deadline lands with fresh country rates (recent deals cut India to ~18%, Taiwan to ≤15%) just as earnings guidance is being set."
  ],
  ahead: {
    published: "Sunday 2 August 2026",
    weekOf: "Mon 3 August 2026",
    pdf: "reports/2026-07-31-ahead.pdf",
    pdfName: "Global Week Ahead_2026-08-02.pdf",
    tldr: "A jobs-week, earnings-heavy tape sitting on top of a live oil shock. Friday's July payrolls (Fri 20:30 GMT+8) is the single print that defines the week, with ISM Manufacturing (Mon) and ISM Services + ADP (Wed) as the build-up. OPEC+ meets Sunday while the US–Iran / Strait of Hormuz conflict keeps crude — and therefore the inflation path — on a knife's edge. Earnings peak with Palantir (Mon), AMD and Caterpillar (Tue), Disney and Eli Lilly (Wed). Hedgeye's Nowcast has just flipped to August #Quad3 (inflation re-accelerating): the map says keep fading crowded AI/Tech into Energy, Healthcare and REITs. No Fed, no ECB — the data leads.",
    setup: [
      ["S&P 500", "7,489.72", "+0.7%", "Sits near top of Hedgeye range; upside thinner than downside"],
      ["Nasdaq Composite", "25,373.85", "+1.0%", "Bearish TREND intact — Day-1 bounce must prove itself"],
      ["Dow Jones Ind.", "52,485.03", "+0.53%", "4th straight winning month; cyclicals firmer than mega-tech"],
      ["US 10Y yield", "≈4.74%", "rising", "Pushed above Hedgeye's 4.71 range top — the pressure valve is open"],
      ["US 2Y yield", "≈4.29%", "flat", "Fed on hold — a hike scare, not a cut, was priced last week"],
      ["DXY (US$ index)", "≈99.79", "−0.2%", "Bullish TREND; sitting on the 99.76 range floor"],
      ["Gold (spot)", "≈$4,043", "−1.5%", "Held the $4,000 line; bearish immediate-term TREND"],
      ["Silver (spot)", "≈$58.53", "−0.8%", "Range 55–60; still a high-beta inflation proxy"],
      ["Brent crude", "≈$90.12", "+1.0%", "Hormuz premium; OPEC+ decides Sunday"],
      ["WTI crude", "≈$84.67", "+1.0%", "Bullish TREND, wide 79–93 range = the swing factor"],
      ["Bitcoin", "≈$63,018", "−1.4%", "Slipped to ≈$63k; ETH bearish, a risk-off tell"]
    ],
    setupNote: "All levels are verified 31 July closes/settles — indices, futures settles, end-of-day yields and DXY, and BTC end-of-day. Re-confirm live before acting.",
    themes: [
      {
        t: "Payrolls Friday is the whole week's fulcrum",
        b: "June was a soft +57k with unemployment at 4.2%. After a Fed that stayed on hold — and even flirted with a hike — a hot number revives the higher-for-longer/inflation fear while a cold one revives growth-scare talk.",
        w: "A print with a rising unemployment rate is the more dangerous surprise into #Quad3 — it pairs slowing growth with re-accelerating inflation. Keep dry powder for the 20:30 release."
      },
      {
        t: "Oil is the macro swing factor — two catalysts this weekend",
        b: "Brent ≈$89, WTI ≈$84 with a wide bullish range (WTI 79–93). The US–Iran conflict keeps a war premium in crude even as tankers resume transit, and OPEC+ meets Sunday 2 Aug to set September output (August was a +188k bpd hike).",
        w: "Crude is the transmission line into the whole #Quad3 thesis. An OPEC+ hold or Hormuz escalation that lifts oil keeps long Energy (XLE/CRAK) working; a supply surprise that cracks oil would relieve the inflation trade fast."
      },
      {
        t: "The AI/momentum unwind: crash → bounce → then?",
        b: "July was the worst month for levered-consensus hedge-fund positioning since 2023 — TMT Memory −30.5%, high-beta momentum −30.9%, AI Data Centers −19.4%. Friday was Day-1 of a bounce (AMZN, MSFT), but Nasdaq and XLK TREND signals are still bearish.",
        w: "A bounce that fails at the TRADE momentum level (XLK ≈$180) is a re-short signal; a close back above TREND stops you out. Don't confuse a Day-1 rip with a trend reversal."
      },
      {
        t: "Earnings breadth test beyond mega-cap tech",
        b: "With Alphabet, Amazon, Microsoft and Apple behind us, the baton passes to Palantir (AI-sentiment bellwether), AMD (AI silicon), Caterpillar (global industrial + tariff read), Eli Lilly (obesity franchise) and Disney.",
        w: "PLTR Tuesday-morning HK time sets the AI mood; a soft AMD/PLTR guide would re-arm the Tech unwind, while strong CAT/industrials support the rotation-into-cyclicals story."
      },
      {
        t: "Tariffs back on the front burner",
        b: "The Aug 1 reciprocal-tariff deadline has fresh country rates taking effect (recent deals cut India to ~18%, Taiwan to ≤15%). New effective rates land just as earnings guidance is being set.",
        w: "Tariff headlines are a margin- and inflation-story at once — watch industrial and retail guidance (CAT, MCD) for cost-pass-through language."
      },
      {
        t: "Central banks step back — the data leads",
        b: "No Fed and no ECB this week. With policy on hold, hard data (ISMs, payrolls) and oil — not central-bank speak — will drive rates and the dollar.",
        w: "The 10Y already closed ≈4.74%, above the top of Hedgeye's 4.59–4.71 range — the equity-multiple pressure valve is open. A sustained hold above 4.71% is the tell that bonds, not earnings, set the tape."
      }
    ],
    calendar: [
      ["Mon 3", "China Caixin Mfg PMI 09:45 (prev 51.7); Germany retail sales 14:00; Swiss CPI 14:30; US ISM Manufacturing 22:00 (prev 53.3)", "First read on China factory momentum; ISM is the growth/inflation build-up into payrolls week"],
      ["Tue 4", "NZ employment / unemployment Q2 (Wed 06:45, prev 5.3%)", "Quiet US session — the tape trades earnings (CAT, MRK, MCD, PFE, AMD) not data"],
      ["Wed 5", "China Caixin Services PMI 09:45 (prev 54.1); US ADP payrolls 20:15 (prev +98k); US ISM Services 22:00 (prev 54.0)", "ADP is the payrolls appetizer; ISM Services prices-paid is the #Quad3 tell"],
      ["Thu 6", "Australia trade 09:30; RBNZ inflation-expectations Q3 11:00; Eurozone retail sales 17:00; Bank of England ~20:00 (TENTATIVE — verify)", "BoE date is unconfirmed: one preview flagged a possible cut from 3.75%, but the Bank's own 2026 calendar lists 17 Sep"],
      ["Fri 7", "US Non-Farm Payrolls / Unemployment / AHE 20:30 (prev +57k · 4.2% · +0.3%); Canada employment 20:30 (prev 6.5%)", "THE event of the week — defines rates, USD and risk appetite"]
    ],
    cbs: [
      ["US Federal Reserve", "No meeting — held 28–29 Jul at 3.50–3.75% (9–3, three hawkish dissents)", "On hold", "Market prices the first 2026 hike for September; is a hawkish surprise the real tail?"],
      ["Bank of England", "Thu 6 Aug ~20:00 — TENTATIVE, verify", "3.75% (a cut was flagged by one preview)", "Is the traditional early-August MPC slot live, or is the next decision 17 Sep as the Bank's calendar states?"],
      ["ECB", "No meeting this week", "2.00–2.25%", "Eurozone Q2 GDP beat (+0.4% q/q) keeps a September move live"],
      ["RBNZ", "No decision — Q3 inflation-expectations survey Thu 11:00", "prev 2.53%", "A live input for the NZD and the next RBNZ move"],
      ["RBA", "No decision — next meeting 11–12 Aug", "3.60% (verify)", "Near-horizon item, not this week's"]
    ],
    earnings: [
      ["Mon 3", "Palantir (PLTR) — after US close (~Tue 05:00 HK)", "AI-sentiment bellwether: commercial-US growth and a guide that justifies the multiple"],
      ["Tue 4", "Caterpillar, Merck, McDonald's, Pfizer — BMO; AMD, Amgen — AMC", "CAT = global industrial + tariff read; AMD = AI/data-center silicon demand and margins"],
      ["Wed 5", "Eli Lilly, Disney, Novo Nordisk, CVS — BMO; Uber, Shopify, AppLovin, Western Digital, SanDisk", "LLY/NVO = obesity-drug trajectory; DIS = parks + streaming profitability; consumer resilience via UBER/SHOP"],
      ["Thu–Fri", "Balance of S&P 500 reporters (financials, industrials, consumer)", "Breadth: can non-mega-cap earnings carry the rotation?"]
    ],
    catalysts: [
      "OPEC+ meeting, Sunday 2 Aug — sets September output. August was a +188k bpd hike; with the Hormuz premium in crude, the size of any further unwind of cuts is the key oil catalyst as the week opens.",
      "US reciprocal tariffs — fresh country rates effective around the Aug 1 deadline (India ~18%, Taiwan ≤15%). A margin- and inflation-story at once.",
      "Peak earnings week — the single biggest micro catalyst; PLTR and AMD are the AI-unwind's live wires.",
      "US July payrolls (Fri 20:30) — the macro event of the week.",
      "Two weekend oil catalysts (OPEC+ and Hormuz headlines) mean the Monday Asia open can gap on crude before a single US data point prints — weekend position sizing matters."
    ],
    regime: {
      label: "#Quad3 (August) — growth slowing, inflation re-accelerating",
      note: "Hedgeye's US Nowcast just shifted from July #Quad4 (growth and inflation both slowing — the month that punished levered momentum, memory and AI exposures) to August #Quad3, driven by the breakout in oil and major commodities. Playbook: new value in Energy (XLE, CRAK); stay long GARP software, Healthcare (XLV), REITs (XLRE) and defensives; keep fading crowded growth/AI and short Korea (EWY). Ranges below are Hedgeye's published levels from the 31 Jul Early Look.",
      ranges: [
        ["UST 10Y Yield", "4.59 – 4.71", "Bullish"],
        ["S&P 500 (SPX)", "7,316 – 7,538", "Bullish"],
        ["Nasdaq Comp (COMPQ)", "24,314 – 25,569", "Bearish"],
        ["Russell 2000 (RUT)", "2,904 – 2,990", "Bullish"],
        ["Technology (XLK)", "165 – 181", "Bearish"],
        ["Health Care (XLV)", "159 – 168", "Bullish"],
        ["Real Estate (XLRE)", "44.99 – 46.40", "Bullish"],
        ["Volatility (VIX)", "15.77 – 20.56", "Bearish"],
        ["US Dollar (DXY)", "99.76 – 102.01", "Bullish"],
        ["WTI Crude", "79.27 – 92.90", "Bullish"],
        ["Gold (spot)", "3,991 – 4,139", "Bearish"],
        ["Silver (spot)", "55 – 60", "Bearish"],
        ["Copper (spot)", "6.19 – 6.59", "Bullish"],
        ["Natural Gas", "2.61 – 2.93", "Bearish"]
      ],
      where: "The S&P closed 7,489 — near the top of its 7,316–7,538 range (upside ~+0.6% vs downside ~−2.3%), an asymmetric, sell-the-rip setup. Nasdaq's bearish TREND and the XLK bearish signal say Friday's rip is Day-1, not a reversal, until XLK closes back above its ~$180 TRADE / $176 TREND levels. What flips the regime: a genuine crack in oil (WTI back below the low-70s) would take the air out of the #Quad3 inflation call and re-open the door to Tech; conversely, oil pressing the $93 top plus a hot payrolls would harden #Quad3 and extend the rotation into Energy, value and defensives."
    },
    positioning: "What's crowded and stretched: levered-long AI, memory and high-beta momentum — the trades that just suffered their worst month since 2023 (TMT Memory −30.5%, momentum −30.9%). A Day-1 bounce doesn't de-crowd them. What's working: GARP software, Healthcare (+5.3% in July), REITs (+4.5%), and now Energy on the oil breakout — the #Quad3 winners. Vol and credit: VIX 15.77–20.56 with a bearish TREND (Hedgeye leans to lower vol), but the range top near 20+ is where hedges get paid if payrolls or oil surprises; HY (HYG) neutral, IG (LQD) bearish — credit is the confirmation to watch under a rotation. The tell is whether the bounce broadens (breadth, cyclicals, small caps holding their bullish ranges) or narrows back into a failing mega-cap rip. Fade the latter.",
    geo: [
      "US–Iran / Strait of Hormuz is the dominant live risk. A 60-day ceasefire broke down into roughly two weeks of fighting; US strikes were put 'on hold' around 27 Jul with talks looming, but the Hormuz crisis is unresolved and tankers are transiting a contested zone. Any re-escalation is a direct oil spike — and therefore a direct #Quad3 accelerant.",
      "Trade and tariffs: the Aug 1 reciprocal-tariff deadline keeps trade policy live, with new effective rates and fresh country deals (India ~18%, Taiwan ≤15%).",
      "Prediction markets (verify live): Polymarket runs active books on the Aug 1 tariff outcomes, the September Fed decision, and 2026 US recession odds (which oscillated roughly 28–40% earlier in the year). With the Fed having flirted with a hike, market-implied near-term cut odds are low — check live before citing a number.",
      "The cleanest real-time gauge of the Iran risk is crude itself. A weekend Hormuz headline is the most likely source of a Monday Asia gap."
    ],
    asia: "Asia comes in off a violent mean-reversion. Korea's KOSPI surged +17.9% Friday — its largest single-day gain on record (Samsung +28%, SK Hynix +30%) — after crashing ~17% over the prior three sessions; Japan's Nikkei is still −11.6% over the month and only just flashing oversold. With Wall Street closing firm Friday, Asia should open with a risk-on bias, but Hedgeye's framing is explicit: this is Day-1 of a bounce, not a confirmed reversal (Hedgeye is short EWY). Intraday tells: does KOSPI/Nikkei hold the morning gap or fade it; USD/JPY direction; and crude on the OPEC+/Hormuz headlines. A gap-up that fades by the HK afternoon is the momentum-unwind reasserting.",
    beyond: [
      "Policy and summits: OPEC+ ministers (Sun 2 Aug) headline the weekend; US tariff implementation dominates the trade-policy calendar.",
      "Earnings culture-watch: Disney (Wed) doubles as a read on parks, streaming and the consumer; McDonald's (Tue) is the classic value-consumer tell.",
      "Sport and culture: northern-hemisphere football pre-season and the summer sporting calendar are in full swing; the European club season ramps later in August.",
      "No first-tier space launch, index reconstitution or major product keynote is confirmed for this specific week at time of writing — verify closer to the day."
    ]
  },
  recall: {
    window: "Mon 27 Jul – Sun 2 Aug 2026",
    readings: [
      { t:"How Bridgewater Built an AI Analyst That Does Hours of Expert Research in Minutes", d:"31 Jul", g:"Technology/AI", u:"https://www.youtube.com/watch?v=lXZb21CfeIY", x:"Introduction: 50 years of written-down investment logic as an AI advantage (00:06) Brendan McManus serves as the team lead of the applied AI team at Bridgewater Associates, a systematic macro hedge fund. He has been with Bridgewater for nearly ten years, transitioning from a software engineer to a systematic investor and researcher, with a recent focus on integrating technology and investing. Michael Ran and Santi Weight serve as the investor lea…" },
      { t:"Simon's Daily — The Journey · Heyokha Brothers", d:"31 Jul", g:"Economics/Investing", u:"https://simondaily2026.pages.dev", x:"The \"3D\" framework — demolition of the old monetary order through de-dollarisation, de-globalisation and decentralisation — and the \"ABC\" framework — the build-out of AI, blockchain and compute — represent a single investment trade rather than opposing forces. Market trends demonstrate that the physical assets required for the AI build-out, such as critical minerals, energy and hardware, are the shared substrate where resource nationalism and com…" },
      { t:"An interview with Elon Musk", d:"27 Jul", g:"Technology", u:"", x:"Interview Context and Overview Zanny Minton Beddoes, editor-in-chief of The Economist, interviewed Elon Musk for her video show, The Insider. The interview took place at a Tesla factory in Texas following the IPO of SpaceX. The conversation lasted over 90 minutes and covered the timeline for artificial intelligence to surpass human intelligence, the rapid development of China, Musk's interest in Europe, and his reflections on his recent involveme…" },
      { t:"Research Daily", d:"27 Jul", g:"Economics/Investing", u:"https://researchdaily2026.pages.dev", x:"AI Investment and Corporate Capital Expenditure Earnings pressure: major tech companies face significant pressure to demonstrate AI return on investment. Year-to-date performance for Meta (−9.8%) and Microsoft (−21%) reflects this, while Apple is noted as an outlier with lower AI spending. Funding the compute: the industry narrative has shifted from identifying the \"best model\" to securing funding for compute resources. Goldman Sachs' Greenwood i…" }
    ],
    cards: []
  }
}
,
{
  id: "2026-08-07",
  weekEnding: "Friday 7 August 2026",
  published: "Saturday 8 August 2026",
  pdf: "reports/2026-08-07.pdf",
  pdfName: "Global Week in Review_2026-08-08.pdf",
  tldr: "Bad news was good news. A shock −23k July payrolls print (vs +83k expected) flipped the Fed conversation from 'will they hike?' to 'hold, maybe cut,' and stocks ripped to record highs — S&P +3.6%, Nasdaq +5.2% — led by mega-cap software and a chip-sector bounce. Government payrolls fell 53k, wage growth cooled to +3.2% y/y (slowest since May 2021) and unemployment ticked to 4.1%; CME FedWatch moved to ~60% for a September hold while Polymarket flirted with a 25bp cut. Yields and the dollar softened (10Y −10bp to 4.65%, DXY near a 7-week low), gold broke out +7.1% to ~$4,400 in a textbook bullish phase transition, and silver ran +9.9%. But the catch is the calm: VIX collapsed to 14.9, IG spreads sit at ~77bp (bottom decile since the GFC) and Hedgeye flags 8 of 9 major Risk Ranges with more downside than upside. Hedgeye stayed in #Quad3 — and with the tape pinned to the top of its range and inflation still hot, this is a chase you fade, not follow.",
  metrics: {
    spx: 7757.64,
    nasdaq: 26690.62,
    dow: 54036.93,
    us10y: 4.65,
    us2y: 4.19,
    dxy: 99.98,
    gold: 4400,
    silver: 63.5,
    brent: 83.55,
    wti: 77.2,
    btc: 64883,
    vix: 14.9
  },
  snapshot: [
    ["S&P 500", "7,757.64", "+3.6%", "Record closing high; second straight up week (+13.3% YTD)"],
    ["Nasdaq Composite", "26,690.62", "+5.2%", "Chip/AI bounce led; closed 26,691 against a 26,701 range ceiling"],
    ["Dow Jones Ind.", "54,036.93", "+3.0%", "Record territory; Financials logged 14 new highs"],
    ["US 10Y Treasury", "4.65%", "−10 bp", "Yields fell as hike fears eased; still +47 bp YTD"],
    ["US 2Y Treasury", "4.19%", "−9 bp", "2s10s at +46 bp, a touch steeper; +72 bp YTD"],
    ["Dollar (DXY)", "≈99.98", "~flat", "Near a seven-week low; Hedgeye TREND bearish 99.01–100.71"],
    ["Gold (spot)", "≈$4,399.7", "+7.1%", "Bullish breakout across TRADE and TREND — Hedgeye's #1 Quad3 long"],
    ["Silver (spot)", "≈$63.50", "+9.9%", "Outran gold on the week; still −10.1% YTD"],
    ["Brent crude", "≈$83.55", "−5.0%", "Fell on Hormuz de-escalation hopes, bounced Friday; +37.3% YTD"],
    ["WTI crude", "≈$77.2", "≈−5%", "Tracks Brent; weekly % approximate (see source note)"],
    ["Bitcoin", "≈$64,883", "+3.3%", "Bounced but still −25.9% YTD — 2026's standout risk-asset laggard"],
    ["VIX", "14.90", "−~7%", "Crushed from the ~20.7 late-July spike; near its 14.74 range floor"]
  ],
  themes: [
    {
      t: "① A weak jobs print, not strong growth, powered the melt-up",
      b: "July nonfarm payrolls fell 23,000 — the first outright decline in months and a big miss versus +83k consensus — with government payrolls down 53,000, wage growth cooling to +3.2% y/y (slowest since May 2021) and unemployment ticking to 4.1%. Equities rallied precisely because the data was soft.",
      r: "This is a defensive rally dressed as an offensive one. You are buying easing-hope, not accelerating earnings — own what wins when growth slows and policy softens (gold, quality software, healthcare), not deep-cyclical beta."
    },
    {
      t: "② The Fed debate flipped from hikes to holds",
      b: "Out of the end-July FOMC (held at 3.50–3.75% under Chair Kevin Warsh), futures had priced a real chance of a September HIKE on sticky inflation. The jobs miss gutted that: CME FedWatch moved to ~60% for a hold (from ~45% a day earlier and ~33% a week earlier), Kalshi put a hold at ~65%, and Polymarket even flirted with a 25 bp September cut (~51%).",
      r: "Front-end yields did the work — 2s −9 bp, 10s −10 bp. The pain trade is now a dovish surprise; lean toward a steeper curve and stay humble about the 'higher-for-longer re-hike' thesis that dominated a week ago."
    },
    {
      t: "③ Software and memory led; semiconductors were the fault line",
      b: "Microsoft (Azure +43% y/y, cloud past a $100B annual run-rate) and SanDisk (NAND upcycle) were rewarded; AMD beat (revenue +50%, data-center +107%) yet fell on a lofty bar, and Palantir posted +81% revenue growth but dropped on 'agentic-AI eats SaaS' fears. Nvidia rallied +12.9% into its 26 Aug print.",
      r: "Leadership is narrowing to software and memory, not blanket semis. Reaction, not results, is the tell — when blowouts sell off (AMD, PLTR), the bar is the risk. Respect single-name Signals over the 'AI' label."
    },
    {
      t: "④ Gold broke out while Bitcoin stayed broken",
      b: "Gold jumped +7.1% to ~$4,400 in a textbook bullish phase transition (higher-lows, repeated higher-highs, TRADE and TREND breakouts); silver ran +9.9%. Bitcoin bounced +3.3% but is still −25.9% YTD.",
      r: "In #Quad3 (growth slowing, inflation sticky), real-asset stores of value beat digital beta. Gold is Hedgeye's #1 Quad3 allocation; crypto's YTD drawdown says the marginal risk dollar is rotating toward hard assets."
    },
    {
      t: "⑤ Volatility got crushed — and that is the catch",
      b: "VIX fell to 14.9, off the ~20.7 spike of late July, as the tape melted up. Credit is priced for perfection: IG spreads ~77 bp (bottom decile since the GFC) and HY OAS ~2.7% (versus a 20-year ~4.9% average). Hedgeye flags 8 of 9 major Risk Ranges with more downside than upside.",
      r: "Cheap vol + record-tight credit + an extended tape = asymmetric downside. This is the level to buy protection, not to add unhedged length."
    },
    {
      t: "⑥ Beneath the calm, a Korean semiconductor unwind is a warning",
      b: "Even as US indices printed records, the KOSPI crash deepened to −31.3% and Hedgeye stayed short semis (DRAM) and South Korea (EWY). Global dispersion is widening beneath a placid US headline.",
      r: "Index records can mask violent single-market and single-factor drawdowns. Keep the book long-short within sectors (e.g. long software versus short semis) rather than betting the beta."
    }
  ],
  regime: {
    label: "#Quad3 (August) — growth slowing, inflation accelerating",
    note: "Hedgeye's favoured longs are Gold (its #1 Quad3 allocation), Healthcare (XLV), Software/Tech (XLK — explicitly not semis), REITs (XLRE) and Energy (XLE); the book is short Semis/DRAM and South Korea (EWY). Ranges below are Hedgeye's published immediate-term Risk Range™ Signals for 7 Aug 2026, sourced to the Early Look '#Quad3 Longs: Gold, Healthcare, etc.' (Keith McCullough) and the MOMO Tracker, both dated 7 Aug 2026.",
    ranges: [
      ["UST 10Y Yield", "4.59 – 4.74", "Bullish"],
      ["High Yield (HYG)", "78.95 – 79.70", "Bullish"],
      ["IG Corp Bonds (LQD)", "105.4 – 107.1", "Bearish"],
      ["S&P 500 (SPX)", "7,375 – 7,826", "Bullish"],
      ["Nasdaq Comp (COMPQ)", "24,441 – 26,701", "Bullish"],
      ["Russell 2000 (RUT)", "2,901 – 3,058", "Bullish"],
      ["Technology (XLK)", "174 – 190", "Bullish"],
      ["Health Care (XLV)", "160 – 168", "Bullish"],
      ["Real Estate (XLRE)", "44.40 – 46.20", "Bullish"],
      ["Volatility (VIX)", "14.74 – 17.88", "Bearish"],
      ["US Dollar (DXY)", "99.01 – 100.71", "Bearish"],
      ["WTI Crude", "72.63 – 82.60", "Bearish"],
      ["Natural Gas", "2.55 – 2.79", "Bearish"],
      ["Gold (spot)", "4,103 – 4,331", "Bullish"],
      ["Copper (spot)", "6.40 – 6.85", "Bullish"],
      ["Silver (spot)", "57 – 66", "Neutral"]
    ],
    where: "The TREND is bullish across US equity benchmarks, but the tape is stretched: the Nasdaq closed 26,691 against the very top of its range (26,701), the S&P (7,758) sits near its 7,826 ceiling, and Hedgeye's MOMO Tracker flags 8 of 9 Risk Ranges with downside greater than upside. Gold has broken above the top of its stated range (4,331) — confirming the phase transition — while VIX (bearish TREND) and the dollar (bearish) are cooperating with risk. Net: bullish TREND, poor immediate-term reward/risk at these levels. Buy the low end of ranges and trim the high end; with indices pinned to their ceilings, add through Quad3 winners (gold, software, healthcare, REITs) on pullbacks rather than chasing the benchmark here."
  },
  mag7: [
    { tk: "NVDA", n: "Nvidia", p: 223.96, wk: "+11.6%", wkPct: 11.6, cap: "≈$5.42T", pe: "34.1×" },
    { tk: "AAPL", n: "Apple", p: 313.33, wk: "+1.4%", wkPct: 1.4, cap: "≈$4.60T", pe: "35.8×" },
    { tk: "GOOGL", n: "Alphabet", p: 354.3, wk: "−0.5%", wkPct: -0.5, cap: "≈$4.29T", pe: "17.6×" },
    { tk: "MSFT", n: "Microsoft", p: 499.99, wk: "+7.6%", wkPct: 7.6, cap: "≈$3.71T", pe: "27.8×" },
    { tk: "AMZN", n: "Amazon", p: 274.48, wk: "+1.1%", wkPct: 1.1, cap: "≈$2.95T", pe: "21.8×" },
    { tk: "META", n: "Meta", p: 592.1, wk: "+6.4%", wkPct: 6.4, cap: "≈$1.51T", pe: "22.0×" },
    { tk: "TSLA", n: "Tesla", p: 328.58, wk: "+5.6%", wkPct: 5.6, cap: "≈$1.30T", pe: "≈279×" }
  ],
  mag7Read: "A software-and-silicon week. Microsoft (+11.1%) and Nvidia (+12.9%) did the heavy lifting, with Meta (+8.9%) and Tesla (+6.1%) joining the bounce; Apple (+2.8%) and Amazon (+3.6%) lagged. The YTD spread tells the real story — Nvidia (+20%), Amazon (+19%) and Apple (+15%) lead, while Meta (−10%) and Tesla (−27%) remain the group's problem children. Valuations are bifurcated: Alphabet screens cheapest at 17.6× and is the only 'value' name in the cohort; Tesla's ~279× keeps it in a category of one. Don't buy 'the Mag7' — buy the dispersion. The tape is rewarding earnings power (MSFT, NVDA) and re-rating a cheap compounder (GOOGL) while punishing story stocks (TSLA). Concentration risk is real: a handful of names still drive the bulk of index moves.",
  sectors: [
    { n:"Technology (XLK)", m:"≈+7.2%", pct:7.2, d:"Week's top sector, but led by software (MSFT +11.1%) and a chip bounce (NVDA +12.9%) — Hedgeye is long XLK and short semis/DRAM" },
    { n:"Materials (XLB)", m:"≈+4.8%", pct:4.8, d:"Second-best on the real-asset bid alongside gold's +7.1% breakout and silver's +9.9%" },
    { n:"Communication Svcs", m:"close behind", pct:4.0, d:"Third on the week (GOOGL +4.0%, META +8.9%); source gave ordering rather than a clean weekly %, so the bar is directional" },
    { n:"Financials (XLF)", m:"14 new highs", pct:3.0, d:"Largest count of new highs in the index as the curve steepened; source gave the count, not a %, so the bar is directional" },
    { n:"Real Estate (XLRE)", m:"rate-sensitive bid", pct:2.5, d:"Quad3 bond-proxy winner as yields fell; TREND bullish 44.40–46.20. Directional — no weekly % in source" },
    { n:"Energy (XLE)", m:"laggard", pct:-2.0, d:"Lagged as Brent fell ~5% on Hormuz de-escalation hopes; source gave direction only" }
  ],
  sectorsRead: "Technology (~+7.2%) and Materials (~+4.8%) led, with Communication Services close behind and Financials contributing the largest count of new highs (14). Energy lagged as crude fell. The rotation fits the regime: money is broadening into rate-sensitive and real-asset-linked groups (materials, miners, REITs) even as software carries tech. Hedgeye's read is that leadership is rotating within #Quad3 toward Gold, Healthcare, Software, REITs and Energy — and away from Semis (short DRAM) and South Korea (short EWY). Play tech through software, not chips; add REITs and healthcare as the growth-slowing/dovish mix broadens participation. Data note: the source reported a clean weekly % only for Technology and Materials; the remaining bars are directional from the source's rank ordering and new-high counts.",
  positioning: "Volatility collapsed alongside the melt-up: VIX ended at 14.9, down ~7% on the week and well below the ~20.7 late-July spike, with Hedgeye holding a bearish VIX TREND (14.74–17.88). Credit remains priced for perfection — IG OAS ≈77 bp (bottom-decile tight since the GFC) and HY OAS ≈2.7% (well inside the ~4.9% 20-year average), with new IG deals reportedly ~5x oversubscribed — and Hedgeye scores HYG a bullish TREND (78.95–79.70) versus a bearish LQD (105.4–107.1): spread and carry favoured over duration-heavy IG. Net read: calm is the commodity to buy. Sub-15 VIX and record-tight credit make hedges cheap into an extended tape and a data-dependent Fed — fund downside protection now, while it is on sale.",
  corporate: [
    "Microsoft: blowout quarter — Azure revenue +43% y/y and cloud past a $100B annual run-rate for the first time; shares extended the post-earnings surge to +11.1% on the week and the cleanest large-cap breakout of the tape.",
    "AMD: beat and raised (revenue +50%, data-center +107%) but shares fell on an elevated bar, briefly rattling semis — the week's clearest 'good results, bad reaction' tell.",
    "Palantir (PLTR): revenue ~$1.81B (+81% y/y), EPS +119% to ~$0.35 — a blowout that still sold off on 'agentic AI eats SaaS' fears.",
    "SanDisk (SNDK): blowout FQ4; shares soared on the NAND/memory upcycle.",
    "Shopify (SHOP): +16% on a 'monster quarter' — revenue +34% y/y to $3.58B, EPS $0.42 versus $0.40 estimated.",
    "Eli Lilly (LLY): surged on continued GLP-1 demand.",
    "Disney (DIS): raised its FY26 buyback target to ≥$9B and reiterated ~12% adjusted EPS growth, with parks strong. Uber and CVS also beat.",
    "Nvidia (NVDA): rallied +12.9% into its 26 August print — the next big AI catalyst. China H20 licences remain in case-by-case review (25% import tariff, 50% volume cap)."
  ],
  macro: [
    "US July payrolls (7 Aug): −23,000 versus +83k expected — the first outright drop in months; government payrolls −53k, unemployment 4.1%, average hourly earnings +3.2% y/y (slowest since May 2021). Net: the labour market is cracking — the dominant dovish catalyst of the week and the reason records printed.",
    "US ISM Manufacturing, July (1 Aug): headline at its highest since May 2022 (robust activity), but prices and inflation worries described as 'worse than the pandemic era.' Net: growth-hot, inflation-hotter — textbook #Quad3 tension.",
    "Fed policy: held at 3.50–3.75% at end-July under Chair Kevin Warsh after leaning toward a possible hike; post-jobs, hike odds collapsed. Net: the base case is a September hold, with a minority now pricing a cut.",
    "Rates market: 2Y −9 bp to 4.19%, 10Y −10 bp to 4.65%, leaving 2s10s at +46 bp. Net: bonds are trading the growth scare, not the inflation problem — which is exactly the tension a hot July CPI would expose."
  ],
  geo: [
    "Russia–Ukraine: Trump's ultimatum (50 days cut to 10) expired 8 Aug with no ceasefire. Envoy Steve Witkoff met Putin on 6 Aug, the US layered secondary sanctions on India over Russian-oil purchases (~7 Aug), and Trump held off further measures citing live talks. A Trump–Putin summit is expected soon (UAE floated as venue).",
    "The Graham 'Sanctioning Russia Act of 2026' — up to 100% tariffs on buyers of Russian energy — cleared an 86–12 procedural vote but stalled over its tariff-authority provisions.",
    "Middle East / oil: the Strait of Hormuz crisis (a legacy of the early-2026 US–Israel–Iran conflict) kept oil headline-driven. Iran and Oman are near a commercial-shipping framework and a US–Iran draft is circulating via Qatar, but Houthi attack claims (a Saudi tanker, 5 Aug) and fresh Hormuz tension gave crude a Friday bounce.",
    "Prediction markets: Polymarket ~51% for a 25 bp September Fed cut and ~89% for zero cuts across full-year 2026; Kalshi ~65% for a September hold. The crowd sees the hike risk as gone but is not yet convinced of an easing cycle.",
    "Read: oil de-escalation is now the disinflationary swing factor that would validate the dovish repricing, while Hormuz re-escalation is the one headline that puts the September hike back on the table. Two set-pieces loom in late August — a possible Trump–Putin summit and the Fed's Jackson Hole symposium, the next venue for Warsh to frame hold versus hike versus cut."
  ],
  ahead: {
    published: "Sunday 9 August 2026",
    weekOf: "Mon 10 August 2026",
    pdf: "reports/2026-08-07-ahead.pdf",
    pdfName: "Global Week Ahead_2026-08-09.pdf",
    tldr: "One number owns the week: US CPI (July), Wed 12 Aug, 20:30 GMT+8. The Fed sat at 3.50–3.75% on 29 Jul and had been openly debating hikes against a ~4% inflation handle — until Friday's shock −23k July payrolls (with −103k of prior revisions) flipped the tape, cutting September hike odds to 42% and driving the S&P to a record 7,757.64. A hot core CPI revives the hike scare and hits duration and high-multiple tech; a soft one supercharges the 'Fed forced to ease on a cracking labour market' trade. PPI (Thu) and Retail Sales (Fri) complete an inflation-then-consumer gauntlet, and CoreWeave (Tue) stress-tests the AI trade. Hedgeye's map: #Quad3 — long Gold and Healthcare, with indices pinned at the top of their ranges (8 of 9 show downside greater than upside).",
    setup: [
      ["S&P 500", "7,757.64", "+0.62%", "Record close; upper third of the 7,375–7,826 range"],
      ["Nasdaq Composite", "26,690.62", "+1.30%", "Pinned at the top of 24,441–26,701 — little room left"],
      ["Dow Jones Ind.", "54,036.93", "+0.28%", "+151.83 pts; record territory"],
      ["US 10Y yield", "≈4.60%", "−7 bps", "Eased on soft jobs; Hedgeye range 4.59–4.74 (bullish)"],
      ["US 2Y yield", "≈4.15%", "lower", "Front-end richened as Sept hike odds fell to 42%"],
      ["US Dollar (DXY)", "99.48", "−0.45%", "Soft; range 99.01–100.71 (bearish TREND)"],
      ["Gold (spot)", "≈$4,350", "+2.6%", "Above the 4,331 range top; Hedgeye's #1 Quad3 long"],
      ["Silver (spot)", "≈$64.3", "higher", "Range 57–66 (neutral) — near the top"],
      ["Brent crude", "≈$83.5", "firmer", "Hormuz risk premium; watch a reopening"],
      ["WTI crude", "≈$78.3", "firmer", "Range 72.63–82.60 (bearish TREND)"],
      ["Bitcoin", "≈$64,900", "+1.0%", "Below the 200-day (≈$70,965) — laggard versus metals"],
      ["VIX", "14.90", "−1.7%", "Near the floor of 14.74–17.88 — complacent into CPI"]
    ],
    setupNote: "Levels are Friday 7 Aug closes; risk ranges are Hedgeye's immediate-term signals from the 7 Aug Early Look. The 2Y is an estimate off the 5 Aug curve (2Y 4.18 / 10Y 4.63) adjusted for Friday's rally — confirm live before acting.",
    themes: [
      {
        t: "CPI Wednesday is the whole week",
        b: "Inflation has run sticky near a 4% handle (May CPI +4.2% y/y, a three-year high) even as the Fed holds. Core is the swing factor.",
        w: "A firm core (roughly ≥0.3% m/m) puts hike odds back on and pressures long-duration and high-multiple tech; a soft core sends gold, healthcare and rate-sensitives higher. This is the binary."
      },
      {
        t: "The jobs crack",
        b: "July payrolls fell −23k, the prior two months were cut a combined −103k, and unemployment ticked to 4.1%. Growth-slowing plus firm-inflation is textbook #Quad3.",
        w: "Thursday's jobless claims are the confirmation of a labour rollover. A stagflationary mix keeps Gold ranked above equity beta."
      },
      {
        t: "AI / neocloud stress test",
        b: "CoreWeave (Tue, post-close) is the tell for the whole AI-capex complex — revenue seen up ~111% to ≈$2.56B.",
        w: "Backlog, customer concentration and financing costs are the lines to read. Nasdaq sits at the very top of its 24,441–26,701 range, so a disappointment has room to bite; a clean beat validates the melt-up."
      },
      {
        t: "Gold's phase transition",
        b: "Hedgeye flags a textbook bullish breakout across TRADE and TREND — gold is its #1 back-tested #Quad3 allocation, +2.6% Friday to ≈$4,350.",
        w: "Whether spot holds the 4,103 range floor. Drivers: the Hormuz safe-haven bid and the real-yield path off CPI."
      },
      {
        t: "Oil and the Strait of Hormuz",
        b: "Brent ≈$83, WTI ≈$78 with a live geopolitical premium and reopening chatter.",
        w: "A Hormuz reopening deflates the inflation scare (dovish for the CPI read-through); re-escalation spikes crude and revives hike fear. Hedgeye WTI range 72.63–82.60, bearish TREND."
      },
      {
        t: "Positioning is stretched",
        b: "8 of 9 major Hedgeye risk ranges show more downside to the low than upside to the high, and VIX at 14.9 sits near its range floor.",
        w: "Complacency into a binary CPI. Optionality is cheap here — the tell to hedge is VIX pressing toward 17.9."
      }
    ],
    calendar: [
      ["Sun 9", "China CPI & PPI (Jul) 09:30 — consensus soft, confirm", "Deflation risk is the swing factor for China/HK risk appetite into Monday; PPI has been stuck in negative territory"],
      ["Mon 10", "No tier-1 US data. China Jul credit/aggregate-financing due in the 10–15 Aug window (date floats — confirm)", "Markets digest Friday's jobs shock and the weekend China inflation print"],
      ["Tue 11", "RBA decision + Statement on Monetary Policy 12:30; Germany ZEW expectations (Aug) 17:00; US NFIB small-business optimism (Jul) 18:00; CoreWeave post-close", "RBA hold at 4.35% expected — the SoMP forecasts drive AUD; NFIB is a labour/pricing-plans tell one day before CPI"],
      ["Wed 12", "UK CPI (Jul) 14:00; US CPI (Jul) 20:30 ★ main event; Cisco post-close (date to confirm)", "The fulcrum. Hot core → hike scare back on, duration and high-multiple tech hit; soft core → gold, healthcare and rate-sensitives rip. Recent trend ~4% y/y"],
      ["Thu 13", "UK Q2 GDP (prelim) 14:00; US PPI (Jul) 20:30; US initial jobless claims 20:30", "PPI confirms or refutes the CPI signal and feeds core-PCE nowcasts; claims are the highest-frequency labour tell post-payrolls"],
      ["Fri 14", "US Retail Sales (Jul) 20:30; Empire State mfg (Aug, tentative) 20:30; import prices (Jul) 20:30; Industrial Production (Jul) 21:15; U. Michigan sentiment (Aug prelim) 22:00", "The consumer read after CPI/PPI — spending resilience versus a cracking labour market. UMich inflation expectations can move the Fed narrative into Jackson Hole"]
    ],
    cbs: [
      ["RBA", "Tue 11 Aug, 12:30 — decision + quarterly Statement on Monetary Policy", "Hold at 4.35% expected", "Does the forecast set signal a cut later in 2026?"],
      ["US Federal Reserve", "No meeting — held 29 Jul at 3.50–3.75%; next FOMC 15–16 Sep", "On hold", "Fed speakers likely around CPI (schedule unconfirmed); July minutes ~19 Aug and Jackson Hole ~20–22 Aug loom"],
      ["RBNZ", "Next OCR ~20 Aug (next week, tentative)", "Not in this window", "On the radar for NZD"],
      ["Prediction markets", "Live pricing, not a meeting", "57% probability of zero Fed cuts in 2026", "September hike odds fell to 42% from 58% on the jobs miss — CPI is what re-prices this"]
    ],
    earnings: [
      ["Tue 11", "CoreWeave (CRWV) — post-close; Super Micro (SMCI) expected ~11 Aug (confirm)", "CRWV revenue seen up ~111% to ≈$2.56B — the single most important AI print of the week. Backlog, customer concentration and financing costs tell you whether the compute shortage is monetizable or just capex with extra steps"],
      ["Wed 12–Thu 13", "Cisco (CSCO) — date disputed (Aug 12–13 per feeds; some list Aug 19 — confirm IR)", "Street wants mid-teens revenue growth on AI-networking orders with gross margin guided down ~2 pts y/y; consensus ≈$16.8B revenue, ≈$1.17 EPS"],
      ["Thu 13–Fri 14", "Applied Materials (AMAT) and Deere (DE) — typically ~13–14 Aug, confirm dates", "AMAT frames foundry/memory capex; DE is the ag and industrial demand read"],
      ["Looking past the week", "Walmart, Home Depot, Target ~19–21 Aug", "Next week brings the consumer. This week is the AI-capex verdict — keep Nasdaq's 26,701 ceiling in mind on any miss"]
    ],
    catalysts: [
      "US July CPI, Wed 12 Aug 20:30 — the fulcrum of the week and the one print that re-prices the entire Fed path.",
      "CoreWeave earnings, Tue 11 Aug post-close — the AI-capex bellwether, with the Nasdaq sitting on its range ceiling.",
      "Wed 12 Aug is a loaded day: CPI coincides with a total solar eclipse (Greenland, Iceland, northern Spain, western Russia) and the Perseid peak. Markets care about the first.",
      "Trade policy: US–China detente and tariff-truce headlines remain a live tape-driver; any deadline or extension news moves risk and the CNH. Specifics fluid — watch the wire.",
      "Expiries: no monthly US equity OpEx this week (next is Fri 21 Aug), but weekly expiries cluster around CPI, adding intraday gamma.",
      "Looming: China Jul activity data (industrial production, retail sales, FAI) via the NBS press conference Mon 17 Aug; Gamescom 26–30 Aug."
    ],
    regime: {
      label: "#Quad3 — growth slowing, inflation accelerating",
      note: "Favoured longs: Gold (#1), Healthcare (XLV), Software/Tech (XLK — not Semis), REITs (XLRE) and Energy. Long/short discipline within sectors. Semis/DRAM and South Korea (EWY) are on the short side — the KOSPI has crashed −31.3%. Source: Hedgeye Early Look, '#Quad3 Longs: Gold, Healthcare, etc.,' Keith McCullough, 7 Aug 2026.",
      ranges: [
        ["UST 10Y yield", "4.59 – 4.74", "Bullish"],
        ["High Yield (HYG)", "78.95 – 79.70", "Bullish"],
        ["IG Corp (LQD)", "105.4 – 107.1", "Bearish"],
        ["S&P 500 (SPX)", "7,375 – 7,826", "Bullish"],
        ["Nasdaq Comp (COMPQ)", "24,441 – 26,701", "Bullish"],
        ["Russell 2000 (RUT)", "2,901 – 3,058", "Bullish"],
        ["Tech (XLK)", "174 – 190", "Bullish"],
        ["Healthcare (XLV)", "160 – 168", "Bullish"],
        ["REITs (XLRE)", "44.40 – 46.20", "Bullish"],
        ["Volatility (VIX)", "14.74 – 17.88", "Bearish"],
        ["US Dollar (DXY)", "99.01 – 100.71", "Bearish"],
        ["WTI Crude", "72.63 – 82.60", "Bearish"],
        ["Natural Gas", "2.55 – 2.79", "Bearish"],
        ["Gold (spot)", "4,103 – 4,331", "Bullish"],
        ["Copper (spot)", "6.40 – 6.85", "Bullish"],
        ["Silver (spot)", "57 – 66", "Neutral"]
      ],
      where: "The S&P (7,757.64) sits in the upper third of its range; the Nasdaq (26,690.62) is essentially at the ceiling (26,701); VIX (14.9) is near its floor; gold is at or above its top; the dollar is near its floor. That is a fully-invested, complacent tape. What would change the regime: a hot CPI that pushes the 10Y through 4.74 and revives hike bets would pressure the #Quad3 longs and squeeze the dollar higher; a sharper growth scare (claims spiking, a CoreWeave miss) tips the model toward #Quad4 — favouring Treasuries, USD and gold over equity beta. Until then the signal is: own the range, respect the ceiling. Tells to watch: VIX 17.9 = get defensive; UST 10Y 4.74 = duration pain; Gold 4,100 = trend support."
    },
    positioning: "Crowded: Mag7 and AI-capex (CoreWeave is the test) plus long gold and precious. Momentum is stretched — silver sits neutral at the top of 57–66. Stretched: indices at the top of their ranges (8 of 9 show downside greater than upside) and VIX at 14.9 near lows, which makes hedges cheap. The KOSPI's −31.3% crash is the reminder of how violent a single-market or semis unwind can be. Credit: HYG bullish (no stress yet), LQD bearish (duration and IG heavier) — high-yield spreads are the tell if CPI runs hot. Rates: 10Y ≈4.60% inside a bullish 4.59–4.74 (biased higher on yield), 2Y ≈4.15%, curve ~+45 bps; 4.74 is the pain line. FX: DXY 99.48 in a bearish range, EUR/USD ≈1.156 — a hot CPI is the obvious squeeze catalyst, and AUD keys off the RBA/SoMP.",
    geo: [
      "Iran / Strait of Hormuz: the oil swing factor — reopening chatter versus re-escalation runs straight into the CPI inflation channel.",
      "Russia / Ukraine: the Trump administration is pushing a peace-deal track (summit chatter), having shifted off a ceasefire-first stance. Meaningful de-escalation would pressure oil and gold and add a risk-on impulse.",
      "US–China trade: tariff-truce and detente talks remain a live catalyst; a deadline or extension moves risk and the CNH.",
      "Odds: Polymarket ~57% for zero Fed cuts in 2026; September hike odds ~42%, down from 58% pre-jobs. South Korea (KOSPI −31.3%) is the contagion name to watch."
    ],
    asia: "Asia should open digesting two crosscurrents: a tailwind from Friday's Wall Street records and a softer dollar (helpful for EM/Asia FX and the reflation-hedge trade), against the drag from the weekend China CPI/PPI if deflation persists. Korea stays the fragile spot after the KOSPI's −31.3% crash and ongoing semis pressure; a firmer yen (weak DXY) is a mild headwind for Japanese exporters. Net: a mixed-to-firm open, with the China inflation print and the KOSPI as the intraday tells, precious-metals names bid, and AUD in focus into Tuesday's RBA. Respect Nasdaq's 26,701 ceiling on any gap-up.",
    beyond: [
      "Total solar eclipse — Wed 12 Aug. Totality crosses Greenland, Iceland and northern Spain (with western Russia) — the first total eclipse over Iceland and mainland Spain in generations. Same day as CPI; a different kind of shadow.",
      "Perseid meteor shower — peak 12–13 Aug, near a New Moon this year, so dark-sky viewing is excellent midnight-to-dawn.",
      "Gamescom — 26–30 Aug (Opening Night Live 25 Aug), Cologne. Exhibitor space sold out for the first time ever; a forward marker for the games complex.",
      "Space: SpaceX's Falcon 9 Starlink cadence continues through the week — check live schedules for exact windows."
    ]
  },
  recall: {
    window: "Mon 3 Aug – Sun 9 Aug 2026",
    readings: [
      { t:"Chamath's AI investing guide - August 2026", d:"3 Aug", g:"Economics/Investing", u:"", x:"As of August 2026, Chamath Palihapitiya outlines his investment strategy regarding the artificial intelligence sector, categorizing the industry into six distinct layers. LPS (Land Power Shell) Palihapitiya identifies this as the most obvious and fastest path to achieving cash-on-cash returns. He anticipates that energized land will significantly increase in value as data centers face increasing pushback. Palihapitiya and his partner, Anita Vlall…" },
      { t:"Can America retrain workers before AI leaves them behind?", d:"3 Aug", g:"Economics", u:"", x:"AI Displacement Risks and Economic Impact Kimberly Brady, a 53-year-old Californian, illustrates the difficulties of career transition; despite self-teaching opticianry and passing board exams, she could not secure employment in the field due to a lack of hands-on experience. Goldman Sachs estimates that approximately 10 million jobs could be displaced by AI over the next decade, with routine office work and entry-level white-collar positions fac…" }
    ],
    cards: [
      { t:"[Untitled PDF — title characters lost on import]", g:"Economics/Commodities", u:"" }
    ]
  }
},
{
  id: "2026-08-14",
  weekEnding: "Friday 14 August 2026",
  published: "Saturday 15 August 2026",
  pdf: "reports/2026-08-14.pdf",
  pdfName: "Global Week in Review_2026-08-15.pdf",
  tldr: "The week the S&P printed a fresh record above 7,800 — then faded Friday. An in-line July CPI (+0.1% m/m, 3.4% y/y headline, core 2.5%) cooled the hike scare and set off a textbook rotation: the Russell 2000 hit a record (+1.1%), energy led sectors (~+6% WTD) and gold logged a second straight weekly gain to ~$4,385, while AI bellwethers Cisco and Applied Materials beat and still sold off. The S&P closed 7,785.76 (+0.4%, a third straight weekly gain) after a record 7,798.99 on Thursday; the Dow lagged (−0.6%). Beneath VIX ~14.3 sat a stagflation whiff — hot core PPI (+0.4% m/m, +4.7% y/y), retail sales −0.6% (worst since May 2025) and UMich sentiment collapsing to ~51 — which kept a hawkish, Warsh-led Fed live and capped the dollar. Nvidia fell ~3.5% Friday and ceded the most-valuable crown back to Apple. Hedgeye's tell: a Quad Shift — monthly Quad count 3-1-2, tilting out of July's brutal #Quad4 liquidation toward Quad 1/2 — with the book rotating into small caps, software and quantum and out of rate-sensitives. Own the broadening; respect that SPX sits in the upper half of its range.",
  metrics: {
    spx: 7785.76,
    nasdaq: 26729.16,
    dow: 53732.41,
    us10y: 4.68,
    us2y: 4.17,
    dxy: 99.6,
    gold: 4385,
    silver: 65,
    brent: 87,
    wti: 81,
    btc: 62700,
    vix: 14.3
  },
  snapshot: [
    ["S&P 500", "7,785.76", "+0.4%", "3rd straight weekly gain; record close 7,798.99 Thu before the Friday fade. YTD ~+12–13%"],
    ["Nasdaq Composite", "26,729.16", "+0.1%", "Also a 3rd straight weekly win; megacap tech wobbled late"],
    ["Dow Jones Ind.", "53,732.41", "−0.6%", "Laggard as defensives and industrials came in mixed"],
    ["Russell 2000", "≈3,060", "+1.1%", "Fresh record; 4th up day; outpacing the S&P YTD — the week's tell"],
    ["US 10Y Treasury", "≈4.68%", "≈+3 bp", "Dipped on the in-line CPI, backed up Friday on soft retail sales and oil"],
    ["US 2Y Treasury", "≈4.17%", "≈flat", "Short end 'broke TRADE' on the dovish CPI read. 2s10s ≈+52 bp"],
    ["Dollar (DXY)", "≈99.6", "≈flat", "Popped above 100 midweek, reversed lower on weak US data"],
    ["Gold (spot)", "≈$4,385", "+1–2%", "Second straight weekly gain; near a 10-week high"],
    ["Silver (spot)", "≈$65", "+>2%", "Extends the prior week's ~+11%; industrial plus haven bid"],
    ["Brent crude", "≈$87", "≈+4%", "Strait of Hormuz closure; pared from +6.5% midweek"],
    ["WTI crude", "≈$81", "≈+4%", "US threat of an indefinite Iran blockade; IEA stockpile warning"],
    ["Bitcoin", "≈$62,700", "≈−4%", "ETF outflows; ~−49% below the Oct-2025 record. ETH ≈$1,875"],
    ["VIX", "≈14.3", "low", "Sub-15 all week; complacent, near the floor of its range"]
  ],
  themes: [
    {
      t: "① Records, then a Friday fade — a third straight weekly gain",
      b: "The S&P 500 cleared 7,800 for the first time and closed at a record 7,798.99 on Thursday, then eased ~0.2% Friday to 7,785.76. It still booked a third consecutive weekly gain (~+0.4%), as did the Nasdaq; the Dow lagged (~−0.6%). The Friday wobble tracked a soft consumer-sentiment print rather than anything structural.",
      r: "The melt-up is intact but tiring. With SPX in the upper half of Hedgeye's 7,606–7,861 risk range, this is a trim-and-trade tape, not a chase-it tape — buy dips toward the low end."
    },
    {
      t: "② An in-line CPI killed the 'hike' scare — for now",
      b: "July CPI rose just 0.1% m/m and held at 3.4% y/y (core 2.5% y/y), read by macro tourists as dovish. That trimmed near-term odds of a Fed hike and lit the early-week risk-on tone. Crucially, the short end (2Y) 'broke TRADE' on the print, greenlighting a rotation toward growth and away from rate-sensitivity.",
      r: "The pain trade was up. The signal that mattered was the front end breaking lower — it is the permission slip for Quad 1/2 leadership (small caps, software) over duration-sensitive defensives."
    },
    {
      t: "③ Rotation is the story — small caps, value and energy over megacap tech",
      b: "The Russell 2000 hit a fresh record and rose ~1.1% on the week, its fourth straight up session, outpacing the S&P year-to-date. Energy led sectors (~+6% week-to-date through Thursday), with healthcare and financials also higher, while technology/software and semis lagged.",
      r: "Broadening is healthy — it lengthens the cycle rather than ending it. Lean into RUT, equal-weight (RSP), energy and healthcare; fade the crowded, priced-for-perfection semis."
    },
    {
      t: "④ AI is priced for perfection — beats aren't enough",
      b: "Cisco beat and guided FY27 well above consensus yet fell ~4% after hours; Applied Materials posted revenue up ~23% y/y and still dropped ~5%. Both are textbook 'good, but not good enough' reactions as the AI-capex complex digests a very high bar. The PHLX Semiconductor Index sits ~19% off its highs.",
      r: "Own the software layer (IGV) over hardware and semis into this digestion. Hedgeye covered its Semis (DRAM) short but is expressing AI through software and quantum (QTUM), not the crowded chip names."
    },
    {
      t: "⑤ A stagflation whiff — sticky prices, a cracking consumer",
      b: "Against the cool headline CPI sat a hot core PPI (+0.4% m/m, +4.7% y/y), a −0.6% drop in July retail sales (worst since May 2025), and a University of Michigan sentiment plunge to ~51 from 55.2. Firm prices plus a weakening consumer is the classic stagflation cocktail — and it capped the dollar.",
      r: "Own gold, energy and quality. A Fed that cannot cut into sticky inflation, facing softening growth, caps multiple expansion — favour real assets and cash-generative compounders over long-duration hope."
    },
    {
      t: "⑥ Nvidia cedes the crown to Apple",
      b: "Nvidia fell ~3.5% Friday, dropping its market value back below Apple's and handing Apple the 'most valuable company' title again. Apple is up ~22% YTD, the Mag7 leader; Nvidia only ~+7%. Even as breadth improves below the surface, the very top of the tape is reshuffling.",
      r: "Single-name concentration cuts both ways. Watch Nvidia's immediate-term TREND: a break lower there is a bigger index risk than the healthy rotation beneath it. Apple's re-leadership is defensive quality doing its job."
    }
  ],
  regime: {
    label: "Quad Shift — monthly Quad count 3-1-2, tilting toward Quad 1/2",
    note: "A #Quad3 base (growth slowing, inflation sticky) rotating toward Quad 1 and Quad 2 (growth firming, inflation cooling), coming out of July's punishing #Quad4 liquidation — the worst month for fundamental long/short in four years. The book shifted to smaller caps and growth over rate-sensitivity: added QTUM (quantum) and IGV (software); sold XLRE (REITs) and IAK (insurance); covered South Korea (EWY) and Semis (DRAM) shorts, carrying zero shorts in Real-Time Alerts from Monday. Source: Hedgeye Early Look, 'Quad Shift = ATHs', Keith McCullough, Friday 14 August 2026.",
    ranges: [
      ["UST 10Y Yield", "4.60 – 4.74", "Bullish"],
      ["High Yield (HYG)", "79.43 – 79.98", "Bullish"],
      ["IG Corp Bonds (LQD)", "105.7 – 106.9", "Bearish"],
      ["S&P 500 (SPX)", "7,606 – 7,861", "Bullish"],
      ["Nasdaq Comp (COMPQ)", "25,908 – 26,992", "Bullish"],
      ["Russell 2000 (RUT)", "2,987 – 3,075", "Bullish"],
      ["Health Care (XLV)", "164 – 172", "Bullish"],
      ["S&P Equal Weight (RSP)", "219.00 – 225.00", "Bullish"],
      ["Tech-Software (IGV)", "99.00 – 110.00", "Bullish"],
      ["Volatility (VIX)", "14.05 – 16.43", "Bearish"],
      ["US Dollar (DXY)", "99.25 – 100.13", "Bearish"],
      ["WTI Crude", "74.36 – 85.99", "Neutral"],
      ["Natural Gas", "2.55 – 2.85", "Bearish"],
      ["Gold (spot)", "4,201 – 4,524", "Bullish"],
      ["Copper (spot)", "6.46 – 6.76", "Bullish"],
      ["Silver (spot)", "58 – 68", "Neutral"]
    ],
    where: "SPX closed at 7,785.76 — in the upper half of the 7,606–7,861 bullish range, closer to the top than the bottom, which argues for trimming and trading rather than chasing. The Russell 2000, equal-weight (RSP) and software (IGV) are all bullish TREND, consistent with the small-cap and growth tilt; gold and copper are bullish, silver neutral. VIX is bearish (vol biased lower) but pinned near the 14-handle floor, and the dollar is bearish near the low end of its band. In short: the machine reads the same Quad shift Hedgeye does — own the broadening, but respect that several signals are stretched to the upside of their ranges. The regime breaks if the 2Y reclaims its TRADE line, the dollar breaks above ~100.1, or VIX recaptures ~16.4."
  },
  mag7: [
    { tk: "NVDA", n: "Nvidia", p: 225.16, wk: "+0.5%", wkPct: 0.5, cap: "≈$4.9T", pe: "≈34×" },
    { tk: "AAPL", n: "Apple", p: 305.93, wk: "−2.4%", wkPct: -2.4, cap: "≈$4.6T", pe: "≈34×" },
    { tk: "GOOGL", n: "Alphabet", p: 345.9, wk: "−2.4%", wkPct: -2.4, cap: "≈$4.1T", pe: "≈26×" },
    { tk: "MSFT", n: "Microsoft", p: 495.4, wk: "−0.9%", wkPct: -0.9, cap: "≈$3.7T", pe: "≈36×" },
    { tk: "AMZN", n: "Amazon", p: 262.65, wk: "−4.3%", wkPct: -4.3, cap: "≈$2.8T", pe: "≈38×" },
    { tk: "META", n: "Meta", p: 589.85, wk: "−0.4%", wkPct: -0.4, cap: "≈$1.5T", pe: "≈27×" },
    { tk: "TSLA", n: "Tesla", p: 342.27, wk: "+4.2%", wkPct: 4.2, cap: "≈$1.1T", pe: "high" }
  ],
  mag7Read: "The megacap complex is reshuffling at the very top even as leadership broadens beneath it. Apple's defensive quality reclaimed the most-valuable crown (+~22% YTD, the Mag7 leader) as Nvidia gave back ground (−3.5% Friday, only ~+7% YTD) and the chip trade cooled. Hedgeye's momentum work has MSFT, AMZN and NVDA bullish on TREND but Tesla still bearish. Combined Mag7 market cap is ~$23.7T (~33.9% of the S&P 500), yet the group is only ~+5% YTD versus a record-setting Russell 2000 — the message is clear: the index no longer needs the generals to advance. Data note: prices are actual regular-session closes for the Friday shown and the week column is a true Friday-to-Friday close-over-close move, both taken from the market-data feed (EOD series) rather than from the source report, which could not verify them. This replaces the single-day Friday moves previously shown. Market caps and P/E figures are approximate and should be confirmed live.",
  sectors: [
    { n:"Energy (XLE)", m:"≈+6% WTD", pct:6.0, d:"Week's standout on the Hormuz oil bid — Brent ~$87, WTI ~$81, each up roughly 4% on the week" },
    { n:"Russell 2000 (small caps)", m:"+1.1%", pct:1.1, d:"Fresh record and a 4th straight up session; Hedgeye's 'quietly becoming the Quad 1 leadership trade'" },
    { n:"Health Care (XLV)", m:"higher", pct:2.0, d:"Quad 1/2 rotation beneficiary; bullish TREND 164–172. Directional — no clean weekly % in source" },
    { n:"Financials", m:"higher", pct:1.5, d:"Participated in the value and broadening trade as the curve held ~+52 bp. Directional from source ordering" },
    { n:"Technology / Software", m:"lagged early", pct:-0.5, d:"Software (IGV) finished strongly Friday (+3.7%) but tech lagged on the week as megacap AI gave back gains" },
    { n:"Semiconductors", m:"laggard", pct:-2.0, d:"The week's weak spot — SOX ~19% off highs after the Cisco and Applied Materials beat-and-fade reactions" }
  ],
  sectorsRead: "Energy was the standout (~+6% week-to-date through Thursday on the Hormuz oil bid), with healthcare and financials also higher, while small caps stole the show — the Russell 2000 hit a record and rose ~1.1%. Technology and software lagged early and semiconductors were the clear laggard as megacap AI names gave back gains after the Cisco and Applied Materials reactions. Hedgeye flags small caps and dividend stocks 'quietly becoming the Quad 1 leadership trade': leadership is rotating out of megacap tech and into small caps, value, energy, healthcare and software (IGV) as the growth expression. Position for the broadening — RSP, RUT, XLV and energy. Data note: the source gave a clean weekly figure only for the Russell 2000 and a week-to-date figure for energy; the remaining bars are directional from the source's rank ordering.",
  positioning: "Volatility stayed on the floor: the VIX held sub-15 all week (~14.3 Friday), inside Hedgeye's 14.05–16.43 bearish range — vol biased lower, but with little cushion left. Credit corroborated the calm: US high-yield spreads remain very tight (ICE BofA HY OAS ~271 bp) and investment grade is similarly compressed, with Hedgeye keeping HYG bullish (79.43–79.98) while flagging LQD bearish (105.7–106.9) — spread and carry favoured over duration. The corporate buyback window is open, a mechanical bid under the tape. Net read: positioning is benign bordering on complacent, with near-zero fear priced in. That is fuel for a grind-higher, but it makes the reaction function to a hawkish Fed surprise or an energy shock asymmetric. Cheap hedges make sense with VIX pinned at the 14-handle. The weak link is duration, not high yield — if the long end backs up on sticky inflation, LQD is where the pain shows first.",
  corporate: [
    "Cisco (CSCO): beat FQ4 and guided FY27 well above consensus ($72.2–73.4B revenue; EPS $5.05–5.11) — yet shares fell ~4% after hours. A textbook beat-and-fade on a high bar.",
    "Applied Materials (AMAT): revenue up ~23% y/y (~$9B) with solid EPS, but the stock dropped ~5%. AI-capex names are priced for perfection.",
    "Oracle (ORCL): ripped +5.4% midweek into Hedgeye's momentum 'outbucket' — a crowded long showing froth.",
    "Other reporters: Super Micro, Lumentum, Coherent, Cardinal Health, Simon Property and Tapestry, plus AI-adjacent Cerebras and Nebius — AI optics and compute stayed in focus.",
    "Single-stock movers: National Vision −6% on weak guidance; AECOM −6% with revenue ~−14% y/y.",
    "Nvidia (NVDA): fell ~3.5% Friday, ceding the most-valuable-company crown back to Apple; next earnings late August (Q2 FY27) is the tape's next big AI catalyst.",
    "On deck: Deere (DE) reports Q3 on 20 August (consensus EPS ~$4.85) — a read on the industrial and ag economy, alongside the Home Depot / Target / Walmart retail gauntlet."
  ],
  macro: [
    "US July CPI (12 Aug): +0.1% m/m; 3.4% y/y headline, core +0.2% m/m and 2.5% y/y — in line. Net: the in-line print trimmed near-term hike odds and was the week's risk-on fuel, with the 2Y breaking TRADE on the read.",
    "US July PPI (13 Aug): final demand flat m/m but +4.7% y/y, with core +0.4% m/m (hot). Net: pipeline inflation is still sticky — it caps how dovish the CPI read can really be.",
    "US July retail sales (14 Aug): −0.6% m/m, the steepest drop since May 2025. Net: the consumer is cracking — the growth side of the stagflation whiff, and Friday's fade catalyst.",
    "UMich sentiment (Aug prelim, 14 Aug): ~51 from 55.2 (~−8%), with rising inflation expectations. Net: confidence down, inflation fears up — a stagflationary tell that spooked Friday's tape.",
    "Labour (prior report): −23k jobs, with participation the lowest since 1976 ex-pandemic. Net: soft labour supports 'no hike', but weak supply plus soft demand is not the good kind of cooling.",
    "Europe: Eurozone Q2 GDP +0.4% q/q and +1.0% y/y (14 Aug); UK Q2 GDP +0.4% q/q and +1.2% y/y (13 Aug, a beat). Net: Europe is sluggish-but-positive and the UK beat supports sterling — neither forces a central-bank move.",
    "China: July industrial production, retail sales and FAI land 17 August; the July services PMI had slipped to 49.3 (contraction) and passenger-vehicle retail fell ~13% m/m. Net: soft China demand is a crosswind for industrial commodities."
  ],
  geo: [
    "Middle East / Strait of Hormuz (the dominant driver): the strait has been effectively closed by Iran since late February 2026. This week Iran signalled it was near a management deal with Oman on shipping routes but demanded US concessions to reopen, while the IEA warned that reopening is 'more pressing' as the world burns through stockpiles. Oil held its risk premium (Brent ~$87, WTI ~$81).",
    "Tariffs and trade: the 25% US tariff on India — plus a penalty tied to Russian energy and defence ties, effective 1 August — remained a live irritant after five rounds of talks produced no deal; Treasury warned tariffs 'could go up'. Section 301 excess-capacity probes continued.",
    "Prediction markets: Polymarket priced a September Fed hike at roughly 32–55% (base case a pause) and ~57% odds of zero cuts across all of 2026; Kalshi had ~92% odds on the 29 July hold, which occurred. Ukraine ceasefire markets stayed low.",
    "Read: the energy risk premium is structural, not a headline spike — keep the oil and defence hedge on. Tariffs are a stagflation vector, a tax on growth and a push on prices, reinforcing the 'Fed cannot cut' setup the rates market is pricing.",
    "Next catalysts: the July FOMC minutes on Wednesday, then Jackson Hole on 27–29 August ('Financial Innovation: Implications for Payments and Policy') — expected to feature Chair Kevin Warsh's first symposium keynote."
  ],
  ahead: {
    published: "Sunday 16 August 2026",
    weekOf: "Mon 17 August 2026",
    pdf: "reports/2026-08-14-ahead.pdf",
    pdfName: "Global Week Ahead_2026-08-16.pdf",
    tldr: "A quiet-calendar week that is really a set-up week. The two definers: the FOMC July minutes (Thu ~2:00am GMT+8) — parsed for how live a rate hike really is — and the US retail earnings gauntlet (Home Depot, Target, Lowe's, TJX, Walmart, Deere) for the real read on the consumer and tariff pass-through. Around them: China's LPR (Thu), global flash PMIs (Fri) and August options expiry (Fri). All of it is pre-positioning into Jackson Hole (27–29 Aug) — Warsh's first as Chair. Cooler July inflation (CPI 3.4% y/y from 3.5%, core 2.5%; PPI 4.7% from 5.5%) plus soft retail sales pushed the first potential Fed hike into 2027 and knocked September hike odds to roughly 40%. With inflation still sticky above 3%, the debate is hike-vs-hold, not cut. The tape sits at record highs on a Hedgeye Quad shift toward growth, so the tell is whether the soft-landing rotation holds or sticky inflation reasserts.",
    setup: [
      ["S&P 500", "7,786", "−0.2% Fri", "3rd straight weekly gain; record high hit Thursday"],
      ["Nasdaq Composite", "26,729", "−0.3% Fri", "Software and quantum led the week"],
      ["Dow Jones Ind.", "53,732", "−0.2% Fri", "Range-bound near highs"],
      ["US 10Y yield", "4.65%", "down on wk", "Soft CPI/PPI bull-flattened the curve; range 4.60–4.74"],
      ["US 2Y yield", "≈4.08%", "sub-4.10%", "Lowest since 30 Jun as Fed-hike bets faded"],
      ["Dollar (DXY)", "99.9", "≈flat wk (−0.4% Fri)", "Soft data capped the dollar; bearish 99.25–100.13"],
      ["Gold (spot)", "$4,375", "near records", "Real-yield plus weak-USD bid; range 4,201–4,524"],
      ["Silver (spot)", "$64.9", "+0.8% Fri", "Holding the breakout; neutral 58–68"],
      ["Brent crude", "$87.5", "firm", "Supply risk premium building on Hormuz"],
      ["WTI crude", "$81.3", "+4% wk", "Neutral range 74.36–85.99"],
      ["Bitcoin", "≈$63,400", "soft", "Trend signals bearish; spot in a stalemate, ETF flows thin"],
      ["VIX", "14.6", "low", "Low-vol regime, well below 20; range 14.05–16.43"]
    ],
    setupNote: "Levels are Friday 14 August cash-session closes; risk ranges are Hedgeye's immediate-term signals from the 14 August Early Look. Confirm live prices and scheduled times before acting.",
    themes: [
      {
        t: "The Quad shift: growth and small caps take the baton",
        b: "July was the worst month for fundamental long/short in four years as a #Quad4 liquidation torched consensus. August has flipped: Hedgeye's monthly Quad count is 3-1-2, rotating toward Quad 1/2. Leadership moved to software (IGV +3.7% Friday), quantum (QTUM) and — quietly — small caps and dividend payers, while rate-sensitives (REITs, insurers) were sold.",
        w: "Breadth confirmation. Equal-weight (RSP) and the Russell 2000 leading is the soft-landing tell; if leadership narrows back to megacap only, the rotation is a head-fake."
      },
      {
        t: "FOMC July minutes — how live is a hike?",
        b: "The Fed held on 29 July; minutes drop Wednesday 2:00pm ET (Thursday ~2:00am GMT+8). With headline CPI at 3.4%, the market wants the dissent count and any language framing a hike as the base case for later in 2026.",
        w: "The 2Y yield (sub-4.10 and falling) and DXY. A hawkish read revives the front end; a 2Y bounce plus a dollar pop would pressure the small-cap and gold trade."
      },
      {
        t: "The US retail earnings gauntlet",
        b: "Home Depot (Tue), Target, Lowe's and TJX (Wed), then Walmart, Deere and Ross (Thu) headline the last big week of Q2 season. The read-through is the health of the US consumer and how much tariff cost is landing in margins versus prices.",
        w: "Guidance and gross-margin commentary over headline EPS. Walmart is the macro tell; Home Depot and Lowe's gauge housing and the higher-for-longer rate pinch."
      },
      {
        t: "Jackson Hole pre-positioning",
        b: "The symposium (27–29 Aug, theme 'Financial Innovation: Payments & Policy') lands next week, but vol gets built this week. It is Kevin Warsh's first Jackson Hole as Chair, with the keynote on Friday 28 August.",
        w: "Gold, front-end rates and the dollar into month-end; positioning tends to de-risk ahead of the keynote."
      },
      {
        t: "Global flash PMIs — the growth pulse",
        b: "Friday brings August flash PMIs across Japan, the Eurozone, the UK and the US. The US composite hit an 8-month high of 54.5 in July; the question is whether that mid-year acceleration is sustained or fading.",
        w: "Cyclicals and EUR/USD. A firm US print against soft Europe reasserts US exceptionalism and the dollar."
      },
      {
        t: "China stimulus and activity watch",
        b: "China's July data (industrial production, retail sales, FAI) is soft — early prints show IP ~+5.7% and retail ~+3.7%, both below consensus, with CPI just +0.5% and PPI −3.5% as deflation persists. The LPR decision (Thu) is expected unchanged at 3.0% / 3.5%.",
        w: "Copper (Hedgeye bullish), AUD and China proxies (HSI, FXI) for any stimulus signal — deflation keeps the pressure on Beijing."
      }
    ],
    calendar: [
      ["Mon 17", "Japan Q2 GDP (prelim, ~7:50am); China July activity — IP, retail sales, FAI, house prices (~10:00am, confirm exact timing)", "First read on Japanese growth momentum, key for the BOJ hike debate; China's soft prints are already flagged and can cap the Asia open"],
      ["Tue 18", "UK jobs and unemployment (~2:00pm); Eurozone ZEW sentiment (~5:00pm); US housing starts and building permits (~8:30pm)", "The housing pulse under higher-for-longer rates, plus a European sentiment check"],
      ["Wed 19", "UK July CPI (~2:00pm); US FOMC minutes (2:00pm ET → Thu ~2:00am GMT+8); RBA speaker (Hauser)", "The BoE's sticky-services problem, then the week's policy centrepiece — read the minutes for dissents and hike-conditionality"],
      ["Thu 20", "China LPR (~9:15am, expected unchanged); Australia July jobs (~9:30am); FOMC minutes land ~2:00am; US jobless claims and Philly Fed (~8:30pm); US Leading Index (~10:00pm)", "PBOC easing pressure versus targeted tools; Australian jobs shape September RBA pricing; claims are the high-frequency labour tell"],
      ["Fri 21", "Japan CPI (~7:30am) and flash PMIs (~8:30am); UK retail sales (~2:00pm); Eurozone flash PMIs (~4:00pm); UK flash PMIs (~4:30pm); US flash PMIs (~9:45pm); August equity options expiry", "The global growth pulse in one session, with monthly OpEx able to pin or unpin index levels into month-end"]
    ],
    cbs: [
      ["US Federal Reserve", "July FOMC minutes — Wed 19 Aug (Thu ~2:00am GMT+8); Fed held at the 29 Jul meeting", "On hold; ~40% odds of a September hike and ~23bp of tightening priced by year-end", "How live is a hike? Read for dissents and hike-conditionality — the first hike is now largely a 2027 story after soft data"],
      ["PBOC", "Loan Prime Rate — Thu 20 Aug", "Unchanged: 1Y 3.0%, 5Y 3.5%", "Persistent deflation (CPI +0.5%, PPI −3.5%) keeps easing pressure alive, but the PBOC has favoured targeted tools over LPR cuts"],
      ["Kansas City Fed", "Jackson Hole — 27–29 Aug (next week); keynote Fri 28 Aug", "Not in this window", "Warsh's first symposium as Chair; the real event risk into month-end, and vol gets built for it this week"],
      ["RBA", "Held at 4.35% in August; Australia jobs Thu, Hauser speaks Wed", "On hold", "Do the jobs data and speakers shift September pricing?"]
    ],
    earnings: [
      ["Mon 17", "Fabrinet (FN)", "The optical and AI supply-chain read to open the week"],
      ["Tue 18", "Home Depot (HD), Toll Brothers (TOL), Baidu (BIDU)", "Housing demand under higher-for-longer rates, plus China search and AI"],
      ["Wed 19", "Target (TGT), Lowe's (LOW), TJX (TJX), Analog Devices (ADI)", "Discretionary versus off-price divergence; ADI frames analog and industrial chip demand"],
      ["Thu 20", "Walmart (WMT), Deere (DE), Alibaba (BABA), NetEase (NTES), Ross Stores (ROST)", "WMT is the macro consumer tell; DE gauges the ag and industrial cycle. Margins and guidance matter more than headline beats"],
      ["Fri 21", "BJ's Wholesale (BJ)", "Closes out the last heavy week of Q2 season. Note Nvidia reports 26 Aug — next week, not this one"]
    ],
    catalysts: [
      "FOMC July minutes, Thu ~2:00am GMT+8 — the week's policy centrepiece and the read on how live a hike really is.",
      "China LPR, Thu — expected unchanged at 3.0% / 3.5%, but persistent deflation keeps easing chatter alive.",
      "August equity options expiration, Fri 21 Aug — monthly (not quad-witch) OpEx; can pin or unpin index levels and unclamp gamma into the following week.",
      "Global flash PMIs, Fri — Japan, Eurozone, UK and US in one session; the cleanest growth pulse of the week.",
      "Jackson Hole pre-positioning builds vol all week ahead of the 27–29 August symposium and Warsh's first keynote as Chair.",
      "Trade headlines: the US–China truce backdrop holds and the semiconductor-tariff action on China remains delayed to 2027 — watch for fresh tariff or export-control headlines colliding with the retail prints and the Alibaba/Baidu earnings."
    ],
    regime: {
      label: "Quad Shift — 3-1-2, #Quad3 tilting toward Quad 1/2",
      note: "Per Hedgeye (Early Look, 14 Aug 2026), the monthly Quad count is 3-1-2 — a #Quad3 regime (growth slowing, inflation sticky) shifting toward Quad 1/2 (growth firming, inflation cooling). The book is being rotated into Growth/Tech (QTUM, IGV) and out of rate-sensitives (XLRE, IAK). VIX is signalled bearish (vol biased lower) and the dollar bearish — a risk-on, buy-the-dip configuration.",
      ranges: [
        ["S&P 500 (SPX)", "7,606 – 7,861", "Bullish"],
        ["Nasdaq Comp (COMPQ)", "25,908 – 26,992", "Bullish"],
        ["Russell 2000 (RUT)", "2,987 – 3,075", "Bullish"],
        ["Equal-Weight S&P (RSP)", "219.0 – 225.0", "Bullish"],
        ["Tech-Software (IGV)", "99.0 – 110.0", "Bullish"],
        ["Health Care (XLV)", "164 – 172", "Bullish"],
        ["UST 10Y Yield", "4.60 – 4.74", "Bullish"],
        ["High Yield (HYG)", "79.43 – 79.98", "Bullish"],
        ["IG Corp (LQD)", "105.7 – 106.9", "Bearish"],
        ["Volatility (VIX)", "14.05 – 16.43", "Bearish"],
        ["US Dollar (DXY)", "99.25 – 100.13", "Bearish"],
        ["Gold (spot)", "4,201 – 4,524", "Bullish"],
        ["Silver (spot)", "58 – 68", "Neutral"],
        ["Copper (spot)", "6.46 – 6.76", "Bullish"],
        ["WTI Crude", "74.36 – 85.99", "Neutral"],
        ["Natural Gas", "2.55 – 2.85", "Bearish"]
      ],
      where: "The tape is bullish TREND across US equity beta (SPX, COMPQ, RUT, RSP), software and gold, with credit (HYG) calm — the Quad-shift-to-growth map. What would change it: the regime breaks if the 2Y yield reclaims its TRADE line (hawkish minutes or hot PMIs reviving hike risk), the dollar breaks out above ~100.1, or VIX recaptures ~16.4. That combination would flip the book back toward defence and stall the small-cap and gold trade. Tells to watch: 2Y TRADE break, DXY 100, VIX 16.4, IGV (software) and RSP/Russell breadth. OpEx Friday can distort the tape into month-end."
    },
    positioning: "After July's Quad4 washout — the worst long/short month in four years — consensus shorts got squeezed: South Korea (EWY) and semis/DRAM ripped, and Hedgeye went to zero shorts in Real-Time Alerts on Monday. That leaves the pain trade higher near-term. Crowded and stretched: megacap tech remains the consensus long, while the new leadership (small caps, dividends, software breadth) is earlier and less crowded. Vol and credit: VIX ~14.6 in a bearish, low-vol regime; HYG bullish with credit spreads calm, LQD bearish with duration the weak spot — no stress signal yet. Rates: 10Y 4.65% inside 4.60–4.74, 2Y sub-4.10% and falling as hike bets bleed out, so the curve is bull-flattening. FX: DXY pinned near 99.5–100 in a bearish range; soft US data caps the dollar, but a firm US PMI against soft Europe could snap it back. USD/JPY hinges on Japan GDP (Mon) and CPI (Fri); AUD on jobs plus China.",
    geo: [
      "Russia–Ukraine: Trump–Putin diplomacy has stalled, with both sides escalating drone and missile strikes and sanctions back in focus — roughly a year on from the Alaska summit. Prediction markets put a ceasefire by end-August near ~3% (confirm live). The tail risk is energy: any supply hit is a Brent catalyst.",
      "US–China: the trade truce is holding and semiconductor tariffs on China are delayed to 2027. Watch for fresh export-control or tariff headlines colliding with the retail prints and the Alibaba/Baidu earnings.",
      "Middle East: a simmering risk premium in oil with the Strait of Hormuz still effectively closed. No scheduled catalyst, but the tape is headline-sensitive into a thin summer session.",
      "Odds: ~40% for a September Fed hike and ~23bp of tightening priced by year-end, with the first hike now largely a 2027 story."
    ],
    asia: "Asia should open constructive: Wall Street sits at records, US inflation cooled, and Fed-hike bets are fading — a supportive backdrop for risk. But the first hour of the GMT+8 session carries real data: Japan Q2 GDP (~7:50am) steers USD/JPY and the BOJ story, then China's soft July activity dump (~10:00am) can cap gains. Intraday tells: China proxies (HSI, A-shares, copper), AUD on the China read, USD/JPY on the GDP print, and whether the KOSPI short-squeeze extends. A firm hold above Friday's US levels keeps the growth rotation intact into the FOMC minutes.",
    beyond: [
      "US Open Fan Week, 17–23 Aug in New York: Media Day plus the free Sounds of the Open concert on Friday 21 and Kids' Day on Saturday 22. The main draw begins 31 August.",
      "Space: a China launch from Taiyuan (Mon 17), then SpaceX Falcon 9 flights from Vandenberg (Wed 19) and Cape Canaveral (Thu 20).",
      "Gaming: Gamescom runs 26–30 August in Cologne with Opening Night Live on 25 August — next week, but the hype builds now.",
      "Global: UNCCD COP17 on land and drought resilience in Ulaanbaatar, 17–28 August; UNESCO Day for Underwater Cultural Heritage on 21 August."
    ]
  },
  recall: {
    window: "Mon 10 Aug – Sun 16 Aug 2026",
    readings: [
      { t:"Inside the War Room: How Washington Plans to Break China's Grip on Critical Minerals", d:"14 Aug", g:"Economics/Commodities", u:"", x:"U.S. Strategic Dependence on Critical Minerals On August 12, 2026, Graham Summers, Chief Market Strategist at Phoenix Capital Research, reported on a private, high-security conference regarding U.S. efforts to reduce dependence on China for critical minerals. Attendees included former ambassadors, U.S. intelligence agency executives, and mining industry leaders. The primary objective was to address how the United States can close the production,…" },
      { t:"The Economist Who Predicted 2008 Explains China's Endgame", d:"11 Aug", g:"Politics/Economics", u:"https://www.youtube.com/watch?v=qbnuJFRcvQE", x:"Political and Economic Challenges in the United States The current political system in the United States is criticized for allowing the purchase of politicians, leading to a suggestion that election campaigns should be funded entirely by the government with private donations banned China is viewed as having successfully combined elements of capitalism and socialism, suggesting that these two approaches can function as a complementary balance rath…" }
    ],
    cards: []
  }
}
,
{
  id: "2026-08-21",
  weekEnding: "Friday 21 August 2026",
  published: "Saturday 22 August 2026",
  pdf: "reports/2026-08-21.pdf",
  pdfName: "Global Week in Review_2026-08-22.pdf",
  tldr: "A hard-asset week wrapped in a soft-equity tape. Scott Bessent's move to at least double the Treasury's long-end buybacks (from a ~$2bn cap toward $4bn+) lit a fuse on 19 August: the dollar sank to ~98.7 (−1% on the week, ~−2.4% MTD), gold rose 5.5% to $4,680.6 in a fifth straight weekly gain, silver 6.8% to $69.53, Brent 6.6% to $94.39 — and above all Bitcoin ripped 24.4% to $78,309 as more than $2.7bn of shorts were liquidated. Meanwhile the S&P fell 1.4% to 7,674.37 and the Nasdaq 2.1% to 26,180.45, de-risking into Nvidia's 26 August print and Kevin Warsh's Jackson Hole debut on 28 August. The tell: long yields still crept higher (10Y 4.74%, +6bp; 30Y ~5.27%, near a two-decade high) even as debasement trades screamed — the market is buying scarcity and selling duration at the same time. Leadership narrowed and rotated: healthcare had its best week since late June on the Moderna/Merck Phase 3 mRNA win, financials led Friday, while tech, REITs (−2.4% Fri) and utilities (−2.0% Fri) were sold. That is rotation, not liquidation — and it is the equity market agreeing with the Quad 3 message from bonds and commodities.",
  metrics: {
    spx: 7674.37,
    nasdaq: 26180.45,
    dow: 53277.01,
    us10y: 4.74,
    us2y: 4.24,
    dxy: 98.7,
    gold: 4680.6,
    silver: 69.53,
    brent: 94.39,
    wti: 86.5,
    btc: 78309,
    vix: 15.1
  },
  snapshot: [
    ["S&P 500", "7,674.37", "−1.4%", "Friday +0.4% bounce, but a down week; Jackson Hole jitters plus a tech drag"],
    ["Nasdaq Composite", "26,180.45", "−2.1%", "Growth and tech led the fade into next week's Nvidia print"],
    ["Dow Jones Ind.", "53,277.01", "−0.8%", "Relative winner; value, financials and health bid"],
    ["US 10Y Treasury", "4.74%", "+6 bp", "Treasury-buyback relief faded; supply and inflation angst into Jackson Hole"],
    ["US 2Y Treasury", "4.24%", "+7 bp", "Front end repriced a touch more hawkish; hike risk lingers. 2s10s ≈+50 bp"],
    ["Dollar (DXY)", "≈98.7", "≈−1%", "Sank post-buyback; roughly −2.4% month-to-date. Web-sourced approximation"],
    ["Gold (spot)", "$4,680.6", "+5.5%", "Fifth straight weekly gain; central-bank buying and the debasement bid"],
    ["Silver (spot)", "$69.53", "+6.8%", "Outran gold; monetary plus industrial demand"],
    ["Brent crude", "$94.39", "+6.6%", "Strait of Hormuz supply shock; back above $90"],
    ["WTI crude", "≈$86.5", "≈+5%", "Second straight weekly gain on Iran and Hormuz. Web-sourced approximation"],
    ["Bitcoin", "$78,309", "+24.4%", "Short squeeze plus buyback liquidity and the CLARITY Act push; >$2.7bn of shorts liquidated"],
    ["VIX", "15.1", "from 14.3", "Intraweek spike near 16 — still a low-vol tape despite the risk-asset chop"]
  ],
  themes: [
    {
      t: "① The buyback bazooka reset the whole tape",
      b: "On 19 August, Treasury Secretary Bessent said the Treasury would at least double its long-end buybacks (10Y–30Y) from a ~$2bn cap toward $4bn+, an explicit move to pull multi-year-high borrowing costs down. Yields dropped, then round-tripped by Thursday — but the dollar stayed down and every debasement asset caught a bid.",
      r: "This is fiscal-dominance price action. When the sovereign signals it will manage its own curve, hold gold, silver, miners and Bitcoin as the release valve. The equity index is the wrong instrument to express it."
    },
    {
      t: "② Bitcoin's 24% squeeze was the week's loudest signal",
      b: "BTC ran from ~$63k to ~$79.5k — its biggest surge since March — as more than $2.7bn of shorts were liquidated, helped by the buyback liquidity impulse, a White House digital-assets meeting, Trump's push for the CLARITY Act and pointed comments from Bessent. Ether jumped as much as 12% on the biggest day.",
      r: "A liquidation-fuelled vertical move is real demand meeting no supply, but it is also fragile. Respect the trend, size for a 15–20% air-pocket, and treat $80k as the line traders are defending."
    },
    {
      t: "③ Gold's fifth straight weekly gain is structural, not a trade",
      b: "Gold notched a fifth consecutive weekly advance to ~$4,681, with silver outrunning it at +6.8%. The macro engine: record central-bank buying (Q2 official purchases ~288.9t, +62% y/y), a softening dollar, and July CPI at 3.4% keeping the real-rate math friendly to non-yielders.",
      r: "Own the metals as ballast, not as a tactical punt. The buyer of size here is not a momentum fund — it is central banks, and they do not ring the register on a 5% pop."
    },
    {
      t: "④ Equities went sideways-to-down, and leadership narrowed",
      b: "The S&P slipped 1.4% and the Nasdaq 2.1%, with tech, REITs and utilities the laggards as long yields firmed. The offset was defensives and value: healthcare had its best week since late June after Moderna and Merck reported a successful late-stage mRNA trial, and financials led Friday.",
      r: "A market that sells its generals into a marquee earnings print while bidding pharma and banks is de-risking, not capitulating. Rotation, not liquidation — favour the barbell of real assets plus quality value."
    },
    {
      t: "⑤ The oil bid is a geopolitics tax, not a demand boom",
      b: "Brent rose 6.6% and WTI about 5% in a second straight weekly gain, driven entirely by the ongoing Strait of Hormuz crisis. Iran has effectively throttled the strait since February, and Iran–Oman reopening talks remained unresolved into the weekend.",
      r: "Higher oil here is a supply-shock cost, not a growth signal — stagflationary at the margin. It lifts energy revenues but taxes the consumer and complicates the Fed. Keep energy exposure, but pair it with health and staples ballast."
    },
    {
      t: "⑥ All eyes shift to Jackson Hole and Nvidia",
      b: "The tape spent the week de-risking ahead of two events: Nvidia's Q2 FY27 report on 26 August (guide ~$91bn vs Street ~$93–95bn, ~+70% y/y) and Kevin Warsh's first Jackson Hole keynote as Fed Chair on 28 August. Warsh has signalled structural, not near-term, remarks — and independence from what markets are pricing.",
      r: "Two binary catalysts land inside four sessions. Carry less gross into them than you would like to; the debasement basket is the cleaner way to stay long risk without single-stock or single-speech headline exposure."
    }
  ],
  regime: {
    label: "Quad 3 reasserting — stagflationary tilt with a debasement overlay",
    note: "Hedgeye's published 2026 process moved Quad 3 → Quad 2, and the Hormuz supply shock has been reasserting stagflationary #Quad3 dynamics: inflation sticky or re-accelerating, growth slowing, the Fed on hold or forced to consider hikes. Their framework flags that the 10Y's 3-month correlation to the S&P has turned negative — rising yields are now a headwind for equities, exactly what this week showed. Source: Hedgeye published macro commentary (2Q26 themes; 'Flation Now, Stag-On-A-Lag'; monthly Quads). Note: the risk ranges below are indicative levels derived from this week's price and realised volatility, not official Hedgeye Risk Range™ numbers — the live Hedgeye table could not be verified for this date. Treat as directional and verify on Hedgeye before acting.",
    ranges: [
      ["S&P 500", "7,560 – 7,800", "Bearish"],
      ["Nasdaq Comp", "25,700 – 26,850", "Bearish"],
      ["US 10Y Yield", "4.60 – 4.80", "Bullish (yield)"],
      ["Gold (spot)", "4,420 – 4,760", "Bullish"],
      ["Silver (spot)", "63.5 – 70.5", "Bullish"],
      ["Brent crude", "88 – 96", "Bullish"],
      ["Bitcoin", "64,000 – 81,000", "Bullish"]
    ],
    where: "This week's price action — hard assets bid, long duration and rate-sensitive equities sold, dollar down — is the cleanest expression of a Quad 3 tilt with a debasement overlay. The signal favours gold, energy and increasingly Bitcoin over the long-duration equity complex. SPX at 7,674 sits mid-range in an indicative 7,560–7,800 band with a bearish tilt, while gold at $4,681 and Bitcoin at $78,309 are both pressing the top of theirs — momentum, but stretched. The regime shifts if a soft core PCE and a dovish-framework Warsh pull inflation expectations lower and let the long end rally; it gets worse if the 30Y keeps making two-decade highs and bond stress finally washes up onto equities. Reminder: these are indicative, derived ranges, not official Hedgeye levels.",
  },
  mag7: [
    { tk: "NVDA", n: "Nvidia", p: 214.72, wk: "−4.6%", wkPct: -4.6, cap: "$5.20T", pe: "—" },
    { tk: "AAPL", n: "Apple", p: 309.35, wk: "+1.1%", wkPct: 1.1, cap: "$4.54T", pe: "—" },
    { tk: "GOOGL", n: "Alphabet", p: 344.82, wk: "−0.3%", wkPct: -0.3, cap: "$4.17T", pe: "—" },
    { tk: "MSFT", n: "Microsoft", p: 483.24, wk: "−2.5%", wkPct: -2.5, cap: "$3.59T", pe: "—" },
    { tk: "AMZN", n: "Amazon", p: 258.63, wk: "−1.5%", wkPct: -1.5, cap: "$2.78T", pe: "—" },
    { tk: "TSLA", n: "Tesla", p: 362.86, wk: "+6.0%", wkPct: 6.0, cap: "$1.43T", pe: "—" },
    { tk: "META", n: "Meta", p: 549.9, wk: "−6.8%", wkPct: -6.8, cap: "$1.40T", pe: "—" }
  ],
  mag7Read: "Every name but Apple and Tesla fell, and the spread tells the story: Meta was the worst of the group at −6.8% to $549.90, Nvidia shed 4.6% to $214.72 as the tape de-risked into its 26 August print, and Microsoft gave back 2.5% to $483.24 — while Tesla ripped 6.0% to $362.86 and Apple eked out 1.1% to $309.35, the two names least exposed to the AI-capex question. Alphabet was effectively flat at −0.3%. That is a cohort being sold selectively rather than wholesale, and it maps onto the week's rotation: the AI-capex complex was cut, the 'AI without the capex bill' trade (Apple) and the narrative high-beta name (Tesla) were not. With Nvidia now ~$5.2T and the single most important print of the quarter due 26 August (guide ~$91bn vs Street ~$93–95bn, ~+70% y/y), index direction for the back half of August is effectively hostage to one report and one speech. The tell to watch: whether a Nvidia beat can pull the group up against a rising-yield backdrop, or whether 'sell the generals' persists. Data note: prices are actual regular-session closes for the Friday shown and the week column is a true Friday-to-Friday close-over-close move, both taken from the market-data feed (EOD series) rather than from the source report, which could not verify them. Market caps are from the data feed as of 21 August. P/E could not be retrieved (the ratios endpoint is subscription-gated) and is shown as — .",
  sectors: [
    { n: "Health Care", m: "best week since 26 Jun", pct: 3, d: "Moderna/Merck Phase 3 mRNA trial win drove the week's standout; +1.0% Friday" },
    { n: "Financials", m: "leader", pct: 1.5, d: "Led the Friday tape (+1.2%); value and cash-flow rotation beneficiary" },
    { n: "Consumer (value/defensive)", m: "higher", pct: 1, d: "Defensive and value names bid as long-duration growth was sold. Directional from source ordering" },
    { n: "Energy", m: "mixed", pct: 0.5, d: "The commodity ripped (Brent +6.6%) but energy equities gave back ground on Friday" },
    { n: "Utilities", m: "−2.0% Fri", pct: -2, d: "Rate-sensitive corner hit as long yields firmed" },
    { n: "Real Estate", m: "−2.4% Fri", pct: -2.4, d: "The week's worst rate-sensitive casualty" },
    { n: "Technology", m: "laggard", pct: -2.5, d: "Sold into the Nvidia print; long-duration growth against a rising long end" }
  ],
  sectorsRead: "Leadership rotated out of long-duration growth and rate-sensitives into cash-flow value and hard-asset cyclicals. Healthcare had its best week since 26 June on the Moderna/Merck mRNA trial win, financials led Friday (+1.2%) alongside healthcare (+1.0%), and value and defensive consumer names were bid. On the other side, technology was the clear laggard, with real estate (−2.4% Friday) and utilities (−2.0% Friday) hit hardest as long yields firmed. Energy was the odd one out: the commodity ripped but energy equities gave back ground into Friday. This is the equity market agreeing with the Quad 3 and debasement message coming from bonds and commodities. Favour the barbell — real assets plus quality value, underweight the rate-sensitive long-duration book. Data note: sector detail is Friday 21 August (NASDAQ-listed average change); the weekly rotation is corroborated by the healthcare 'best week since June' read.",
  positioning: "VIX held a low 14–16 band all week, closing 15.1 with an intraweek spike near 16 — a market that is rotating, not panicking. But realised vol in single stocks (crypto-levered names, miners, energy) ran far hotter than the index, a classic sign of dispersion under a calm surface. Credit gave no warning: high-yield and investment-grade spreads were stable with no widening into the equity softness, and the buyback signal is if anything spread-supportive at the long end. The rates picture is where the stress sits — the 10Y ended at 4.74% (+6bp) and the 2Y at 4.24% (+7bp), with the long end (20Y ~5.25%, 30Y ~5.27%) sticky near two-decade highs, reflecting a supply and inflation term premium the buyback can cap but not erase. Net read: low index vol plus stable credit plus violent commodity and crypto moves means you express risk through the debasement basket and dispersion, not through naked index beta. If you want equity upside into Nvidia, define it with options rather than paying up for spot into a binary — with VIX at 15 and three tier-one events in five sessions, optionality is cheap.",
  corporate: [
    "Moderna (MRNA) / Merck (MRK): reported a successful late-stage Phase 3 mRNA trial, driving healthcare to its best week since late June — the week's clearest single-sector catalyst.",
    "Nvidia (NVDA): Q2 FY27 earnings set for 26 August (after the close, ~5:00pm ET). Management guided ~$91bn revenue vs Street ~$93–95bn, roughly +70% y/y. The quarter's marquee catalyst, and the single most important print for index direction into month-end.",
    "Cloud complex: Microsoft, Amazon and Alphabet added ~$1.5tn of combined value in the late-July earnings run on strong cloud growth; that leadership carried into August even as the broader tape softened.",
    "Crypto and policy: a White House digital-assets meeting, Trump's push for the CLARITY Act and Bessent's comments underpinned the Bitcoin squeeze — more than $2.7bn of shorts liquidated as BTC ran from ~$63k to ~$79.5k.",
    "Apple (AAPL): continued to trade as the 'AI without the capex bill' alternative, up ~23% YTD, though it lagged the cloud names this cycle.",
    "On deck: a heavy week — Nvidia (Wed 26 Aug), Marvell, Salesforce, CrowdStrike, Workday and Synopsys on the AI and software side; Dick's, Abercrombie, Kohl's, Best Buy, Dollar General and Dollar Tree on the consumer side after the Walmart miss."
  ],
  macro: [
    "US July CPI (released 12 Aug, framing the week): +0.1% m/m and 3.4% y/y, down from 3.5%; core +0.2% m/m and 2.5% y/y. Energy fell 1.5% m/m but is up 14.7% y/y (gasoline +24.6% y/y). Net: headline is cooling, but the energy base effect and the fresh oil shock keep the inflation fight unfinished — supportive of gold, awkward for the 'hikes are done' camp.",
    "US July retail sales: −0.6% m/m, the sharpest drop since May 2025 and well below the +0.1% consensus. Net: the consumer is softening — the growth half of the stagflation-lite mix.",
    "US housing starts, permits and industrial production (18 Aug) were secondary; initial jobless claims (20 Aug) pointed to a still-resilient labour market. Net: soft consumer plus resilient labour plus sticky-ish inflation gives Warsh cover to stay data-dependent and non-committal at Jackson Hole.",
    "July FOMC minutes (19 Aug) were parsed for the hike-versus-hold debate — the meeting's central question was not whether to cut but whether the next move is up.",
    "Rates expectations: post-data, some desks trimmed September hike odds toward ~32%, while prediction markets were more hawkish — Polymarket and Kalshi readings clustered 45–57% for a 25bp hike versus ~42–51% for no change into the 16 September FOMC. Net: the dispersion is the story. A genuinely two-sided Fed facing an oil shock is a volatility engine — keep optionality and do not marry a single rate path."
  ],
  geo: [
    "Strait of Hormuz crisis — the dominant driver of oil. Iran has effectively throttled the strait since February; Trump posted an image labelling it 'New US Territory', while Iran–Oman talks toward a management agreement were reported as close but unresolved into the weekend. Brent finished at $94.39, up 6.6% on the week.",
    "Ukraine–Russia: Ukraine expanded strikes further into Russia, and a European government document alleged Russia is shipping drone components, ammunition and TNT to Iran via the Caspian — a direct link between the two theatres.",
    "Regional realignment: a Saudi–Turkey–Pakistan mutual-defence pact signed 7 August drew White House praise as an 'important first step', a notable Middle East security shift.",
    "Prediction markets: beyond the Fed, Polymarket's August WTI event and Fed-decision markets were the most actively traded macro contracts; the September Fed market's hawkish tilt (~45–57% hike) is the number to watch.",
    "Read: the geopolitical map is an oil-price floor and a gold tailwind. As long as Hormuz is contested, fade dips in energy and keep a structural metals allocation. The risk to that view is a sudden Iran–Oman deal that reopens the strait and knocks $5–10 off crude overnight.",
    "Next catalysts: Nvidia's Q2 FY27 print on 26 August, core PCE on 26 August, and Jackson Hole on 27–29 August with Chair Warsh's first keynote on Friday 28 August — 19 days before the 16 September FOMC."
  ],
  recall: {
    "window": "Mon 17 Aug – Sun 23 Aug 2026",
    "readings": [
      {
        "t": "Raoul Pal: The Economic Singularity Is Coming by 2030 — Here's How to Position Now",
        "d": "21 Aug",
        "g": "Economics/Investing",
        "u": "https://www.youtube.com/watch?v=LzoyaoYKUns",
        "x": "Intro Artificial intelligence is characterized as the most significant discovery in human history, representing an unstoppable force despite the difficulty of its development and implementation. The rapid expansion of artificial intelligence is absorbing liquidity, which is creating challenges within the cryptocurrency market. Current economic conditions are being compared to the 2008 financial crisis, resulting in substantial opportunity costs.…"
      },
      {
        "t": "Solid_Ground_26_08_18_The Shock Of 26: “It’s The Political Economy, Stupid.’",
        "d": "19 Aug",
        "g": "Economics/Investing",
        "u": "",
        "x": "The Shock of 26 and Financial Repression Russell Napier, author of the newsletter The Solid Ground, asserts that the world is currently experiencing the \"Shock of 26,\" a period characterized by slowing economic growth in the developed world alongside rising bond yields. Napier identifies three primary drivers for the rise in bond yields: a temporary increase caused by higher oil prices, a structural shift involving competition for capital between…"
      },
      {
        "t": "Is the Gold-Silver Ratio Relevant Today",
        "d": "19 Aug",
        "g": "Economics/Commodities",
        "u": "",
        "x": "Modern Relevance of the Gold-Silver Ratio The document explores the historical and modern relevance of the gold-silver ratio, noting that while these metals are not inherently money, they have historically functioned as such and remain monetary assets even under fiat currency regimes. The gold-silver ratio was considered a primary financial indicator from at least 3000 BCE through the 19th century, though its profile diminished following the aban…"
      }
    ],
    "cards": []
  },
  ahead: {
    published: "Sunday 23 August 2026",
    weekOf: "Mon 24 August 2026",
    pdf: "reports/2026-08-21-ahead.pdf",
    pdfName: "Global Week Ahead_2026-08-23.pdf",
    tldr: "A five-day gauntlet decides whether the summer AI rally survives contact with a stressed bond market. NVIDIA earnings (Wed after the close) and Fed Chair Warsh's Jackson Hole debut (Fri) bracket the week, with core PCE (Wed) in between — all against a Quad 3 backdrop of slowing growth and re-accelerating inflation as Brent holds above $90 on the Iran standoff and the 30Y yield sits near a two-decade high. Treasury has doubled long-dated buybacks to $4bn+ per operation to steady the tape, but duration supply lands all week: 2Y ($69bn Tue), 5Y ($70bn Wed), 7Y ($44bn Thu). Long-duration tech is the most exposed; gold, energy, defensives and equal-weight are where the regime points. VIX at 15.4 is cheap given three tier-one events in five sessions.",
    setup: [
      ["S&P 500", "7,674", "+0.4%", "3rd straight weekly loss; Hedgeye range 7,610–7,835"],
      ["Nasdaq Comp.", "≈26,170", "+0.4%", "NVDA (Wed) is the week's swing factor. Approximate close — verify live"],
      ["Dow Jones Ind.", "≈53,260", "+0.9%", "+~500pts Friday; snapped a 3-day skid. Approximate close — verify live"],
      ["Russell 2000", "3,006", "+0.5%", "Small caps leading the bounce"],
      ["US 10Y yield", "4.71%", "≈flat", "30Y at a ~2-decade high — long-end stress is the story"],
      ["US 2Y yield", "4.24%", "+4 bp", "Bear-steepening; front end anchored"],
      ["Dollar (DXY)", "98.8", "−0.3%", "~3-month low; yen and peso intervention chatter"],
      ["Gold (spot)", "$4,645", "+1.6%", "Broke above the top of its risk range — momentum, but stretched"],
      ["Silver (spot)", "$69", "−1.9%", "TREND still bullish (64–71)"],
      ["WTI crude", "$86.5", "−0.3%", "2nd weekly gain; Iran premium intact"],
      ["Brent crude", "$93.6", "−0.2%", ">$90 on Strait of Hormuz risk"],
      ["Bitcoin", "$77,300", "+7.7%", "Treasury buybacks plus the CLARITY Act push"],
      ["VIX", "15.4", "−3.7%", "Cheap into NVDA, PCE and Jackson Hole"]
    ],
    setupNote: "Levels are Friday 21 August closes with the day move shown; the S&P 500 close is confirmed, while Nasdaq and Dow are approximate closes reconciled from intraday and prior-session data. Risk ranges are Hedgeye immediate-term signals from the 21 August Early Look. Verify live prices and confirm scheduled times before acting.",
    themes: [
      {
        t: "NVIDIA earnings (Wed, after the close) — the AI referendum",
        b: "Guidance was framed at ~$91bn for the quarter; the Street is closer to $93–95bn. The read on the Blackwell ramp, the Rubin roadmap, data-centre demand and China is the single biggest driver of the week's tape.",
        w: "Options imply a large post-print move. A beat-and-raise revives breadth; a soft data-centre or China line hits the whole complex. Semis (SNDK, MU, MRVL) are the tell."
      },
      {
        t: "Jackson Hole — Warsh's debut (Fri)",
        b: "Kevin Warsh's first keynote as Fed Chair, in office since 22 May. The 2026 theme is 'Financial Innovation — Implications for Payments and Policy'. He has flagged a big-picture framework talk and that the Fed is 'not constrained by market prices'.",
        w: "Any hawkish-independence signal against a stagflationary backdrop. A framework-heavy speech that downplays near-term cuts would lift the dollar and pressure long-duration equities."
      },
      {
        t: "The bond market is the boss",
        b: "The 30Y yield sits near its highest in roughly two decades; Treasury doubled long-dated buybacks to $4bn+ per operation to steady the tape. Supply lands Tuesday (2Y, $69bn), Wednesday (5Y, $70bn) and Thursday (7Y, $44bn).",
        w: "Auction tails or another leg up in the long end would override good news elsewhere — that is the mechanism that finally lets bond stress wash up to stocks."
      },
      {
        t: "Core PCE (Wed)",
        b: "Consensus is around +0.2% m/m with core y/y near 3.3%. With oil surging, an upside surprise validates the stagflation call and lifts hike odds.",
        w: "A hot print plus a hawkish Warsh plus a strong NVDA is the messy good-news-is-bad-news combination; a soft print is the relief valve."
      },
      {
        t: "Oil and Iran — the inflation impulse",
        b: "Brent is above $90 on a reinstated blockade, threats of the 'toughest financial penalties in history' and an 'economic D-Day', with Strait of Hormuz risk unresolved. Energy is the transmission belt into CPI and PCE.",
        w: "A run at $100 Brent would be an outright macro shock; XLE stays a regime-consistent long. Any de-escalation headline is the fade risk."
      },
      {
        t: "Regime check — Quad 3",
        b: "Growth slowing, inflation re-accelerating. That points to commodities, gold and silver, defensives (XLV) and equal-weight or value over crowded long-duration growth.",
        w: "Leadership rotation. If gold and equal-weight (RSP) hold up while high-beta momentum keeps bleeding, the Quad 3 script is playing out."
      }
    ],
    calendar: [
      ["Mon 24", "US Chicago Fed National Activity Index (Jul). Asia and China quiet.", "Low-impact opener; a positioning day before the gauntlet"],
      ["Tue 25", "US Consumer Confidence (Aug); New Home Sales (Jul); Case-Shiller 20-city (Jun); Richmond Fed. 2Y note auction $69bn (≈01:00 Wed GMT+8).", "The consumer read post-Walmart miss, plus the first supply test of a stressed curve"],
      ["Wed 26", "US core PCE (Jul, cons. +0.2% m/m / ~3.3% y/y); Personal Income & Spending; Q2 GDP 2nd estimate. 5Y auction $70bn. NVIDIA after the close.", "The Fed's preferred inflation gauge and the AI bellwether land on the same day — the week's fulcrum"],
      ["Thu 27", "US jobless claims; Advance Goods Trade (Jul); KC Fed Manufacturing. 7Y auction $44bn. Jackson Hole opens (evening ET).", "Labour tell, the final duration auction, and the symposium tone-setting"],
      ["Fri 28", "Jackson Hole — Warsh keynote (Friday AM ET ≈ evening GMT+8); UMich final and inflation expectations. Japan: Tokyo CPI (Aug).", "The policy event of the week, with an Asia inflation cross-check"]
    ],
    cbs: [
      ["US Federal Reserve", "No FOMC this week (next decision 15–16 Sep); the signal comes from Jackson Hole, 27–29 Aug", "On hold; Polymarket ~88.8% odds of zero Fed cuts in 2026, with September leaning no-change and a live hike tail", "Warsh's first keynote as Chair — how much does he downplay near-term cuts, and where is the daylight with the White House rate stance?"],
      ["Kansas City Fed", "Jackson Hole Symposium — Thu 27 to Sat 29 Aug; keynote Fri 28 Aug", "Theme: 'Financial Innovation — Implications for Payments and Policy'", "The market's first real look at the Warsh framework, 19 days before the 16 September FOMC"],
      ["US Treasury", "Buyback operations doubled to $4bn+; auctions 2Y Tue ($69bn), 5Y Wed ($70bn), 7Y Thu ($44bn)", "Buybacks capping the long end; heavy duration supply against it", "Can the buyback absorb the supply, or do auction tails push the 30Y to fresh two-decade highs?"],
      ["Bank of Japan", "Tokyo CPI (Aug) on Fri 28 Aug", "No meeting; policy commentary only", "Yen-intervention chatter is live — USD/JPY into Tokyo CPI is the FX event of the week"]
    ],
    earnings: [
      ["Wed 26", "NVIDIA (NVDA, after the close)", "The marquee print. Guide ~$91bn vs Street ~$93–95bn; Blackwell ramp, Rubin roadmap, data-centre demand and China are the swing factors"],
      ["Through the week", "Salesforce (CRM), CrowdStrike (CRWD), Workday (WDAY), Autodesk (ADSK), Synopsys (SNPS), Okta, Veeva, Nutanix, Elastic, SentinelOne, HPQ", "The AI-spend and enterprise-software pulse around the Nvidia print"],
      ["Thu 27", "Marvell (MRVL)", "The semis confirm-or-refute on whatever NVDA delivers"],
      ["Through the week", "Dick's (DKS), Abercrombie (ANF), Kohl's (KSS), Williams-Sonoma (WSM), Ulta (ULTA), Dollar General (DG), Dollar Tree (DLTR), Best Buy (BBY), Burlington, Gap", "Post-Walmart-miss: is the consumer cracking, or were Walmart's soft comps company-specific?"],
      ["Through the week", "Canadian banks (RY, TD, BNS, BMO, CM), Intuit (INTU), Zoom, Affirm (AFRM), Li Auto (LI), PDD", "Credit and consumer-finance read, plus the China consumer via LI and PDD"]
    ],
    catalysts: [
      "NVIDIA Q2 FY27, Wed 26 Aug after the close — the week's dominant single-stock catalyst and the index's swing factor.",
      "US core PCE, Wed 26 Aug — the Fed's preferred gauge, consensus ~+0.2% m/m and ~3.3% y/y core, landing the same day as NVDA.",
      "Jackson Hole Symposium, Thu 27 to Sat 29 Aug — Warsh keynote Friday 28 August, his first as Chair.",
      "Treasury auctions: 2Y ($69bn, Tue), 5Y ($70bn, Wed), 7Y ($44bn, Thu) — duration supply into a fragile long end.",
      "Conferences: Jefferies Semis, IT Hardware & Comm Tech (25–26 Aug, Chicago); Stifel Tech Executive Summit (25–26 Aug, Deer Valley).",
      "Crypto policy: the Senate push on the CLARITY Act market-structure bill — a live driver behind the Bitcoin surge.",
      "Month-end Monday 31 Aug: pension and rebalancing flows build late week, with China's August PMIs the same day."
    ],
    regime: {
      label: "#Quad 3 — growth slowing, inflation accelerating",
      note: "Explicitly the frame in Hedgeye's recent Early Looks ('#Quad3 Bonds, Oil, Consumer…', 18 Aug). Source: Hedgeye Early Look, 'A Parable Of An Old Fisherman', 21 August 2026 (Sam Rahman). Ranges below are immediate-term.",
      ranges: [
        ["UST 10Y Yield", "4.64 – 4.74", "Bullish"],
        ["High Yield (HYG)", "79.41 – 79.83", "Bullish"],
        ["IG Corp (LQD)", "105.4 – 106.8", "Bearish"],
        ["S&P 500 (SPX)", "7,610 – 7,835", "Bullish"],
        ["Nasdaq Comp (COMPQ)", "25,813 – 26,798", "Bullish"],
        ["Russell 2000 (RUT)", "2,976 – 3,073", "Bullish"],
        ["Health Care (XLV)", "168 – 176", "Bullish"],
        ["S&P Equal-Weight (RSP)", "219.0 – 225.0", "Bullish"],
        ["Tech-Software (IGV)", "99.0 – 107.0", "Bullish"],
        ["Volatility (VIX)", "13.90 – 16.54", "Bearish"],
        ["US Dollar (DXY)", "98.24 – 99.91", "Bearish"],
        ["WTI Crude", "81.25 – 87.92", "Bullish"],
        ["Natural Gas", "2.62 – 2.91", "Bearish"],
        ["Gold (spot)", "4,322 – 4,617", "Bullish"],
        ["Copper (spot)", "6.46 – 6.70", "Bullish"],
        ["Silver (spot)", "64 – 71", "Bullish"]
      ],
      where: "The map is Quad-3 constructive on hard assets — gold, silver, copper and WTI all bullish — plus defensives and equal-weight, and bearish on the dollar, on IG duration (LQD) and on volatility. In short: own the inflation, fade the dollar and long-duration IG. Gold has already broken above the top of its range, a momentum signal but also a stretched one. What would change it: the regime flips if growth data (PCE, confidence, claims) soften enough to pull inflation expectations lower — a shift toward Quad 4 — or if a hawkish Warsh plus a hot PCE drives the long end sharply higher and breaks the equity ranges to the downside. Tells: the 30Y yield, USD/JPY, gold, semis breadth and whether the high-beta momentum bleed stabilises."
    },
    positioning: "Crowded: mega-cap AI and semis into NVDA, plus the long-USD unwind. Hedgeye's high-beta momentum basket was collapsing (−7.3% day-on-day) on 20 August — momentum is being taken out. Stretched: long-duration tech against a rising long end, and gold above the top of its risk range. Volatility and credit: VIX ~15.4 is cheap given three tier-one events in five days, so optionality is inexpensive; credit is split, with HYG bullish and LQD bearish — high yield resilient, investment grade hurt by duration. Rates: 10Y 4.71% inside 4.64–4.74 with TREND up, 2Y 4.24%, a bear-steepener with the 30Y near a two-decade high. FX: DXY ~98.8 near a three-month low inside a bearish 98.24–99.91 band, with official yen and peso intervention talk in the mix; a hawkish Warsh is the dollar's upside catalyst. Tells to watch: the 30Y yield, USD/JPY, gold, semis breadth (SNDK, MU, MRVL), and whether the high-beta momentum bleed stabilises or accelerates.",
    geo: [
      "US–Iran is the dominant thread: a reinstated blockade, threats of the 'toughest financial penalties in history' and an 'economic D-Day', with Iran vowing a 'devastating' response and signing a preferential trade deal with Oman. The administration's stated aim is maximum economic pressure to avoid a large-scale kinetic restart.",
      "Market channel: oil and the Strait of Hormuz. Any supply-disruption headline is an inflation and volatility catalyst; any de-escalation is the risk-on fade.",
      "Prediction markets: Polymarket at roughly 88.8% for zero Fed cuts in 2026 reflects the oil-inflation bind. Also live: the Senate CLARITY Act crypto vote. Verify odds live.",
      "Read: as long as Hormuz is contested, the oil floor and the gold tailwind both hold. The single biggest tail risk to the bullish-commodity view is a sudden Iran–Oman deal."
    ],
    asia: "Asia should open modestly firmer on Friday's Wall Street rebound and the Treasury-buyback backstop, but with conviction capped ahead of NVDA and Jackson Hole. KOSPI remains a Hedgeye favourite (KM's Top 3, 21 Aug), and Korean and Taiwanese semis will trade off the NVDA setup. Watch USD/JPY and the JGB long end — global bond stress is not just a US story — with gold and energy names bid and Chinese equities in focus into month-end and the 31 August PMIs. The Nikkei stays sensitive to yen-intervention talk. Note China's official August PMIs publish Monday 31 August, just outside this window but a key month-end marker.",
    beyond: [
      "US Open Tennis (New York): Fan Week 23–29 August; the main singles draw opens Sunday 30 August — billed as the longest edition in tournament history.",
      "Games: Metal Gear Solid Master Collection Vol. 2 and Star Wars Zero Company (27 Aug); Elden Ring Tarnished Edition on Switch 2 and Captain Tsubasa II (28 Aug).",
      "Film: a late-August theatrical slate including new horror and genre releases; confirm local dates.",
      "Econ-culture: Jackson Hole doubles as the calendar's marquee gathering — the economics world's late-summer set piece."
    ]
  }
},
{
  id: "2026-08-28",
  weekEnding: "Friday 28 August 2026",
  published: "Saturday 29 August 2026",
  pdf: "reports/2026-08-28.pdf",
  pdfName: "Global Week in Review_2026-08-29.pdf",
  tldr: "Equities ground higher on a blockbuster NVIDIA print — but the tape's real story was a hawkish repricing. A firm July PCE (3.7% headline / 3.3% core) and a hawkish Chair Warsh at Jackson Hole pushed the 2-year yield up 10 bp to 4.34%, lifted the dollar to ~99.6, and knocked gold −3.2% and Brent −6.7%. Leadership rotated out of NVIDIA and semis into software and the rest of mega-cap (MSFT +6.3%, META +5.1%). Rate-cut hopes are gone; the market now prices hike risk into year-end. Beneath a complacent 14.4 VIX, it was the safe-haven and commodity trades that took the pain.",
  metrics: {
    spx: 7711.76,
    nasdaq: 26402.42,
    dow: 53559.99,
    us10y: 4.73,
    us2y: 4.34,
    dxy: 99.6,
    gold: 4529.9,
    silver: 67.79,
    brent: 88.1,
    wti: 82.8,
    btc: 77820,
    vix: 14.43
  },
  snapshot: [
    ["S&P 500", "7,711.76", "+0.5%", "Fourth up-week in five; grinding toward the 7,817 cycle high"],
    ["Nasdaq Composite", "26,402.42", "+0.9%", "Led by software and mega-cap; semis wobbled into Friday"],
    ["Dow Jones Ind.", "53,559.99", "+0.5%", "Quiet and steady; a three-day win streak mid-week"],
    ["US 10Y Treasury", "4.73%", "−1 bp", "Flat on the week but ~9 bp off Tuesday's 4.64% low"],
    ["US 2Y Treasury", "4.34%", "+10 bp", "Hawkish repricing; 2s10s flattened to ≈+39 bp"],
    ["Dollar (DXY)", "≈99.6", "+0.7%", "Firmer post-Jackson Hole; EUR/USD −0.8% to 1.1582. Approximation"],
    ["Gold (spot)", "$4,529.9", "−3.2%", "Violent Friday reversal (−2.9%) as real yields and the dollar rose"],
    ["Silver (spot)", "$67.79", "−2.5%", "Followed gold lower; still above its 50-day"],
    ["Brent crude", "$88.10", "−6.7%", "War premium bled out on Hormuz reopening hopes"],
    ["WTI crude", "≈$82.8", "≈−6%", "Tracked Brent lower on de-escalation signals. Approximation"],
    ["Bitcoin", "$77,820", "−0.7%", "Flat week, wild intraweek (73k–80k–78k); ~38% off the highs"],
    ["VIX", "14.43", "−0.70 pt", "Complacent; no stress despite the commodity air-pocket"]
  ],
  themes: [
    {
      t: "① NVIDIA delivered — and the AI capex story got bigger, not smaller",
      b: "Q2 revenue of $96.2bn (+106% y/y) with data-centre revenue a record $89.0bn (+117% y/y), non-GAAP EPS $2.22 and 75% gross margin. Guidance pointed to ~70% revenue growth next year, roughly double consensus, and CFO Kress flagged top-5 hyperscaler capex rising to ~$1.3tn in 2027 from ~$800bn in 2026. The stock jumped ~8% on the print, then gave back 4.6% on Friday.",
      r: "The fundamental all-clear is intact; Friday's fade was positioning, not thesis. 'Sell-the-news' in NVDA is a rotation signal, not a top signal — stay long the AI complex but broaden beyond the one name."
    },
    {
      t: "② Jackson Hole went hawkish — the Fed put is struck lower",
      b: "Chair Kevin Warsh used the symposium to flag still-elevated inflation and pointedly declined to offer dovish forward guidance. No pivot, no comfort. Fed funds have sat at 3.50–3.75% since late 2025, and forwards now imply a year-end rate near 3.90% — i.e. the next move is as likely to be a hike as a cut.",
      r: "Fade rate-cut trades. Favour quality balance sheets and cash-flow generation over long-duration hope stories, and keep duration short until the front end settles."
    },
    {
      t: "③ Inflation is sticky exactly where it hurts — services",
      b: "July PCE held at 3.7% headline and 3.3% core, both a touch hot at +0.2% m/m. Services prices re-accelerated to +0.3% while goods fell −0.1%. The last mile is not happening on schedule, and the services component is the one the Fed cannot dismiss as base effects or tariffs.",
      r: "Real-asset hedges still make structural sense, but this week proved they are not immune to a hawkish-Fed plus strong-dollar squeeze. Own them for the cycle, not for the month."
    },
    {
      t: "④ The safe-haven and commodity unwind was the week's biggest move",
      b: "Gold fell 3.2% to $4,530 (−2.9% on Friday alone), silver 2.5% to $67.79 and Brent 6.7% to $88.10. Higher real yields, a firmer dollar and a fading Middle East war premium hit everything defensive and inflation-linked at the same time. Crude's fall was mostly geopolitical — hopes of a Strait of Hormuz reopening let the premium deflate.",
      r: "Crowded reflation and haven longs got flushed. This is a positioning cleanse inside an intact uptrend, not a regime change — but respect the momentum break in metals near-term and size for two-way volatility."
    },
    {
      t: "⑤ Leadership is broadening beyond the one chip name",
      b: "Software (MSFT +6.3%), platforms (META +5.1%, AMZN +3.0%) and even Apple (+3.4%) outpaced NVIDIA (+1.3%), while Tesla lagged at −3.9%. Friday's rotation dumped rate-sensitives: REITs −3.1% and utilities −1.6%.",
      r: "A healthier tape internally — breadth beyond one name is what sustains an index at highs. But watch the rate-sensitives: they are the tell if the 2Y keeps climbing."
    },
    {
      t: "⑥ Growth is fine, not great — which is why the Fed can stay hawkish",
      b: "Q2 GDP's second estimate held at +1.5% annualised, and initial jobless claims fell to 203k, below the 208k estimate. Resilient but sub-2%: soft enough to slow, firm enough to remove the Fed's excuse to ease.",
      r: "A resilient-but-slowing economy plus sticky inflation is the textbook late-cycle setup. Own quality, keep duration short, and do not chase the most speculative cohort."
    }
  ],
  regime: {
    label: "Quad 3 with a hawkish-policy override — growth slowing, inflation sticky",
    note: "This week's data — growth decelerating (Q2 GDP +1.5% and softening) with inflation sticky-to-firming (PCE services re-accelerating) — sits squarely in Hedgeye's Quad 3 neighbourhood. The twist is that Quad 3's classic playbook (gold first, bonds bid, long yields lower) was overridden by a hawkish Fed: a market pricing hikes crushed gold and lifted the front end. That policy overlay is the single most important variable to watch. Verification note: Hedgeye's proprietary daily Risk Ranges and its current-week Quad nowcast are subscriber-only and could not be independently verified for the week ending 28 August 2026. The regime read applies Hedgeye's published GIP framework to this week's verified data; the ranges below are desk-estimated from realised weekly highs and lows and 50-/200-day trend anchors — indicative, not official Hedgeye levels.",
    ranges: [
      ["S&P 500", "7,610 – 7,815", "Bullish"],
      ["Nasdaq Comp", "25,900 – 26,700", "Bullish"],
      ["US 10Y Yield", "4.58 – 4.78", "Bullish (yields higher)"],
      ["Gold (spot)", "4,470 – 4,700", "Neutral / breaking"],
      ["Silver (spot)", "66.5 – 72.0", "Neutral"],
      ["Brent crude", "85 – 95", "Bearish"],
      ["Bitcoin", "72,000 – 81,000", "Bearish"]
    ],
    where: "Indices sit above both their 50- and 200-day trend lines — the equity TREND is bullish and intact, with the S&P's 50-day at 7,558 and 200-day at 7,114 against a 7,712 close. The stress is in real assets and crypto: gold has snapped back toward its 200-day (4,595) from a 50-day of 4,228, and Bitcoin at $77,820 remains below both its 50-day (66.4k, now support) and its highs with a bearish TREND. Net: stay constructive on US large-cap equity, respect the broken momentum in metals, and keep the front end of the curve as the risk gauge. What changes it: a further 2Y grind higher would force a de-rating in the longest-duration equity pockets; a genuine labour-market crack would flip the Fed dovish and hand the metals back their bid. Reminder — these are indicative, desk-derived ranges, not official Hedgeye levels."
  },
  mag7: [
    { tk: "NVDA", n: "Nvidia", p: 217.55, wk: "+1.3%", wkPct: 1.3, cap: "$5.27T", pe: "~27x" },
    { tk: "AAPL", n: "Apple", p: 319.7, wk: "+3.3%", wkPct: 3.3, cap: "$4.70T", pe: "~36x" },
    { tk: "GOOGL", n: "Alphabet", p: 346.59, wk: "+0.5%", wkPct: 0.5, cap: "$4.19T", pe: "~17x" },
    { tk: "MSFT", n: "Microsoft", p: 513.53, wk: "+6.3%", wkPct: 6.3, cap: "$3.81T", pe: "~28x" },
    { tk: "AMZN", n: "Amazon", p: 266.43, wk: "+3.0%", wkPct: 3.0, cap: "$2.87T", pe: "~21x" },
    { tk: "TSLA", n: "Tesla", p: 348.75, wk: "−3.9%", wkPct: -3.9, cap: "$1.38T", pe: "~296x" },
    { tk: "META", n: "Meta", p: 578.02, wk: "+5.1%", wkPct: 5.1, cap: "$1.47T", pe: "~22x" }
  ],
  mag7Read: "The tell this week was mega-cap broadening. Money left the crowded NVIDIA trade — up just 1.3% to $217.55 despite a blowout quarter, having run to $228 on Thursday before shedding 4.6% on Friday — and spread into Microsoft (+6.3% to $513.53, the week's leader), Meta (+5.1% to $578.02), Amazon (+3.0% to $266.43) and even Apple (+3.3% to $319.70, near its $344.57 52-week high). Alphabet was the quiet one at +0.5% to $346.59, and remains the cheapest of the group at ~17x. Tesla was the odd one out, −3.9% to $348.75 on the richest multiple in the cohort (~296x) and the thinnest earnings support. The index making highs while the single most-owned name underperforms is a healthy internal signal, not a warning — it is what breadth looks like when it arrives. Meta is still ~27% below its $790.80 high, which makes it the cheapest re-rating candidate if the ad cycle holds. Data note: prices are actual regular-session closes for Friday 28 August and the week column is a true Friday-to-Friday close-over-close move, both taken from the market-data feed (EOD series). Market caps and trailing P/E are as reported in the source document (P/E derived from TTM earnings yield) and are approximate.",
  sectors: [
    { n: "Communication Services", m: "+1.45% Fri", pct: 1.45, d: "Alphabet and Meta strength; the week's cleanest leadership" },
    { n: "Consumer Cyclical", m: "+0.88% Fri", pct: 0.88, d: "Amazon-led; consumer resilient on low jobless claims" },
    { n: "Consumer Defensive", m: "+0.43% Fri", pct: 0.43, d: "Mild bid — not a fear rotation" },
    { n: "Basic Materials", m: "+0.17% Fri", pct: 0.17, d: "Held up despite the metals sell-off" },
    { n: "Financials", m: "+0.01% Fri", pct: 0.01, d: "Flat; a steeper front end nets out" },
    { n: "Industrials", m: "−0.49% Fri", pct: -0.49, d: "Gave back ground with higher yields" },
    { n: "Technology", m: "−0.62% Fri", pct: -0.62, d: "Semis and NVDA dragged Friday even as software led the week" },
    { n: "Healthcare", m: "−1.30% Fri", pct: -1.3, d: "Weak; no defensive haven bid this week" },
    { n: "Energy", m: "−1.41% Fri", pct: -1.41, d: "Crude −6.7% on the week hit the complex" },
    { n: "Utilities", m: "−1.63% Fri", pct: -1.63, d: "Rate-sensitive; hurt by the 2Y jump" },
    { n: "Real Estate", m: "−3.12% Fri", pct: -3.12, d: "Biggest laggard — pure duration pain" }
  ],
  sectorsRead: "Leadership rotated toward growth and platforms and away from anything rate-sensitive. Friday 28 August's sector tape is the cleanest illustration: communication services +1.45% and consumer cyclical +0.88% at the top, real estate −3.12%, utilities −1.63% and energy −1.41% at the bottom. That is a rate-repricing day, not a growth scare — healthcare's −1.30% with no defensive bid confirms it. The Hedgeye-style tell: with the 2Y rising 10 bp on the week, own the balance-sheet-rich compounders and underweight REITs, utilities and long-duration defensives until the front end settles. Data note: the percentages shown are Friday 28 August sector moves as reported in the source document; the weekly rotation read (software and platforms leading, semis fading) is corroborated by the Mag7 spread.",
  positioning: "VIX at 14.43, down 0.70 pt on the week and pinned in the low-14s — remarkably calm given gold fell ~3% and crude ~7% in the same five sessions. The volatility complex is treating the commodity air-pocket as idiosyncratic rather than systemic. Credit was orderly: high-yield and investment-grade spreads held near cycle tights with no notable widening, consistent with the low-VIX signal. The stress that does exist sits in rates — the 2Y up 10 bp to 4.34% against a 10Y flat at 4.73%, flattening 2s10s to roughly +39 bp, a market pricing less easing rather than more. Net read: positioning is calm-to-complacent. Equity vol is cheap insurance here — with a hawkish Fed and a 16 September FOMC ahead, owning some downside protection into event risk costs little. There is no fear in the tape to fade, but there is also little cushion if the 2Y keeps repricing. Express risk through quality and short duration rather than naked index beta.",
  corporate: [
    "NVIDIA (NVDA): Q2 FY27 revenue $96.2bn (+106% y/y, +18% q/q); data-centre revenue a record $89.0bn (+117% y/y); non-GAAP EPS $2.22; gross margin 75%. Guided ~70% revenue growth for the coming year, roughly double consensus. The quarter's headline event — the stock ran ~8% to $228 before giving back 4.6% on Friday.",
    "Hyperscaler capex signal: management framed top-5 hyperscaler capex rising to ~$1.3tn in 2027 from ~$800bn in 2026, underwriting the whole AI-infrastructure chain — the single most important forward number in the print.",
    "Chips and software also reported: Marvell (MRVL), CrowdStrike (CRWD) and Salesforce (CRM) rounded out a heavy AI-adjacent earnings slate.",
    "AI-buildout politics: a two-week pullback in the AI trade was driven partly by local and political pushback against data-centre buildouts in Texas, Tennessee, Pennsylvania and New York — a swing factor for power, land and semi names.",
    "Mega-cap divergence: Microsoft (+6.3%) and Meta (+5.1%) led while Tesla (−3.9%) lagged, keeping the 'broadening beyond NVDA' theme intact.",
    "On deck: a light post-Q2 week carrying the AI bellwether — Broadcom (AVGO) reports Wednesday 2 September after the close, with consensus revenue ~$29.4bn and AI semis guided near $16bn (+200% y/y)."
  ],
  macro: [
    "US July PCE (28 Aug): headline 3.7% y/y (+0.2% m/m, above the +0.1% estimate); core 3.3% y/y (+0.2% m/m). Services +0.3%, goods −0.1%. Net: inflation is sticky in services — the hawkish case for the Fed, and the proximate cause of the 2Y repricing.",
    "US Q2 GDP, second estimate (26 Aug): +1.5% annualised, unchanged from the advance reading, with consumer, exports and investment up and government spending down. Net: resilient but sub-2% — soft enough to slow, firm enough for the Fed to hold hawkish.",
    "US initial jobless claims (week to 23 Aug): 203k, down 4k and below the 208k estimate. Net: no crack in the labour market, which removes the Fed's excuse to cut.",
    "Policy backdrop: Fed funds held at 3.50–3.75% since late 2025 (effective ~3.63%); Chair Warsh's hawkish Jackson Hole tone reinforced higher-for-longer. Forwards imply a ~3.90% year-end rate. Net: the next move is as likely to be a hike as a cut, and the whole rate-cut trade has been repriced out.",
    "Prediction markets (Polymarket, late August): September FOMC 'no change' ~71%, a September hike ~40%, at least one 25 bp hike in 2026 ~67.5%. Net: the crowd, like the bond market, has abandoned the cut narrative."
  ],
  geo: [
    "Strait of Hormuz and the Middle East: the strait remains effectively closed since the US/Israel–Iran conflict that began 28 February 2026 — roughly a fifth of global oil once transited it. This week, hopes of a reopening and de-escalation signals let crude's war premium deflate (Brent −6.7% to $88.10), even as sporadic shipping attacks and a UAE suspension of financial dealings with Iran kept tail risk alive. The EIA still sees regional output below pre-conflict levels until early 2027 and Brent averaging ~$87 in 2026.",
    "Russia–Ukraine: still deadlocked in the roughly four-and-a-half-year war. Kyiv handed Washington fresh proposals and Presidents Trump and Zelensky discussed reviving talks, but Ukrainian intelligence said on 18 August that Russia shows no readiness for a ceasefire. No near-term breakthrough expected.",
    "Read: two live tails — an oil re-spike if Hormuz talks fail, and a hawkish Fed surprise — both point the same way. Keep some energy and inflation optionality alongside short-duration ballast.",
    "Next catalysts: China's official August PMIs on Monday 31 August, the US ISM double-header (manufacturing Tuesday, services Thursday), RBNZ and Bank of Canada decisions on Wednesday, Broadcom's print Wednesday after the close, and US August payrolls on Friday 4 September — the first read since July's shock −23k contraction."
  ],
  recall: {
    "window": "Mon 24 Aug – Sun 30 Aug 2026",
    "readings": [
      {
        "t": "Dario Defends Himself, Datacenter Panic, AI Doomer Trap, Senate Toss-Up",
        "d": "28 Aug",
        "g": "Technology/AI",
        "u": "https://www.youtube.com/watch?v=Sij_v-mcZXQ",
        "x": "Besties are back! The podcast features the return of the core group — Chamath Palihapitiya, Jason Calacanis, David Sacks and David Friedberg — assembled to work through a long and contentious list of topics. Dario's two-part essay: regulatory capture, doomerism, and the data center backlash Dario Amodei of Anthropic responded to claims made by Gavin Baker that the company internally believed it would eventually be the world's only private AI…"
      }
    ],
    "cards": []
  },
  ahead: {
    published: "Sunday 30 August 2026",
    weekOf: "Mon 31 August 2026",
    pdf: "reports/2026-08-28-ahead.pdf",
    pdfName: "Global Week Ahead_2026-08-30.pdf",
    tldr: "A quiet-looking calendar with a loud ending. The week builds through China PMIs (Mon–Thu), eurozone flash CPI (Tue) and the US ISM double-header (manufacturing Tue, services Thu), then two central-bank decisions on Wednesday (RBNZ and Bank of Canada). But everything routes to Friday's US August jobs report — the first read since July's shock −23k contraction. With Warsh's Fed leaning against inflation, a second soft payroll would slam the growth-scare and hike-risk narratives together. Broadcom (Wed after the close) is the AI bellwether inside it. Trade the data, and respect thin pre-Labor-Day liquidity into Friday.",
    setup: [
      ["S&P 500", "7,711.76", "−0.25%", "First winning week in three (+0.5%); futures soft after hawkish Warsh"],
      ["Nasdaq Comp.", "26,402.42", "−0.52%", "Semis (NVDA, INTC) led the Friday slide; +0.9% on the week"],
      ["Dow Jones Ind.", "53,559.99", "−0.02%", "Flat Friday (−9.45 pts); +0.5% on the week — the most resilient of the three"],
      ["US 10Y yield", "4.66%", "+2 bp", "Backed up into Jackson Hole; the long end is the key tell"],
      ["US 2Y yield", "4.19%", "+2 bp", "2s10s +47 bp; hike risk keeps the front end sticky"],
      ["Dollar (DXY)", "99.71", "+0.3%", "Bounced off session lows; payrolls is the swing factor"],
      ["Gold (spot)", "≈$4,460", "+1.8%", "Record vicinity; inflation-worry plus haven bid — confirm live"],
      ["Silver (spot)", "≈$65.6", "+1.3%", "Riding gold; industrial and monetary tailwind"],
      ["WTI crude", "$83.11", "−0.1%", "Geopolitical supply premium rebuilding"],
      ["Brent crude", "$88.22", "−0.3%", "Hormuz and Russian-refinery strikes on the radar"],
      ["Bitcoin", "≈$77,000", "−5%", "Broke from ~$81k; risk-off tell — watch $74k"]
    ],
    setupNote: "Levels are Friday 28 August closes with the day move shown. Index closes per CNBC/Yahoo/24-7 Wall St; UST yields per US Treasury (26 August official, which is why they differ slightly from the Week in Review's 28 August marks); DXY, gold, silver, oil and Bitcoin per Trading Economics / Convex / RIO Times (28 August). Gold and Bitcoin prints varied across venues — confirm live before acting.",
    themes: [
      {
        t: "Payrolls Friday — the growth scare meets a hawkish Fed",
        b: "July stunned with a reported −23k in nonfarm payrolls versus consensus near +80k, with prior months revised lower; unemployment sits at ~4.2%. August is the swing print: stabilisation keeps the soft landing alive, a second negative number forces the market to reconcile a slowing labour market with a Fed Chair who has just said inflation is running too high.",
        w: "A weak headline that also carries hot average hourly earnings is the worst mix for duration and equities — it validates Quad 3. Barbell quality and defensives with gold, and keep dry powder for the knee-jerk into a thin pre-holiday tape."
      },
      {
        t: "The Warsh Fed and a live September hike",
        b: "Post-Jackson Hole, Fed-funds pricing swung to roughly 57% odds of a September hike (CNBC), even as Polymarket showed ~68% no-change and ~31% +25 bp for the 16 September FOMC. Either way the cut narrative is dead for now, and most economist forecasts push the next cut into 2027.",
        w: "This is a rates-up, dollar-supported regime until the data break it. Long-duration Treasuries and unprofitable growth are the pressure points; financials and cash-flow compounders screen better."
      },
      {
        t: "Long-end yields at the 5.25% regime line",
        b: "The 30Y closed at 5.18% and the 20Y at 5.17%, pressing Hedgeye's 5.25% 'regime-switch' threshold. A decisive break above it has historically flipped the correlation regime and hit multiples.",
        w: "Every ISM prices-paid print and the average-hourly-earnings line feeds the long end. A 30Y through 5.25% is the signal to de-gross duration-sensitive equities — long-duration tech, REITs and utilities."
      },
      {
        t: "China's pulse — four PMIs in four days",
        b: "Official manufacturing PMI has hovered at or below 50 (49.2 last). This week stacks the NBS reading (Mon), Caixin manufacturing (Tue) and Caixin services (Thu). China momentum sets the tone for AUD/NZD, copper and the broader reflation debate.",
        w: "A cluster above 50 revives the commodity-reflation trade (miners, energy, EM FX). Sub-50 across the board pressures AUD, NZD and industrial metals into the Asia opens."
      },
      {
        t: "Broadcom carries the AI tape",
        b: "AVGO reports Wednesday after the US close. Consensus is revenue ~$29.4bn and non-GAAP EPS ~$3.24, roughly double year-on-year, with AI semiconductor revenue guided near $16bn (+200% y/y) — now more than half of revenue. After Friday's semis wobble it is the single biggest single-stock catalyst of the week.",
        w: "Custom-ASIC backlog and the AI-revenue guide are the tells. A beat-and-raise steadies the Nasdaq and Asia tech (TSMC, SK Hynix); a soft AI number re-opens the semis drawdown."
      },
      {
        t: "Energy's geopolitical bid",
        b: "Ukrainian drone strikes on Russian refineries (Ryazan hit 27 August) and Strait of Hormuz and Red Sea tension are rebuilding a supply premium just as the Bank of Canada flags oil as a policy complication. Brent holds ~$88 and WTI ~$83.",
        w: "An energy spike is stagflation fuel in a Quad 3 tape — bullish energy equities, bearish rate-sensitives. Watch the OPEC+ meeting expected Sunday 6 September as next-weekend risk."
      }
    ],
    calendar: [
      ["Mon 31", "China NBS manufacturing and non-manufacturing PMI (Aug), 09:30 — manufacturing prior 49.2. Germany flash CPI/HICP (Aug), 20:00 — prior +2.8% y/y.", "First read on China momentum; sub-50 pressures the yuan and commodity FX. Germany is the curtain-raiser for Tuesday's euro-area flash"],
      ["Tue 1", "Caixin China manufacturing PMI (Aug), 09:45 — prior 50.9. Germany retail sales (Jul), 14:00. Eurozone flash HICP (Aug) incl. core, 17:00 — prior headline +2.9%, core +2.5%. US ISM Manufacturing (Aug), 22:00 — prior 55.6.", "Sticky euro-area core keeps the ECB on hold; the ISM prices-paid sub-index is the week's first inflation tell"],
      ["Wed 2", "Australia Q2 GDP, 09:30. RBNZ cash-rate decision, 10:00 (2.50%) and press conference, 11:00. US ADP private payrolls (Aug), 20:15 — prior +44k. Bank of Canada decision, 21:45 (2.25%) and press conference, 22:30. Broadcom Q3 after the US close.", "Two central banks, the payrolls preview and the AI bellwether all land on the same day — the week's fulcrum"],
      ["Thu 3", "Australia trade balance (Jul), 09:30. Caixin China services PMI (Aug), 09:45 — prior 50.1. Switzerland CPI (Aug) 14:30 and Q2 GDP 15:00. BoE Inflation Report / MPC hearings, 16:30. US ISM Services (Aug), 22:00 — prior 54.1.", "Services is the swing factor for China growth; US ISM services covers ~80% of GDP and is the pre-payrolls inflation tell"],
      ["Fri 4", "Eurozone retail sales (Jul), 17:00. Canada employment (Aug), 20:30 — unemployment prior ~6.4%. US NONFARM PAYROLLS (Aug) plus unemployment and average hourly earnings, 20:30.", "The event. July printed −23k with unemployment ~4.2%; a second contraction collides with a Fed leaning hawkish, into thin pre-holiday liquidity"]
    ],
    cbs: [
      ["RBNZ", "Cash-rate decision, Wed 2 Sep 10:00 (press conference 11:00)", "Rate at 2.50% after a surprise July hike — the first since Nov 2025; another +25 bp is live, a hawkish hold the alternative", "Does re-accelerating inflation force a second consecutive hike? NZD-positive on a hike"],
      ["Bank of Canada", "Decision, Wed 2 Sep 21:45 (Macklem press conference 22:30)", "Rate at 2.25%; a hold is the base case given the oil-price complication", "How does Macklem balance growth softness against imported energy inflation?"],
      ["Bank of England", "MPC Inflation Report hearings in Parliament, Thu 3 Sep 16:30", "Not a decision — testimony only", "A hawkish tone on sticky UK inflation supports sterling"],
      ["US Federal Reserve", "No meeting this week; next decision 16 September", "Post-Warsh pricing: ~57% September-hike odds (CNBC) versus Polymarket's ~31% +25 bp and ~68% hold", "Every US data point this week feeds the September call — the cut narrative is already dead"],
      ["ECB", "Next decision expected ~10–11 September", "Tuesday's flash CPI is the key input", "A hot core print keeps the ECB firmly on hold"]
    ],
    earnings: [
      ["Wed 2", "Broadcom (AVGO, after the close)", "Consensus revenue ~$29.4bn and non-GAAP EPS ~$3.24 (roughly 2x y/y); AI semis guided ~$16bn (+200% y/y), now more than half of revenue. Sustained AI backlog, custom-ASIC traction and a clean raise are what the market wants"],
      ["Tue 1", "NIO (NIO, pre-open)", "EPS estimate −$0.07. Deliveries, gross-margin trajectory and cash burn amid the China EV price war"],
      ["Thu 3", "DocuSign (DOCU, after the close)", "EPS estimate $1.09 on revenue ~$867m. Billings and net retention are the tells on software demand"],
      ["Through the week", "Enterprise-software and hardware tail names around Tue–Wed", "A light post-Q2 slate — confirm the live earnings calendar"]
    ],
    catalysts: [
      "US August nonfarm payrolls, Friday 4 September — the week's capstone and the first read since July's −23k shock.",
      "US ISM Manufacturing (Tue) and ISM Services (Thu) — the prices-paid sub-indices are the inflation tells ahead of payrolls.",
      "China PMI cluster, Monday through Thursday — NBS manufacturing, Caixin manufacturing and Caixin services.",
      "Eurozone flash HICP, Tuesday — the key input into the ~10–11 September ECB decision.",
      "Broadcom Q3, Wednesday after the close — the AI read-through for the Nasdaq and Asia semis.",
      "Central banks: RBNZ and Bank of Canada, both Wednesday.",
      "Liquidity and seasonality: US markets are open all week (Labor Day is Mon 7 Sep), but Friday's payrolls lands into thin pre-holiday liquidity, amplifying the move.",
      "OPEC+ output meeting expected Sunday 6 September — position energy before Friday's close."
    ],
    regime: {
      label: "#Quad 3 — growth slowing, inflation accelerating",
      note: "The pivot from Quad 1 dates to mid-February 2026. In Quad 3 the winners are gold, energy, commodities and defensives; the losers are long-duration bonds and unprofitable growth. The Dollar–S&P inverse correlation that defined the regime has been breaking down, which Hedgeye flags as a late-cycle tell. Ranges below are analytically derived and anchored to Friday closes and Hedgeye's public Quad-3 commentary (late August 2026) — the live Hedgeye Risk Range™ product was not accessible in this run. Confirm exact bands and TREND signals before acting.",
      ranges: [
        ["S&P 500", "7,585 – 7,825", "Bullish"],
        ["Nasdaq Comp", "25,900 – 26,850", "Bullish"],
        ["UST 10Y Yield", "4.55 – 4.80", "Bullish (yields higher)"],
        ["US Dollar (DXY)", "98.9 – 100.6", "Neutral"],
        ["Gold (spot)", "4,300 – 4,660", "Bullish"],
        ["Silver (spot)", "61.5 – 68.0", "Bullish"],
        ["WTI Crude", "79 – 86", "Neutral"],
        ["Brent Crude", "84 – 91", "Neutral"],
        ["Bitcoin", "73,500 – 88,000", "Bearish"]
      ],
      where: "Quad 3 holds while the inflation gauges — ISM prices-paid, average hourly earnings, the flash CPIs — stay firm and the long end presses higher. Reference marks: S&P 7,712 mid-range, 10Y 4.66%, DXY 99.71, gold ~$4,460 near the top of its band, Bitcoin ~$77,000 in the lower half of a bearish range. What would change it: payrolls collapsing hard enough to flip the Fed dovish would rotate the map toward a growth-scare Quad 4; conversely a decisive 30Y break above 5.25% would trigger a broader multiple de-rate. Constructive into mid-September, then respect the seasonal fade."
    },
    positioning: "Crowded and stretched: gold and silver are extended after a record run — right regime, but stretched, and expect sharp two-way moves around payrolls. AI semis remain a crowded long that wobbled on Friday; Broadcom is the referendum. Duration: long Treasuries are the consensus pain trade if inflation prints hot, with the 30Y at 5.18% the tell — underweight long-duration equities (long-duration tech, REITs, utilities) until the long end settles. Vol and credit: the Friday risk-off and a thin pre-holiday Friday argue for a firmer vol bid into payrolls; credit spreads have been benign, so watch for any widening as the first crack. Owning optionality into Friday is cheap insurance. The tells to watch: (1) ISM prices-paid and average hourly earnings for inflation; (2) the 30Y versus 5.25%; (3) Broadcom's AI guide for the Nasdaq; (4) China PMIs for AUD/NZD and copper; (5) Bitcoin at $74k as the risk-appetite thermometer.",
    geo: [
      "Energy supply-shock risk: Ukrainian drone strikes on Russian refineries (Ryazan hit 27 August) are described as the most severe refining crisis in years; combined with Strait of Hormuz and Red Sea tension and Iran–Oman passage talks, the oil supply premium is rebuilding.",
      "Trade and tariffs: Washington has doubled tariffs on India over Russian-oil purchases, with the risk of similar action on China — the largest buyer of Russian crude — a potential shock to global flows and a fresh inflation impulse.",
      "Fed independence: the Warsh-led Fed and its inflation-first framing keep policy-credibility questions live for the dollar and the long end.",
      "Prediction markets (Polymarket): 16 September FOMC ~68% hold, ~31% +25 bp, ~1% cut; year-end hike odds have been rising, with most economists now seeing no cut before 2027. Confirm live odds before acting."
    ],
    asia: "Asia likely opens cautious-to-mixed. The backdrop: a softer Friday Wall Street led by semis, a hawkish-Warsh bid to the dollar and US yields, and gold near records. The first hard tell is China's NBS PMI at 09:30 HKT on Monday — a sub-50 cluster pressures AUD, NZD and Chinese equities, while a surprise back above 50 supports miners and the reflation trade. Watch Asia semis (TSMC, SK Hynix, Samsung) to follow through on Friday's NVDA and INTC weakness, and the yen and JGB complex for spillover from higher US long-end yields. Gold's strength is a tailwind for Australian and Chinese miners. Expect thin conviction until Tuesday's ISM and, ultimately, Friday's payrolls.",
    beyond: [
      "US Open tennis (New York): quarter- and semi-finals run through the week at Flushing Meadows; the women's final is Sat 12 September and the men's Sun 13 September.",
      "Formula 1 — Italian Grand Prix at Monza: race weekend building to Sunday 6 September, a marquee tifosi event and a read on luxury and auto sponsorship sentiment.",
      "Apple: the annual iPhone event is expected the following week (~8–9 September; iPhone 18 line and a rumoured foldable 'iPhone Ultra') — date unconfirmed, but a supply-chain and Asia-tech catalyst on the horizon.",
      "Sport and calendar: US college football week 1 is under way and the NFL season kicks off Thursday 10 September. US Labor Day is Monday 7 September — markets trade normally this week."
    ]
  }
}
,
{
  id: "2026-09-04",
  weekEnding: "Friday 4 September 2026",
  published: "Saturday 5 September 2026",
  pdf: "reports/2026-09-04.pdf",
  pdfName: "Global Week in Review_2026-09-05.pdf",
  tldr: "The week the market stopped fearing a cut and started fearing a hike. A blowout August payrolls print (+162k vs +53k expected) on Friday — layered on a 1 September US strike on Iran that shoved Brent back above $95 — flipped the September FOMC into a live rate increase. Indices finished roughly flat (S&P +0.1%, Nasdaq +0.4%, Dow −0.3%) but the internals screamed Quad 3: yields up, gold and energy bid, long-duration megacap software sold. Leadership is rotating out of ‘lower rates’ and into ‘inflation protection’ — and the Mag7 fractured cleanly along the rate axis, with NVDA +5.9% and META +6.7% against MSFT −2.7%, AMZN −3.0% and GOOGL −2.3%.",
  metrics: {
    spx: 7718.60,
    nasdaq: 26506.99,
    dow: 53414.25,
    us10y: 4.78,
    us2y: 4.37,
    dxy: 98.99,
    gold: 4470.66,
    silver: 66.15,
    brent: 95.23,
    wti: 91.20,
    btc: 79529,
    vix: 14.53
  },
  snapshot: [
    ["S&P 500", "7,718.60", "+0.1%", "Record-zone but slipped Friday on hot jobs; above 50- and 200-day"],
    ["Nasdaq Composite", "26,506.99", "+0.4%", "Week's leader; carried by Nvidia and Meta"],
    ["Dow Jones Ind.", "53,414.25", "−0.3%", "Cyclical/value laggard; −272 pts on Friday"],
    ["US 10Y Treasury", "4.78%", "+5 bp", "Backed up all week; bear-steepening on payrolls"],
    ["US 2Y Treasury", "4.37%", "+3 bp", "Front end reprices a live September hike; 2s10s ≈ +41 bp"],
    ["Dollar (DXY)", "98.99", "−0.7%", "Softer despite a hawkish Fed — Waller dovish mid-week"],
    ["Gold (spot)", "$4,470.66", "+0.2%", "Consolidating; well off the January record ($5,597)"],
    ["Silver (spot)", "$66.15", "≈flat", "Elevated; −1.2% Friday with the metals fade"],
    ["Brent crude", "$95.23", "higher", "Up on US–Iran strike risk premium. Direction only — weekly % unconfirmed"],
    ["WTI crude", "$91.20", "higher", "Tracks Brent; feeds the inflation narrative. Direction only"],
    ["Bitcoin", "$79,529", "+2.2%", "Bounced off the mid-70s; still −9.1% YTD"],
    ["VIX", "14.53", "+0.10 pt", "Calm tape — no fear priced despite the hawkish shift"]
  ],
  themes: [
    {
      t: "① The Fed pivot that went into reverse",
      b: "August nonfarm payrolls landed at +162,000 against a +53,000 consensus — the strongest print since March — with unemployment steady at 4.1%. Fed-funds futures swung to price a live increase at the 15–16 September meeting (CME ~58%; Polymarket 70–72%). The two-year yield jumped and equities gave back Friday's session.",
      r: "Duration is the enemy. In a tape repricing toward a hike you fund longs by shortening duration everywhere — trim the most rate-sensitive megacap software, keep the energy and gold that work when the front end backs up. Fade rallies in rate-cut proxies: long-duration tech, homebuilders, small caps."
    },
    {
      t: "② Geopolitics put a floor under oil, and a bid under inflation",
      b: "A 1 September US strike on Iranian targets reignited Gulf conflict fears and pushed Brent back above $95. That is the through-line of the whole week: a higher oil strip feeds headline inflation, which feeds the hawkish Fed, which feeds the yield back-up. Energy equities are discounting it — the sector is up roughly 42% YTD and led again this week.",
      r: "Own the risk premium, don't rent it. Energy is both a geopolitical hedge and a Quad-3 winner — the two theses stack. But size for reversal risk: a de-escalation headline is the obvious pain trade for anyone chasing crude at the highs."
    },
    {
      t: "③ Quad 3 is winning the growth-versus-inflation battle",
      b: "The running Quad 2 (growth and inflation both accelerating) versus Quad 3 (growth slowing, inflation accelerating) debate tilted toward Quad 3 this week. The tell is the cross-asset scoreboard: gold and energy bid, the dollar soft, yields up, and long-duration equity leadership narrowing to a handful of AI names. That is textbook late-cycle, sticky-inflation positioning.",
      r: "Quad 3 playbook: overweight energy, precious metals and commodity-linked value; underweight consumer discretionary, long-duration growth at the margin and Treasuries. Cash yields near 4% are a legitimate competing asset — you are paid to wait."
    },
    {
      t: "④ Megacap dispersion — the Mag7 is now three trades, not one",
      b: "The index looked flat; the megacaps did not. Nvidia (+5.9%) and Meta (+6.7%) powered ahead on AI-demand momentum, while Microsoft (−2.7%), Amazon (−3.0%) and Alphabet (−2.3%) faded. Broadcom's blowout reinforced that the market will pay up for the compute-supply complex specifically, not big tech broadly.",
      r: "Stop trading ‘the Mag7’ as a basket. The AI-silicon leg (Nvidia, Broadcom, Meta's capex pull-through) is a different animal from the rate-sensitive software and cloud leg. In a hiking scare, own the earnings-momentum silicon and be selective on the multiple-driven software."
    },
    {
      t: "⑤ Calm tape, hawkish shift — a coiled spring",
      b: "The dissonance to respect: the VIX closed at 14.53 and credit stayed tight even as the rate outlook turned hawkish. Markets are treating a hike as manageable rather than threatening. That is either correct — a strong-economy hike — or complacent. Next week's CPI is the referee.",
      r: "Cheap optionality is cheap for a reason worth buying. With the VIX in the mid-teens into a live CPI (11 Sep) and FOMC (15–16 Sep), downside hedges and put-spread collars are inexpensive relative to the event risk. Don't confuse a quiet tape with a settled one."
    },
    {
      t: "⑥ The curve bear-steepened, and the dollar didn't follow",
      b: "The 10Y rose ~5 bp to 4.78% and the 2Y ~3 bp to 4.37%, leaving 2s10s near +41 bp — orderly front-end repricing rather than a long-end tantrum, with HY and IG spreads contained. Yet the dollar fell ~0.7% to 98.99, knocked mid-week by dovish remarks from Governor Waller before Friday's jobs data re-firmed hike odds.",
      r: "A hawkish Fed with a softer dollar is the market pricing sticky inflation as structurally dollar-negative — and it is the same trade that keeps gold resilient at $4,470. Watch the dollar for confirmation: if it fails to rally on a hot CPI, the inflation-protection complex gets a second leg."
    }
  ],
  regime: {
    label: "Quad 3 — growth decelerating, inflation re-accelerating",
    note: "This week's mix — a hot labour print but oil-led inflation and a Fed repricing toward a hike — kept the Quad-3 bias intact, with the open question whether Q4 growth slows further (deeper Quad 3) or re-accelerates into Quad 2. The playbook favours energy, gold and commodity value, and fades long-duration growth, Treasuries and rate-cut proxies. Verification note: Hedgeye's published immediate-term Risk Ranges and its current-week Quad nowcast are subscriber-gated and could not be quoted to primary-source standard for the week ending 4 September 2026. The regime read applies Hedgeye's public GIP framework to this week's verified data; the ranges below are desk-derived from realised price and volatility and the 50-/200-day trend — indicative, not official Hedgeye levels.",
    ranges: [
      ["S&P 500", "7,630 – 7,815", "Bullish"],
      ["Nasdaq Comp", "26,050 – 26,780", "Bullish"],
      ["US 10Y Yield", "4.68 – 4.86", "Bullish (yields higher)"],
      ["Gold (spot)", "4,360 – 4,560", "Bullish"],
      ["Brent crude", "91 – 99", "Bullish"],
      ["Bitcoin", "75,500 – 83,500", "Bearish"],
      ["Dollar (DXY)", "98.2 – 99.9", "Neutral"],
      ["VIX", "13.2 – 17.8", "Bearish (vol low)"]
    ],
    where: "The S&P sits mid-range and above both its 50-day (~7,584) and 200-day (~7,137) — a bullish TREND that argues against chasing weakness but also against paying up near the top of the band. The actionable edges are elsewhere: yields biased higher, gold and Brent bullish-TREND, and Bitcoin still bearish-TREND (red YTD at −9.1%, capped in the low-80s). With the VIX pinned in the mid-teens ahead of CPI and the FOMC, the asymmetry favours buying protection over buying beta. What changes it: a core CPI at or above +0.4% m/m, or a 10Y that closes and holds above 4.85%, turns the regime hostile and breaks the equity range low; a soft core that pulls the 10Y back under 4.65% greenlights a 16 September cut, broadens the tape beyond megacap and sends gold to new highs. Reminder — these are indicative, desk-derived ranges, not official Hedgeye levels."
  },
  mag7: [
    { tk: "NVDA", n: "Nvidia", p: 230.36, wk: "+5.9%", wkPct: 5.9, cap: "$5.58T", pe: "29.0" },
    { tk: "AAPL", n: "Apple", p: 319.97, wk: "+0.1%", wkPct: 0.1, cap: "$4.70T", pe: "36.5" },
    { tk: "GOOGL", n: "Alphabet", p: 338.46, wk: "−2.3%", wkPct: -2.3, cap: "$4.10T", pe: "16.8" },
    { tk: "MSFT", n: "Microsoft", p: 499.70, wk: "−2.7%", wkPct: -2.7, cap: "$3.71T", pe: "27.8" },
    { tk: "AMZN", n: "Amazon", p: 258.51, wk: "−3.0%", wkPct: -3.0, cap: "$2.78T", pe: "20.5" },
    { tk: "TSLA", n: "Tesla", p: 354.08, wk: "+1.5%", wkPct: 1.5, cap: "$1.40T", pe: "~300" },
    { tk: "META", n: "Meta", p: 616.77, wk: "+6.7%", wkPct: 6.7, cap: "$1.57T", pe: "22.9" }
  ],
  mag7Read: "The megacap tape fractured cleanly along the rate axis. The two winners — Nvidia (+5.9% to $230.36) and Meta (+6.7% to $616.77, the week's best) — are the AI-capex complex, where earnings are compounding faster than the discount rate can hurt them. The three losers — Microsoft (−2.7% to $499.70), Amazon (−3.0% to $258.51, the week's laggard on capex and free-cash-flow scrutiny) and Alphabet (−2.3% to $338.46) — are the longer-duration cloud and platform names most exposed to a higher-for-longer front end. Apple sat flat (+0.1% to $319.97) as defensive ballast, and Tesla added 1.5% to $354.08 after spiking to ~$376 intra-week, still trading on a ~300x narrative multiple rather than earnings. The positioning signal: in a hiking scare the market pays for realised AI demand — the silicon and the platforms funding it — not for the promise of cheaper money. Concentration risk is rising, not falling; a narrower leadership tape is a more fragile one. Data note: prices are actual regular-session closes for Friday 4 September and the week column is a true Friday-to-Friday close-over-close move, both taken from the market-data feed (EOD series). Market caps and trailing P/E are as reported in the source document and are approximate; Alphabet's feed-derived −2.3% differs marginally from the document's −2.4% on rounding.",
  sectors: [
    { n: "Basic Materials", m: "+0.89% Fri", pct: 0.89, d: "Commodity-linked value bid with the Quad-3 rotation" },
    { n: "Technology", m: "+0.76% Fri", pct: 0.76, d: "AI-silicon strength offset the rate-sensitive software fade" },
    { n: "Industrials", m: "+0.58% Fri", pct: 0.58, d: "Firmer relative momentum as tech's pace moderated" },
    { n: "Consumer Cyclical", m: "+0.45% Fri", pct: 0.45, d: "Held up on the strong jobs print, but soft on the week" },
    { n: "Utilities", m: "+0.35% Fri", pct: 0.35, d: "Modest bid despite the yield back-up" },
    { n: "Financials", m: "+0.28% Fri", pct: 0.28, d: "A steeper curve is the offset to hike risk" },
    { n: "Energy", m: "−0.05% Fri", pct: -0.05, d: "Flat Friday after leading the week; ~+42% YTD, 2026's standout" },
    { n: "Healthcare", m: "−0.27% Fri", pct: -0.27, d: "Diversifier with improving relative momentum" },
    { n: "Consumer Defensive", m: "−0.31% Fri", pct: -0.31, d: "No haven bid — this was a rate day, not a fear day" },
    { n: "Real Estate", m: "−0.37% Fri", pct: -0.37, d: "Duration pain as the front end repriced" },
    { n: "Communication Services", m: "−1.98% Fri", pct: -1.98, d: "Biggest laggard; Alphabet's fade dominated the group" }
  ],
  sectorsRead: "The rotation is out of ‘duration and rate cuts’ and into ‘real assets and pricing power’. Energy was the clear weekly winner — up on the Iran-driven crude spike and sitting roughly +42% YTD, the standout sector of 2026 — with healthcare, industrials and financials showing firmer relative momentum as tech's pace moderated. The laggards were the rate-cut proxies: long-duration software and cloud megacaps, real estate and consumer discretionary. Positioning read: overweight energy and commodity value, use relative strength in healthcare and industrials as the diversifier, and keep tech exposure concentrated in the AI-silicon winners rather than the rate-sensitive platform names. This is a broadening, not a single new leader — respect the breadth. Data note: the source document described sector leadership qualitatively without publishing sector percentages this week, so the figures above are Friday 4 September equal-weighted NYSE sector average changes taken from the market-data feed; they capture the breadth of the tape rather than cap-weighted index moves, which is why Communication Services (Alphabet-dominated on a cap-weighted basis) screens weakest and Technology screens positive.",
  positioning: "The VIX closed at 14.53, up a rounding-error 0.10 point and squarely in the complacent mid-teens. Realised volatility stayed low through the payrolls shock, and credit — both high-yield and investment-grade — held tight with no meaningful spread widening. That is a market pricing a September hike as a strong-economy adjustment rather than a policy error. Net read: positioning is offside for a surprise. Vol is cheap into a genuinely two-sided CPI (11 September) and FOMC (15–16 September); a hot inflation print into a hawkish Fed is precisely the setup the mid-teens VIX is not paying attention to. This is a week to carry hedges you were effectively given for free — put spreads and collars on beta longs — rather than to add naked risk. If CPI cools you lose a little premium; if it runs hot into a hike, the convexity pays. The rates stress is real but orderly: the 2Y at 4.37% is the highest since January 2025 and 2s10s at ~+41 bp is a market pricing less easing, not disorder. Express risk through quality, short duration and inflation-linked real assets rather than index beta.",
  corporate: [
    "Broadcom (AVGO): Q3 FY26 on 2 September was a blowout — revenue $29.59bn (+86% y/y) versus $29.36bn expected, adjusted EPS $3.32 versus $3.24, and net income more than tripled to $13.09bn. Custom AI silicon for Google, Meta and OpenAI is the engine, and the clearest read-through that the AI-compute buildout is still accelerating.",
    "Nvidia (NVDA): FQ2 FY27 (reported 26 August) revenue $96.2bn (+106% y/y) and non-GAAP EPS $2.22 (+120%); the momentum carried into this week, with the stock up 5.9% and leading the megacaps.",
    "Apple (AAPL): iPhone revenue improved ~22% in the June quarter, easing the ‘Apple is missing AI’ worry into its autumn product cycle — the iPhone 18 event lands Wednesday 9 September.",
    "Microsoft (MSFT): closed a record fiscal year — Q4 revenue ~$90bn (+18%) with Azure crossing a ~$100bn annual run-rate — but the stock still faded 2.7% with the rate-sensitive cohort.",
    "Tesla (TSLA): record deliveries, but operating income compressed under an AI and robotics capex wave — a growth-for-margin trade the market is, for now, willing to fund.",
    "Also on the calendar: Dell and Palo Alto Networks, with enterprise-AI and security demand the through-line of the reporting slate.",
    "On deck: Oracle and Adobe both report Thursday 10 September after the close — together a clean referendum on AI-infrastructure demand versus AI-software monetisation."
  ],
  macro: [
    "US August nonfarm payrolls (4 Sep): +162k versus +53k expected, the strongest since March, with unemployment steady at 4.1%. Net: the labour market is not cracking, which removes the Fed's cover to cut and hands the hawks the initiative. Short-end yields jumped and September hike odds re-firmed.",
    "US Fed commentary (Governor Waller, mid-week): dovish enough to knock hike odds back toward 50% intra-week before payrolls reversed it. Net: the committee is genuinely split, and CPI — not jobs — becomes the swing vote.",
    "Rates and credit: the curve bear-steepened, with the 10Y +5 bp to 4.78% and the 2Y +3 bp to 4.37%, leaving 2s10s near +41 bp. HY and IG spreads stayed contained. Net: orderly front-end repricing of hike odds, not a long-end tantrum.",
    "Currencies: DXY fell ~0.7% to 98.99 in a week the Fed turned more hawkish — the mid-week Waller effect, plus a market increasingly pricing sticky inflation as structurally dollar-negative. Net: gold's resilience at $4,470 is the mirror image of the same trade.",
    "Energy and inflation channel: the Iran-driven jump in Brent above $95 is itself a macro input, feeding directly into forward headline-inflation expectations. Net: supply-side inflation is back on the table just as the Fed contemplates tightening — the least comfortable combination for duration.",
    "Ahead: US CPI on 11 September then the FOMC on 15–16 September are the two releases that decide the regime. Net: a hot CPI likely seals a hike and extends the yield back-up; a soft CPI reopens the door to patience and would relieve long-duration equities."
  ],
  geo: [
    "US–Iran (1 September strike): US strikes on Iranian targets ended six months of simmering tension and pushed Brent above $90–95. The energy risk premium is now the dominant cross-asset driver — it links directly to inflation, yields and the Fed path.",
    "Iran–Ukraine spillover: tensions trace to Tehran's military support for Russia; Ukrainian strikes on Iranian-linked cargo in the Caspian in late July drew Iranian retaliation vows — a second front keeping the risk premium elevated.",
    "Prediction markets: Polymarket priced a 70–72% chance of a September Fed hike by week-end (~55% for 25 bp, ~26% for 50 bp or more), running hotter than CME futures at ~58%. The crowd is leaning hawkish and, notably, pricing tail risk of a larger move.",
    "Read: geopolitics and monetary policy have fused into a single trade — Iran to oil to inflation to the Fed. The cleanest expression remains long energy as a joint hedge; the fattest tail risk is a de-escalation headline that unwinds the crude premium and the hike odds together. Watch the wires, not just the data.",
    "Next catalysts: US markets closed Monday 7 September for Labor Day; China CPI/PPI Wednesday; the ECB decision and US PPI Thursday; Apple's iPhone event Wednesday US time; and US August CPI on Friday 11 September — the last major data before the 16 September FOMC."
  ]
,
  recall: {
    "window": "Mon 31 Aug – Sun 6 Sep 2026",
    "readings": [
      {
        "t": "FULL INTERVIEW: Scott Bessent Joins Larry Kudlow for G20 Fireside Chat on Global Economy | AC1G",
        "d": "3 Sep",
        "g": "Economics",
        "u": "https://www.youtube.com/watch?v=gVzsmYqjB9Q",
        "x": "United States Economic Growth and Performance The American economy is experiencing a growth phase, characterized by flat to declining inflation expectations within bond yields (01:01). Global economic growth has exceeded expectations despite the conflict involving Iran (01:17). The United States is positioned as an AI superpower, with its share of global computing power projected to increase from approximately 60% in 2025 to 80% by 2028 (01:33).…"
      },
      {
        "t": "Goehring & Rozencwajg Natural Resource Market Commentary",
        "d": "1 Sep",
        "g": "Commodities",
        "u": "",
        "x": "Oil Supply Disruption and Market Sentiment The Goehring & Rozencwajg Natural Resource Market Commentary for the second quarter of 2026, dated August 28, 2026, addresses the ongoing disruption of oil supplies following the closure of the Strait of Hormuz . Over the past six months, the closure of the Strait of Hormuz has resulted in a cumulative loss of over 1.5 billion barrels of expected oil supply, marking the largest disruption in the history…"
      }
    ],
    "cards": []
  },
  ahead: {
    published: "Sunday 6 September 2026",
    weekOf: "Mon 7 September 2026",
    pdf: "reports/2026-09-04-ahead.pdf",
    pdfName: "Global Week Ahead_2026-09-06.pdf",
    tldr: "A four-day week that lives and dies on one number. A hot August jobs report (+162k versus ~55k expected, unemployment 4.1%) has flipped the debate from ‘how many cuts’ to ‘can they cut at all’ — the 2Y is at its highest since January 2025 and September-cut odds are near zero. Friday's US August CPI is the print of the week and the last major data before the 16 September FOMC: a soft core rescues the cut narrative, a hot one puts a hike back on the table. Add the ECB, PPI, Oracle and Adobe earnings and Apple's iPhone event, and there is plenty to trade around thin, holiday-shortened liquidity. US cash equity and bond markets are closed Monday for Labor Day.",
    setup: [
      ["S&P 500", "7,718.60", "−0.38%", "US cash closed Monday (Labor Day); futures thin, reopen Monday evening ET. Heavy into CPI"],
      ["Nasdaq Comp.", "26,506.99", "−0.29%", "Megacap-led; Apple's event plus Oracle and Adobe are the week's tech tells"],
      ["Dow Jones Ind.", "53,414.25", "−0.51%", "Friday laggard; cyclicals hostage to the yield path"],
      ["US 10Y yield", "4.79%", "+3 bp", "Bear-steepening risk; 4.80% is the line in the sand into CPI"],
      ["US 2Y yield", "≈4.38%", "higher", "Highest since January 2025 as the September cut is priced out"],
      ["Dollar (DXY)", "≈99.0", "firm", "Bid post-jobs; a hot CPI extends the squeeze higher"],
      ["Gold (spot)", "≈$4,470", "−0.1%", "Backed off ~$4,540 on the real-yield wall; $4,400 is first support"],
      ["Silver (spot)", "≈$66.97", "flat", "Rangey with gold; industrial bid intact"],
      ["Brent crude", "≈$94.71", "−1.1%", "Up on the week; $92–96 the working band"],
      ["WTI crude", "≈$91.69", "lower", "Supply headlines and OPEC+ the swing factor"],
      ["Bitcoin", "≈$79,700", "week low", "Pressured all week by inflation and hike fears; $78k is the level that matters"]
    ],
    setupNote: "Levels are Friday 4 September closes with the day move shown; index and Treasury figures per primary market data, with DXY, metals, crude and Bitcoin last-verified prints cross-checked against wire quotes. Confirm live before acting. Note the setup snapshot's 10Y (4.79%) and 2Y (~4.38%) differ marginally from the Week in Review's 4.78% and 4.37% marks — different intraday capture times on the same session.",
    themes: [
      {
        t: "CPI is the whole ballgame",
        b: "Nowcasts have headline near +0.3% m/m (~3.4% y/y) and core around +0.2%. With the Fed in blackout — the quiet period began Saturday 5 September and runs through 17 September — price is the only vote that counts before the 15–16 September FOMC.",
        w: "A core surprise of +0.4% m/m or more revives hike pricing and sends the 10Y through 4.80% — a headwind for duration, gold and long-duration tech. A +0.1% core is a green light for a 16 September cut and a risk-on unclench."
      },
      {
        t: "The yield line in the sand",
        b: "The 10Y at 4.79% sits right under 4.80%, a level that has capped equity multiples all year, and its three-month correlation to the S&P has turned negative. The 2Y at ~4.38% is the highest since January 2025.",
        w: "Above 4.85% the yields-up/stocks-down regime bites hardest; a break back under 4.65% is the all-clear for beta. Watch the 2Y at 4.45% — through it, ‘no cut’ is cemented."
      },
      {
        t: "Dollar squeeze versus risk",
        b: "DXY near 99 is firm post-jobs after a soft week. A hot CPI extends the squeeze and pressures EM, commodities and the yen back toward intervention talk.",
        w: "USD/JPY and gold are the cleanest expressions — both hostage to the real-yield path. Watch 150+ on USD/JPY for verbal-intervention risk; gold's tell is real yields, not headline CPI."
      },
      {
        t: "Tech carries the index",
        b: "Breadth is thin. Apple's iPhone 18 Pro event, plus Oracle (AI-cloud backlog) and Adobe (Firefly monetisation) reporting Thursday after the close, decide whether the Nasdaq can absorb higher rates.",
        w: "Oracle's RPO and backlog and its capex guide are the AI-infrastructure tell for the whole complex; a miss ripples straight to the chip and power names and into Asia semis."
      },
      {
        t: "China reflation, still missing",
        b: "August CPI and PPI mid-week should confirm lingering deflation (CPI ~−0.2% y/y, PPI still negative), and the credit-data window — new loans and aggregate financing, any day 10–15 September — is the stimulus barometer.",
        w: "Another soft print keeps the policy-put trade alive in Hong Kong and A-shares while pressuring industrial commodities and the Australian dollar."
      },
      {
        t: "Holiday liquidity and expiry drift",
        b: "US markets closed Monday means an air-pocket tape into a data-heavy back half, and next week's quad-witching on 19 September starts to pull on dealer gamma late in the week.",
        w: "Fade outsized Monday moves in Asia — they often reverse when US desks return Tuesday. Low-conviction tape until then."
      }
    ],
    calendar: [
      ["Mon 7", "US Labor Day — equity and bond markets CLOSED. China trade balance (Aug), tentative — surplus expected wide.", "Shortened week and thin liquidity across Asia; China exports front-running tariffs is the read on external demand"],
      ["Tue 8", "Japan Q2 GDP second estimate, 07:50 (~0.3% q/q). US NFIB small-business optimism, 18:00 — steady expected.", "Japan confirms a soft H1 and feeds BoJ normalisation timing; NFIB hiring and pricing intentions are the pre-CPI tell"],
      ["Wed 9", "China CPI and PPI (Aug), ~09:30, time TBC — CPI ~−0.2% y/y, PPI still negative. US wholesale inventories; 10Y note auction. Apple ‘Surprise & Shine’ event, 10:00 PT (≈ Thu 01:00 GMT+8).", "Deflation watch and the stimulus-response barometer; the 10Y auction is the first post-holiday supply test for rates"],
      ["Thu 10", "ECB rate decision, 20:15, and Lagarde press conference, 20:45 — hold expected, depo ~2.00%. US PPI final demand (Aug), 20:30 (~+0.3% m/m). US jobless claims, 20:30 (~230k); 30Y auction. Oracle and Adobe report after the US close.", "Pipeline inflation and the PCE read-through pre-FOMC; the ECB tone decides whether the cutting cycle is done"],
      ["Fri 11", "US CPI (Aug), 20:30 — THE PRINT. Headline ~+0.3% m/m / ~3.4% y/y, core ~+0.2%. UK monthly GDP (Jul), 14:00, tentative. US Univ. of Michigan sentiment prelim (Sep), 22:00.", "The swing factor for the 16 September FOMC; Michigan's 1Y and 5Y inflation expectations are a direct Fed input"]
    ],
    cbs: [
      ["US Federal Reserve", "Blackout — no speakers; quiet period runs through 17 September ahead of the 15–16 September FOMC", "CME FedWatch prices ~86% hold, ~14% hike, ~0% cut for September", "The debate is genuinely two-sided and a hike is a live tail — front-end rates and the dollar are the fast money"],
      ["ECB", "Decision Thu 10 Sep 20:15, Lagarde press conference 20:45", "Hold expected with the deposit rate at ~2.00% after a long easing run", "Does Lagarde signal the cycle is done? A hawkish on-hold-indefinitely tone lifts the euro and bund yields"],
      ["Bank of Canada", "No meeting — held at 2.25% on 2 September", "On hold with a tariff-inflation warning attached", "How long does the tariff-inflation caveat keep the BoC sidelined?"],
      ["Bank of Japan", "No decision this week; Japan Q2 GDP second estimate Tue 8 Sep", "~0.3% q/q expected", "A soft confirmation pushes normalisation timing out; the yen trades off US real yields regardless"],
      ["Bank of England", "No decision this week; UK monthly GDP (Jul) Fri 11 Sep 14:00", "~flat expected", "The GDP print shapes the next BoE move and is the week's sterling risk"]
    ],
    earnings: [
      ["Thu 10", "Oracle (ORCL, after the close)", "Street revenue ~$19.1bn and EPS ~$1.30. OCI and AI-cloud backlog (RPO) plus the capex guide — the AI-infrastructure bellwether for the whole complex"],
      ["Thu 10", "Adobe (ADBE, after the close)", "Q3 FY26. Proof that AI (Firefly) monetises faster than it cannibalises; net-new ARR and digital-media subscription growth are the tells"],
      ["Week of 7 Sep", "GameStop (GME)", "A retail-sentiment and meme tell, plus the balance-sheet strategy"],
      ["Week of 7 Sep", "Kroger (KR)", "Consumer-staples demand and grocery inflation pass-through — a useful CPI cross-check"]
    ],
    catalysts: [
      "US August CPI, Friday 11 September 20:30 — the print of the week and the last major data before the FOMC.",
      "US Treasury supply: 10Y auction Wednesday and 30Y Thursday, the first post-holiday demand tests. Tails would add to yield pressure into CPI.",
      "ECB decision and Lagarde press conference, Thursday 10 September.",
      "Oracle and Adobe both report Thursday after the close — a clean referendum on AI-infrastructure demand versus AI-software monetisation.",
      "Apple ‘Surprise & Shine’ event, Wednesday 9 September 10:00 PT — iPhone 18 Pro / Pro Max and a rumoured foldable ‘iPhone Ultra’, with supplier read-through across Asia tech.",
      "China credit window, 10–15 September — new loans and aggregate financing land any day and are the cleanest stimulus signal.",
      "US Labor Day, Monday 7 September — cash equity and bond markets closed; Asia and Europe carry the tape.",
      "Fed blackout into the 15–16 September FOMC; September quad-witching on 19 September begins to anchor dealer gamma late in the week."
    ],
    regime: {
      label: "#Quad 3 tilting toward Quad 4 — sticky inflation, decelerating growth impulse",
      note: "The prevailing signal is a Quad 4-leaning, inflation-sticky backdrop — a decelerating growth impulse with inflation refusing to fully roll — which argues for quality over beta, a long-dollar tilt, and respect for the yield ceiling on multiples. Note: a live subscriber pull of Hedgeye's exact daily risk ranges was not available for this run; the table below is indicative, derived from recent price and volatility and anchored to Friday 4 September closes. Treat it as a map, not gospel, and confirm against the current Hedgeye Risk Range Signal before acting.",
      ranges: [
        ["S&P 500", "7,610 – 7,790", "Bullish"],
        ["Nasdaq Comp", "26,050 – 26,880", "Bullish"],
        ["US 10Y Yield", "4.62 – 4.84", "Bullish (yields higher)"],
        ["US 2Y Yield", "4.24 – 4.45", "Bullish (yields higher)"],
        ["US Dollar (DXY)", "97.9 – 99.8", "Neutral"],
        ["Gold (spot)", "4,360 – 4,585", "Bullish"],
        ["Bitcoin", "76,500 – 85,000", "Bearish"]
      ],
      where: "Equities sit mid-to-upper range with a bullish TREND intact but a yield cap overhead. The regime turns hostile if the 10Y closes and holds above 4.85% — which breaks the equity range low — or if core CPI prints at +0.4% m/m or above. It turns friendly, with the tape broadening beyond megacap and gold pressing new highs, on a soft core CPI that pulls the 10Y back under 4.65% and greenlights the 16 September cut. The 2Y at 4.45% is the second tripwire: through it, the no-cut narrative is cemented."
    },
    positioning: "Crowded and stretched: long megacap-AI and long-dollar are the consensus trades, and with the VIX subdued at ~14–15 into a binary CPI, this is an asymmetric setup to own optionality rather than sell it. Rates: duration longs have been squeezed as September-cut hopes faded, so a soft CPI is the pain trade higher in bonds while a hot one extends the bear-steepener. Credit and vol tells: watch IG and HY spreads for any widening as the yield ceiling is tested — a VIX pop through 18 with credit leaking would be the first sign the benign tape is cracking. Breadth is the honest tell: if the equal-weight index and small caps cannot join a soft-CPI rally, treat the bounce as sell-able. The five things to watch: (1) core CPI versus +0.4%; (2) the 10Y versus 4.85% and the 2Y versus 4.45%; (3) Oracle's RPO and capex guide for the AI complex; (4) China CPI/PPI and the credit window for AUD and industrial metals; (5) USD/JPY at 150 for intervention risk.",
    geo: [
      "US government funding: the 1 October deadline looms, with prediction markets putting a shutdown around 10–16% (Polymarket/Kalshi, mid-August) — low but rising as a Q4 tail. Not a this-week event, but headlines can move front-end rates.",
      "Fed policy as geopolitics: event-contract markets show ~28% hike odds on some venues versus futures at ~14%, a genuine two-way split worth watching for signal.",
      "Trade and tariffs: tariff-driven inflation risk, flagged explicitly by the Bank of Canada on 2 September, remains the slow-burn macro theme feeding the CPI narrative.",
      "Energy geopolitics: Brent near $95 after the 1 September US strike on Iran keeps supply-side headlines — OPEC+, sanctions, Gulf shipping — in the price. That is an upside inflation risk that directly complicates the Fed's job."
    ],
    asia: "Asia opens Monday without a US cash session (Labor Day), so expect thin, headline-driven trade and a tendency to drift on Friday's risk-off close. Japan trades its Q2 GDP second estimate on Tuesday with a firm-yen bias if US yields wobble; China and Hong Kong lean on the CPI/PPI prints and the credit data mid-week plus any weekend policy noise. The intraday tells are USD/JPY direction, the CNH fix, and whether Hong Kong tech can hold. Apple's iPhone event on Wednesday US time is the supplier catalyst for Asia hardware, and Oracle's AI-infrastructure guide on Thursday is the read-through for TSMC, SK Hynix and Samsung. Remember that Monday's move is low-conviction until US desks return Tuesday.",
    beyond: [
      "Tech: Apple's iPhone 18 Pro and foldable ‘iPhone Ultra’ reveal on Wednesday 9 September (US) is the consumer-tech event of the month, with pricing and supplier read-through across Asia.",
      "Space: a busy commercial-launch cadence continues after SpaceX passed its 100th orbital mission of 2026 in late August; check live manifests for crewed or high-profile payload windows.",
      "Sport and culture: the US Open tennis reaches its finals weekend — women's final Saturday 12 September, men's Sunday 13 September — and Europe's football seasons are in full swing.",
      "Screens and releases: autumn film and game slates ramp up, a tailwind for media and streaming names into Q4."
    ]
  }
}
];
