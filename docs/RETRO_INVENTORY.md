# COSTIN Retro Inventory and QA Backlog
Updated: 2026-11-18. Baseline is main branch before this PR. Source registrations are NOT gameplay certification.

## Main branch source audit
- 11 selectable Nokia profiles in dist/phones.js: 1100, 3310, 3220, 6600, 5210, 7210, 2100, 3330, 3650, N-Gage, N-Gage QD.
- 13 distinct registered mobile game IDs, based on the phone associations: snake, impact, link5, bantumi, pairs, pinball, mix, bounce, triple, dance, spider, snakes3d, boarding. Some IDs are original recreations, not licensed ROMs.
- 12 arcade modes in arcade.html: tank, platform, fighter, snow, blocks, run, brawl, snake, breakout, invaders, racer, maze. These are modes within one HTML application.
- 11 named Bounce levels in dist/classics.js. Other stage definitions in game.js/ngage.js require separate enumeration and verification.
- New proposed model: Nokia 1110, with existing COSTIN Snake and Space Shooter tribute engines. No new distinct mobile-game ID.
- New proposed arcade: Signal Runner, standalone signal-runner.html. This is the 13th distinct arcade game after merge.
- 500 unique mobile game target: 13 registered IDs; 487 additional distinct mobile games needed. Do not count phones, levels, or arcade modes toward mobile-game target.

## High priority defects / risks
1. No reproducible Playwright browser QA evidence for Chrome/Firefox/Safari or mobile touch; cannot certify any title error-free.
2. arcade.html Block Stack uses single-cell pieces, not tetrominoes. Do not label it Tetris.
3. arcade.html Snake mode applies directional input after movement tick, risking unexpected turns.
4. arcade.html arcade games use a shared generic health/death loop; per-game win and level progression are not consistently implemented. Do not claim full-length campaigns.
5. Arcade mode list is static and standalone Signal Runner is linked separately. Consolidate catalog once browser tests exist.
6. Current 11 phone models are recreations; historical model/game accuracy needs individual source checking.
7. Check console errors, mobile layout, touch pointer capture, keyboard focus, pause/resume, restart, collisions, progression and win/lose for every title.
8. Repeated phone associations are NOT unique games; build a distinct game registry with provenance, rights, levels, QA status.

## Release gate
- Run JS parse checks for all modified scripts.
- Test desktop Chrome and mobile viewport using Playwright: page load, controls, no console errors, restart, scoring, collisions, victory and defeat.
- Run regression tests on all existing phone selectors and arcade modes.
- Verify no unlicensed assets, ROMs or trademark-confusing descriptions.
- Merge only when tests pass. Otherwise leave PR draft and document blockers.

## Next backlog
- Build Playwright test harness and GitHub Actions workflow; save screenshots/test reports.
- Add an original mobile game ID to a new phone instead of reusing engines.
- Implement complete level progression, pause and game-over for all arcade modes.
- Add accessible mobile D-pad/joystick tests and prevent browser scrolling.
- Inventory historical Nokia models and deduplicate variants.
