# Phase 1 — Information Architecture & Content Outline

**Completed:** 2026-05-23

## What was produced

- `docs/content-outline.md` — Full content outline for all 9 page types + sections
- `docs/seo-keywords.md` — 20 Persian + 8 English keyword targets mapped to pages
- `docs/user-journeys.md` — Three user flow diagrams (Evaluator, Developer, Existing User)
- `docs/demo-data-spec.md` — Full demo data specification (4 services, 4 staff, 20 customers, 50 appointments)

## Key Decisions Made

1. **Domain:** `nowbat.ir` — Persian-primary SEO, with `/en/` prefix for English
2. **i18n strategy:** next-intl with `[locale]` App Router, default `fa`, English at `/en/`
3. **Demo domain:** `demo.nowbat.ir`
4. **Language split:** Persian-first for all marketing pages, English docs as secondary
5. **hreflang:** On all pages with both fa/en versions

## Next Phase

Phase 2 — Design System & Visual Identity
