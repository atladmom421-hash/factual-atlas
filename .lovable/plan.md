
# Interactive Case Evidence Application — Build Plan

A cinematic, documentary-style case presentation web app. Serious, factual, professional. Built as a multi-route TanStack Start application with rich placeholder data drawn directly from your timeline, transcripts, and uploaded exhibits.

---

## Design System

- Palette: white background, charcoal foreground, deep navy primary, warm orange `#ff5124` accent. Dark mode variant supported.
- Typography: Instrument Serif (display/headlines) paired with Inter (body) — editorial, legal-document feel.
- Components: cards with subtle shadows, generous spacing, accordions, tabs, filter chips, badges for status/category, modal exhibit viewer.
- Motion: Framer Motion for chapter transitions, timeline reveals, modal fades. Restrained, cinematic.
- Tone enforcement: a shared `<EvidenceStatusBadge>` component renders only approved labels (Confirmed by screenshot/email/transcript, Reported by witness, Reported by Lashawnna, Needs confirmation, To be verified).

---

## Routes / Sections

| Route | Section |
|---|---|
| `/` | Executive Overview (hero + stat cards + summary) |
| `/timeline` | Master Timeline (filterable, vertical, all categories) |
| `/timeline/april-2026` | April 2026 Return-from-Leave detailed timeline |
| `/people` | People Directory (grid of person cards + detail modal) |
| `/comparators` | Comparator Movement Matrix (sortable/filterable table) |
| `/movement-map` | Department Movement Map (visual flow between areas) |
| `/evidence` | Evidence Library (cards, filters, exhibit viewer) |
| `/story` | Story Mode (10 cinematic chapters, prev/next nav, progress bar) |
| `/investigator` | Investigator Brief (neutral agency-format summary) |
| `/admin` | Editor Mode (add/edit timeline, evidence, comparators, people) |

Shared chrome: top nav with section links, global search, dark-mode toggle, "Export PDF / Print" action (uses print stylesheet).

---

## Data Model (typed, seeded from your uploads)

All data lives in `src/data/*.ts` as typed objects so it ships with the app and is editable via Admin mode (persisted to Lovable Cloud once enabled — see "Persistence" below).

- `TimelineEvent`: id, date, title, category, description, peopleIds[], evidenceIds[], whyItMatters, confidenceStatus, chapterId?
- `Person`: id, name, role, category, relationshipToCase, eventIds[], evidenceIds[], race?, notes
- `ComparatorRow`: person, role, race, priorArea, laterArea, monthMoved, waitlist, ticket, performance, evidenceRef, whyItMatters, confirmationStatus
- `MovementEdge`: personId, fromArea, toArea, period, status
- `Exhibit`: id, exhibitNumber, fileName, date, category, peopleIds[], summary, linkedEventIds[], reliabilityStatus, notes, filePath?
- `Chapter`: id, number, title, introCopy, eventIds[], evidenceIds[], peopleIds[], keyQuestion

### Seeded content (highlights — full list in implementation)

**Timeline events** seeded with every dated event from your message:
- 2023/early-2024 temporary PM assignment
- Apr 26, 2024 not on waitlist
- May 7, 2024 prior EEOC
- May 29, 2024 formal complaint email
- May 31 / Jun 5 / Jul 19, 2024 HR transcripts
- Jun 2024 ER assurance
- Sep 24, 2024 Team Ratios file modified
- Oct 10, 2024 credit removed
- Oct 14, 2024 TL Shift & Waitlist document
- Late Jan/Feb 2025 "solid" rating
- Feb 18, 2025 records still show Temporary
- Feb 22, 2025 Jen Roy deletes name from waitlist
- Jun 2025 AM request expansion
- Jul 14, 2025 Allan/Jen screenshot
- Jul 16–17, 2025 re-added with new date + Permanent status
- Sep 19, 2025 sixth complaint + meeting with Allan
- Oct 3–4, 2025 read-only waitlist discovery
- Nov 6, 2025 HR investigation follow-up call (full transcript attached)
- All April–May 2026 return-from-leave events (Apr 3, 21, 22, 23, 27, 28, 29; May 1, 12)

**People** all 25 named individuals from your list.

**Comparator rows** all 6 starter rows verbatim (Lashawnna, Tyler, Hunter, Marc, Julie, Marissa).

**Movement edges** all 6 movement lines you specified.

**Exhibits** seeded with the 8 PDFs + 1 DOCX + 1 PNG you uploaded — copied into `src/assets/exhibits/` and linked to the appropriate timeline events. Each gets an exhibit number (EX-001…) and reliability label.

**Chapters** all 10, each pre-wired to its relevant events/evidence/people.

---

## Key Interactive Behaviors

- **Master Timeline**: filter chips for category, person, year; expandable "Why it matters" per event; "Open evidence" opens modal viewer.
- **Exhibit Viewer Modal**: embeds PDFs via `<iframe>`, images inline, transcripts as scrollable text; shows linked events + people.
- **Comparator Matrix**: sortable columns, status pill column, click row → side panel with full context.
- **Movement Map**: SVG-based flow diagram (custom, not a heavy lib) showing areas as nodes and people as labeled edges with status colors.
- **Story Mode**: full-screen chapter view, progress bar across top, keyboard arrows + buttons to navigate, Framer Motion crossfades.
- **Search**: global fuzzy search across events, people, exhibits.
- **Print / PDF**: dedicated print stylesheet renders the Investigator Brief + Timeline + Comparator Matrix as a clean document.

---

## Persistence (Admin Mode)

Default build ships with all data as TypeScript seed files (editable in code, no backend required). For the editor-mode "add new event / upload evidence / persist changes" requirement, I will enable **Lovable Cloud** so:
- Timeline events, comparator rows, people, exhibits live in tables
- Evidence files upload to Cloud storage
- Admin route is protected by auth (single admin user)
- Seed data is migrated in on first run

If you'd rather skip the backend and keep everything as in-code seed data (faster, no login, but no upload UI), say so and I'll skip Cloud.

---

## Build Order

1. Design tokens in `src/styles.css` (palette, fonts, shadows) + install Framer Motion, Instrument Serif/Inter via Google Fonts link in `__root.tsx`.
2. Seed data files + types.
3. Shared layout: top nav, footer, dark-mode toggle, search.
4. Routes built in this order: Executive Overview → Timeline → People → Comparator Matrix → Movement Map → Evidence Library → Story Mode → Investigator Brief → Admin (last, after Cloud enabled).
5. Exhibit viewer modal + print stylesheet.
6. Copy uploaded PDFs/DOCX/PNG into `src/assets/exhibits/` and wire to evidence cards.

---

## Technical Notes

- TanStack Start file-based routes under `src/routes/`.
- One route file per section (no hash-anchor SPA).
- Each route gets its own `head()` metadata (title, description, og:*).
- Components in `src/components/case/` grouped by section.
- All colors via semantic tokens — no hard-coded hex in components except the orange accent token definition.
- Mobile responsive: timeline collapses to single column, matrix becomes horizontally scrollable, story mode stacks vertically.

---

## Confirm Before I Build

1. **Enable Lovable Cloud** for the Admin/editor mode + evidence uploads? (Default: yes.) If no, Admin becomes read-only and all edits happen in code.
2. **Auth on Admin route?** If Cloud is enabled, I'll add a single-admin email/password login so the editor isn't public.
3. Anything to **omit or rename** before I start (e.g., redact specific names, change the case title shown in the header)?

If you're happy with the above, reply "go" (or with any tweaks) and I'll build it end-to-end.
