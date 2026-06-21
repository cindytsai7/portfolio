# Portfolio — Claude Code Context

## Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS
- `motion` (Framer Motion), Lenis scroll
- DM Sans + DM Mono fonts
- Dev: `npm run dev` → usually port 3000 (fallback 3001 if in use)

---

## Design Tokens (`tailwind.config.ts`)

### Colors
| Token | Hex | Usage |
|---|---|---|
| `portfolio-primary` | `#1A1A1A` | Headings, primary text |
| `portfolio-surface` | `#F2F1ED` | Light card background (used at /50 opacity) |
| `portfolio-surface-deep` | `#B4AC9E` | Warm accent card background (used at /55 opacity) |
| `portfolio-stroke` | `#E6E5E1` | 1px inside stroke on all surface cards |
| `portfolio-background` | `#FFFFFF` | Page background |
| `portfolio-accent` | `#B35942` | P0 priority, accent |
| `portfolio-secondary` | `#C2CCBD` | Sage green |
| `portfolio-muted` | `#5C5C5C` | Body text, captions (AA compliant) |
| `portfolio-rule` | `#C7C7C2` | Dot separators, dividers, borders |

### Border Radius
| Token | Value | Usage |
|---|---|---|
| `rounded-card` | `16px` | All cards sitewide — global source of truth |

---

## Card System

### Light card (default)
- `surface-card bg-portfolio-surface/50 rounded-card`
- Hover (project cards): `hover:bg-portfolio-surface/80`
- Border: `.surface-card` class → `box-shadow: inset 0 0 0 1px #E6E5E1`

### Warm accent card ("darker" variant)
- `surface-card bg-portfolio-surface-deep/55 rounded-card`
- Black text: label `text-black/50`, heading `text-black`, body `text-black/70`
- No dividers between metrics/metadata
- Used for: DarkOutroSection `variant="overcast"`, Edge sidebar Customize App card

### Dark card (`DarkCard` component)
- Outer wrapper: `bg-black rounded-card overflow-hidden`
- Inner: `DarkCard` → `bg-white/5` + `shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]`
- Text: label `text-white/50`, heading `text-white`, body `text-white/70`
- Currently unused (all DarkOutroSection instances use `variant="overcast"`)

---

## Type Scale

| Class | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|
| `text-display` | 64px | 600 | 1.1 | -0.03em |
| `text-h1` | clamp(24–36px) | 600 | 1.3 | — |
| `text-h2` | 36px | 600 | 1.08 | -0.025em |
| `text-h3` | clamp(16–20px) | 500 | 1.4 | — |
| `text-body` | clamp(15px,1.5vh,18px) | 400 | 1.25 | -0.025em |
| `text-caption` | 13px | 400 | 1.4 | +0.05em |

- **All bold weights = 600** — `font-bold` is overridden to 600 in `tailwind.config.ts`; `font-semibold` is also 600 (Tailwind default). No 700s anywhere.
- Case study headings: `text-h2` (36px) — not `text-h1`
- Labels / meta: always `font-mono text-[13px] tracking-[0.05em] uppercase`

---

## Site Status

### Landing page ✅
- **Layout** — 2-column split: sticky left rail (508px) + scrollable right column. No top nav.
- **Left rail** — `HeroCard vertical` prop; `sticky top-0 h-screen`; padding `pt-8 pr-4 pb-8 pl-8` (16px gap to right column)
- **Right column** — Projects (2-col grid) + Footer; `pt-8 pr-8 pb-8 pl-0`
- **No EditorialStatement** — removed

### About page ✅
- `/about` — Back link nav, HeroCard (with ExperienceList), Testimonials carousel

### Case studies ✅
| Route | Status |
|---|---|
| `/projects/edge-admin-hub` | Done (custom editorial hero + CardsAssembly animation) |
| `/projects/franklin-payroll` | Done |
| `/projects/compliance-review` | Done (password gate: `meta2025`) |
| `/projects/edge-sidebar-onboarding` | Done |

---

## Projects Grid (`lib/projects.ts`)

| # | id | colSpan | Image mode | Tags |
|---|---|---|---|---|
| 01 | edge-admin-hub | 2 | `card-visual-wrapper` (16/10 bg-cover) | Microsoft · Enterprise · Systems design |
| 02 | compliance-review | 1 | `lockIcon` → Meta logo image | Platform design · Internal tools · NDA |
| 03 | franklin-payroll | 1 | `imageContain` 100% width, centered | Start up · Crypto · Zero to one |
| 04 | edge-sidebar-onboarding | 2 | `imageContain` 68% width, centered | Microsoft · Consumer · Growth design |

