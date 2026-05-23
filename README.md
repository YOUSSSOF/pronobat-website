# Nowbat Website

> Official website for the **Nowbat (نوبت)** WordPress booking plugin — documentation, marketing, and live demo.

**Status:** Phase 1 complete — Information Architecture & Content Outline

---

## About

This repository contains the source code for the Nowbat plugin's official website at [nowbat.ir](https://nowbat.ir) (planned domain).

The site is built with:

- **Next.js 15** (App Router) — SSG + RSC
- **Fumadocs** — documentation framework
- **Tailwind CSS v3** — styling with custom design tokens
- **next-intl** — Persian (fa) + English (en) i18n
- **Framer Motion** — animations

---

## Phase Progress

| Phase | Title                                      | Status      |
| ----- | ------------------------------------------ | ----------- |
| 1     | Information Architecture & Content Outline | ✅ Complete |
| 2     | Design System & Visual Identity            | ⏳ Planned  |
| 3     | Next.js Project Scaffolding                | ⏳ Planned  |
| 4     | Core UI Component Library                  | ⏳ Planned  |
| 5     | Landing Page                               | ⏳ Planned  |
| 6     | Features + How It Works Pages              | ⏳ Planned  |
| 7     | Documentation System                       | ⏳ Planned  |
| 8     | Guides Section                             | ⏳ Planned  |
| 9     | Demo Infrastructure (VPS + WordPress)      | ⏳ Planned  |
| 10    | Demo Page on Website                       | ⏳ Planned  |
| 11    | Blog & SEO Content                         | ⏳ Planned  |
| 12    | Pricing Page                               | ⏳ Planned  |
| 13    | Performance, SEO & Deployment              | ⏳ Planned  |
| 14    | Persian Localization & RTL Polish          | ⏳ Planned  |

---

## Phase 1 Deliverables

All Phase 1 documents are in `docs/`:

| File                                                 | Description                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| [`docs/content-outline.md`](docs/content-outline.md) | Every page, section, headline, and body paragraph summarized |
| [`docs/seo-keywords.md`](docs/seo-keywords.md)       | 20 Persian + 8 English keyword targets with page mapping     |
| [`docs/user-journeys.md`](docs/user-journeys.md)     | Three annotated user flow diagrams with friction points      |
| [`docs/demo-data-spec.md`](docs/demo-data-spec.md)   | Exact demo data spec for the demo WordPress site             |

---

## Design Language

The site uses a **Glass-Flat** design system:

- Dark background: `#07070E`
- Brand accent: `#378ADD`
- Glass cards: `backdrop-filter: blur(12px)` + `rgba(255,255,255,0.04)` background
- No drop shadows, no gradients on surfaces
- Border radius max 8px
- RTL by default (Persian-first)
- Typography: Vazirmatn (fa) + Inter (en) + JetBrains Mono (code)

---

## Development

```bash
# Install dependencies (Phase 3+)
npm install

# Development server
npm run dev

# Build
npm run build

# Lint
npm run lint
```

---

## Related

- **Plugin repository:** [github.com/YOUSSSOF/nowbat](https://github.com/YOUSSSOF/nowbat) _(planned)_
- **Demo site:** [demo.nowbat.ir](https://demo.nowbat.ir) _(Phase 9)_
- **Live site:** [nowbat.ir](https://nowbat.ir) _(Phase 13)_

---

## License

MIT — see [LICENSE](LICENSE)
