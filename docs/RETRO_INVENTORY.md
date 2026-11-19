# COSTIN Retro Inventory and QA Backlog
Updated: 2026-11-19. Source inventory, **not** a certification of gameplay.

## Main-branch baseline audited before this PR
- Nokia selectable phone profiles: 11: 2100, 3330, 3650, 5210, 7210, 1100, 3310, 6600, 3220, N-Gage, N-Gage QD.
- Phone game registrations (not necessarily distinct implementations): inspect `phones` in `dist/phones.js`. Duplicate IDs across phones are not additional games.
- Distinct mobile game IDs previously reported: 13; **runtime certification pending**. At that provisional count, 487 remain to the 500 mobile-game goal.
- Arcade: 12 game modes in `arcade.html`, prior to this PR; games may have limited mechanics or incomplete progression.
- Bounce: 11 named authored stages in `dist/classics.js`; stage-by-stage completion not verified.
- Main branch had no `docs/RETRO_INVENTORY.md` when audited.

## 2026-11-19 proposed changes
- Nokia 5110 (1998) with the existing COSTIN Snake recreation, **zero new unique mobile game IDs**.
- Comet Catch, an original separate browser arcade game with 3 timed waves, keyboard and pointer controls, scoring, 3 lives, restart, win/lose states.
- Proposed totals after merge: 12 phone profiles, 13 arcade titles, 13 provisional distinct mobile IDs. **Do not count this PR as progress toward 500 mobile games.**

## Release gates (not yet passed)
- [ ] Playwright Chromium desktop: all existing phone models launch and select each registered game
- [ ] Playwright mobile viewport: phone selection, keypad and pointer joystick, touch A/B and game controls
- [ ] Comet Catch: start, keyboard movement, pointer movement, restart, wave 1→2→3, win and loss
- [ ] All existing arcade modes: launch, restart, controls, victory/defeat where designed
- [ ] Bounce: finish all 11 stages, verify transitions and persistence
- [ ] Safari/iOS and Firefox manual or automated compatibility
- [ ] Console errors, broken links, layout overflow and accessibility smoke checks
- [ ] Validate game licenses and original artwork; never embed unauthorized ROMs
- [ ] Merge only when all release gates for modified content and regressions pass

## Backlog / priorities
1. Add Playwright project with deterministic test hooks and CI for desktop + mobile.
2. Fix snake direction input ordering, improve Block Stack to full tetromino rules, verify arcade win states.
3. Add **new distinct mobile games** with standalone mechanics, level progression and tested Nokia-specific controls; avoid only repackaging existing engines.
4. Maintain a machine-readable inventory with game ID, models, license, levels, test evidence, release SHA and live URL.
5. Gradually add all feasible Nokia handset profiles and 500 distinct licensed/original mobile games. Preserve copyright and do not mislabel recreations as official ports.
