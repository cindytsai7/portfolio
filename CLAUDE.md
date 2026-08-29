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
| `portfolio-surface-deep` | `#B4AC9E` | Defined but currently unused (was the overcast outro-card bg; that card is now light `surface/50`) |
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

### Warm accent card ("darker" variant) — no longer used
- Was `surface-card bg-portfolio-surface-deep/55 rounded-card` with black text.
- **Nothing references `portfolio-surface-deep` anymore.** The `DarkOutroSection` overcast variant that used it now matches franklin's impact card (light `surface/50` + portfolio text tokens). Kept here for history; the token still exists in `tailwind.config.ts`.

### Dark card (`DarkCard` component)
- Outer wrapper: `bg-black rounded-card overflow-hidden`
- Inner: `DarkCard` → `bg-white/5` + `shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]`
- Text: label `text-white/50`, heading `text-white`, body `text-white/70`
- **In use** by edge-sidebar-onboarding's "Solution: Customize app" card. All `DarkOutroSection` instances use `variant="overcast"`, so the dark *outro* variant is what's unused — not `DarkCard` itself.

---

## Type Scale

| Class | Size | Locks at | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| `text-display` | 64px (unused — zero call sites) | — | 600 | 1.1 | -0.03em |
| `text-h1` | clamp(24–36px) | — | 600 | 1.3 | — |
| `text-h2` | clamp(28px, 25.6px + 1.2vw, 36px) | 36px from 866px | 600 | 1.08 | -0.025em |
| `text-h3` | clamp(16–20px) | — | 500 | 1.4 | — |
| `text-body` | clamp(15px, 12px + 0.208vw, 16px) | 15px through 1440px | 400 | 1.25 | -0.025em |
| `text-card-title` | clamp(16px, 13.69px + 0.62vw, 20px) | 20px from 1024px | — | 1.08 | -0.025em |
| `text-stat` | clamp(32px, 20.45px + 3.08vw, 52px) | 52px from 1024px | — | 1 | -0.03em |
| `text-caption` | 13px | — | 400 | 1.4 | +0.05em |

- **Every fluid size locks to its previous literal at or below 1024–1440px**, so desktop (1280+) is unchanged by construction. Only phones shrink. When adding a clamp, follow this rule — it makes desktop-regression review mechanical.
- **`text-body` used to be `clamp(15px, 1.5vh, 18px)`** — it clamped on viewport *height*, so it rendered 15px on any normal laptop and never responded to width. It now stays 15px through 1440 (identical to before) and drifts to 16px only above that. Do not "fix" it to 18px without expecting every paragraph on the site to reflow.
- **All bold weights = 600** — `font-bold` is overridden to 600 in `tailwind.config.ts`; `font-semibold` is also 600 (Tailwind default). No 700s anywhere.
- Case study headings: `text-h2` — not `text-h1`
- Labels / meta: always `font-mono text-[13px] tracking-[0.05em] uppercase`
- `text-card-title` replaces the scattered `text-[20px]`; `text-stat` replaces `text-[52px]`

---

## Responsive conventions

**Three-stop rule.** Every responsive value gets at most three stops:

```
base  → phone (<768)
md    → 768–1279, rail is stacked, content column is full width
xl    → 1280+, rail is beside the content. MUST equal the pre-existing desktop value.
```

`lg` is deliberately **not** used for structure. `sm` only for type/gap tweaks, never layout.

- **Why the rail is `xl` and not `lg`:** with the rail at `lg`, a 508px rail appearing at 1024 collapsed the content column from 1023px → **516px** — narrower than at 768px. That made 1024–1279 the most cramped band on the site. At `xl` the column is 1024px there instead, and every grid needs only `grid-cols-1 md:grid-cols-2` rather than a four-stop incantation with an `lg` undo.
- **Why grids stack at `md`, not `sm`:** at 640 the content column is 608px → 292px columns, too tight for card-in-card content (`NumberedList`'s fixed `w-12` numeral, `SectionBlock`'s `text-h1`). 768 gives ~340px, the honest minimum.
- **`overflow-x: clip` (globals.css) and `overflow-x-clip` (CaseStudyPage) mask horizontal overflow.** If you're debugging layout, disable both temporarily or breakage fails silently.
- **The failure mode here is squeeze, not overflow.** `scrollWidth === clientWidth` even when badly broken — an unprefixed `grid-cols-2` doesn't overflow, it just crushes columns to 160px. Measure *content widths*, not overflow.

