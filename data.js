// Global Week in Review — dashboard data
// One object per week. The Saturday rebuild task APPENDS a new week object
// extracted from that week's "Global Week in Review_YYYY-MM-DD.docx" and pushes.
// Keep series keys stable so trend charts track across weeks.
const WEEKS = [
{
  id: "2026-07-17",
  weekEnding: "Friday 17 July 2026",
  published: "Saturday 18 July 2026",
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
  ]
},
{
  id: "2026-07-24",
  weekEnding: "Friday 24 July 2026",
  published: "Saturday 25 July 2026",
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
  ]
}
];
