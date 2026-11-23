# COSTIN Retro Inventory and QA Backlog
Updated 2026-11-23. Source-code audit of `main` before proposed additions. **Registrations do not prove playability.**

## Main branch inventory
- Nokia profiles (11): 1100, 2100, 3220, 3310, 3330, 3650, 5210, 6600, 7210, N-Gage, N-Gage QD.
- Distinct mobile-game IDs (13): snake, impact, link5, bantumi, pairs, pinball, mix, bounce, triple, dance, spider, snakes3d, boarding. Repeated IDs across phones count once.
- Arcade modes (12): tank, platform, fighter, snow, blocks, run, brawl, snake, breakout, invaders, racer, maze.
- Bounce: 11 authored stages in `dist/classics.js`; N-Gage Snakes tribute: 6 route definitions in `dist/ngage.js`; additional arcade/phone stage progression needs runtime coverage.
- `arcade.html` has keyboard and pointer control handlers, but browser compatibility and complete playthroughs are **not verified**.
- Main has no `docs/RETRO_INVENTORY.md` (404 on 2026-11-23).

## 2026-11-23 proposed changes
- Nokia 1208 phone selector profile with existing Snake recreation: +1 phone, **+0 distinct mobile games**.
- Beacon Dash: +1 original standalone browser arcade game, 3 stages, keyboard/touch direction, start/restart, hearts, victory/defeat. Source committed; browser tests **not run**.
- Main baseline 13/500 mobile IDs; **487 remaining**. After PR, still 13/500; no mobile game added.

## Release-blocking QA
1. Automated Playwright smoke tests on desktop Chromium, Firefox and WebKit, plus 390x844 mobile touch viewport; assert no page errors and all links resolve.
2. Exercise keyboard (arrows/WASD), pointer hold/release, focus loss, orientation/resizing, restart, win and lose.
3. Complete all 11 Bounce stages, all 6 Snakes tribute routes, and every new arcade stage without shortcuts; verify terminal states.
4. Check phone selector and each game menu entry, missing assets, collision boundaries, performance and accessibility.
5. Audit all open draft PRs against main to avoid repeated Nokia models and duplicate arcade concepts; do not merge conflicting PRs blindly.
6. No ROMs or unlicensed art. Phone names describe historical hardware; game recreations must not claim original firmware or level fidelity.
7. Fix any failing regression before merge; require reviewed PR and CI.

## Backlog
- P0: browser QA infrastructure and CI; merge conflict cleanup; verify arcade Snake directional timing and Block Stack rotation.
- P1: implement a **new** mobile game engine with original mechanics, not a reskin; register on an appropriate phone; write stage-level tests.
- P1: verify browser layouts, pointer capture, keyboard shortcuts, stage progression and win/lose.
- P2: expand unique mobile titles toward 500, recording ID, original/licensed status, supported phones, stage count, source path, automated test coverage, and live URL for each.