**Shared tokens:** `components/case-study/tokens.ts` — `CS_LABEL`, `CS_GRID_2`, `CS_GRID_2_STRETCH`. Only genuinely multi-page values live there; single-use strings stay local to their page. `INTRO_GRID` is deliberately **not** shared — the three case studies use different column gaps on purpose (edge-admin-hub uses `gap-4` so its intro paragraph aligns with the card grid beneath it).

---

## Site Status

### Persistent layout — route group `(main)` ✅
- **Architecture** — `app/(main)/layout.tsx` wraps all main routes with a sticky left rail + scrollable right panel. Routes inside: `/` (home) and `/projects/**` (all case studies). `/about` stays at root level and does NOT get this layout.
- **Left rail** — `HeroCard vertical` inside `xl:w-[508px] xl:shrink-0 xl:sticky xl:top-0 xl:h-screen xl:flex xl:flex-col`; padding `xl:pt-8 xl:pr-[60px] xl:pb-8 xl:pl-8`; wrapped in `<Reveal>`. Below `xl` it stacks on top.
- **Right panel** — `flex-1 min-w-0`, normal document flow (window scrolls, not an inner div — Lenis and `window.scrollY` both work)
- **Outer container** — `w-full flex flex-col xl:flex-row` — **no `max-w-[1440px]`**, goes full viewport width
- **`Cindy Tsai` name** — links to `/` via Next.js `<Link>` in the vertical HeroCard variant only; `hover:opacity-60 transition-opacity`
- **`CaseStudyNav` deleted** — nothing imports it; back-navigation handled by the persistent left rail

### Landing page (`app/(main)/page.tsx`) ✅
- Renders `<Projects />` + `<Footer />` in the right panel
- Padding: `px-4 pb-4 xl:pt-8 xl:pr-8 xl:pb-8 xl:pl-0` — `pl-0` only once the rail is beside it at `xl`; below that it stacks and needs symmetric padding
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
| 01 | edge-admin-hub | 1 | `card-visual-wrapper` (16/10 bg-cover) | Microsoft · Enterprise · Systems design |
| 02 | compliance-review | 1 | `lockIcon` → Meta logo image | Platform design · Internal tools · NDA |
| 03 | franklin-payroll | 1 | `imageContain` 100% width, centered | Start up · Crypto · Zero to one |
| 04 | edge-sidebar-onboarding | 1 | `imageContain` 68% width, centered | Microsoft · Consumer · Growth design |

- **Grid layout: 2×2** — all four cards `colSpan: 1`; row 1: Admin Hub + Risk Systems; row 2: Web3 + Sidebar
- Interface fields: `id`, `title`, `tags`, `image?`, `href`, `colSpan?`, `imageContain?`, `imageWidth?`, `lockIcon?` — `colSpan` type is `1 | 2` (no 3)
- Meta logo: `/projects/Meta_lockup_mono_black_RGB.png`

---

## Key Components

