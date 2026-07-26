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
    { tk:"NVDA", n:"Nvidia",    p:207.40, wk:"−2.4% (Fri)", wkPct:null,  cap:"~$5.0T", pe:"31.1" },
    { tk:"AAPL", n:"Apple",     p:333.26, wk:"+1.8% (Fri)", wkPct:null,  cap:"~$4.9T", pe:"40.5" },
    { tk:"GOOGL",n:"Alphabet",  p:353.81, wk:"−2.2% (wk)",  wkPct:-2.2,  cap:"~$4.3T", pe:"27.0" },
    { tk:"MSFT", n:"Microsoft", p:401.10, wk:"+1.4% (Fri)", wkPct:null,  cap:"~$3.0T", pe:"23.5" },
    { tk:"AMZN", n:"Amazon",    p:249.89, wk:"−2.0% (Fri)", wkPct:null,  cap:"~$2.7T", pe:"29.6" },
    { tk:"META", n:"Meta",      p:664.54, wk:"−2.9% (wk)",  wkPct:-2.9,  cap:"~$1.7T", pe:"23.5" },
    { tk:"TSLA", n:"Tesla",     p:391.06, wk:"−0.9% (Fri)", wkPct:null,  cap:"~$1.5T", pe:"370" }
  ],
  mag7Read:"Split tape: Apple and Microsoft up, the rest down on the AI/chip wobble — Alphabet worst (Gemini model delay). The Mag7 shed ~$2T of market cap month-to-date (combined ~$23.1T). Leadership is narrowing within the group even as it broadens across the market. Clean Mon–Fri weekly % wasn't published per name; Friday-day moves shown where the weekly print wasn't verifiable.",
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
      { t:"Why Anthropic's Mess Doesn't Matter & The Era of Sophistication", d:"15 Jul", g:"Saved link", u:"https://thewhitebox.beehiiv.com/p/why-anthropic-s-mess-doesn-t-matter-the-era-of-sophistication", x:"" },
      { t:"China's First Frontier Model?", d:"15 Jul", g:"Saved link", u:"https://thewhitebox.beehiiv.com/p/china-s-first-frontier-model", x:"" },
      { t:"How Small Firms Use Claude to Quit Salesforce — The Information", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"Eye on the Market", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"Donald Trump is kicking out Chinese firms, but keeping their tech", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"SFC Annual Report Summary", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"ASEAN Labour Markets 2026: Growth Is Back. The Hard Part Starts Now.", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"Made in Europe vs Made in America vs Made in China", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"Gold – A longer road to new highs", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"Why OpenAI and Anthropic may struggle to float", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"The US-China AI Contest", d:"15 Jul", g:"Upload", u:null, x:"" },
      { t:"Strategy & Asset Allocation & Performance of High Conviction Ideas", d:"15 Jul", g:"Upload", u:null, x:"" }
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
    { tk:"NVDA", n:"Nvidia",    p:206.84, wk:"+2.0%",  wkPct:2.0,   cap:"$5.01T", pe:"31.7" },
    { tk:"AAPL", n:"Apple",     p:333.02, wk:"−0.2%",  wkPct:-0.2,  cap:"$4.89T", pe:"39.0" },
    { tk:"GOOGL",n:"Alphabet",  p:319.74, wk:"−7.8%",  wkPct:-7.8,  cap:"$3.91T", pe:"15.9" },
    { tk:"MSFT", n:"Microsoft", p:381.70, wk:"−3.1%",  wkPct:-3.1,  cap:"$2.84T", pe:"22.7" },
    { tk:"AMZN", n:"Amazon",    p:232.11, wk:"−6.1%",  wkPct:-6.1,  cap:"$2.50T", pe:"27.8" },
    { tk:"META", n:"Meta",      p:595.19, wk:"−7.9%",  wkPct:-7.9,  cap:"$1.51T", pe:"22.1" },
    { tk:"TSLA", n:"Tesla",     p:313.03, wk:"−17.8%", wkPct:-17.8, cap:"~$1.0T", pe:"~290" }
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
      { t:"China Is Preparing For $38,000 Gold", d:"23 Jul", g:"Economics/Commodities", u:"https://www.youtube.com/watch?v=dFjvcY9Tth0", x:"For the first time, a gold ETF has become the largest ETF in China, surpassing the country's equivalent of the S&P 500 — the Guan Yu Gold ETF holds $13 billion in assets vs. $12 billion for the primary stock-based ETF…" }
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
];
