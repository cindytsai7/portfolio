# Portfolio — Claude Code Context

## Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS
- `motion` (Framer Motion), Lenis scroll
- DM Sans + DM Mono fonts
- Dev: `npm run dev` → usually port 3000 (fallback 3001 if in use)

---

## Design Tokens (`tailwind.config.ts`)

| Token | Hex | Usage |
|---|---|---|
| `portfolio-primary` | `#1A1A1A` | Headings, primary text |
| `portfolio-surface` | `#F2F1ED` | Card backgrounds |
| `portfolio-stroke` | `#E6E5E1` | 1px inside stroke on all surface cards |
| `portfolio-background` | `#FFFFFF` | Page background |
| `portfolio-accent` | `#B35942` | P0 priority, accent |
| `portfolio-secondary` | `#C2CCBD` | Sage green |
| `portfolio-muted` | `#737373` | Body text, captions |
| `portfolio-rule` | — | Dividers, borders |

## Type Scale

| Class | Size |
|---|---|
| `text-display` | 52px |
| `text-h1` | 36px |
| `text-h2` | 28px |
| `text-h3` | 20px |
| `text-body` | 17px |
| `text-caption` | 13px |

---

## Site Status

### Landing page ✅
- **Hero** — HeroCard with VariableProximity effect, LinkedIn + Say Hello buttons, ExperienceList (pulse dot on Meta)
- **Projects** — 3-col bento grid (4 cards)
- **Footer** — Weather-tinted card, live Seattle time, 3-day forecast tooltip

### Case studies ✅
| Route | Status |
|---|---|
| `/projects/edge-admin-hub` | Done |
| `/projects/franklin-payroll` | Done |
| `/projects/compliance-review` | Done (password gate: `meta2025`) |
| `/projects/edge-sidebar-onboarding` | Not built yet |

---

## Projects Grid (`lib/projects.ts`)

| Project | colSpan | Variant |
|---|---|---|
| Edge admin hub | 2 | large (card-visual-wrapper) |
| Compliance review (Meta) | 1 | small (bleed image) |
| Franklin Payroll | 1 | small (bleed image) |
| Edge sidebar onboarding | 2 | imageContain (portrait, 68% width) |

---

## Key Components

### `components/case-study/`
- `CaseStudyNav` — sticky nav with RAF-driven scroll progress bar (`bg-portfolio-surface`, `h-[2px]`); `max-w-[1440px]` inner wrapper for alignment; `py-4 md:py-8`
- `HeroSection` — surface card with tags + title + body left, metadata stack right; `px-6 py-8 md:px-10 md:py-12`
- `SectionBlock` — label + heading + body
- `NumberedList` — P0 (terracotta) / P1 (`#4F68B0`) priority rows; `items-center` alignment
- `ThreeColumnSection` — 3-col bento card
- `FullWidthShowcase` — full-width image + caption
- `DarkOutroSection` — dark closing card with optional metrics
- `ScrollRevealQuote` — per-word color reveal (Franklin-specific)
- `MetricCountUp` — count-up animation (Franklin-specific)

### `components/ui/`
- `ProjectCard` — wraps HoverCard; handles large / small / imageContain variants
- `HoverCard` — `bg-portfolio-surface rounded-[20px] overflow-hidden`, hover darkens surface
- `FooterCard` — 4 weather states (sunny / rain / overcast / snow), tooltip forecast

### `app/globals.css` key classes
- `.card-visual-wrapper` — 16/10 aspect ratio, `background-size: cover`, `border-radius: 6px`
- `.footer-card` — color transition 0.7s
- `.weather-pill` / `.tooltip` — hover tooltip; tooltip `width: 100%` relative to outer row

---

## Layout Conventions
- Page wrapper: `max-w-[1440px] mx-auto`
- Outer padding: `px-4 md:px-8`, `pt-4 md:pt-8`, `pb-4 md:pb-8`
- Section gap: `gap-8` between top-level sections
- Surface cards: `rounded-[20px]`
- Inner card radius: `rounded-[12px]` for nested images

---

## Specific Layout Constraints & Settled Styling

