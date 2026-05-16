## Full redesign — Palantir-style intelligence dashboard

Convert the case file from its current editorial / paper aesthetic into a dark, dense, data-forward intelligence-dashboard look — and add four new interactive visualizations.

### Visual language

- **Theme**: dark navy / near-black (`oklch(~0.12 0.02 250)`) background, denser grid lines, cyan + amber accents over the existing navy primary, monospace metadata, sharp 2px corners replacing rounded cards.
- **Typography**: keep Instrument Serif for hero/section headlines (it still reads serious), demote body to Inter, introduce JetBrains Mono for IDs, dates, counters, badges.
- **Chrome**: top bar gets a HUD-style status strip (live counters + system time + scan badge). Cards become "panels" with corner ticks and uppercase eyebrows.
- **All edits flow through `src/styles.css` design tokens** — components stay token-based, no hardcoded colors.

### Four new interactive features

1. **Network graph of people + evidence**  
   Force-directed SVG graph. Nodes = people, events, exhibits. Edges = participation / linkage. Click a node → side panel with details + jump links. Use `d3-force` (lightweight, no React-flow needed).

2. **Schedule heatmap (15-month grid)**  
   Rows = leaders, columns = Dec 2024 → May 2026. Each cell colored by schedule type (AM / Midshift / Mid-Late / PM-Closing). Lashawnna's row pinned at top and visually marked. Hover = tooltip with EX-022 page ref + jump button.

3. **Animated timeline scrubber**  
   Horizontal track across the new dashboard. Drag a playhead through months; events on a stacked-lane chart fade in as their month is reached. Play/pause + speed control.

4. **Live evidence counters / stats**  
   Animated count-up tiles at the top of the dashboard: total exhibits, confirmed-by-screenshot, protected activity events, deleted-evidence concerns, comparator inconsistencies. Auto-derived from the existing data.

### New page

- `/command` — Intelligence Command Center. Houses the four new visualizations + status strip + quick-jump nav. Becomes the new default landing experience (Overview link points here; old `/` content kept reachable as "Brief").
- Added to the main nav and the 5-min Tour.

### Pages restyled to the new theme

- `/` (Overview), `/timeline`, `/comparators`, `/evidence`, `/schedule-data`, `/people`, `/investigator`, `/tour`, plus `SiteHeader` / `SiteFooter`.
- Print stylesheets preserved so PDFs still print on white paper for attorneys.

### Out of scope

- No backend changes; all data stays in `src/data/*`.
- No content edits to events, exhibits, or comparators.
- No auth, no Cloud changes.

### Technical notes

- Add `d3-force` (graph layout) and `d3-scale` (heatmap color/scale). Keep rendering in plain SVG — no canvas, no WebGL, no Three.js (would push the bundle and clash with the Worker runtime).
- Tokens added to `src/styles.css`: `--hud-bg`, `--hud-grid`, `--hud-cyan`, `--hud-amber`, `--panel`, `--panel-border`, `--mono` font stack.
- Default dark; light mode kept available but no longer the default. Dark-mode toggle in the header is preserved.
- All four visualizations are client-only components (`"use client"`-style usage via dynamic import or `useEffect`-mounted) so SSR doesn't try to size SVGs against a missing DOM.

### Delivery order

1. Theme tokens + global chrome restyle (small, reversible).
2. `/command` page scaffold with the 4 panels in stub form.
3. Live counters → heatmap → scrubber → network graph (heaviest last).
4. Restyle the remaining content pages to match.
5. QA in the preview at desktop + mobile widths; verify print stylesheet still renders on white.

### Risk

Large surface area. If anything looks worse than the current editorial style on a content-heavy page (e.g. Investigator Brief), I'll leave that page in a hybrid "dark chrome, paper content" mode rather than force the full HUD treatment.