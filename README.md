# Catfight Command Centre — v1.2

Star Citizen 4.8.1 org tool for the Catfight org. Open in any browser. No account. No install.

**Live:** https://catmilker.github.io/catfight-command-centre/

---

## What it does

Everything you need for a session in one tab — income planning, ship loadouts, live commodity prices, combat guides, interdiction planning, exec hangar timing, and org session coordination.

---

## Panels

| Panel | What's in it |
|---|---|
| ⚡ Grind Guide | 9 tiers: Starter → Light Fighter → Medium Fighter → Heavy Fighter → Cargo → Mining → Interdiction → Multi-crew → Salvage. Live income estimates from UEX. Covers ATLS gem mining, Adagio Titanium loop, PAF farming, JP piracy, Starfarer refuelling, multi-crew breakdowns. |
| 💱 Trade | 98 live commodities (UEX), Best Locations, Profit Calc, Route Calculator with FROM/TO system or station selection (110 stations across Stanton/Pyro/Nyx) and location-type filter (stations-only, outposts-only, no-gateways), multi-hop round trip, Hauling, Trade Tips, Commodity Watchlist with price alerts. |
| 🏅 Rep Tracker | 11 factions, rank unlocks, XP thresholds, BP drops. Saves to localStorage. Export/import. |
| 🧮 Calc | Session income estimator (37 activities) + BHG Stack Calc (max 10 active contracts). |
| 🐱 Org Ops | Session planner: objective, system, crew roster with roles + ships, live income estimate, session timer, mission brief copy. Save/load 8 named sessions. Shared session state via Cloudflare KV (push/pull). Session history. Post-session debrief mode. Includes 4.8.1 aUEC transfer cap notice (~999,999 per transaction, recipient must be online to accept). |
| 🏪 Shops | 115+ items by name, location or type. |
| 🗺️ Systems | Locations and services across Stanton, Pyro and Nyx. |
| 🗄️ Ship DB | 224 ships — live SC Wiki stats + prices + rental costs. Meta Picks by role. 36 curated loadouts with search/filter. Loadout Builder (live Erkul weapon data). Ship Compare with radar chart. Fleet View with import/export. Rentable filter. |
| ⛏️ Mining | Minerals (27 ores, live UEX prices), Ships, full Laser Head comparison (S1/S2 stats, Quality System q0–q1000, Modules, Recommended Builds), Refinery Queue Estimator, Profit Calc, Crew Guide. |
| 🎯 Missions | 606 catalogued missions, 19 factions, including 4.8.1 defend-location missions. Searchable. BP drop rates. |
| 📋 Blueprints | Mission drop BPs, 252 component BPs (live SC Craft sources), Priority Roadmap. |
| ⚔️ Combat | 21 ship profiles with verified builds + PvP analysis. Weapon Matrix (S1–S5). 22 matchups including capital fleet engagements. PvP Tier List. Loadout Synergy Checker. |
| 🕳️ Interdict | Interdiction Planner — op type, 20 locations, 9 crew roles, live cargo prices, comms callouts, mission brief. Save/load 8 named ops. |
| 🏛️ Exec Hangar | PYAM CZ timer — resynced to exec.xyxyll.com (185min 226ms cycle), unified single-card display with 5-segment progress bar, plain-English window status, and Closes/Opens timeline. Manual sync (session-only, reverts to ground truth on reload). CZ self-timers (keycard, vault, terminal, crypt). |
| 📋 Changelog | Full version history v0.1 → v1.2, in-tool, filterable by category. |
| 🗺️ Roadmap | Upcoming features. |

---

## Live Data

| Source | Data | Worker |
|---|---|---|
| UEX Corp API | Commodity prices + terminals | `uex-proxy-worker` |
| SC Wiki API | Ship stats + prices | Direct fetch |
| Erkul.games | Weapon DPS + stats | `erkul-proxy-worker` |
| SC Craft Tools | 1,534 BP sources | `sccraft-proxy-worker` |
| RSI Status | PU / Platform / AC status | `rsi-status-worker` |
| AWS Status | Infrastructure incidents | `aws-status-worker` |
| MOTD | Org announcements | `catfight-motd` |
| Session state | Shared org session via KV | `catfight-session` |
| Exec epoch | Calibrated CZ timer (synced to exec.xyxyll.com) | `exec-epoch-worker` |

All workers at `*.catmilker.workers.dev`. Silent fallback to baked-in data if any source is unreachable.

---

## Repo Structure

```
index.html              — tool shell (~759KB, includes Ship DB inline for instant load)
sw.js                   — service worker (offline cache)
manifest.json           — PWA manifest (add to home screen)

missions.json           — 606 missions (198KB)
comp-bps.json           — 252 component BPs (53KB)
curated-loadouts.json   — 36 curated loadouts (57KB)
trade-locs.json         — trade route locations (77KB)
rep-factions.json       — faction data (8KB)
combat-profiles.json    — 21 combat profiles (35KB)
matchup-data.json       — 22 PvP matchups (27KB)
changelog.json          — version history (18KB)
```

Ship DB (224 ships), ship loadout data, and trade route data (110 stations across Stanton/Pyro/Nyx, classified by station type) are baked directly into `index.html` for instant load with no fetch race conditions. All other JSON files are lazy-loaded on page open. The tool works offline after first load via the service worker.

---

## Keyboard Shortcuts

Press `?` in the tool for the full overlay. Panel keys: `G` Grind · `T` Trade · `R` Rep · `C` Calc · `O` Org Ops · `S` Ships · `Y` Systems · `M` Mining · `J` Missions · `B` Blueprints · `F` Combat · `I` Interdict · `E` Exec Hangar · `L` Changelog · `P` Roadmap

---

## Contributors

Built by **CatMilker**. Contributors: CatCya, CatNipp.

Got a feature request or found a bug? Message **reverend_ozmund** on Discord.