### Nav (all pages)
- `CaseStudyNav`: `sticky top-0 z-10` (no background, no blur)
- Inner wrapper: `max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 md:px-8 py-3 md:py-4`
- Progress bar: `absolute top-0 left-0 h-[2px] bg-portfolio-surface`, RAF-driven `style.width`
- Back + About links slide outward on scroll: lerp 0.1, max 100px offset, full at 80px scroll
- Landing page nav: same `px-4 md:px-8` horizontal, `gap-3` between nav and hero card (not `gap-6`)

### Hero card padding (must match landing ↔ case studies)
- HeroSection card: `px-6 py-8 md:px-10 md:py-12`
- Compliance Review card: same — `px-6 py-8 md:px-10 md:py-12`
- Both use `rounded-[20px]`

### Outer page wrapper (case studies)
- `max-w-[1440px] mx-auto flex flex-col gap-8 px-4 md:px-8 pt-4 md:pt-8 pb-4 md:pb-8`
- Matches landing page outer padding exactly

### Card image — large variant (`card-visual-wrapper`)
- `border-radius: 6px` (settled after trying 8px)
- `aspect-ratio: 16/10`, `background-size: cover`, `background-position: center center`

### Card image — small variant (bleed)
- `ml-6 flex-shrink-0 w-[130%] bg-cover bg-left-top min-h-[500px] rounded-[20px]`
- `min-h-[500px]` (not `aspect-ratio`) ensures bleed at all viewport widths
- `group-hover:-translate-y-4` on hover

### NumberedList (`components/case-study/NumberedList.tsx`)
- Row: `flex gap-5 items-center py-5` — `items-center` (not `items-start`)
- Priority label: `text-h1 font-bold leading-none shrink-0 w-12`
  - P0 → `text-portfolio-accent` (terracotta)
  - P1 → `text-[#4F68B0]` (blue)
- Text block: `flex flex-col gap-1` (no `pt-1` offset)
- Rows separated by `divide-y divide-portfolio-rule`

### HeroSection metadata (right column)
- `flex flex-col gap-4 md:w-[300px] shrink-0`
- Each item: label (`text-caption font-mono uppercase tracking-widest text-portfolio-muted`) + value (`text-body font-medium text-portfolio-primary`)
- Divider `bg-portfolio-rule h-px w-full mt-1` between all items except last

### Weather tooltip width fix
- Tooltip `position: relative` context is on the **outer row** (`flex items-center gap-2 font-mono text-[13px] uppercase relative`), NOT on `.weather-pill`
- Tooltip `width: 100%` so it spans from SEATTLE text to right edge of pill automatically

---

## Compliance Review page (`/projects/compliance-review`)
- `'use client'` — password gate (hardcoded `meta2025`)
- Single-column layout: full-width surface card
- Two-column interior: title + body left (`max-w-[720px]`), metadata right (`md:w-[300px]`)
- Password field: `bg-portfolio-background rounded-[14px]`, placeholder "Enter password here", "Enter" button matches HeroCard style (`bg-portfolio-primary text-white rounded-[12px] px-6 h-12`)
- Tags: META, PLATFORM, TOOLING, NDA (NDA gets filled pill)

---

## Session completions (2026-06-06)
- Removed border radius on Edge landing card image; added back `border-radius: 6px` globally
- Scroll progress bar added to CaseStudyNav (RAF loop, `bg-portfolio-surface`)
- Nav padding tightened to `py-4 md:py-8`; aligned to `max-w-[1440px]` on all pages
- Surface color updated from `#ECEBE7` → `#F2F1ED` across all tokens
- Built `/projects/compliance-review` page with password gate
- Franklin Payroll showcase sections consolidated with `gap-[80px]` (matches Edge pattern)
- Meta project card: small-variant image bleeds off bottom with `min-h-[500px]`
- Footer "Designed and built by Cindy Tsai" → `font-normal`
- HeroSection padding: `px-6 py-8 md:px-10 md:py-12` (matches landing page hero card)
- `compliance-review` title → "Risk review systems" in `lib/projects.ts`
- Weather tooltip width spans to left edge of "SEATTLE" text (positioning context fix)
- Edge case study Timeline → "2024"
- NumberedList P0/P1 labels: `items-center` alignment with text block
