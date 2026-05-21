# Catfight Command Centre

Star Citizen 4.8 org tool for the Catfight org. Single-file HTML — no server, no account, open directly in a browser or host on GitHub Pages.

**Live site:** https://catmilker.github.io/catfight-command-centre/

---

## What's in it

**🔫 Ship Builder** — Erkul-style interactive loadout tool
- 209 ships from erkul.games live API (4.8.0.11825000) grouped by manufacturer
- 86 purchasable weapons with stats pulled directly from erkul: alpha damage, DPS, fire rate, power draw, heat per shot, projectile speed
- Click any hardpoint slot → weapon picker modal opens with full stats table (Alpha · DPS · FR · Power)
- Compatible sizes shown first, incompatible greyed out
- Live stats update as you equip: combined DPS, alpha per volley, Physical/Energy/Distortion breakdown bars, total power draw, heat per shot, per-gun list
- Damage type filter (Physical / Energy / Distortion) + weapon type filter + search

**🎯 Grind guides** — fast track chains for every faction, confirmed from 4.8 live game files:
- BHG — full rank chain (VLRT → ERT), cert unlock order, fastest path confirmed from DCB
- Foxwell, InterSec, Covalex, BlacJac, Headhunters, Shubin — dedicated tabs with tier tables and BP drop notes
- Cargo, mining, Nyx — tier by tier from zero aUEC
- Xenothreat phase guide — PH1 ship combat, PH2 Zeta-Prolanide, PH3 FPS boarding

**🔧 Loadout Builder** — 19 ships with presets and buy route planner
- Gladius, Arrow, Hawk, Buccaneer, Mustang Delta, F7C Mk II, F7C-M Super Hornet, Sabre, Hurricane, Cutlass Black, Vanguard Harbinger, Vanguard Sentinel, Eclipse, Scorpius, Corsair, Constellation Andromeda, Prospector, Vulture, Cutlass Red
- Multiple presets per ship (meta fixed, budget, EMP, stealth builds)
- Auto-generated buy route planner per loadout
- Weapons DB tab — 104 weapons searchable/filterable/sortable

**🏪 Shop Directory** — searchable item catalogue
- 115+ items: ships, ship weapons, components, FPS weapons, armor, tools, medical, food
- Search any item name, location or note — get where to buy it instantly
- Category filter buttons

**💎 Trade & Commodities** — 4 tabs
- 35 commodities with live UEX prices, ticker, category, best sell location
- 3-tier route guide (low/medium/high risk) with actual commodity names and margins
- Full Covalex hauling rep chain (Newcomer → Master, XP per run, key unlocks, VK-00/XL-1 QD BPs at Master)
- Trade tips covering why to start with hauling, Adagio Titanium method (3M+/hr confirmed)

**📋 Blueprint Sources** — 21 confirmed drop sources from 4.8 live game files
- Full item drop lists per mission type with drop rates
- Foxwell, InterSec, BHG, Headhunters, Shubin, CFP, Eckhart, Black Box Recovery
- Filterable by faction, system, drop rate

**🎯 Mission Reference** — all 9 factions
- BHG, BlacJac, CFP, Eckhart, Headhunters, Bit Zeros, Shubin, Adagio, CDF
- Full difficulty tables confirmed from game files

**⛏️ Minerals** — 35 minerals, confirmed cave and asteroid locations across Stanton, Pyro and Nyx

**🗂️ Ship Database** — 275+ ships searchable by role and manufacturer

**Other panels** — Rep tracker, Session income estimator (32 activities, adjustable session length + crew), Org ops role planner, Systems navigator, Blueprint roadmap by role

---

## Data sources and accuracy

**Confirmed from 4.8 live (4.8.0.11825000) — game files:**
- Weapon stats (DPS, alpha, fire rate, power draw, heat) — erkul.games live API, sourced from game DCB
- Ship hardpoints and sizes — erkul.games live API
- Mineral locations — `global.ini` mining compendium
- Blueprint drop tables — `all_sc_data.txt` mission localisation (240+ entries)
- Mission data (XP, enemies, difficulty) — `all_sc_data.txt`
- BHG rank chain and cert structure — `Game2.dcb`
- New 4.8 ships (Clipper, Salvation, Hermes, Perseus) and stealth shields (Mirage, Veil, Obscura, Sheut, Umbra) — confirmed

**4.7.2 estimates — flagged in-tool:**
- Most ship aUEC buy prices — 4.8 live UEX data not fully stable at time of writing
- Verify current prices at uexcorp.space before any large purchase

---

## Status

**Beta v0.6** — 4.8 live. Major update: erkul-powered ship builder with 209 ships and 86 weapons, fully fleshed trade panel, session estimator rebuild, shop directory overhaul.

**Contributors:** CatCya
