# Catfight Command Centre

Star Citizen 4.8 org tool for the Catfight org. Single-file HTML — no server, no account, open directly in a browser.

**Live site:** https://catmilker.github.io/catfight-command-centre/

---

## What's in it

**Grind guides** — fast track chains for every faction, confirmed from 4.8 live game files:
- BHG — full rank chain (VLRT → ERT), cert unlock order, step-by-step fastest path
- Foxwell, InterSec, Covalex, BlacJac, Headhunters, Shubin — dedicated tabs with tier progressions and BP drop notes
- Cargo, mining, Nyx — tier by tier from zero aUEC
- Xenothreat phase guide — PH1 ship combat, PH2 Zeta-Prolanide, PH3 FPS boarding, Catfight role split

**Loadout builder** — 8 ships with multiple presets each:
- Gladius, Arrow, Hawk, F7C Mk II, F7C-M Super Hornet, Sabre, Vanguard Harbinger, Corsair
- Per-slot breakdown with manufacturer, buy location and cost
- Auto-generated buy route planner per loadout

**Shop directory** — searchable item catalogue, where to buy everything:
- Ships (buy + rent prices), ship weapons, components, FPS weapons, armor, tools, medical, food
- Filter by category or search any item name, location or note
- 115+ items covering Stanton, Pyro and Nyx

**Blueprint sources** — 21 confirmed drop sources from 4.8 live files:
- Full item drop lists per mission type with drop rates
- Filterable by faction, system and drop rate
- Priority starred: Foxwell (all missions), InterSec ERT, BHG QV Breaker Nyx, Shubin Rockcracker Nyx

**Mission reference** — all 9 factions:
- BHG, BlacJac, CFP, Eckhart, Headhunters, Bit Zeros, Shubin, Adagio, CDF
- Full difficulty tables (combat/risk/enemies/XP) confirmed from game files

**Minerals panel** — 35 minerals, confirmed cave and asteroid locations across Stanton, Pyro and Nyx

**Ship database** — 275+ ships searchable by role and manufacturer

**Other panels** — rep tracker, session income estimator, org ops role planner, systems navigator

---

## Data sources and accuracy

**Confirmed from 4.8 live (4.8.0.11825000) — datamined game files:**
- Mineral locations — `global.ini` planet/moon descriptions and mining compendium journal
- Blueprint drop tables — `all_sc_data.txt` mission localisation data (240+ entries parsed)
- Mission data (XP, enemies, difficulty) — `all_sc_data.txt`
- Component names (QuadraCell, SnowBlind, Palisade, Boreal, VK-00 etc) — `global.ini`
- Ship stats (crew, SCM speed, armor, roles) — `ships_desc_enhancements.ini`
- BHG rank chain and cert unlock structure — `Game2.dcb`
- New 4.8 ships (Clipper, Salvation, Hermes, Perseus) — live files + community sources
- New 4.8 stealth shields (Mirage, Veil, Obscura, Sheut, Umbra) — `global.ini` confirmed

**4.7.2 estimates — flagged in-tool with a banner:**
- Most ship aUEC prices — 4.8 live UEX data not yet stable at time of writing
- Component prices in loadout builder — approximate community figures
- Verify current prices at uexcorp.space before any large purchase

## Status

**Beta v0.5** — live on 4.8. Prices update once UEX 4.8 data stabilises.