### `components/case-study/`
- `CaseStudyPage` — minimal div wrapper: `w-full flex flex-col gap-4 pt-4 overflow-x-clip`. Uses `overflow-x-clip`, **not** `overflow-hidden` — it's an ancestor of the sticky rail's sibling and `overflow-hidden` there can break sticky positioning.
- `tokens.ts` — shared class strings: `CS_LABEL`, `CS_GRID_2`, `CS_GRID_2_STRETCH`. See Responsive conventions.
- **Deleted** (no references anywhere): `CaseStudyNav`, `HeroSection`, `CaseStudySection`, `ScrollRevealQuote`, `MetricCountUp`. All case studies use inline editorial heroes + per-section padding.
- `SectionBlock` — label (optional) + heading + body; label and heading are grouped in an inner `flex flex-col gap-1` div (tight 4px gap); outer `gap-4` separates from body; body capped at `max-w-[560px]`
- `NumberedList` — P0 (terracotta) / P1 (`#4F68B0`) priority rows; `items-center` alignment
- `ThreeColumnSection` — 3-col bento card; `bg-portfolio-surface/50 rounded-card`; divider rule sits between SectionBlock heading and columns (not on each column)
- `FullWidthShowcase` — full-width image + caption block; caption container `max-w-[560px]` (was `w-3/4`); `rounded-card` on images
- `DarkOutroSection` — `heading`, `body`, `cta`, and `padding` are all **optional**; compliance-review omits `heading`/`body` for a label → metrics → CTA card. Accepts `variant="dark"` (default) or `variant="overcast"`.
  - **`cta={{ href, label }}` renders an action bar inside the card** (`flex items-center justify-end`) rather than a link floating below it. `justify-end`, not `justify-between` — with a single child `justify-between` resolves to `flex-start` and parks the CTA on the left. **No `border-t` on that bar**: every metric already carries its own bottom rule, so a container rule reads as a doubled line. The card's `gap-12` supplies the spacing.
  - **`padding` is a prop, not a className merge.** `p-8` and an incoming `px-6` are different CSS properties, so the cascade — not class order — would pick the winner. Overriding the whole string keeps it deterministic. **overcast now matches franklin's impact card**: `surface-card bg-portfolio-surface/50` + `text-portfolio-primary`/`text-portfolio-muted`/`border-portfolio-rule`; inner `gap-12`; each metric has a `pb-4` rule beneath its label; body `max-w-[560px]`. Used by edge-sidebar (2 metrics) and edge-admin-hub (3 metrics). **Metric grid adapts to count**: exactly 2 → `grid-cols-2` (like franklin); otherwise `grid-cols-1 sm:grid-cols-3`. A fixed 3-col grid with 2 metrics would leave a rule-less blank column.
- `CardsAssembly` — animated dashboard card assembly for edge-admin-hub hero; assets at `/public/projects/edge-dashboard-assembly/assets/`; Web Animations API; replays on scroll-back via IntersectionObserver (threshold 0.4, stays connected); `'use client'`; CSS in `globals.css` under `.ca-stage / .ca-bg / .ca-piece`
  - **Static below md.** The fly-in offsets are fixed px (up to 240) — wider than the whole stage at 375, so pieces launched from off-canvas. The JS guard now matches `prefers-reduced-motion` OR `max-width: 767px`, mirrored by a `@media (max-width: 767px) { .ca-piece { opacity: 1 } }` rule. No extra asset needed: pieces are positioned in `%` against an `aspect-ratio` stage, so the static composition is already fluid.
  - The `header` piece is `left: 22.254%` + `width: 88.787%` = **111%** — it deliberately bleeds past the stage. This registers as horizontal overflow at every width and is masked by `overflow-x: clip`. Pre-existing and intentional; don't "fix" it.

### `components/ui/`
- `ProjectCard` — `CardHeader` (title left + tags stacked right) + image; two variants: `lockIcon` (Meta logo centered) and standard (`imageContain` or `card-visual-wrapper`); no numbered index; no MetaString
- `HoverCard` — `bg-portfolio-surface/50 hover:bg-portfolio-surface/80 rounded-card`; inset 1px `#E6E5E1` border via absolute overlay div
- `HeroCard` — two modes via `vertical` prop:
  - `vertical` (landing page): flex-col h-full; name → 2 bio paragraphs → inline CTA links; ExperienceList `mt-auto` at bottom
  - default (about page): 3-col grid `md:grid-cols-3`, left `md:col-span-2`, ExperienceList col 3
  - VariableProximity on name: `wght 600 → 300` (starts bold, lightens on hover); initial render seeded with `fromFontVariationSettings` via `?? fallback`