- Interface fields: `id`, `title`, `tags`, `image?`, `href`, `colSpan?`, `imageContain?`, `imageWidth?`, `lockIcon?` — all other fields removed
- Meta logo: `/projects/Meta_lockup_mono_black_RGB.png`

---

## Key Components

### `components/case-study/`
- `CaseStudyNav` — sticky nav with RAF-driven scroll progress bar (`bg-portfolio-surface`, `h-[2px]`); `max-w-[1440px]` inner wrapper; `py-3 md:py-4`
- `HeroSection` — accepts `index` prop; dot-separated meta string (`01 · TAG · TAG`); `text-h2` heading; body `text-body`; no metadata dividers; `bg-portfolio-surface/50 rounded-card px-6 py-8 md:px-10 md:py-12`; accepts `bare` prop to strip the card container (used only on edge-admin-hub, then replaced by custom editorial hero)
- `SectionBlock` — label (optional) + heading + body; label and heading are grouped in an inner `flex flex-col gap-1` div (tight 4px gap); outer `gap-4` separates from body; body capped at `max-w-[560px]`
- `NumberedList` — P0 (terracotta) / P1 (`#4F68B0`) priority rows; `items-center` alignment
- `ThreeColumnSection` — 3-col bento card; `bg-portfolio-surface/50 rounded-card`; divider rule sits between SectionBlock heading and columns (not on each column)
- `FullWidthShowcase` — full-width image + caption block; caption container `max-w-[560px]` (was `w-3/4`); `rounded-card` on images
- `DarkOutroSection` — accepts `variant="dark"` (default) or `variant="overcast"`; overcast uses `bg-portfolio-surface-deep/55` with black text and no dividers; body text `max-w-[560px]` on both variants
- `CardsAssembly` — animated dashboard card assembly for edge-admin-hub hero; assets at `/public/projects/edge-dashboard-assembly/assets/`; Web Animations API; replays on scroll-back via IntersectionObserver (threshold 0.4, stays connected); `'use client'`; CSS in `globals.css` under `.ca-stage / .ca-bg / .ca-piece`
- `ScrollRevealQuote` — per-word color reveal (unused — was Franklin-specific, removed)
- `MetricCountUp` — count-up animation (unused — was Franklin-specific, removed)

### `components/ui/`
- `ProjectCard` — `CardHeader` (title left + tags stacked right) + image; two variants: `lockIcon` (Meta logo centered) and standard (`imageContain` or `card-visual-wrapper`); no numbered index; no MetaString
- `HoverCard` — `bg-portfolio-surface/50 hover:bg-portfolio-surface/80 rounded-card`; inset 1px `#E6E5E1` border via absolute overlay div
- `HeroCard` — two modes via `vertical` prop:
  - `vertical` (landing page): flex-col h-full; name → 2 bio paragraphs → inline CTA links; ExperienceList `mt-auto` at bottom
  - default (about page): 3-col grid `md:grid-cols-3`, left `md:col-span-2`, ExperienceList col 3
  - VariableProximity on name: `wght 600 → 300` (starts bold, lightens on hover); initial render seeded with `fromFontVariationSettings` via `?? fallback`
- `ExperienceList` — `grid-cols-[100px_1fr] gap-x-[52px] py-[3px]`; `text-body font-medium`; border-top + border-bottom dividers per row
- `DarkCard` — `bg-white/5 rounded-card`; `rgba(255,255,255,0.08)` inset border; for cards on black backgrounds
- `FooterCard` — semi-transparent weather tints (4 states); VariableProximity on "Cindy Tsai" (`wght 600 → 300`); LinkedIn then Email order; tooltip forecast

### `components/sections/`
- `Projects` — bento grid with `id="work"` for scroll target
- `Footer` — wraps FooterCard
- `Testimonials` — horizontal scroll carousel; 6 real testimonials; warm surface cards `bg-[#D1CCC5]/50 shadow-[inset_0_0_0_1px_#D1CCC5]`; black text; ← → nav arrows

### `app/globals.css` key classes
- `.surface-card` — `box-shadow: inset 0 0 0 1px #E6E5E1`
- `.card-visual-wrapper` — 16/10 aspect ratio, `background-size: cover`, `border-radius: 6px`
- `.footer-card` — color transition 0.7s
- `.weather-pill` / `.tooltip` — hover tooltip; tooltip `width: 100%` relative to outer row

