# COSTIN Retro Inventory and Release Backlog
Audit date: 2026-11-22. Baseline: `main` (not draft PRs). **Source registrations are not verified playable titles.**

## Main-branch inventory
- 11 selectable Nokia profiles: 1100, 2100, 3220, 3310, 3330, 3650, 5210, 6600, 7210, N-Gage, N-Gage QD.
- 13 registered distinct mobile-game IDs, reused across phone profiles: snake, impact, link5, bantumi, pairs, pinball, mix, bounce, triple, dance, spider, snakes3d, boarding.
- 12 standalone arcade modes: Pixel Tanks, Pixel Jumper, Neon Fighter, Snow Dash, Block Stack, Jungle Commando, Dino Street Brawl, Neon Snake, Brick Blaster, Galaxy Defender, Turbo Highway, Crystal Maze.
- 11 authored Bounce stages (source claim; runtime level completion not verified).
- 500-game target: 13/500 provisional registered mobile IDs; **487 missing**. Count only unique licensed/original mobile game implementations, not re-skins, phone associations, or arcade modes.
- Main lacks this inventory file as of audit. Open PRs #6–#15 contain overlapping phone profiles and separate games; **do not count or merge without conflict resolution and QA**.

## This proposed branch (not released)
- Nokia 1200 (2007), with an existing COSTIN Snake-style recreation. +1 phone profile, +0 unique mobile games.
- Original standalone **Lumen Labyrinth** at `/lumen-labyrinth.html`: 3 maze layouts, keyboard/touch directional controls, collectible sparks, roaming shadows, restart, hearts, victory/defeat; linked from `arcade.html`. +1 standalone arcade title, +0 unique mobile games.
- Proposed totals: 12 phone profiles; 13 distinct mobile IDs; 13 standalone arcade titles. Gap remains 487.

## QA / release gate
- [x] Read main-branch phone registry and arcade catalog; check proposed phone ID is absent.
- [x] Parse modified JavaScript and inline arcade scripts (syntax only).
- [ ] Run Playwright on deployed PR preview or local checkout in Chromium, Firefox, WebKit; collect screenshots and traces.
- [ ] Test Nokia 1200 selection, Snake launch, directional keys and on-screen joystick/keypad, pause, restart, scoring and loss.
- [ ] Test Lumen Labyrinth: all three levels, every spark and gate reachable, hazard collision, heart loss, defeat, win, restart and reset; keyboard and touch.
- [ ] Test existing Nokia and arcade games for regression, responsive 320px/390px/desktop layouts, pointer cancel and blur handling.
- [ ] Accessibility, focus and no console errors; mobile Safari and Chrome.
- [ ] Copyright/license review of every added asset and title; no ROMs, proprietary character sprites or implied official Nokia affiliation.
- [ ] Review PR and merge only when above tests pass.

## Known issues / risks
- Browser gameplay unverified; JavaScript syntax success does not establish gameplay correctness.
- Lumen Labyrinth uses static maze designs and simple moving shadows; level reachability and play balance require runtime tests.
- Existing Block Stack is not a complete tetromino game; avoid calling it Tetris.
- Existing Snake direction timing and touch/pointer controls need regression testing.
- Existing arcade page claims compatibility with Safari/Firefox/mobile without a published test matrix.
- Main has no automated catalog validation or certified unique playable-game count.

## Prioritized backlog
1. Establish Playwright smoke tests and CI, including deterministic game-state hooks where appropriate.
2. Resolve overlapping open draft PRs; choose distinct original arcade titles after rights/QA review, not repeated phone additions.
3. Add a **new distinct original mobile game engine** for a historically appropriate Nokia profile (not just reusing Snake).
4. Create machine-readable JSON inventory with stable game IDs, phone compatibility, rights provenance, stage counts and QA status.
5. Increment toward 500 only for tested, genuinely distinct, copyright-safe mobile games.