- `ExperienceList` — `grid-cols-[auto_1fr] gap-x-5 md:grid-cols-[100px_1fr] md:gap-x-[52px] py-[3px]`; `text-body font-medium`; border-top + border-bottom dividers per row. The fixed 100px+52px chrome is 44% of a 343px phone column, so below md the year column is content-sized (`auto`) to stop the dates wrapping. Renders on both `/` (via the rail) and `/about`.
- `DarkCard` — `bg-white/5 rounded-card`; `rgba(255,255,255,0.08)` inset border; for cards on black backgrounds. **In use** by edge-sidebar-onboarding's "Solution: Customize app" card.
- `FooterCard` — semi-transparent weather tints (4 states); VariableProximity on "Cindy Tsai" (`wght 600 → 300`); tooltip forecast
  - **Layout:** `mt-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-end` — stacks below md (side by side the two lines collided on a phone). Weather line has `shrink-0`.
  - **No LinkedIn/Email links** — removed
  - **Type:** both lines use `text-card-title font-normal`; "New York City" sentence case (not uppercase); time uses no `.toUpperCase()`
  - **Location is New York City, and it lives in two files.** `FooterCard.tsx` holds the display label + `formatTime`'s `timeZone`; `app/api/weather/route.ts` holds the two OpenWeatherMap `q=` queries + three `timeZone` values used to bucket forecast days. All five timezone references must move together — changing the city but not the timezone silently renders the right city's weather on the wrong clock.
  - The OWM query is `q=New%20York,NY,US` (explicit state code; `New York,US` alone is ambiguous with the state). **A failed query is detectable:** the route falls back to `{ condition: 'rain', temp: 58 }` with a THU/FRI/SAT mock forecast, so those exact values mean the API call 404'd or the key is missing.
  - There is **no weather pill or tooltip** — it renders as a plain text line. The old `.weather-pill` / `.tooltip` CSS has been deleted.

### `components/sections/`
- `Projects` — bento grid with `id="work"` for scroll target
- `Footer` — wraps FooterCard
- `Testimonials` — horizontal scroll carousel; 6 real testimonials; warm surface cards `bg-[#D1CCC5]/50 shadow-[inset_0_0_0_1px_#D1CCC5]`; black text; ← → nav arrows

### `app/globals.css` key classes
- `.surface-card` — `box-shadow: inset 0 0 0 1px #E6E5E1`
- `.card-visual-wrapper` — 16/10 aspect ratio, `background-size: cover`, `border-radius: 6px`
- `.footer-card` — color transition 0.7s
- `.reveal` / `.reveal-image` — scroll reveal. Settled state is **`transform: none`**, not `translateY(0)`: a lingering identity transform breaks `overflow-hidden` + `border-radius` clipping of descendants in WebKit/Chrome, which square-cornered every image bleeding to a rounded card's edge. Do not change this back.
- `.ca-*` — CardsAssembly; includes a `max-width: 767px` rule pinning pieces to their final opacity

---

## Layout Conventions
- **Main layout** (`app/(main)/layout.tsx`): `w-full flex flex-col xl:flex-row` — no max-width; goes full viewport width
- **Case study pages** (`CaseStudyPage`): `w-full flex flex-col gap-4 pt-4 overflow-x-clip` — no max-width on wrapper; horizontal padding applied per-section (`px-4 md:px-8`)
- Outer padding: `px-4 md:px-8`, `pt-4 md:pt-8`, `pb-4 md:pb-8`
- Section gap: `gap-4` between top-level sections on landing page
- **Global card radius: `rounded-card`** (16px token) — all cards sitewide, no exceptions

---

## Specific Layout Constraints & Settled Styling

### Nav (all pages)
- **No `CaseStudyNav`** — deleted; file removed from codebase
- Back-navigation: clicking "Cindy Tsai" in the persistent left rail returns to `/`
- No scroll progress bar currently (can be re-added if needed — was RAF-driven `style.width` on a `h-[2px]` bar)

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

### Arrow link (`ArrowLink` component — `components/ui/ArrowLink.tsx`)
- Single source for the uppercase text link + trailing ↗ arrow. Renders the anchor, shared link style (`inline-flex items-center gap-0.5 text-[14px] font-bold uppercase text-portfolio-primary transition-opacity hover:opacity-60`), and the inline SVG (`viewBox="0 0 11 11"`, path `M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5`, `w-[0.65em] h-[0.65em]` — scales with font size).
- Props: `href`, `external` (adds `target="_blank" rel="noopener noreferrer"`), `tone`, `className`, `children`.
- **`tone="inverse"` swaps the colour to white for dark surfaces.** It is a prop rather than a `text-*` class passed via `className` because the two would collide at equal specificity and the winner would be decided by stylesheet order, not class order.
- Used by HeroCard (About-page LinkedIn/Email) and compliance-review ("Read Meta's Announcement"). Replaced the old local `ArrowIcon` function + duplicated inline SVGs.
- **The ↗ is the component's own SVG** — pass text only as children. A literal ↗ in the label renders a second arrow. The class list also forces `uppercase`, so children are display-cased regardless of how they're written in source.

