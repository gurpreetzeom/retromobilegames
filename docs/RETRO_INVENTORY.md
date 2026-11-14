# COSTIN retro inventory and QA backlog

Updated: 2026-11-14. Source audit only; browser end-to-end validation is pending.

## Baseline (main branch, before this PR)
- 11 selectable phone models: Nokia 1100, 6600, 3220, 3310, 5210, 7210, 2100, 3330, 3650, N-Gage, N-Gage QD.
- 12 standalone browser arcade titles: Pixel Tanks, Pixel Jumper, Neon Fighter, Snow Dash, Block Stack, Jungle Commando, Dino Street Brawl, Neon Snake, Brick Blaster, Galaxy Defender, Turbo Highway, Crystal Maze.
- Phone titles reference existing shared game engines in dist/game.js, dist/classics.js, dist/ngage.js and dist/phones.js; multiple phone entries reuse the same game. Do not count duplicate associations toward the 500 unique mobile-game target.
- Bounce has 11 named stage definitions in dist/classics.js. This does not prove each stage is beatable.
- Previous proposed additions (Nokia 3410 and Meteor Rescue) are not in main and are not counted.

## Proposed changes in this PR
- Nokia 5110 (1998) profile with the existing original Snake-style engine. New phone model, **zero new distinct mobile-game implementations**.
- Orbit Collector: one new original arcade mode. Keyboard/touch arrows or WASD, collect 15 stars, avoid drones, health and restart, win/lose overlay.
- After merge: 12 selectable phone models and 13 arcade titles, subject to code and browser verification.

## Quality gates (must complete before merge)
- [x] JS syntax checks of modified phone and arcade scripts using V8 parser.
- [x] Source checks for model registration, arcade tile, title lookup, mode update and rendering.
- [ ] Automated Chromium desktop: launch every game, keyboard movement/actions, restart, no console errors.
- [ ] Automated mobile viewport with touch/pointer: D-pad and A/B controls, responsive layout, no scrolling while playing.
- [ ] Exercise win/lose for Orbit Collector; ensure exactly 15 pickups wins, damage depletes health, restart resets counters.
- [ ] Traverse all 11 Bounce stages, verify transitions and no softlocks.
- [ ] Test every phone-game association and arcade game; log broken controls or game loops.
- [ ] Check accessibility labels, high-score storage, device compatibility and performance.
- [ ] Validate deployed URL https://costin.in/arcade.html after merge.

## Known risks
- Nokia 5110 phone uses a shared Snake-style recreation, not original Nokia firmware or an authentic ROM.
- Arcade uses a canvas and frame-based simulation; full gameplay and touch controls have not been tested in a real browser.
- No comprehensive automated browser test harness currently verified.
- Prior PRs for 3410 / Meteor Rescue may conflict or duplicate the roadmap; reconcile before merging.

## Roadmap
1. Establish Playwright regression suite and publish QA reports.
2. Record unique mobile game IDs, phone associations, stages and licenses in machine-readable inventory.
3. Add one distinct original mobile game per release, rather than only associating existing games with more phones.
4. Build original arcade titles with documented stage completion and restart.
5. Track 500-game target using verified unique mobile implementations only.