---

## Layout Conventions
- Page wrapper: `max-w-[1440px] mx-auto`
- Outer padding: `px-4 md:px-8`, `pt-4 md:pt-8`, `pb-4 md:pb-8`
- Section gap: `gap-4` between top-level sections on landing page
- **Global card radius: `rounded-card`** (16px token) — all cards sitewide, no exceptions

---

## Specific Layout Constraints & Settled Styling

### Nav (all pages)
- `CaseStudyNav`: `sticky top-0 z-10` (no background, no blur)
- Inner wrapper: `max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 md:px-8 py-3 md:py-4`
- Progress bar: `absolute top-0 left-0 h-[2px] bg-portfolio-surface`, RAF-driven `style.width`
- Back + About links slide outward on scroll: lerp 0.1, max 100px offset, full at 80px scroll

### Hero — landing page left rail (`HeroCard vertical`)
- Sticky left rail, 508px wide, `h-screen`, padding `pt-8 pr-4 pb-8 pl-8`
- **Name:** `VariableProximity` — `text-h2 font-bold leading-[1.08] tracking-[-0.025em]`; starts `wght 600`, lightens to `wght 300` on proximity; initial state seeded with `fromFontVariationSettings`
- **Bio P1:** `text-[32px] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary mb-8 text-pretty`
- **Bio P2:** `text-[32px] font-normal leading-[1.05] tracking-[-0.04em] mb-6 text-pretty` color `#666666`; contains inline italic `font-normal` links — `LinkedInLink` and `EmailLink` components
- **ExperienceList:** `mt-auto` — pushed to bottom of sticky rail

### ExperienceList
- Wrapper: `flex flex-col border-t border-portfolio-stroke`
- Each row: `grid grid-cols-[100px_1fr] gap-x-[52px] py-[3px] border-b border-portfolio-stroke`
- Text: `text-body font-medium` — dates `text-portfolio-muted`, companies `text-portfolio-primary`

### HeroSection (case studies)
- Padding: `px-6 py-8 md:px-10 md:py-12`
- Background: `bg-portfolio-surface/50 rounded-card`
- Tags row: dot-separated `index · TAG · TAG` (no pills)
- Heading: `text-h2` (36px)
- Body: `text-body text-portfolio-muted` (no leading/tracking overrides — uses global token)
- Metadata: no dividers between items

### Arrow icon (`ArrowIcon` component)
- Inline SVG: `viewBox="0 0 11 11"`, path `M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5`
- Size: `w-[0.65em] h-[0.65em]` — scales with font size automatically
- Used in HeroCard (About page links) and FooterCard (LINKEDIN/E-MAIL links)

### ProjectCard layout (landing page)
- **Header:** `flex justify-between items-start gap-6 px-6 pt-6 md:px-10 md:pt-10 pb-6`
  - Title (left): `text-[20px] font-semibold leading-[1.08] tracking-[-0.025em] text-portfolio-primary`
  - Tags (right): stacked, `text-[20px] font-normal leading-[1.08] tracking-[-0.025em] text-portfolio-muted`
- **No numbered index, no MetaString** — removed entirely
- **Card heights:** colSpan 2 → `md:h-[560px]`; colSpan 1 → `md:h-[460px]`
- **lockIcon variant:** Meta logo absolutely centered over full card (`position: absolute, inset-0`) — `/projects/Meta_lockup_mono_black_RGB.png`, `w-[180px]`; card uses `relative` wrapper
- **imageContain variant:** `flex-1 flex items-center px-6 pb-6 md:px-10 md:pb-8`; `rounded-[6px]` on image; hover `-translate-y-4`
- **standard variant:** `card-visual-wrapper` bg-image in `px-6 md:px-10`; hover `-translate-y-4`

### Outer page wrapper (case studies)
- `max-w-[1440px] mx-auto w-full flex flex-col gap-4 pt-4 overflow-hidden` — note: horizontal padding is applied per-section via `CaseStudySection`, NOT on the outer wrapper

### Edge Admin Hub (`/projects/edge-admin-hub`)
- The Challenge card body: "No unified framework, no hierarchy, no cohesion." (first sentence removed)