### ProjectCard layout (landing page)
- **Header:** `flex justify-between items-start gap-6 px-6 pt-6 md:px-10 md:pt-10 pb-6`
  - Title (left): `text-card-title font-semibold text-portfolio-primary`
  - Tags (right): stacked, `text-card-title font-normal text-portfolio-muted`
- **No numbered index, no MetaString** — removed entirely
- **Card heights:** `min-h-[380px] md:h-[460px]` — `min-h` below md so a wrapped title can't crowd the image out; fixed 460px from md up
- **lockIcon variant:** Meta logo absolutely centered over full card (`position: absolute, inset-0`) — `/projects/Meta_lockup_mono_black_RGB.png`, `w-[180px]`
- **imageContain variant:** `flex-1 flex items-center px-6 pb-6 md:px-10 md:pb-8`; `rounded-[6px]` on image; hover `-translate-y-4`
- **standard variant:** `card-visual-wrapper` bg-image in `px-6 md:px-10`; hover `-translate-y-4`

### Outer page wrapper (case studies)
- `CaseStudyPage`: `w-full flex flex-col gap-4 pt-4 overflow-x-clip` — no max-width (layout provides full-width); horizontal padding applied per-section (`px-4 md:px-8`)

### Edge Admin Hub (`/projects/edge-admin-hub`)
- The Challenge card body: "No unified framework, no hierarchy, no cohesion." (first sentence removed)

### Editorial hero padding — global standard (all 3 case studies)
- Section class: `px-4 md:px-8 pt-16 md:pt-24 pb-24 md:pb-40`
- Applies to: edge-admin-hub (section 1), franklin-payroll (section 1), compliance-review (section 1)
- White space is intentional — editorial anchor between animation/hero and body content
- **compliance-review overrides both stops** — `xl:pt-[18px]` so its intro cap-aligns with the rail's "Cindy Tsai" h1 (it has no hero image or animation above the intro, so there is nothing for the whitespace to anchor), and `pb-0` because it is a single-section page: `app/(main)/projects/layout.tsx` puts the Footer directly after it on a deliberate `pt-4`, and that 16px is meant to be the whole card-to-footer gap. Any `pb` stacks on top of it — the editorial `pb-40` made it 176px. The other two keep `pt-24`/`pb-40`. See the compliance-review section for why 18px.

### Edge Admin Hub — custom hero (instance-specific, not shared)
- **No HeroSection** — replaced with inline editorial layout
- **Animation:** `<CardsAssembly />` in `<section className="px-4 md:px-8 py-8 md:py-12">` — full-width within content column, replays on scroll re-entry
- **Editorial statement:** `text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em]`; indented `md:pl-[20%]`; no card container — matches landing page bio typography
- **Metadata table:** 2-col grid `grid-cols-[160px_1fr]` — label (`text-body text-portfolio-muted`) + value (`text-body text-portfolio-primary`); same `md:pl-[20%]` indent; fields: Role, Timeline, Team, Status
- **Removed sections:** "Solutions / Redesigned Framework" (FullWidthShowcase with framework.png) — deleted entirely

### Global body text line length
- Most case study body text capped at `max-w-[560px]` — applied in `SectionBlock`, `FullWidthShowcase`, and `DarkOutroSection`
- **Exception: compliance-review** runs a single `max-w-[680px]` column on its whole stack rather than per-block widths, so every element shares one right edge. (It previously used `760px`, then a split `640px` intro / `560px` body.)
- `SectionBlock` label→heading gap: `gap-1` (4px) inside a wrapper div; outer container remains `gap-4`

### Card image — large variant (`card-visual-wrapper`)
- `border-radius: 6px` (settled after trying 8px)
- `aspect-ratio: 16/10`, `background-size: cover`, `background-position: center center`

### Projects section (`components/sections/Projects.tsx`)
- Grid: `lg:grid-cols-2 gap-4` — all cards `colSpan: 1`; 2×2 layout
- Reveal stagger: `delay={i * 0.08}` per card

### NumberedList (`components/case-study/NumberedList.tsx`)
- Row: `flex gap-5 items-center py-5` — `items-center` (not `items-start`)
- Priority label: `text-h1 font-bold leading-none shrink-0 w-12`
  - P0 → `text-portfolio-accent` (terracotta)
  - P1 → `text-[#4F68B0]` (blue)
- Text block: `flex flex-col gap-1`
- Rows separated by `divide-y divide-portfolio-rule`

