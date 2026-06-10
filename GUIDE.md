# Catfight Command Centre — User Guide

**Live tool:** https://catmilker.github.io/catfight-command-centre/

Open in any browser. No account. No install. Bookmark it.

---

## Getting Started

1. Open the link above
2. Wait 5–10 seconds for live data to load — the **🟢 UEX LIVE** badge appears in the top bar when commodity prices are ready
3. The **RSI status bar** shows whether the Persistent Universe, Platform and Arena Commander are operational
4. Navigate using the icon bar across the top
5. First time? Start with the **Grind Guide** — pick your ship tier and follow the steps

---

## Navigation

Click any icon in the nav bar to open that panel. Or use keyboard shortcuts — press **?** for the full list.

| Key | Panel |
|---|---|
| G | Grind Guide |
| T | Trade |
| R | Rep Tracker |
| C | Calc |
| O | Org Ops |
| S | Ship DB |
| Y | Systems |
| M | Mining |
| J | Missions |
| B | Blueprints |
| F | Combat |
| I | Interdict |
| E | Exec Hangar |
| L | Changelog |
| P | Roadmap |

Shortcuts are disabled while typing in any input field.

---

## Grind Guide

The main income reference. Nine tiers organised by ship type — pick the tab that matches what you're flying.

**Tiers:**
- **Starter Ship** — Aurora, Mustang, Intrepid, Nomad, Golem
- **Light Fighter** — Arrow, Gladius, Buccaneer, Ghost Mk II
- **Medium Fighter** — Hornet Mk II, Sabre, Scorpius, Shiv
- **Heavy Fighter / Gunship** — Vanguard, Asgard, Redeemer, Starlancer TAC
- **Cargo / Multi-role** — Cutlass, Freelancer, Zeus CL, Hermes, C2
- **Mining** — Prospector, MOLE, ATLS GEO
- **Interdiction** — Mantis + any fighter
- **Multi-crew** — MOLE, Redeemer, Hammerhead, Perseus, Reclaimer
- **Salvage** — Vulture, Reclaimer
- **Refuelling** — Starfarer, Starfarer Gemini

**Live price ticker** at the top of the panel shows current UEX prices for Quant, Janalite, Hadanite, RMC, Titanium, Med Sup. Updates automatically each session.

Each step shows an income estimate. Steps are ordered — work down from Step 1. Later steps require reputation grinding first; check the Rep Tracker to see where you're at.

**Pro tip:** You can run two tiers at once. A Prospector pilot can stack Shubin claimjumper missions while waiting on refinery cooldowns.

---

## Trade

Five tabs covering everything commodity-related.

**Commodities** — full live price table (98 commodities from UEX). Sort by buy price, sell price or margin. Search by name.

**Best Locations** — top buy and sell terminals by commodity category. Updates when UEX loads.

**Profit Calc** — enter SCU and a commodity, get profit per trip and per hour estimates.

**Routes** — two calculators:
- *Best Route Calculator* — enter your ship's cargo SCU, starting system and risk tolerance. Returns the top routes sorted by profit per trip from live UEX data.
- *Multi-hop Round Trip Planner* — finds the best outbound + return leg pair so you're earning both ways.

**Commodity Watchlist** — star specific commodities and set a price alert threshold. Shows a 🔔 and highlights gold when the live price exceeds it. Persists between sessions.

---

## Rep Tracker

Track your faction rank progress across 11 factions: BHG, Covalex, Adagio Holdings, CFP, United Wayfarers, and more.

- Tap a faction to expand rank thresholds, XP requirements and what unlocks at each tier
- Click the rank dots to mark your current progress
- **Export** your progress as a paste code to back it up or share it
- **Import** to restore on another device

Progress saves automatically to your browser.

---

## Calc

**Session Estimator** — pick an activity from 37 options (Quant mining, ERT bounties, Covalex Master, Adagio loop etc), enter player count and session duration. Get a combined income estimate.

**BHG Stack Calc** — calculate how many BHG contracts you need to stack to hit a target payout. Useful for planning a dedicated bounty session.

---

## Org Ops Planner

For the session coordinator. Set up a session before undocking.

**Setup:**
1. Set **Session Objective** (Income Grind, Mining Op, PvP Ops, Salvage, Interdiction, etc)
2. Set **Operating System** (Stanton, Pyro, Nyx, Multi-system)
3. Set **Player Count**
4. Set **Session Duration** — activates the countdown timer

**Crew Roster:**
- Add each player's callsign, role and ship
- Roles: Coordinator, Pilot, Gunner, Miner, Salvager, Hauler, Escort, Recon
- The live income estimate updates as you fill in roles

**Session Timer:**
- Hit **▶ START** when everyone's ready
- Bar drains teal → amber → red as time runs out
- **⏸ PAUSE** / **▶ RESUME** / **↺ RESET** controls

