# COSTIN retro game inventory and QA backlog

Last source-code audit: 2026-11-13. Status: proposed changes on branch `expansion/2026-11-13-meteor-3410`, not browser-tested or published.

## Nokia-inspired phone models (12 proposed)
1100, 2100, 3220, 3310, 3330, **3410 (proposed)**, 3650, 5210, 6600, 7210, N-Gage, N-Gage QD.

The 3410 reuses the existing Bounce and Snake II implementations. This is a new phone presentation, **not** a new distinct mobile game. Models are browser recreations, not original firmware or guaranteed historically accurate bundled-game lists.

## Mobile game IDs in phone registry
`snake`, `impact`, `link5`, `bantumi`, `pairs`, `pinball`, `mix`, `bounce`, `triple`, `dance`, `spider`, `snakes3d`, `boarding`.

**13 distinct registered mobile game IDs**; target **500**; remaining **487**. Reuse across phones does not increase distinct count. Audit the runtime for each ID before labeling it verified.

## Standalone arcade (13 proposed)
Pixel Tanks, Pixel Jumper, Neon Fighter, Snow Dash, Block Stack, Jungle Commando, Dino Street Brawl, Neon Snake, Brick Blaster, Galaxy Defender, Turbo Highway, Crystal Maze, **Meteor Rescue (proposed)**.

## Level and quality status
- Bounce: 11 authored named levels in `dist/classics.js`; end-to-end completion unverified.
- Space Impact: multiple authored environments in `dist/game.js`; progression unverified.
- Other mobile and arcade modes: count actual levels and win/lose logic individually; do not infer completeness from menu entries.
- Browser automation: **not executed** for this change. Do not merge until tests confirm actual input and progression.

## Required browser QA matrix
- [ ] All phone model cards load, render the right game menu, and launch every listed game.
- [ ] Keyboard: arrows/WASD, action keys, pause, menu selection and restart.
- [ ] Touch: directional pad, simultaneous movement/action, pointer release, touch scroll suppression.
- [ ] Desktop Chrome, Firefox, Safari; mobile Chrome and Safari: canvas scaling, no clipped controls.
- [ ] Each game's start, pause, game-over, restart, score persistence and no uncaught console errors.
- [ ] Bounce: complete all 11 stages and verify stage transitions and final victory.
- [ ] Space Impact: complete all environments, boss and end states.
- [ ] Arcade: validate all 13 modes; Meteor Rescue specifically collect 12 pods for win, collide with 5 rocks for loss, restart after both.
- [ ] Check accessibility labels, links, SEO metadata, phone model illustrations, and legal rights to every asset.
- [ ] Add reproducible Playwright smoke tests to CI before routinely merging daily content.

## Release rule
Only merge to main after real-browser checks pass. If no browser runner is available, leave a PR open and report the blocker. No pirated ROMs, proprietary sprites, or claims of original-game authenticity.