### DarkOutroSection
- Default `variant="dark"`: `bg-black` outer + `DarkCard` inner (`bg-white/5`); white text palette
- `variant="overcast"`: `surface-card bg-portfolio-surface/50` (light, matches franklin impact card); `text-portfolio-primary` heading, `text-portfolio-muted` label/body, `border-portfolio-rule` under each metric
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
1. Hero image — full-width `franklin-hero.png` in a `px-4 md:px-8` section
2. Editorial hero — raw `<section>` with `pt-16 md:pt-24 pb-24 md:pb-40`; all content in single `md:pl-[20%]` container; `gap-16 md:gap-24` between blocks
3. Solutions — `px-4 md:px-8` section with `gap-20`; contains bento grid + interactive prototype + canvas showcases + navigation
4. Reflections / Impact — surface card closing statement

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
- `grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch`
- Captions live OUTSIDE and BELOW each card (`flex flex-col gap-4` per column), using the `CAPTION` constant
- Left card (V1 System Framework): `surface-card bg-portfolio-surface/50 rounded-card overflow-hidden flex flex-col md:min-h-[520px]`; pill tag in `p-4 shrink-0` wrapper at top; image in `flex-1 min-h-0 flex items-center justify-center px-6 pb-6` wrapper, `w-full h-auto object-contain block`; no hover effect
- Right card (V2 Component Iteration): `surface-card bg-portfolio-surface/50 rounded-card p-6 flex flex-col gap-4 overflow-hidden md:min-h-[520px]`; pill tag `self-start`; image centered via `flex flex-1 items-center justify-center`; `max-w-[380px] xl:max-w-[420px] object-contain`; no hover effect
- **`min-h` is gated behind `md`** — a 520px-tall card in a 160px column is an absurd aspect ratio on a phone
- Pill tag style: `font-mono text-[11px] tracking-[0.05em] uppercase text-portfolio-muted px-2 py-0.5 rounded-[6px]` — **no background**
- Images: `image_e85e2e.png` (V1) and `image_e85df1.png` (V2)

**Interactive prototype — Treasury tracking:**
- File: `public/projects/franklin-payroll/revenue-slider.html` (zero-dependency, inline HTML/CSS/JS)
- **Desktop only.** Embedded via `<iframe>` in a `hidden md:block rounded-card overflow-hidden w-full` container; `h-[500px]`; `scrolling="no"`
- **Below md it is replaced by a static screenshot** (`revenue-slider-static.png`, `md:hidden`). The inner HTML is height-driven (`html,body{height:100%}`) with no media queries, so it cannot reflow narrow — at 375 it rendered a 3-column dashboard in ~327px, clipped at 500px with scrolling disabled and therefore unreachable. Regenerate the asset with Playwright at 1000×500, `deviceScaleFactor: 2`, if the prototype changes.
- Caption: "Treasury tracking (Interactive)" — uses `SHOWCASE_CAPTION` constant
- Prototype layout: outer `.shell` is the gray canvas (`rgba(242,241,237,0.5)` = `bg-portfolio-surface/50`); `border-radius: 16px`; `border: 1px solid rgba(0,0,0,0.07)`; padding `20px 24px 24px`
- Inner `.frame`: white card with `border-radius: 12px`; `box-shadow: 0 2px 8px rgba(0,0,0,0.04)`
- Features: draggable line chart with snap-to-day + ease-out glide; 1M/3M/6M tab switcher; tooltip flips above/below dot based on available space; active node has `nodePulse` CSS animation (scale 1→2.8, opacity 0.4→0); `#halo` circle targeted via `transform-box: fill-box; transform-origin: center`

**Canvas showcase pattern** (batch distribution, payroll confirmation — rendered from `SHOWCASES` array):
- Dashboard showcase removed
- Outer: `flex flex-col gap-6`
- Canvas: `w-full rounded-card surface-card bg-portfolio-surface/50 flex items-center justify-center px-4 py-8 md:px-12 md:py-16 xl:px-20 xl:py-24` (constant: `CANVAS`). The old flat `px-20`/`px-32` left ~112px for a full dashboard screenshot at 375.
- Image: `w-full max-w-[88%] h-auto object-contain` (constant: `SHOWCASE_IMG`) — NO shadow or border-radius on image
- Caption: `flex flex-col gap-[6px] max-w-[560px]` (constant: `SHOWCASE_CAPTION`)

