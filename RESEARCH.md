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
