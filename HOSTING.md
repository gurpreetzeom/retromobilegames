# Nokia 1100 browser games

The deployable website is the `dist/` folder: index.html, style.css, game.js. Upload these together to any static web host. Relative asset paths support a domain root or a subdirectory. No build, server runtime, database, API key or external game service is required.

## Games
Fan-made Space Impact+ recreation and Snake II recreation. Snake has nine speed choices, an open wrapping board and five maze layouts. Controls and instructions are accessible inside each game's menu. C returns from game menus to Games.

## Concurrent visitors
Each page runs its own game loop and state in its browser. Visitors do not share lives, movement, game selection, or active rounds. The host only serves static files, so capacity depends on its static delivery limits rather than a central game server. Best scores are device/browser-local, not global accounts or a shared leaderboard. Tabs in the same browser share stored best scores but not active play. Online head-to-head multiplayer is not included.

## Hosting handoff
The next version is saved in source only at the user's request. Do not deploy until requested. The existing published version remains unchanged. When hosting details arrive, configure HTTPS and normal static-file delivery. For updates, use revalidation for index.html, game.js and style.css or version asset names to avoid stale browser caches.

## Verification
Checked Snake food/growth, reversal rejection, wrapping, pause/resume, wall collision, safe spawns for all six layouts, separate page sessions, and Space Impact launch/firing. Capacity has not been load-tested against a future host.
