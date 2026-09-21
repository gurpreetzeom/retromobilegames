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
