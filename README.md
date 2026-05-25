# Catfight Command Centre

Star Citizen 4.8 org tool for the Catfight org. Single-file HTML — no server, no account, open directly in a browser or host on GitHub Pages.

**Live:** https://catmilker.github.io/catfight-command-centre/

---

## Panels

**⚡ Grind Guide** — Ship-tier based activity guide. Pick your ship class (Starter → Light Fighter → Medium Fighter → Heavy Fighter → Cargo → Mining → Salvage) and see exactly what you can run, what XP/aUEC each activity pays, and what BPs drop. Includes faction tags, system, and next-step upgrade goals.

**💱 Trade** — 75 live commodities from UEX (scraped 4.8 live), sortable by name/buy/sell/margin/profit per SCU. Category badges, illegal flagging, volatile flagging. Plus route guide, Covalex hauling chain, and trade tips including Adagio Titanium method (3M+/hr).

**🏅 Rep Tracker** — 11 factions (BHG, Foxwell, Covalex, InterSec, Headhunters, Eckhart, Shubin, Ling Family, CFP, Ruto, Adagio). Per faction: clickable rank buttons, progress bar, XP thresholds, what unlocks at each tier, BP drops per rank. Saves to browser localStorage.

**🧮 Calc** — Session income estimator. 37 activities including all 8 Gilly's Flight School scenarios in their own category. Adjustable session length (1–24hr), crew size, ship quality, server stability, experience. Goals panel with progress bars to ship prices. Top-15 activity comparison bar.

**🐱 Org Ops** — Role assignment planner for org sessions. Set player count, assign roles (combat/cargo/mining/salvage/support/flex), see estimated group income.

**🏪 Shops** — 115+ items searchable by name, location or type. Ships, weapons, components, FPS gear, tools, food. All ship locations verified — Grim Hex ship dealer removed (removed post-4.4 live).

**🗺️ Systems** — Locations and services across Stanton, Pyro and Nyx. Card grid layout with service badges.

**🗄️ Ship DB** — Two tabs: Full Database (220+ ships searchable/filterable by role, manufacturer, cargo, crew, stats, aUEC prices, pledge prices) and Meta Picks (5 tabs: Combat / Cargo / Mining / Salvage / Utility with verified 4.8 hardpoints and verdicts).

**⛏️ Minerals** — 33 minerals with cave/asteroid locations across Stanton, Pyro, Nyx. Grade, type, crafting use per mineral.

**🎯 Missions** — 606 missions across 19 factions from SC Wiki API + SC Crafter. Searchable by name or BP drop name. Filter by faction, system, has BPs, one-time only, unlawful. Sortable by XP and aUEC. Shows BP drops with drop rates.

**📋 Blueprints** — Three tabs:
- *Mission Drop BPs* — 21 confirmed drop sources from 4.8 game files with item lists and drop rates.
- *Component BPs* — 252 ship component BPs (shields, power plants, coolers, QDs) with ingredients, craft times, and confirmed faction sources.
- *Priority Roadmap* — Role-based faction order guide (Solo / Combat / Hauler / Miner).

---

## Data sources

**Live scraped (4.8 live):**
- Commodity prices — UEX API (`uexcorp.space/api/2.0/commodities`) — 75 items, live buy/sell/margin
- Ship prices — UEX API (`uexcorp.space/api/2.0/vehicles`) — 220+ ships, prices verified
- All 1478 missions — SC Wiki API (`api.star-citizen.wiki/api/missions`)
- 252 component BP recipes and craft times — SC Wiki API (`api.star-citizen.wiki/api/blueprints`)
- 692 contracts with BP drop rates — SC Crafter (`sc-crafter.com/api/contracts`)
- Faction standing thresholds — SC Crafter
- Mineral locations — `global.ini` + `all_sc_data.txt`
- Mission drop tables — `all_sc_data.txt` DCB datamine

**4.8 new ship prices (community verified — UEX not yet updated):**
- Grey's Market Shiv — 5.5M aUEC (Levski / Lorville)
- Drake Clipper — 3.619M aUEC (Lorville / Area 18)
- RSI Perseus — 39.68M aUEC (Lorville)
- RSI Hermes — 7.11M aUEC (Lorville / Area 18)
- RSI Salvation — 1.185M aUEC (Lorville / Area 18)
- Greycat MDC — 127k aUEC (Lorville / Area 18)

---

## Status

**Beta v0.8** — 4.8 live.

**v0.8 changes:** Full Pyro ember theme rebuild (volcanic black, lava amber, warm ivory text — no cold blues or purples). Commodity data live-scraped from UEX — 75 items with real buy/sell/margin. All 6 new 4.8 ships added with confirmed aUEC prices. Grim Hex removed from all ship purchase locations (shop closed post-4.4). 14 SCU values corrected across SDB (Corsair, Cutter, Zeus MR/ES, Hull B, MOTH, C1 Spirit, Railen, and more). Meta Picks fully rebuilt with verified 4.8 hardpoints and community-confirmed verdicts across 5 tabs (Combat / Cargo / Mining / Salvage / Utility). Calculator extended to 24 session lengths and 37 activities including all 8 Gilly's Flight School scenarios. Systems Navigator styled with card grid layout. All tab-switching bugs fixed.

**v0.7:** Full missions panel (606 missions, 19 factions), Rep Tracker rebuilt (11 factions, rank unlocks, XP thresholds, BP drops per tier), Ships panel merged with Ship DB, both Blueprint panels merged, Grind Guide rebuilt as ship-tier navigator, nav consolidated to 11 buttons.

**v0.6:** Component BPs (252, 129 sourced), session estimator rebuilt, shop directory rebuilt, trade panel rebuilt.

**Contributors:** CatCya, CatNipp
