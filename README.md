# Catfight Command Centre

Star Citizen 4.8 org tool for the Catfight org. Single-file HTML — no server, no account, open directly in a browser or host on GitHub Pages.

**Live:** https://catmilker.github.io/catfight-command-centre/

---

## Panels

**⚡ Grind Guide** — Ship-tier activity guide rebuilt for 4.8. Starter → Salvage. Gilly S7 loop, Adagio Titanium (3–5M+/hr), United Wayfarers refuelling (5M+/hr Starfarer), ATLS GEO gem mining, PAF farming. Every tier shows what to run, what it pays, what BPs drop, what to upgrade to next.

**💱 Trade** — 6 tabs: Commodities (98 items, live UEX prices), Best Locations (live terminal buy/sell per commodity), Profit Calc (pick ship SCU + terminals, get net profit), Routes, Hauling chain, Trade Tips.

**🏅 Rep Tracker** — 11 factions. Clickable rank buttons, XP thresholds, BP drops per tier. Export/Import backup so you don't lose progress on cache clear. Saves to localStorage.

**🧮 Calc** — 2 tabs: Session Estimator (37 activities, 1–24hr sessions, goals panel) and BHG Stack Calc (tier/stack/cert/loot inputs → total payout + XP + breakdown bar).

**🐱 Org Ops** — Role assignment planner for org sessions.

**🏪 Shops** — 115+ items searchable by name, location or type. All ship locations verified for 4.8.

**🗺️ Systems** — Locations and services across Stanton, Pyro and Nyx.

**🗄️ Ship DB** — 4 tabs: Full Database (220+ ships, live SC Wiki stats + prices), Meta Picks (5 role tabs with 4.8 verdicts), Loadouts (208 ships with stock slot data), Builder (pick a ship, configure components, see live DPS/shield/power stats).

**⛏️ Mining Compendium** — 6 tabs: Minerals (27 ores with prices/locations), Ships (all mining vessels with income estimates), Lasers (head + module guide with curated loadouts), Refinery (all 6 methods ranked), Profit Calc (ore × SCU × concentration × method → net value), Crew Guide (MOLE roles, comms callouts, org coordination).

**🎯 Missions** — 606 missions across 19 factions. Searchable, filterable, sortable. BP drops with drop rates.

**📋 Blueprints** — Mission Drop BPs, Component BPs (252 ship components, live SC Craft sources), Priority Roadmap.

---

## Live Data — 4 Sources, 3 Workers

| Source | Data | Method | Cache |
|---|---|---|---|
| UEX API | Commodity prices, terminal locations, ship prices | Cloudflare Worker | 15 min |
| Erkul.games | Weapon stats (DPS/alpha/RPM/ammo), ship data | Cloudflare Worker | 20 min |
| SC Craft Tools | 1,534 blueprint sources with drop chances | Cloudflare Worker | 30 min |
| SC Wiki API | Ship stats, component data, vehicle prices | Direct fetch (open CORS) | Per session |

All four fetch on page load. Silent fallback to baked-in data if any source is unreachable. Ship DB stats and prices update automatically after every patch.

---

## Data Sources

- Commodity + ship prices — UEX API live (`uexcorp.space/api/2.0`)
- Weapon stats — Erkul.games live (`server.erkul.games/live`)
- Blueprint drop sources — SC Craft Tools live (`sc-craft.tools/api`)
- Ship stats/prices — SC Wiki API (`api.star-citizen.wiki/api/vehicles`) — open CORS
- Component stats — SC Wiki API (`api.star-citizen.wiki/api/items`)
- Mission data — SC Wiki API (`api.star-citizen.wiki/api/missions`)
- Mineral locations — `global.ini` + `all_sc_data.txt` DCB datamine

---

## Status

**Beta v0.8.9** — 4.8 live.

**v0.8.9:** Mining Compendium fully rebuilt as 6-tab panel (Minerals, Ships, Lasers, Refinery, Profit Calc, Crew Guide). Live Ship DB — SC Wiki fetch updates stats and aUEC prices every session. Rep Tracker export/import fixed.

**v0.8.8:** Loadout Builder (208 ships, live Erkul weapon pickers, real-time stats). 25 curated meta loadouts. BHG Stack Calculator. Grind Guide rebuilt for 4.8. Trade Profit Calc + Best Locations. 3 Cloudflare workers live. BP sources corrected.

**v0.8:** Pyro theme. Live UEX commodity prices. 4.8 ships added. Meta Picks rebuilt. SCU corrections.

**v0.7:** Missions panel (606 missions), Rep Tracker rebuilt, nav consolidated, Grind Guide rebuilt.

**v0.6:** Component BPs, session estimator, shop directory, trade panel.

**Contributors:** CatCya, CatNipp
