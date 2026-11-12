# COSTIN game inventory and quality backlog
Last source-code audit: 2026-11-12 (IST). **Code presence is not proof of browser playability.**

## Nokia-inspired models (12 on this branch)
| Model | Year | Listed games |
|---|---:|---|
| Nokia 1100 | 2003 | Space Impact +, Snake II |
| Nokia 2100 | 2003 | Snake II, Space Impact, Link5 |
| Nokia 3310 | 2000 | Snake II, Space Impact, Bantumi, Pairs II |
| Nokia 3330 | 2001 | Snake II, Space Impact, Bantumi, Pairs II, Bumper |
| Nokia 3410 | 2002 | Bounce, Snake II (new 2026-11-12) |
| Nokia 3650 | 2003 | Snake EX recreation, Mix Pix |
| Nokia 5210 | 2002 | Snake II, Space Impact, Bantumi, Pairs II, Bumper |
| Nokia 6600 | 2003 | Snake EX recreation, Mix Pix |
| Nokia 7210 | 2002 | Bounce, Triple Pop |
| Nokia 3220 | 2004 | Club Pinball, Dance Delight, Phantom Spider |
| N-Gage | 2003 | Snakes tribute, Flo-Boarding tribute |
| N-Gage QD | 2004 | Snakes tribute |

**Total phone-model/game associations: 31** (not 31 distinct games). Game-engine IDs across models: snake, impact, link5, bounce, triple, bantumi, pairs, pinball, mix, dance, spider, snakes3d, boarding = **13 unique mobile game types**. These are browser recreations, not verified original firmware or ROM ports. The new 3410 reuses two existing games; it adds a model, not a distinct mobile game.

## Standalone browser arcade (13 titles on this branch)
Pixel Tanks; Pixel Jumper; Neon Fighter; Snow Dash; Block Stack; Jungle Commando; Dino Street Brawl; Neon Snake; Brick Blaster; Galaxy Defender; Turbo Highway; Crystal Maze; **Meteor Rescue (new)**.

## Count methodology
- 13 distinct mobile game IDs + 13 standalone arcade modes = **26 unique implemented game types** (some genres overlap, but implementations differ).
- Target: 500+ distinct playable **mobile** games. Gap to 500 mobile games = **487**; standalone arcade modes do not reduce that gap.
- Model count 12; Nokia's historical portfolio is larger and the exact feasible scope requires further research.
- Avoid counting multiple phone skins of the same implementation as new unique games.

## Code audit and known limitations
- `dist/game.js` includes nine named Space Impact-themed environments.
- `dist/classics.js` contains eleven named Bounce levels; level data is present but complete playthroughs are unverified.
- `dist/ngage.js` contains stage/run mechanics; exact end-to-end completion is unverified.
- `arcade.html` includes keyboard and touch pointer controls and a restart button. No automated real-browser run was performed in this audit.
- **Risk:** Some arcade modes use simplified collision/AI, and some lack finite win states or explicit level progression. Do not claim all games or levels are error-free.
- **Risk:** Adding a model that reuses existing games does not progress the 500-distinct-mobile-games goal.
- **Risk:** External mobile device/browser tests and accessibility verification are pending.
- **Risk:** Original Nokia hardware authenticity and historical game/model associations are not verified for every listing.

## Required regression checklist before each release
1. Run JS syntax check for changed scripts.
2. Verify model appears in selection grid and correct game menu opens.
3. Play with desktop arrows/WASD and action keys; check pause, restart, win/lose states.
4. Play with mobile touch joystick and action buttons; check simultaneous touch and rotation.
5. Test all level transitions, impossible/dead-end states, and high-score persistence.
6. Test Chrome desktop, Chrome Android, Safari iOS, and Firefox where available.
7. Check browser console for errors and performance regressions.
8. Record exact tests performed, failures, and unverified cases; publish to main only after gameplay validation.

## Backlog
- [ ] End-to-end Playwright tests for every game and every level; prioritize existing 11 Bounce levels.
- [ ] Fix missing explicit completion states in standalone arcade games.
- [ ] Add genuinely distinct new mobile games per model, rather than only reskinning existing IDs.
- [ ] Add Nokia 3210, 5110, 8210, 6230, 7610 and other models after checking original capabilities and copyright-safe mechanics.
- [ ] Implement data-driven inventory and unique game IDs to prevent duplicates.
- [ ] Add persistent game progress, level select, QA status, and regression test report.
- [ ] Verify deployment, responsive rendering, keyboard and touch controls before release.
