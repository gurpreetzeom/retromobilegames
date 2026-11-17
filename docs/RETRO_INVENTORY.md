# COSTIN Retro Inventory and QA Backlog
Updated: 2026-11-17. Source: main branch plus proposed `retro/2026-11-17-coral-courier-3410` changes. **Source registration is not a passing gameplay test.**

## Main branch baseline
- **11 selectable Nokia profiles:** 1100, 3310, 3220, 6600, 2100, 3330, 3650, 5210, 7210, N-Gage, N-Gage QD. These are browser recreations, not Nokia firmware emulation.
- **13 distinct mobile game IDs** registered in `dist/phones.js`: `snake`, `impact`, `link5`, `bantumi`, `pairs`, `pinball`, `mix`, `bounce`, `triple`, `dance`, `spider`, `snakes3d`, `boarding`. Repeated phone associations do not count as unique games.
- **12 standalone arcade modes** registered in `arcade.html`: `tank`, `platform`, `fighter`, `snow`, `blocks`, `run`, `brawl`, `snake`, `breakout`, `invaders`, `racer`, `maze`.
- `dist/classics.js` contains **11 authored Bounce stages**, named FIRST STEPS through HOME STRETCH. `dist/game.js` contains multiple named Space Impact environments; full reachable-stage count and completion are not certified.
- Existing phone touch joystick supports pointer input; arcade provides direction and A/B touch buttons. Actual device compatibility is **not yet verified**.

## Proposed changes, not yet on main
- **Nokia 3410 (2002)** with existing Bounce recreation and Snake II: 12 phone profiles, still 13 unique mobile game IDs.
- **Coral Courier**: original standalone browser arcade game with arrow/WASD + pointer touch controls, 12-pearl win, 3-heart loss, restart. Linked from `arcade.html`. 13 arcade games after merge.
- Mobile-game goal: **13/500 source-registered unique IDs**, **487 remaining**; number independently proven playable is **unknown**. Arcade games are excluded from 500 mobile-game goal.

## QA release gate (must be executed before merge)
1. Load homepage and phone selector on Chromium desktop, Android-sized viewport and WebKit/mobile Safari-sized viewport. Verify Nokia 3410 card and both selected games launch.
2. For every arcade mode and Coral Courier, test keyboard and touch buttons; ensure pointerup and blur release keys.
3. Verify start, restart, scoring, win/lose, no console errors or page exceptions; verify Coral Courier 12-pearl win and 3-hit loss using deterministic seeded scenarios or test hooks.
4. Traverse all 11 Bounce stages and Space Impact transitions; check no unreachable levels, collisions or stuck states.
5. Test 320px, 375px, 768px and desktop viewport widths, canvas visibility and accessibility labels.
6. Verify links, no unauthorized ROMs/assets, no duplicate game IDs, and production deployment after merge.
7. Prefer Playwright smoke tests in CI and block merges on failures. A syntax check alone does not establish playability.

## Priorities
- **P0:** Add deterministic Playwright gameplay smoke tests and CI; current real-browser pass/fail coverage unknown.
- **P0:** Audit arcade `blocks` mode: current implementation places only single blocks, not a complete tetromino Tetris-style game; avoid describing it as an authentic Tetris port.
- **P1:** Add genuinely distinct mobile game engines, not only new phone skins, toward 500.
- **P1:** Catalog all Nokia handset models by release year, avoid unsupported historical accuracy claims, and validate each simulated game's controls and level progression.
- **P2:** Improve individual game accessibility, pause/resume, save-state, level selection and performance on low-end phones.

## Release policy
Never claim full gameplay verification without a recorded browser test. Keep proposed changes in PR until verification. Copyright-safe original art and mechanics only; no pirated ROMs or misleading game names.
