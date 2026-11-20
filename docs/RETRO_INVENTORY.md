# COSTIN Retro Inventory and QA Backlog
Updated 2026-11-20. Source-code inventory only; registered does not mean independently gameplay-tested.

## Main branch baseline (before this PR)
- 11 selectable Nokia profiles: 1100, 3310, 3220, 6600, 5210, 7210, 2100, 3330, 3650, N-Gage, N-Gage QD.
- 13 distinct registered mobile game IDs: snake, impact, link5, bantumi, pairs, pinball, mix, bounce, triple, dance, spider, snakes3d, boarding. These are recreations, not ROMs.
- 12 standalone arcade modes in arcade.html: tank, platform, fighter, snow, blocks, run, brawl, snake, breakout, invaders, racer, maze.
- Bounce: 11 named authored levels in dist/classics.js. Other game levels and win/lose paths require per-game audit.
- 500-game goal: 13 registered IDs / 500; 487 missing. Verified-playable count **unknown**; do not count phones, aliases, or repeated games as distinct titles.

## This PR
- Nokia 3210 (1999) with existing Snake-style Trail recreation: +1 phone, +0 unique mobile games.
- Lantern Drift: new original 3-stage standalone browser arcade game: +1 arcade title; does not increase 500-mobile-game counter.
- Proposed inventory after merge: 12 phones, 13 mobile game IDs, 13 standalone arcade games.

## QA evidence
- Source registration and link inspected, no pirated ROMs introduced.
- **Not verified:** Chrome, Firefox, Safari gameplay, mobile browsers, pointer capture, keyboard operation, stage completion, game-over/restart, no console exceptions, and existing-game regressions.
- Network access from test container to GitHub raw files failed on 2026-11-20. No end-to-end browser results available. Do not merge solely on static inspection.

## Blocking issues and backlog (priority)
1. Set up Playwright CI (Chromium, Firefox, WebKit, desktop + mobile viewport) with browser console-error capture and launch/restart/control smoke tests. Run on PR before merge.
2. Test all 11 Bounce levels end-to-end, all Space Impact stages, and each mobile-game win/lose path.
3. Confirm each phone-game association launches correctly and the touch joystick works, including pointercancel and screen orientation.
4. Fix arcade Block Stack's single-block behavior before describing it as tetromino/Tetris gameplay.
5. Validate arcade Snake direction processing and collision handling.
6. Add one **distinct original mobile game engine** each day; phone model reuse alone does not advance the 500 target.
7. Maintain a machine-readable game registry with unique IDs, license provenance, phone associations, test status, level counts, and release URLs.
8. Add progress save, accessibility and keyboard instructions, responsive QA and mobile performance profiling.

## Release gate
Do not publish unless all new features pass real browser start, controls, scoring, loss, victory, restart and progression tests; existing core smoke tests pass; and any browser incompatibilities are documented. Keep untested changes in a PR.