### Edge Admin Hub — custom hero (instance-specific, not shared)
- **No HeroSection** — replaced with inline editorial layout
- **Animation:** `<CardsAssembly />` in `<section className="px-4 md:px-8 py-8 md:py-12">` — full-width within content column, replays on scroll re-entry
- **Editorial statement:** `text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em]`; indented `md:pl-[20%]`; no card container — matches landing page bio typography
- **Metadata table:** 2-col grid `grid-cols-[160px_1fr]` — label (`text-body text-portfolio-muted`) + value (`text-body text-portfolio-primary`); same `md:pl-[20%]` indent; fields: Role, Timeline, Team, Status
- **Removed sections:** "Solutions / Redesigned Framework" (FullWidthShowcase with framework.png) — deleted entirely

### Global body text line length
- All case study body text capped at `max-w-[560px]` — applied in `SectionBlock`, `FullWidthShowcase`, and `DarkOutroSection` (both variants)
- `SectionBlock` label→heading gap: `gap-1` (4px) inside a wrapper div; outer container remains `gap-4`

### Card image — large variant (`card-visual-wrapper`)
- `border-radius: 6px` (settled after trying 8px)
- `aspect-ratio: 16/10`, `background-size: cover`, `background-position: center center`

### Projects section (`components/sections/Projects.tsx`)
- Grid: `md:grid-cols-2 gap-4` — colSpan 2 = full width, colSpan 1 = half width
- Reveal stagger: `delay={i * 0.08}` per card

### NumberedList (`components/case-study/NumberedList.tsx`)
- Row: `flex gap-5 items-center py-5` — `items-center` (not `items-start`)
- Priority label: `text-h1 font-bold leading-none shrink-0 w-12`
  - P0 → `text-portfolio-accent` (terracotta)
  - P1 → `text-[#4F68B0]` (blue)
- Text block: `flex flex-col gap-1`
- Rows separated by `divide-y divide-portfolio-rule`

### HeroSection metadata (right column)
- `flex flex-col gap-4 md:w-[300px] shrink-0`
- Each item: label (`text-caption font-mono uppercase tracking-widest text-portfolio-muted`) + value (`text-body font-medium text-portfolio-primary`)
- **No dividers** between items

### DarkOutroSection
- Default `variant="dark"`: `bg-black` outer + `DarkCard` inner (`bg-white/5`); white text palette
- `variant="overcast"`: `bg-portfolio-surface-deep/55` + `.surface-card` border; all black text (`text-black`, `text-black/50`, `text-black/70`); no metric dividers
- All active case study pages use `variant="overcast"`

### FooterCard weather states (semi-transparent over white)
| Condition | Background | Text |
|---|---|---|
| Sunny | `rgba(242,230,200,0.60)` | `#3a3020` |
| Rain | `rgba(180,198,216,0.50)` | `#1e2d3d` |
| Overcast | `rgba(200,196,190,0.55)` | `#2a2825` |
| Snow | `rgba(225,232,240,0.55)` | `#2a2825` |

- All pills: `rgba(0,0,0,0.07)` bg, `rgba(0,0,0,0.10)` border
- "Cindy Tsai" uses VariableProximity (`wght` 600→300, radius 150) — starts semi-bold, lightens on hover
- Link order: LINKEDIN then E-MAIL

### Franklin Payroll (`/projects/franklin-payroll`)

**Page structure (4 sections):**
1. Hero image — full-width `franklin-hero.png` in `CaseStudySection`
2. Editorial hero — raw `<section>` with `pt-16 md:pt-24 pb-16 md:pb-24`; all content in single `md:pl-[20%]` container; `gap-16 md:gap-24` between blocks
3. Solutions — `CaseStudySection` with `gap-[80px]`; contains bento grid + interactive prototype + canvas showcases + navigation
4. Reflections — surface card closing statement

**Hero image corner fix (Lenis-safe):**
- Lenis v1 applies `transform` to `document.documentElement`, which breaks `overflow-hidden` + `border-radius` clipping in WebKit/Chrome
- Fix: use `clip-path: inset(0 round 16px)` on the wrapper div (immune to parent transforms) + absolutely-positioned overlay div with `rounded-card shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]` for the visible stroke
- Do NOT use `overflow-hidden rounded-card` alone on images at page level — it will fail with Lenis

**Editorial hero column (`md:pl-[20%]` container):**
- Display paragraph: `text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] max-w-[760px]`
- Current display text: "Taking Franklin from initial concept to a $2.9M seed launch: Designing the enterprise financial suite that transforms complex blockchain data into compliant corporate payroll."
- Metadata grid: `grid-cols-[160px_1fr] gap-y-2` — Role, Timeline, Status using `Fragment` with `key`
- Content block (`max-w-[760px]`): two labelled sections using mono labels (`font-mono text-[13px] tracking-[0.05em] uppercase mb-2`) — "The Challenge" body with `mb-12` break, then "During my time here, I owned" + 4 bullet paragraphs (`gap-4`)
- Bullet paragraphs: `<span className="font-semibold text-portfolio-primary">{label}: </span>{body}` inline pattern

