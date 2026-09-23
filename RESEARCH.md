# Space Impact reconstruction notes

This is a functional reconstruction, not a verified exact copy of Nokia 1100 firmware.

References consulted:
- https://www.bilibili.com/video/BV1Dy4y1X7Qy/ — Nokia 1100 gameplay description specifically describes flight and ground vehicles, jumping, and bonus weapons. The video frames were not inspected.
- https://en.wikipedia.org/wiki/Space_Impact — distinguishes Space Impact+ from the original; the often-quoted eight-level count describes the original game.
- https://pt.wikipedia.org/wiki/Space_Impact — community descriptions of environments and bosses. The page explicitly lacks reliable citations and may mix versions. It suggests distinct organic bosses, charging attacks, minion carriers, a stationary encounter, a protected final weak point, and a ground stage.

Implemented: differentiated scenery and enemy formations; nine separately drawn boss types; aimed fire, spreads, charges, minion spawning, armor and a hittable opening; rocket/laser/sweeping weapons; a bonus rover section with jumping and obstacles.

Unverified reconstruction choices: nine-stage ordering, all names, pixel art, collision shapes, enemy schedules, durations, speeds, health, damage, and ground-stage placement. Scenery is decorative except for explicit ground obstacles. Existing modern keypad mapping is retained to avoid silently changing controls. No ROMs, original sprite sheets, or original code were imported.

Exact fidelity requires a complete Nokia 1100 Space Impact+ playthrough with visible stage transitions and frame-by-frame comparison. Do not describe this release as an exact port.

Validation: run `node tests/impact.cjs`. It covers every stage reaching its boss and advancing, distinct boss definitions, final armor/opening, all special weapons, rover jumping, paused state, Snake compatibility, and independent sessions. This is simulated gameplay testing, not a manual full playthrough.

## Multi-phone release
Phone selector supports original Nokia 1100, 3310, 6600 and 3220. The 3310 Space Impact stops after eight reconstructed stages; 1100 retains the ground stage. Snake EX uses the shared Snake engine with colour presentation, not an exact EX port. Mix Pix is a solvable numbered sliding-puzzle adaptation (not the original photo assets). Bantumi implements sowing, stores, capture, extra turns and computer opponent. Pairs II is a generated matching board. Club Pinball, Dance Delight and Phantom Spider are newly written interpretations, with new table physics, three rhythm sections and six shooter waves respectively. These are NOT original levels. Survivor and Fun Shell games are not included.

Catalogue sources:
- https://blogs.windows.com/devices/2009/04/27/nokia-3310/
- https://www.lesmobiles.com/test/nokia-6600
- https://manualzz.com/doc/o/ort5m/nokia-nhl-10-smartphone-technical-documentation-product-selection
- https://www.nokiamuseum.net/nokia-3220---2004
- https://www.globenewswire.com/news-release/2004/05/31/1847280/0/en/Nokia-3220-camera-phone-Light-Fever.html

Run node tests/phones.cjs for catalogue/start/pause/completion checks. Games run independently in each visitor's browser; no shared multiplayer or server state is implied.

## September 2026 collection expansion
- **Nokia 5210 (shipped 2002):** orange/charcoal rubber-shell-inspired CSS housing, amber LCD, five menu entries: Snake II, Space Impact, Bantumi, Pairs II, Bumper. Bumper uses our pinball engine with a different monochrome bumper arrangement; this is not an original Bumper table port. Space Impact has the same eight-stage reconstructed campaign as the 3310.
- **Nokia 7210 (2002):** turquoise/silver rendered housing, shaped keys and four-way navigation ring, colour screen. Bounce has eleven newly authored side-scrolling levels, rings, gated exits, jumping, spikes, moving hazards, checkpoints and three lives. Triple Pop implements the rotating central heap, incoming coloured balls, connected matching groups, increasing speed and an earned outer-ring bonus. Its bonus rules and difficulty progression are simplified, newly written mechanics. Neither game imports original level files, firmware, artwork or binaries.
- The selector remains scrollable and uses three desktop columns/two mobile columns. All games are independent client-side sessions; no shared online multiplayer is implied.

References checked:
- https://www.mobilephonemuseum.com/phone-detail/5210 — announcement versus shipping year, shell and five-game catalogue.
- https://www.manuallib.com/download/pdf0/NOKIA-5210-USER-GUIDE.PDF — Nokia user guide and game names.
- https://en.wikipedia.org/wiki/Nokia_7210 — Series 40 model, keypad and Bounce/Triple Pop catalogue.
- https://www.phonearena.com/phones/Nokia-7210_id125 — visual reference of front shell/key layout.
- https://manualzilla.com/doc/7271228/nokia-9210i-cell-phone-user-manual — Nokia's software guide describes Bounce and Triple Pop mechanics (a different handset edition, not proof of 7210 level fidelity).

Validation: `node tests/phones.cjs` now covers six phone catalogues, all included games' start/draw/pause flows, new game collisions, level gates and progression, Triple Pop connectivity/bonus/loss, power-cycle recovery, and the 5210 finale. `node tests/impact.cjs` retains existing encounter coverage. These automated checks do not establish exact original-game fidelity.

## Nine-phone collection
Added Nokia 2100 (2003), 3330 (2001), and 3650 (2003). These retain the same straight-on CSS rendering and keypad/keyboard input system.

- 2100: pearl and blue shell, pale monochrome LCD; Snake II, eight-stage reconstructed Space Impact, and a newly written Link5 adaptation. Link5 uses a 9x9 board, five-in-a-row in four directions, and a computer opponent which prioritizes immediate wins and blocks. This is a rules-based recreation, not an original Nokia AI/board/level port.
- 3330: silver shell with dark keys, five games; shares the tested 3310/5210 game engines and reconstructed Bumper layout. Does not implement original downloadable WAP game packs.
- 3650: blue/silver shell, colour display, circular numeric keys arranged counter-clockwise, and a functional navigation pad; includes the shared Snake EX-labelled recreation and numbered Mix Pix adaptation. Bluetooth multiplayer, original image assets and firmware are not implemented.

Catalogue and design references:
- https://en.wikipedia.org/wiki/Nokia_2100 — launch and Snake II/Space Impact/Link5 catalogue.
- https://nokia-2100.helpdoc.net/ — Nokia 2100 guide mirror naming the games.
- https://www.nokiamuseum.net/nokia-3330---2001 — five-game list.
- https://www.telefonguru.hu/manuals/nokia_3330_en.pdf — Nokia user guide lists all five titles.
- https://www.eweek.com/mobile/nokia-3650-is-almost-picture-perfect/ — contemporary review confirms Snake EX and Mix Pix.
- https://en.wikipedia.org/wiki/Nokia_3650 — 2003 release, colour display and circular keypad.
- https://manualzilla.com/doc/5697247/user-manual-mobile-speak — circular key arrangement, 1 at upper left and 9 at upper right.

Validation: nine phone catalogues and existing engines pass regression checks. Link5 checks cover all four win directions, edge wrapping, computer win/block priority, pause/resume, cursor bounds, draws, retries and a full simulated match. The 3650 navigation-pad puzzle flow and both new monochrome Space Impact finales are also covered. See tests/phones.cjs. New handset visuals and selected game input flows are additionally checked in the deployed browser.
