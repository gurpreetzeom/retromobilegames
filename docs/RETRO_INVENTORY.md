# COSTIN Retro Inventory and QA Backlog
Updated: 2026-11-21. Baseline: main branch at audit time; proposed additions are on branch `retro/2026-11-21-moon-garden-qa`, NOT published.

## Main branch inventory (source registrations; NOT certified playable)
Phone models (11): 1100, 2100, 3220, 3310, 3330, 3650, 5210, 6600, 7210, N-Gage, N-Gage QD.
Phone game registry: 13 distinct IDs (deduplicate repeated phone associations): snake, impact, link5, bantumi, pairs, pinball, mix, bounce, triple, dance, spider, snakes3d, boarding. Count is source-registration only.
Standalone arcade modes (12): tank, platform, fighter, snow, blocks, run, brawl, snake, breakout, invaders, racer, maze.
Bounce: 11 named authored stages in dist/classics.js. Other games may have stages/waves but complete stage counts and reachability are not certified.
Source scripts: dist/game.js, dist/classics.js, dist/ngage.js, dist/phones.js.
Existing phone controls use keyboard/pointer handlers; runtime compatibility unverified.

## Proposed changes in this branch
- Nokia 3410 (2002), Bounce recreation + Snake II recreation. Both reuse existing engines, therefore **0 new distinct mobile games**.
- Moon Garden: original standalone arcade game in moon-garden.html. Three stages, 8 seeds each, moving hazards, three health points, keyboard (arrows/WASD), pointer buttons, restart, win/lose states. Linked from arcade.html.
- Proposed totals: 12 phone profiles, 13 distinct mobile registry IDs, 13 standalone arcade titles.
- Target gap: 500 - 13 = **487 distinct mobile games** based on source registrations, not verified playable games. Arcade titles do not count toward mobile target.

## Known gaps / QA backlog
1. **P0** Install and run Playwright on an environment with repository checkout and browser binaries. Test desktop Chromium, Firefox, WebKit and mobile viewports. Current run did not execute real browser gameplay.
2. **P0** Exercise all 11 Bounce stages and each other game end-to-end; verify reachable victory, loss, restart and transitions. Do not claim flawless levels without this.
3. **P0** Verify pointer capture, keyboard keyup, screen orientation, resizing, canvas dimensions and touch scrolling for every game.
4. **P0** Add automated smoke tests: page load/no console errors, each phone selection, each game launch, directional input, start/pause/restart, game-over and victory.
5. **P1** Check arcade Block Stack rules (single-cell pieces, not full tetromino gameplay) and Snake direction processing.
6. **P1** Create machine-readable unique game catalog with engine IDs, model associations, authorship/licensing and level counts; reject duplicate IDs and unlicensed assets in CI.
7. **P1** Add genuinely new original mobile-game engines instead of inflating the count by reusing games on additional models.
8. **P1** Test real mobile Safari and Android Chrome; no evidence yet of complete browser support.
9. **P2** Expand feasible Nokia model catalog with accurate descriptions, original artwork and historically appropriate games; do not imply firmware emulation or original ROMs.

## Release gate
Keep PR in draft until JS syntax, browser smoke tests, gameplay and regression tests pass. Merge only after reviewing test evidence. Never use pirated ROMs or unlicensed art/music. No game or level is certified error-free by this source audit.
