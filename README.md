# Catfight Command Centre

Star Citizen 4.8 org tool for the Catfight org. Single-file HTML — no server, no account, open directly in a browser or host on GitHub Pages.

**Live:** https://catmilker.github.io/catfight-command-centre/

---

## Panels

**⚡ Grind Guide** — Ship-tier based activity guide rebuilt for 4.8. Pick your ship class (Starter → Salvage) and see what you can run, what it pays, what BPs drop, and what to upgrade to next. Includes Gilly's Flight School scenarios, Adagio Titanium loop, United Wayfarers refuelling, ATLS GEO gem mining, PAF farming.

**💱 Trade** — 6 tabs: Commodities (98 items, live UEX prices), Best Locations (live terminal buy/sell per commodity), Profit Calc (pick ship SCU + terminals, get net profit), Routes, Hauling chain, Trade Tips.

**🏅 Rep Tracker** — 11 factions. Clickable rank buttons, XP thresholds, BP drops per tier. Saves to localStorage.

**🧮 Calc** — 2 tabs: Session Estimator (37 activities, 1–24hr sessions, goals panel) and BHG Stack Calc (tier/stack/cert/loot inputs, total payout + XP + breakdown bar).

**🐱 Org Ops** — Role assignment planner for org sessions.

**🏪 Shops** — 115+ items searchable by name, location or type. All ship locations verified for 4.8 (Grim Hex ship dealer removed).

**🗺️ Systems** — Locations and services across Stanton, Pyro and Nyx.

**🗄️ Ship DB** — 4 tabs: Full Database (220+ ships), Meta Picks (5 tabs: Combat/Cargo/Mining/Salvage/Utility with 4.8 verdicts), Loadouts (208 ships with stock slot data from SC Wiki live), Builder (pick a ship, configure components, see live DPS/shield/power stats update in real time).

**⛏️ Minerals** — 33 minerals with cave/asteroid locations. Grade, type, crafting use.

**🎯 Missions** — 606 missions across 19 factions. Searchable, filterable, sortable. Shows BP drops with drop rates.

**📋 Blueprints** — 3 tabs: Mission Drop BPs, Component BPs (252 ship components with ingredients, craft times, confirmed faction sources), Priority Roadmap.

---

## Live Data — 3 Cloudflare Workers

| Worker | Data | Cache |
|---|---|---|
| `catfight-uex-proxy` | Commodity prices, terminal locations, ship prices | 15 min |
| `catfight-erkul-proxy` | Weapon stats (DPS/alpha/RPM/ammo), ship loadout data | 20 min |
| `catfight-sccraft-proxy` | 1,534 blueprint sources with drop chances | 30 min |

All three fetch on page load. Silent fallback to baked-in data if any worker is unreachable.

---

## Data Sources

- Commodity prices — UEX API live (`uexcorp.space/api/2.0`)
- Weapon stats — Erkul.games live (`server.erkul.games/live`)
- Blueprint drop sources — SC Craft Tools live (`sc-craft.tools/api`)
- Ship slot data — SC Wiki API (`api.star-citizen.wiki/api/vehicles`) — open CORS, no worker needed
- Component stats — SC Wiki API (`api.star-citizen.wiki/api/items`)
- Mission data — SC Wiki API (`api.star-citizen.wiki/api/missions`)
- Mineral locations — `global.ini` + `all_sc_data.txt` DCB datamine
- Ship prices — UEX live + community-verified for 4.8 new ships

---

## Status

**Beta v0.8.8** — 4.8 live.

**v0.8.8:** Loadout Builder (208 ships, live Erkul weapon pickers, real-time DPS/shield/power stats). 25 curated meta loadouts with verified 4.8 hardpoints and community builds. BHG Stack Calculator. Grind Guide fully rebuilt for 4.8 (Adagio loop, ATLS GEO, Gilly S7, PAF farming, Starfarer refuelling). Trade Profit Calc and Best Locations tabs. 3 Cloudflare workers live (UEX/Erkul/SC Craft). BP drop rates corrected (FR-66/76 at 85%, Red Wind Linehaul confirmed for 3 power plant BPs). Ship DB: 14 SCU fixes, 6 new 4.8 ships, Grim Hex removed.

**v0.8:** Full Pyro theme rebuild. Live UEX commodity prices. New 4.8 ships with confirmed aUEC prices. Meta Picks rebuilt with correct 4.8 hardpoints. 14 SCU corrections.

**v0.7:** Full missions panel (606 missions, 19 factions), Rep Tracker rebuilt, nav consolidated to 11 buttons, Grind Guide rebuilt as ship-tier navigator.

**v0.6:** Component BPs (252, 129 sourced), session estimator rebuilt, shop directory rebuilt, trade panel rebuilt.

**Contributors:** CatCya, CatNipp