**Mission Brief:**
- Click **📋 COPY BRIEF** — pastes directly into Discord
- Includes objective, system, players, roster, estimated income and session end time

**Saving sessions:**
- Click **💾 SAVE** and give it a name (e.g. "Friday ERT grind")
- Saves full config including all callsigns, roles and ships
- Up to 8 saved sessions — click the name or ▶ to reload, ✕ to delete

**Shared Session State (org feature):**
- Coordinator clicks **📡 PUSH** — sends the current session config to the Cloudflare worker
- Other members open Org Ops and click **⬇ PULL** — loads the coordinator's session instantly
- Sessions expire automatically after 8 hours
- When you open Org Ops it checks automatically and notifies you if a session is available

**Session History:**
- Click **🕐 HISTORY** to see the last 5 sessions you've run

**Post-session Debrief:**
- Click **📊 DEBRIEF** after a session
- Log actual income per player, add notes, rate the session out of 5 stars
- Shows variance vs the estimate
- Saves to session history

---

## Ship DB

Six tabs covering every flyable ship.

**Full Database** — 220+ ships with live SC Wiki stats and prices. Columns: ship, manufacturer, role, crew, cargo SCU, aUEC price, rental cost per day, pledge price, availability, buy location. Click **▶ Stats** to expand component slots. Filter by manufacturer, role, availability (including Rentable Only). Sort by any column.

**Meta Picks** — current best ships by role (Combat, Cargo, Mining, Salvage, Utility) with brief notes on why.

**Loadouts** — 36 curated meta loadouts. Search by ship name, role, manufacturer or playstyle. Filter by role, size or crew. Each card shows full weapon hardpoints, component slots (shield, power, cooler, QD, missiles), and tactical notes.

**Builder** — select any of 146 supported ships. Weapon slots populate with live Erkul data. Click any slot to browse available weapons at that size. Stats update in real time as you swap: DPS, shield HP, shield regen, power draw, QD speed.

**Compare** — pick two ships from the dropdowns. Side-by-side stat comparison (gold = better). SVG radar chart overlays both ships on 6 axes: SCM, Shield, DPS, Pitch, QD Range, Stealth.

**Fleet View** — build your org's collective ship list. Type a ship name (autocompletes from the database), add a member callsign, click **+ ADD SHIP**. Ships organise by role category with a coverage summary bar showing gaps. Total org fleet value displayed. **📤 EXPORT** generates a paste code to share in Discord. **📥 IMPORT** merges another member's fleet into yours.

---

## Mining Compendium

Six tabs.

**Minerals** — 27 ores with live UEX sell prices, locations, and refinery yield rates.

**Ships** — mining ship comparison: laser hardpoints, cargo, mining bonuses.

**Lasers** — mining laser stats and recommendations by ore type.

**Refinery Queue Estimator** — enter ore type, SCU, refinery method and when you submitted. Returns: duration, completion time, remaining time, yield in SCU, estimated aUEC value from live UEX pricing. Wipe warning fires if the job runs over 5 days.

**Profit Calc** — live profit calculator using current UEX ore prices.

**Crew Guide** — role assignments for multi-crew mining ships (MOLE, Reclaimer).

---

## Missions

606 catalogued missions across 19 factions. Search by name or description. Filter by faction, mission type or location. Each entry shows payout range, faction, location and BP drop rate if applicable.

---

## Blueprints

Three tabs.

**Mission Drop BPs** — all BPs that drop from missions. Search by BP name to find which missions to run.

**Component BPs** — 252 component BPs with live drop source data from SC Craft Tools. Filter by type (weapon, shield, power, cooler, QD) or faction. Shows drop rate, source missions, and whether craftable.

**Priority Roadmap** — suggested unlock order for the most impactful BPs. FR-76/FR-66 shields and crafted QDs are the priority tier.

---

## Combat Analysis

Five tabs covering PvP theory and ship matchups.

**Ship Profiles** — 21 ships with full PvP breakdowns. Each profile includes: stats bar (SCM, shield HP, DPS, pitch rate, IR/EM signature), summary of the ship's combat role, strengths, weaknesses, 1–2 verified builds with exact component recommendations and tactical notes, and what counters the ship.

**Weapon Matrix** — every weapon at S1–S5. DPS, alpha damage, RPM, projectile speed, range and a verdict for each. Use this when theorycrafting a loadout.

**Matchup Guide** — 22 specific matchups with tactical guidance for both sides. Each entry has a result verdict and tips for each ship/role. Covers lights vs heavies, capital fleet engagements, interdiction counter-play and escort meta.

**PvP Tier List** — S/A/B/C/D tiers for solo and multi-crew/fleet. 20 ships rated with one-line reasoning. Updated per patch.