**Impact / Reflections card (stacked layout):**
- `surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-12` → inner `flex flex-col gap-12`
- Order: mono `Impact` label → `text-h2` heading → full-width stats row → body paragraph
- Stats: `grid grid-cols-2 gap-x-6 md:gap-x-12`, each cell `flex flex-col gap-4 pb-4 border-b border-portfolio-rule`; value `text-[clamp(36px,24.45px+3.08vw,56px)]`
- Stays 2-up at every width — two short numerals read fine at 375; only the gap shrinks
- Replaced an earlier 3-column `[1fr_1px_1fr]` grid with a vertical divider

**Full-bleed images on rounded cards — read before touching the "Edge case" cards:**
- Image must be a **static flex child with `mt-auto`**, never `position: absolute`. An abs-positioned image is not clipped to the card's `border-radius` in practice, regardless of `overflow-hidden` or `clip-path`.
- `.surface-card`'s border is an **inset box-shadow, which paints beneath child content** — a full-bleed image covers it, so the rounded corner has nothing to read against on a white page and looks "cut off" even though clipping works. Fix by painting the stroke on top: `<div className="absolute inset-0 rounded-card shadow-[inset_0_0_0_1px_#E6E5E1] pointer-events-none" />` (same pattern as the hero image).
- **Never put `clip-path` on a `.surface-card`** — it clips the card's own paint and shaves the border off around the corners. A border cannot follow a clip-path.
- Diagnosing: put a contrasting background on the element *behind* the card. If the corner shows that colour curving in, clipping is fine and the problem is the invisible stroke. Colouring the card itself proves nothing.

**Data constants (page-level):**
- `METADATA` — Role, Timeline, Status
- `IMPACT` — 2 stats ($2.9M seed raised, 15% retention increase)
- `OWNERSHIP` — 4 bullet items for "During my time here"
- `SHOWCASES` — 2 canvas showcase items (batch distribution, payroll confirmation)
- `CANVAS`, `CAPTION`, `CAPTION_WIDE`, `PILL`, `INTRO_GRID` — page-local class string constants. `CAPTION_WIDE` is `max-w-[60ch] md:max-w-[50%]`: the bare `max-w-[50%]` produced 172px paragraphs on a phone, and at 1440 the 50% still wins so desktop is unchanged.

### Scroll-to-top on navigation (LenisProvider)
- `LenisProvider` uses `usePathname` to detect route changes
- Calls `lenis.scrollTo(0, { immediate: true })` on every pathname change
- Ensures all case study pages start at the top on entry

## Compliance Review page (`/projects/compliance-review`)

**Single full-width column** (no grid, no `md:pl-[20%]` indent, no inner max-width, flush left at all widths). One `<section className="px-4 md:px-8 pt-16 md:pt-24 xl:pt-[18px] pb-0">` → `<div className="flex flex-col gap-16">` holding four blocks:

**`xl:pt-[18px]` cap-aligns the intro with the rail's "Cindy Tsai" h1.** It aligns CAPS, not box tops — the h1 is 36px/1.08 and the intro is 2.2vw/1.05, so their half-leading differs and matching box tops sets the intro ~3px high. The perfect value drifts with viewport (19.25px at 1280 → 16.5px at 1636+, where the intro's clamp caps at 36px and both sizes lock); 18px splits the difference, keeping the error under 1.5px at any desktop width (measured: −1.25px at 1280, +1.0px at 1600). Below `xl` the rail stacks above the content, so there is nothing to align to and the editorial `pt-16 md:pt-24` stands.

1. **Intro** — display paragraph `text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary` (no own max-width). Currently the short title "Agentic AI & Triage Workflows" — one line at every width (356px ink at 1280, 253px at 375), so it no longer constrains the column.
2. **Context** — label above content (`flex flex-col gap-3`); content `flex flex-col gap-3`:
   - **NDA callout** — `rounded-card border border-portfolio-stroke bg-portfolio-surface/50 px-5 py-4` wrapping the NDA note (roman, **not** italic — deliberate)
   - body paragraph