**Bento grid (2 cards, 50/50):**
- `grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch`
- Captions live OUTSIDE and BELOW each card (`flex flex-col gap-4` per column), using `SHOWCASE_CAPTION` constant
- Left card (V1 System Framework): `surface-card bg-portfolio-surface/50 rounded-card overflow-hidden flex flex-col min-h-[580px]`; pill tag in `p-4 shrink-0` wrapper at top; image in `flex-1 min-h-0 flex items-center justify-center px-6 pb-6` wrapper, `w-full h-auto object-contain block`; no hover effect
- Right card (V2 Component Iteration): `surface-card bg-portfolio-surface/50 rounded-card p-6 flex flex-col gap-4 overflow-hidden flex-1 min-h-[580px]`; pill tag `self-start`; image centered via `flex flex-1 items-center justify-center`; `max-w-[380px] xl:max-w-[420px] object-contain`; no hover effect
- Pill tag style: `font-mono text-[11px] tracking-[0.05em] uppercase text-portfolio-muted bg-portfolio-surface px-2 py-0.5 rounded-[6px]`
- Images: `image_e85e2e.png` (V1) and `image_e85df1.png` (V2)

**Interactive prototype — Treasury tracking:**
- File: `public/projects/franklin-payroll/revenue-slider.html` (zero-dependency, inline HTML/CSS/JS)
- Embedded via `<iframe>` in `rounded-card overflow-hidden w-full` container; `h-[500px]`; `scrolling="no"`
- Caption: "Treasury tracking (Interactive)" — uses `SHOWCASE_CAPTION` constant
- Prototype layout: outer `.shell` is the gray canvas (`rgba(242,241,237,0.5)` = `bg-portfolio-surface/50`); `border-radius: 16px`; `border: 1px solid rgba(0,0,0,0.07)`; padding `20px 24px 24px`
- Inner `.frame`: white card with `border-radius: 12px`; `box-shadow: 0 2px 8px rgba(0,0,0,0.04)`
- Features: draggable line chart with snap-to-day + ease-out glide; 1M/3M/6M tab switcher; tooltip flips above/below dot based on available space; active node has `nodePulse` CSS animation (scale 1→2.8, opacity 0.4→0); `#halo` circle targeted via `transform-box: fill-box; transform-origin: center`

**Canvas showcase pattern** (batch distribution, payroll confirmation — rendered from `SHOWCASES` array):
- Dashboard showcase removed
- Outer: `flex flex-col gap-6`
- Canvas: `w-full rounded-card surface-card bg-portfolio-surface/50 flex items-center justify-center px-32 py-32` (constant: `SHOWCASE_CANVAS`)
- Image: `w-full max-w-[88%] h-auto object-contain` (constant: `SHOWCASE_IMG`) — NO shadow or border-radius on image
- Caption: `flex flex-col gap-[6px] max-w-[560px]` (constant: `SHOWCASE_CAPTION`)

**Data constants (page-level):**
- `METADATA` — Role, Timeline, Status
- `OWNERSHIP` — 4 bullet items for "During my time here"
- `SHOWCASES` — 2 canvas showcase items (batch distribution, payroll confirmation)
- `SHOWCASE_CANVAS`, `SHOWCASE_IMG`, `SHOWCASE_CAPTION` — shared class string constants used across bento captions, showcase items, and navigation caption

### Scroll-to-top on navigation (LenisProvider)
- `LenisProvider` uses `usePathname` to detect route changes
- Calls `lenis.scrollTo(0, { immediate: true })` on every pathname change
- Ensures all case study pages start at the top on entry

### Weather tooltip width fix
- Tooltip `position: relative` context is on the **outer row**, NOT on `.weather-pill`
- Tooltip `width: 100%` so it spans from SEATTLE text to right edge of pill automatically

---

## Compliance Review page (`/projects/compliance-review`)
- `'use client'` — password gate (hardcoded `meta2025`)
- Single-column layout: full-width surface card
- Two-column interior: title + body left (`max-w-[720px]`), metadata right (`md:w-[300px]`)
- Password field: `bg-portfolio-background rounded-[14px]`, placeholder "Enter password here"
- Tags: META, PLATFORM, NDA (dot-separated, index `02`)
