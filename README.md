# Catfight Command Centre

Star Citizen 4.8 org tool for the Catfight org. Single-file HTML — no server, no account, open directly in browser or host on GitHub Pages.

**Live:** https://catmilker.github.io/catfight-command-centre/

---

## Panels

**⚡ Grind Guide** — Ship-tier activity guide for 4.8. Starter → Salvage. Gilly S7, Adagio Titanium (3–5M+/hr), Starfarer refuelling (5M+/hr), ATLS GEO gem mining, PAF farming. Live price ticker (Quant, Janalite, Hadanite, RMC, Titanium, Med Sup). Income figures update from UEX automatically.

**💱 Trade** — 98 live commodities (UEX), Best Locations, Profit Calc, Routes, Hauling chain, Trade Tips.

**🏅 Rep Tracker** — 11 factions, rank unlocks, XP thresholds, BP drops. Export/Import backup. Saves to localStorage.

**🧮 Calc** — Session Estimator (37 activities, goals panel) + BHG Stack Calc (tier/stack/cert/loot → payout + XP).

**🐱 Org Ops** — Session planner. Objective, system, player count. Crew roster with callsign, role (8 types) and ship per player. Live income estimates (UEX). Op Notes synergy detection. Mission Brief with copy button.

**🏪 Shops** — 115+ items by name, location or type. All 4.8 verified.

**🗺️ Systems** — Locations and services across Stanton, Pyro and Nyx.

**🗄️ Ship DB** — Full Database (220+ ships, live SC Wiki stats + prices), Meta Picks (5 role tabs), Loadouts (36 curated meta loadouts, 87 verified WEAPON_SLOTS ships), Builder (pick ship → configure components → live DPS/shield/power stats), Compare (side-by-side any two ships, 18 stats, live SC Wiki).

**⛏️ Mining Compendium** — Minerals (27 ores, live UEX prices), Ships (all vessels inc ATLS GEO), Lasers (head + module guide, curated loadouts), Refinery (6 methods ranked), Profit Calc (live ore prices), Crew Guide (MOLE roles, comms callouts).

**🎯 Missions** — 606 catalogued missions, 19 factions. Searchable, filterable. BP drops with rates.

**📋 Blueprints** — Mission Drop BPs, Component BPs (252 items, live SC Craft sources), Priority Roadmap.

**⚔️ Combat Analysis** — Ship Profiles (12 meta ships, full PvP analysis, signature ratings, capacitor stats, verified builds), Weapon Matrix (S1–S5, all types), Matchup Guide (12 matchups — Arrow vs Gladius, Ghost vs everything, F8C vs Vanguard, Shiv vs mediums, fighting the Ares, counter-interdiction and more).

**🕳️ Interdiction Planner** — Op type, intercept location (20 across Stanton/Pyro/Nyx), crew roster with 9 roles. Live cargo prices on Hot Routes tab (Quant, Neon, E'tam, WiDoW, Stileron, RMC). Op assessment, comms callouts, mission brief with copy button.

**📋 Changelog** — Full version history from v0.1 to current.

**🗺️ Roadmap** — Upcoming features, planned improvements, community requests. Tracked and updated each session.

---

## Live Data — 6 Sources, 5 Workers

| Source | Data | Method | Refresh |
|---|---|---|---|
| UEX API | Commodity prices, terminal locations | Cloudflare Worker | 15 min cache |
| RSI Status | PU / Platform / Arena Commander status | Cloudflare Worker | 2 min cache |
| AWS Status | Active infrastructure incidents | Cloudflare Worker | 3 min cache |
| Erkul.games | Weapon stats (DPS/alpha/RPM), ship data | Cloudflare Worker | 20 min cache |
| SC Craft Tools | 1,534 BP sources with drop chances | Cloudflare Worker | 30 min cache |
| SC Wiki API | Ship stats, prices, component data | Direct (open CORS) | Per session |

All sources fetch on page load. Silent fallback to baked-in data if any source is unreachable. Ship stats, component data and ore prices update automatically after every patch.

---

## Status

**v0.9.3:** Grind Guide audit — heavy fighter tier header updated (F8C Lightning, Hurricane, Guardian MX), cargo tier header updated (Zeus Mk II CL, RSI Hermes). Red Wind Linehaul added to cargo tier (Breton/Durango/Genoa power plant BPs, 100% drop, passive income alongside any Pyro haul). Rayari Inc. Jorrit Dossier chain added to medium fighter tier (Bolide/DynaFlux/Fulgur power plant BPs). Cargo tier info line references live Titanium price ticker. Bug fix: duplicate step number in heavy fighter tier. Interdiction Hot Routes tab — live price ticker (Quant/Neon/E'tam/WiDoW/Stileron/RMC/Med Sup from UEX), inline prices injected into route cards, Prospector load value calculated live from Quant price. Changelog panel added. Roadmap panel added — upcoming features tracked in-tool and updated each session.

**v0.9.2:** Org Ops Planner full rebuild + live income estimates wired to UEX. Interdiction Planner — new panel with JP ambush, trade route, hub camp and escort op types, 20 intercept locations, 9 crew roles, op assessment, comms callouts and mission brief. Grind Guide live price ticker (Quant/Janalite/Hadanite/RMC/Titanium/Med Sup). 11 income steps now show live UEX-calculated figures. Curated loadouts expanded 25 → 36 (F8C Lightning, F7A Mk II, Guardian MX, Ares Ion/Inferno, Hurricane, Stinger, Redeemer, Starlancer TAC, C2 Hercules, Zeus Mk II CL, RSI Hermes). Combat matchups expanded 6 → 12. WEAPON_SLOTS expanded 35 → 87 verified ships. All 5 Cloudflare Workers recreated and moved to catmilker.workers.dev.

**v0.9.1:** RSI + AWS live server status bar — sits below MOTD, updates every 2–3 minutes. Shows PU/Platform/Arena Commander status from RSI directly. AWS side monitors active infrastructure incidents so you can tell if issues are CIG or their hosting. 5 Cloudflare workers total.

**v0.9:** Combat Analysis panel (12 meta PvP profiles, weapon matrix, matchup guide). Ship Comparison (live SC Wiki, 18 stats). Mining Compendium 6-tab rebuild with live ore prices. Full live data audit — mineral prices corrected (Janalite was 4.8k baked, 1.6M live). LB_SHIELDS/POWER/COOLERS/QD refresh live. SC Craft Tools replacing offline SC Crafter. Rep Tracker export/import fixed.

**v0.8:** Loadout Builder (208 ships, live Erkul weapons). 25 curated meta loadouts. BHG Stack Calc. Grind Guide 4.8 rebuild. Trade Profit Calc. 3 Cloudflare workers. Mining Compendium. Ship Compare. Live Ship DB.

**v0.7:** Missions panel, Rep Tracker, nav rebuild, Grind Guide.

**v0.6:** Component BPs, session estimator, shop directory, trade panel.

**Contributors:** CatCya, CatNipp