3. **Role** — label above a two-column focus-area/description list; see below
4. **Strategic outcome** — `DarkOutroSection variant="overcast"` with the CTA *inside* it. Two metrics (37% / 26%), so it takes the component's `grid-cols-2` branch. Passes **no `heading`** and **no `body`** — this is the only caller that omits either, so the card runs label → metrics → CTA.
   - Metric values stay terse (`"37%"`, not `"37% reduction"`) — they render at `text-stat` (52px), where "37% reduction" measures 342px against a ~282px column. The noun belongs in the label, matching the other two cards.
   - `padding="px-6 py-8 md:px-10 md:py-12"` mirrors `FooterCard` exactly. The component default is `p-8 md:p-12`, which edge-admin-hub and edge-sidebar keep.

- **No index/tags row, no metadata grid.** Earlier `1fr_3fr` two-column grid and the `hidden md:block` spacer are gone.
- **One full-width boundary — do not re-add a max-width.** The page went 760 → 640/560 → single-680 → full width. Every block now resolves to the section's content box (708px at 1280), which is the *same box the Footer card uses*, since both are panel width minus `px-8`. Verified: outcome card and `.footer-card` share an identical box, padding, and radius.
- **Body copy runs ~111 chars/line** at full width. Long for body text, and the Context paragraph is the one block with no sub-column to break it up. If it needs tightening, put `max-w-[560px]` on that paragraph alone — do not re-cap the container, or the cards stop matching the footer.
- The NDA callout uses a real `border`, not `.surface-card`. `.surface-card`'s inset box-shadow paints *beneath* child content and reads as a fill edge rather than a hairline; `border-portfolio-stroke` is the same `#E6E5E1` drawn as an actual stroke.
- **Vertical rhythm is 12 / 48 / 64.** `gap-3` label→content and callout→paragraph (the callout should read as attached, not floating), `py-6` on Role rows (24 top + 24 bottom = 48), `gap-16` between sections — verified exact at 64px across all three boundaries. `gap-16` rather than the old `gap-14`: Role rows now sit 48px apart, so 56px between sections read too close to be a bigger break.
- **`pb-0` on the section.** `app/(main)/projects/layout.tsx` already follows it with the Footer on a deliberate `pt-4`; that 16px *is* the card-to-footer gap and matches the landing page's `gap-4`. Any `pb` here stacks on top of it — the editorial `pb-40` made it 176px.

**Role — two-column focus-area list.** Each item is its own `flex flex-col gap-1 py-6 first:pt-0 border-b border-black/5 md:grid md:grid-cols-[200px_1fr] md:gap-x-8 md:gap-y-0 md:items-baseline`, inside a plain `flex flex-col` (**no** gap).
- **The 200px label column is fixed, not fractional.** This was tried as `1fr_2fr` and reverted: a fraction scales the label column with the container (225px at 1280, 332px at 1600), so short labels like "Data versioning" (104px ink) opened a dead gap that grew with the viewport. Fixed keeps the gutter constant while `1fr` still carries the description to the right edge — verified grounded on the card's right edge at 1280 (1248) and 1600 (1568).
- **200px is set by the longest label** — "End-to-end workflow design" measures 194px at `font-medium`, leaving ~6px of slack. Adding a longer focus area wraps that label to two lines; it does not break the column. Bump to 220px if one is added. Others: "Routing & decision-support" 188px, "Structured intake patterns" 179px.
- **`font-medium` (500), not semibold.** The column break already separates label from body, so inline weight contrast is no longer doing the work — and at semibold the longest label is 199px and would wrap in a 200px column. Matches `ExperienceList`'s `text-body font-medium`.
- **Rules come from `py-6` + `border-b` on the row, not a container gap.** A gap *plus* row padding compounds; padding is also what centres the hairline between two rows (24px above, 24px below). `first:pt-0` keeps the list flush under the ROLE label.
- **A residual gap is unavoidable** — labels vary 104→194px, so the gutter runs 38px (longest label) to 128px (shortest). Only right-aligning the label column (`md:text-right`) makes it uniform; no fixed width can.
- **Stacks below md** (label over description, `gap-1`): a 200px label column inside a 343px phone column leaves ~110px for the description.
- Labels use the shared `CS_LABEL` token; each label sits directly above its content (`gap-3`), sections separated by `gap-14`.

**Data constants:**
- `WHAT_I_OWN` — 5 items: End-to-end workflow design, Review experience, Data versioning, Structured intake patterns, Routing & decision-support
