# COSTIN retro inventory and QA backlog
Updated: 2026-11-15. Source: main branch inspected before proposed changes. **Static inventory only; not a certification of playability.**

## Existing main-branch phone profiles (11)
1100, 3310, 3220, 6600, 2100, 3330, 3650, 5210, 7210, N-Gage, N-Gage QD.

## Existing mobile game IDs (13)
snake, impact, link5, bantumi, pairs, pinball, mix, bounce, triple, dance, spider, snakes3d, boarding.

Each distinct ID counts once, regardless of how many phone profiles reuse it. 13/500 registered unique mobile game IDs; **487 additional distinct mobile games** required. Registered does not mean QA-verified. Nokia 3410 proposed in this branch reuses bounce and snake and therefore adds zero unique games.

## Arcade
The main branch contains 12 original arcade modes (tank, platform, fighter, snow, blocks, run, brawl, snake, breakout, invaders, racer, maze). This branch proposes a thirteenth mode, Meteor Rescue. Arcade titles are **excluded** from the 500-mobile-game target.

## Known level content
- Bounce: 11 authored stages in dist/classics.js; level-by-level completion not verified.
- Other games: stages/waves/runs exist in multiple modes, but no comprehensive executable level-completion evidence has been collected.

## Release gates / missing tests
- [ ] Browser smoke tests in Chrome, Firefox, Safari, and mobile WebKit/Chromium
- [ ] Verify every phone card loads and its game selection matches its IDs
- [ ] Verify each unique mobile game starts, handles keyboard, touch/joystick, pause and restart
- [ ] Verify all authored levels/waves are reachable and completable
- [ ] Verify each arcade mode starts and exits/restarts, and all controls respond on desktop and mobile
- [ ] Automated assertions for victory, defeat, scoring and restart (especially new Meteor Rescue)
- [ ] Responsive viewport and canvas scaling checks
- [ ] Confirm no runtime console errors, missing assets or uncaught exceptions
- [ ] Check historical handset/game authenticity claims; clearly label tributes and recreations
- [ ] Avoid copyrighted ROMs, original commercial character art and misleading branded ports

## Proposed changes 2026-11-15
- Nokia 3410 phone profile: Bounce + Snake II using existing engines; no new mobile-game ID.
- Meteor Rescue: original falling-object rescue arcade mode; collect 12 pods to win, avoid meteors, 3 health, restart. Requires real-browser QA.
- Both changes are intentionally **unpublished** until test gates pass.

## Priority backlog
1. Build Playwright tests and deterministic test hooks for every game mode and stage.
2. Fix known arcade mechanics that lack full gameplay depth, and verify touch pointer release behavior.
3. Implement one **genuinely distinct** mobile game per release, rather than only remapping games to new handset profiles.
4. Maintain a structured machine-readable registry with status: registered / playable / QA-passed / published.
5. Add phone profiles without duplicates and avoid claiming historical authenticity without evidence.
