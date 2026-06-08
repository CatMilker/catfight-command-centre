# Catfight Command Centre

Star Citizen 4.8 org tool for the Catfight org. Single-file HTML — no account, no server, open in browser.

**Live:** https://catmilker.github.io/catfight-command-centre/

---

## Panels

**⚡ Grind Guide** — 9 tiers: Starter → Light Fighter → Medium Fighter → Heavy Fighter → Cargo → Mining → Interdiction → Multi-crew → Salvage. Live price ticker (Quant, Janalite, Hadanite, RMC, Titanium, Med Sup from UEX). Income figures update automatically. Covers ATLS GEO gem mining, PAF farming, Adagio Titanium loop, Starfarer refuelling, JP piracy, multi-crew ship breakdowns.

**💱 Trade** — 98 live commodities (UEX), Best Locations, Profit Calc, Routes, Hauling chain, Trade Tips.

**🏅 Rep Tracker** — 11 factions, rank unlocks, XP thresholds, BP drops. Export/Import. Saves to localStorage.

**🧮 Calc** — Session Estimator (37 activities) + BHG Stack Calc.

**🐱 Org Ops** — Session planner with objective, system, player count, session timer (countdown + progress bar + end time). Crew roster (8 roles, callsign, ship per player). Live income estimates from UEX. Synergy detection. Mission brief with copy button. Save/load up to 8 named sessions.

**🏪 Shops** — 115+ items by name, location or type.

**🗺️ Systems** — Locations and services across Stanton, Pyro and Nyx.

**🗄️ Ship DB** — Full Database (220+ ships, live SC Wiki stats + prices), Meta Picks (5 role tabs), Loadouts (36 curated loadouts with search/filter, 146 verified WEAPON_SLOTS ships), Builder (live Erkul weapon picker), Compare (side-by-side stats + radar/spider chart).

**⛏️ Mining Compendium** — 6 tabs. Minerals (27 ores, live UEX prices), Ships, Lasers, Refinery, Profit Calc (live), Crew Guide.

**🎯 Missions** — 606 catalogued missions, 19 factions. Searchable, filterable. BP drops.

**📋 Blueprints** — Mission Drop BPs, Component BPs (252 items, live SC Craft sources), Priority Roadmap.

**⚔️ Combat Analysis** — 20 ship profiles (full PvP analysis, sig ratings, verified builds), Weapon Matrix (S1–S5), 17 Matchups (lights vs heavies, capital ships, fleet ops, interdiction counter-play, escort meta).

**🕳️ Interdiction Planner** — Op type, 20 intercept locations, 9 crew roles. Live cargo prices on Hot Routes (Quant/Neon/E'tam/WiDoW/Stileron/RMC). Op assessment, comms callouts, mission brief. Save/load up to 8 named ops.

**🏛️ Exec Hangar** — Live PYAM CZ timer (185min 699ms cycle, globally synced). 5 LED indicators, countdown to next change, next green window, 12hr schedule. Manual sync to recalibrate to ±1 second. CZ self-timers: Keycard Printer, Vault Door, Terminal, Crypt Door, Custom.

**📋 Changelog** — Full version history v0.1 to current, in-tool.

**🗺️ Roadmap** — Upcoming features tracked and updated each session.

---

## Live Data — 6 Sources, 5 Workers

| Source | Data | Refresh |
|---|---|---|
| UEX API | Commodity prices + terminals | 15 min |
| RSI Status | PU / Platform / AC status | 2 min |
| AWS Status | Active infrastructure incidents | 3 min |
| Erkul.games | Weapon stats (DPS/alpha/RPM) | 20 min |
| SC Craft Tools | 1,534 BP sources | 30 min |
| SC Wiki API | Ship stats + prices | Per session |

Silent fallback to baked-in data if any source is unreachable.

---

## Repo Structure

```
index.html              — tool (~789KB)
missions.json           — 606 missions (198KB, lazy-loaded)
comp-bps.json           — 252 component BPs (53KB, lazy-loaded)
curated-loadouts.json   — 36 curated loadouts (57KB, lazy-loaded)
```

---

## Status — v0.9.4

Combat Analysis expanded to 20 profiles and 17 matchups — Perseus and Hammerhead added, Ares Ion escort meta, Perseus fleet engagement, Hammerhead crew coordination. Meteor confirmed in-game purchasable (~4.31M aUEC). Ship price audit — all hardcoded prices updated or replaced with live SC Wiki data. Exec Hangar Timer panel added — live CZ cycle counter, LED status, manual sync, CZ self-timers. Grind Guide Interdiction and Multi-crew tiers added. Org Ops and Interdict Planner save/load added (up to 8 named saves each). Org session timer with countdown and progress bar. Curated loadout search/filter bar. Ship Compare radar chart. Roadmap and Changelog panels. File split (HTML 1MB → 709KB). Cloudflare worker CORS bug fixed.

**Contributors:** CatCya, CatNipp