**Synergy Checker** — select your ship, primary weapon type (ballistic/laser/distortion/mixed), shield type and engagement style (burst/sustained/stealth/range). Returns a PvP assessment: synergies, conflicts, tactical notes and links to relevant matchups.

---

## Interdiction Planner

Plan a piracy or interdiction op.

1. Select **Op Type**: Jump Point Ambush, Trade Route Intercept, Hub Camp, or Anti-Interdiction (escort)
2. Select **Intercept Location** — 20 locations across Stanton, Pyro and Nyx
3. Build the **crew roster** — callsign, role (Mantis, Blocker, Scanner, Pursuit, Assault, Support, Boarding, Loot Hauler) and ship per player
4. The **Op Assessment** box flags issues automatically — no Mantis, no fighter cover, no loot hauler, etc
5. **Hot Routes tab** — live commodity prices (Quant, Neon, E'tam, WiDoW, Stileron, RMC) so you know what targets are carrying
6. **Comms Callouts tab** — 4-phase callout structure (Setup, Interdiction, Loot, Emergency) ready to paste into Discord
7. Click **📋 COPY BRIEF** for the full op brief
8. **💾 SAVE** to store the op config — up to 8 named saves, ▶ to reload, ✕ to delete

---

## Exec Hangar Timer

Tracks the PYAM contested zone cycle in real time. Calibrated from [exec.redline-arsenal.net](https://exec.redline-arsenal.net) — calibrated Jun 7 2026, ±1 second accuracy. The cycle is globally synchronised across all servers and shards.

**The cycle (185 min 226ms total):**
- 🟢 **ONLINE — 65 min** — all 5 lights are green at the start. They turn off one by one every ~13 minutes. **INSERT COMPBOARDS NOW. Claim ships.**
- 🔴 **OFFLINE — 120 min** — all lights off. They turn red one by one every 24 minutes. **Do not insert compboards.**

**Reading the LED display:**
- 🟢 Green lights = hangar is active, boards can be inserted
- ⚫ Off lights (during online phase) = time is running out, that section has closed
- 🔴 Red lights (during offline phase) = charging toward next online window

**Upcoming schedule** — shows the next 6 online windows over 12 hours with absolute times and countdowns.

**CZ Self Timers** — five standalone countdown timers for CZ objectives:
- **Keycard Printer** — 30 min cooldown (blue/red keycards)
- **Vault Door** — 20 min cycle, 1 min open window
- **Terminal / Compboard** — 15 min cooldown
- **Crypt Door** — 20 min cycle
- **Custom** — set any duration

Hit ▶ START when the objective resets in-game. Use **−1m / +1m** to adjust if you missed the exact moment. All timers persist between sessions.

---

## Status Bar

The bar at the top of every page shows live infrastructure status.

- **RSI** — Persistent Universe, Platform and Arena Commander health
- **AWS** — active infrastructure incidents affecting CIG's hosting
- **PING** — your round-trip latency to RSI infrastructure. Click to retest. Colour-coded: green <80ms, gold 80–150ms, amber 150–300ms, red >300ms
- **⚙ WORKERS** — click to expand the worker health dashboard. Shows live response time for all 7 Cloudflare workers. **▶ SHOW HISTORY** displays an RTT bar chart for the last 24 checks per worker

---

## Settings and Extras

**☀ LIGHT / 🌙 DARK** — theme toggle in the footer. Switches between the default dark theme and a warm parchment light theme. Preference saves between sessions.

**? SHORTCUTS** — footer link (or press `?`) to show the keyboard shortcut overlay.

**MOTD ticker** — if CatMilker has pushed an org announcement, a coloured bar appears between the status bar and the nav. Click ✕ to dismiss.

---

## Tips

**Live prices update silently.** The UEX ticker and all live income figures refresh automatically in the background. If you see `···` instead of a price, wait a few seconds and switch panels.

**The Rep Tracker saves automatically.** Use the Export button to back it up before clearing your browser data.

**Ship Compare for upgrade decisions.** Before spending aUEC on a new ship, compare it against your current one. The radar chart makes it immediately obvious whether the upgrade is worth it across all dimensions.

**The Org Ops synergy detector is real.** If you add haulers to a Pyro session with no combat roles, the Op Notes section flags it. It checks for: no escort in contested space, no scanner, Mantis with no fighter cover.

**The tool works offline** after the first load. The service worker caches all panels and data files. Live prices revert to last-known values without network.

**The Exec Hangar timer runs in the background.** Once you open the panel it starts ticking — you don't need to keep it open.

**Fleet View is shared per browser.** Each org member adds their own ships on their own machine. Use Export to share your list in Discord, others Import to add your ships to their view.

---

## Getting Help

Message reverend_ozmund on discord for help

Built by CatMilker · Contributors: CatCya, CatNipp
