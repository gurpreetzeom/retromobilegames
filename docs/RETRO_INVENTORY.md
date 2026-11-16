# COSTIN retro inventory and QA backlog
Updated: 2026-11-16. Source-based audit only; not a claim of end-to-end browser verification.

## Current main baseline (before this PR)
- Phone profiles in `dist/phones.js`: 11: Nokia 1100, 3310, 3220, 6600, 5210, 7210, 2100, 3330, 3650, N-Gage, N-Gage QD.
- Standalone browser arcade: 12 base game tiles in `arcade.html` plus inspect any separately integrated modes before claiming a unique count. Source inventory does not equal tested functionality.
- Bounce: 11 authored named stages in `dist/classics.js`. Space Impact-themed stages and N-Gage content also exist. No complete level-by-level pass confirmed.
- Reused game IDs across multiple handsets are one unique implementation, not multiple unique games.

## Proposed in this PR
- Nokia 3210 (1999) profile with existing Snake-inspired playable recreation. This adds a handset, **not** a distinct mobile game.
- Star Courier: original arcade game with keyboard/touch directional controls, parcel pickup, moving hazards, health, restart and ten-parcel victory condition. Not a licensed Nokia or arcade original.
- These are **unverified in real browsers**. Do not merge until the release gate passes.

## QA / release gate (required before main)
- Desktop Chromium, Firefox, WebKit: launch, select all game modes, play, restart, game-over and victory.
- Mobile Chrome and Safari viewport: tap controls, pointer cancel/release, no stuck input, orientation/layout.
- Phone selector: verify every model and every mapped game ID opens; keyboard and virtual keypad work.
- Level progression: traverse every authored Bounce stage, Space Impact stage, N-Gage stage; check collision, pause/resume, win/lose.
- Automated tests: install Playwright and implement smoke test of each mode plus deterministic simulation tests for win/lose, restart, no JS console errors. Run in CI.
- Known risks: `arcade.html` has some simplified game modes, limited levels and no cross-browser E2E coverage; pointer controls require device testing.
- Accessibility and copyright: original assets only, correct labeling, avoid unauthorized ROMs and game trademarks.
- Track per-game metadata: unique ID, genre, phone mappings, levels, license, test status, last verification date.

## Goal accounting
Target: 500 distinct **mobile** games; exclude standalone arcade games and reused phone-game mappings. The exact verified distinct mobile count is **unknown** pending an executable inventory and gameplay test suite. Do not advertise unverified totals. Add one unique mobile game per day as feasible; adding a phone with reused games alone does not meet that portion of the target.
