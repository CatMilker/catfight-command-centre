# Catfight Command Centre

Star Citizen 4.8 org tool for the Catfight org. Single-file HTML — no server, no account, open directly in a browser or host on GitHub Pages.

**Live:** https://catmilker.github.io/catfight-command-centre/

---

## Panels

**⚡ Grind Guide** — Ship-tier based activity guide. Pick your ship class (Starter → Heavy Fighter → Cargo → Mining → Salvage) and see exactly what you can run, what XP/aUEC each activity pays, and what BPs drop. Includes faction tags, system, and next-step upgrade goals.

**⚙️ Loadouts & Builder** — Three tabs:
- *Ship Builder* — Erkul-powered. 209 ships, 86 weapons, live DPS calc. Click a hardpoint, pick a weapon, stats update instantly. Physical/Energy/Distortion breakdown, power draw, heat.
- *Preset Loadouts* — 19 ships with aUEC-only meta builds and auto-generated buy route planner.
- *Weapons DB* — 104 weapons sortable by DPS, alpha, fire rate, damage type. Buy locations included.

**💱 Trade** — 4 tabs: 35 commodities with live UEX prices, 3-tier route guide, full Covalex hauling chain (Trainee → Master with XP/aUEC per rank), and trade tips including Adagio Titanium method (3M+/hr).

**🏅 Rep Tracker** — 11 factions (BHG, Foxwell, Covalex, InterSec, Headhunters, Eckhart, Shubin, Ling Family, CFP, Ruto, Adagio). Per faction: clickable rank buttons, progress bar, XP thresholds, what unlocks at each tier, BP drops per rank. Saves to browser localStorage.

**🧮 Calc** — Session income estimator. 32 activities, adjustable session length (1–6hr), crew size, ship quality, server stability, experience. Goals panel showing sessions-to-ship-price with progress bars. DPS comparison bar across all activities.

**🐱 Org Ops** — Role assignment planner for org sessions. Set player count, assign roles, see estimated group income.

**🏪 Shops** — 115+ items searchable by name, location or type. Ships, weapons, components, FPS gear, tools, food. Returns where to buy anything instantly.

**🗺️ Systems** — Locations and services across Stanton, Pyro and Nyx.

**🗄️ Ship DB** — Two tabs:
- *Full Database* — 200+ ships searchable/filterable by role, manufacturer, cargo, crew. Stats, aUEC prices, pledge prices.
- *Meta Picks* — Curated combat/cargo/mining/utility tables with 4.8 verdicts.

**⛏️ Minerals** — 35 minerals with cave/asteroid locations across Stanton, Pyro, Nyx. Craft uses per mineral.

**🎯 Missions** — 606 missions across 19 factions from SC Wiki API + SC Crafter. Searchable by name or BP drop. Filter by faction, system, has BPs, one-time, unlawful. Sortable by XP and aUEC. Shows BP drops with drop rates.

**📋 Blueprints** — Three tabs:
- *Mission Drop BPs* — 21 confirmed drop sources from 4.8 game files with item lists and drop rates.
- *Component BPs* — 252 ship component BPs (shields, power plants, coolers, QDs) with ingredients, craft times, and confirmed faction sources. 129 sources confirmed from SC Wiki API.
- *Priority Roadmap* — Role-based faction order guide (Solo / Combat / Hauler / Miner).

---

## Data sources

**Confirmed from 4.8 live (4.8.0.11825000):**
- Weapon stats — erkul.games live API (`server.erkul.games/live/weapons`)
- Ship hardpoints — erkul.games live API (`server.erkul.games/live/ships`)
- All 1478 missions — SC Wiki API (`api.star-citizen.wiki/api/missions`)
- 252 component BP recipes and craft times — SC Wiki API (`api.star-citizen.wiki/api/blueprints`)
- 692 contracts with BP drop rates — SC Crafter (`sc-crafter.com/api/contracts`)
- Faction standing thresholds — SC Crafter
- Mineral locations — `global.ini` + `all_sc_data.txt`
- Mission drop tables — `all_sc_data.txt` DCB datamine

**4.7.2 estimates — flagged in-tool:**
- Most aUEC ship buy prices — verify on UEX before large purchases

---

## Status

**Beta v0.7** — 4.8 live.

**v0.7 changes:** Full missions panel (606 missions, 19 factions), Rep Tracker rebuilt (11 factions, rank unlocks, XP thresholds, BP drops per tier), Ship Builder merged into Loadouts panel, Ships panel merged with Ship DB, Blueprints panels merged, Grind Guide rebuilt as ship-tier navigator, nav consolidated from 15 → 12 buttons.

**v0.6:** Erkul-powered Ship Builder (209 ships, 86 weapons), component BPs (252, 129 sourced), session estimator rebuilt, shop directory rebuilt, trade panel rebuilt.

**Contributors:** CatCya, CatNipp
