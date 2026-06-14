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
- Used for: DarkOutroSection `variant="overcast"`, Franklin Business Opportunity, Edge sidebar Customize App card

### Dark card (`DarkCard` component)
- Outer wrapper: `bg-black rounded-card overflow-hidden`
- Inner: `DarkCard` → `bg-white/5` + `shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]`
- Text: label `text-white/50`, heading `text-white`, body `text-white/70`
- Currently unused (all DarkOutroSection instances use `variant="overcast"`)

---

## Type Scale

| Class | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|
| `text-display` | 64px | 700 | 1.1 | -0.03em |
| `text-h1` | clamp(24–36px) | 700 | 1.3 | — |
| `text-h2` | 36px | 700 | 1.08 | -0.025em |
| `text-h3` | clamp(16–20px) | 500 | 1.4 | — |
| `text-body` | 1.5vh | 400 | 1.25 | -0.025em |
| `text-caption` | 13px | 400 | 1.4 | +0.05em |

- Card titles (`text-h2`): apply `tracking-[-0.025em] leading-[1.08]` explicitly in component
- Hero bio: overrides `leading-[1.3] tracking-tight` on top of `text-body`; `max-w-[480px] mb-4`
- Labels / meta: always `font-mono text-[13px] tracking-[0.05em] uppercase`
- Case study headings: `text-h2` (36px) — not `text-h1`

---

## Site Status

### Landing page ✅
- **Hero** — Open editorial layout (no card container); HeroCard with VariableProximity name, bio paragraph, `LinkedIn ↗` + `Email ↗` links, ExperienceList on the right
- **Projects** — 3-col bento grid (4 cards); `mt-40` below hero
- **Footer** — Weather-tinted semi-transparent card, VariableProximity on "Cindy Tsai", live Seattle time, 3-day forecast tooltip
- No top navigation on landing page

### About page ✅
- `/about` — Back link nav, HeroCard (with ExperienceList), Testimonials carousel

### Case studies ✅
| Route | Status |
|---|---|
| `/projects/edge-admin-hub` | Done |
| `/projects/franklin-payroll` | Done |
| `/projects/compliance-review` | Done (password gate: `meta2025`) |
| `/projects/edge-sidebar-onboarding` | Done |

---

## Projects Grid (`lib/projects.ts`)

| # | Project | colSpan | Variant | Tags |
|---|---|---|---|---|
| 01 | Edge admin hub | 2 | large (card-visual-wrapper) | MICROSOFT · ENTERPRISE · SYSTEMS |
| 02 | Compliance review (Meta) | 1 | editorial | META · PLATFORM · NDA |
| 03 | Franklin Payroll | 1 | small (bleed image) | START UP · 0 TO 1 · PAYROLL |
| 04 | Edge sidebar onboarding | 2 | imageContain (portrait, 68% width) | MICROSOFT · GROWTH · CONSUMER |

- `passwordProtected: true` on a project shows a `PASSWORD PROTECTED` line below the meta string on the card
- NDA stays **inline** in the tags string (not filtered out)

---

## Key Components

### `components/case-study/`
- `CaseStudyNav` — sticky nav with RAF-driven scroll progress bar (`bg-portfolio-surface`, `h-[2px]`); `max-w-[1440px]` inner wrapper; `py-3 md:py-4`
- `HeroSection` — accepts `index` prop; dot-separated meta string (`01 · TAG · TAG`); `text-h2` heading; body `text-body` (no overrides); no metadata dividers; `bg-portfolio-surface/50 rounded-card px-6 py-8 md:px-10 md:py-12`
- `SectionBlock` — label (optional) + heading + body; `label` prop is optional — omit to show heading only
- `NumberedList` — P0 (terracotta) / P1 (`#4F68B0`) priority rows; `items-center` alignment
- `ThreeColumnSection` — 3-col bento card; `bg-portfolio-surface/50 rounded-card`; divider rule sits between SectionBlock heading and columns (not on each column)
- `FullWidthShowcase` — full-width image + caption; `rounded-card` on images
- `DarkOutroSection` — accepts `variant="dark"` (default) or `variant="overcast"`; overcast uses `bg-portfolio-surface-deep/55` with black text and no dividers
- `ScrollRevealQuote` — per-word color reveal (Franklin-specific)
- `MetricCountUp` — count-up animation (Franklin-specific)

### `components/ui/`
- `ProjectCard` — wraps HoverCard; handles large / small / imageContain / editorial variants; renders dot-separated `MetaString`
- `HoverCard` — `bg-portfolio-surface/50 hover:bg-portfolio-surface/80 rounded-card`; inset 1px `#E6E5E1` border via absolute overlay div
- `HeroCard` — open layout (no card background); 3-col grid `md:grid-cols-3 md:gap-4`, left `md:col-span-2`; VariableProximity name (`text-h2`); bio `text-body leading-[1.3] tracking-tight max-w-[480px] mb-4`; bold ArrowIcon text links; ExperienceList right col
- `ExperienceList` — `grid-cols-[100px_1fr] gap-x-[52px] py-[3px]`; `text-body font-medium`; border-top + border-bottom dividers per row
- `DarkCard` — `bg-white/5 rounded-card`; `rgba(255,255,255,0.08)` inset border; for cards on black backgrounds
- `FooterCard` — semi-transparent weather tints (4 states); VariableProximity on "Cindy Tsai"; LinkedIn then Email order; tooltip forecast

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

### Hero (landing)
- No card container — open editorial layout, content sits directly on page background
- Grid: `md:grid-cols-3 md:gap-4` — left content `md:col-span-2`, ExperienceList in col 3 (aligns with project card 02 below)
- Name: `VariableProximity` with `text-h2 font-bold leading-[1.08] tracking-[-0.025em]`
- Bio: `text-body leading-[1.3] tracking-tight text-portfolio-muted max-w-[480px] mb-4` — non-breaking space before "risks." to prevent orphan
- Links: `text-[14px] font-bold uppercase text-portfolio-primary hover:opacity-60`, `gap-6` between them
- Below hero: `mt-40` before Projects grid

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
- Used in HeroCard (LinkedIn/Email links) and FooterCard (LINKEDIN/E-MAIL links)

### ProjectCard meta string
- Format: `01 · MICROSOFT · ENTERPRISE · SYSTEMS`
- Index (`01`–`04`): `text-portfolio-primary`
- Dots (` · `): `text-portfolio-rule` (`#C7C7C2`)
- Tags: `text-portfolio-muted`
- All: `font-mono text-[13px] tracking-[0.05em] uppercase`
- If `passwordProtected: true`: second line reads `PASSWORD PROTECTED` in same mono style
- NDA appears inline in the tag string, not filtered out

### Outer page wrapper (case studies)
- `max-w-[1440px] mx-auto flex flex-col gap-4 px-4 md:px-8 pt-4 md:pt-8 pb-4 md:pb-8`

### Card image — large variant (`card-visual-wrapper`)
- `border-radius: 6px` (settled after trying 8px)
- `aspect-ratio: 16/10`, `background-size: cover`, `background-position: center center`

### Projects Grid (`lib/projects.ts`) — current state
| # | id | variant | image | notes |
|---|---|---|---|---|
| 01 | edge-admin-hub | large (card-visual-wrapper) | `/projects/edge-admin-hub.png` | colSpan 2 |
| 02 | compliance-review | small (bleed) | `/projects/compliance-review.png` | colSpan 1, no description/role/timeline |
| 03 | franklin-payroll | small (bleed) | `/projects/franklin-payroll/card.png` | colSpan 1 |
| 04 | edge-sidebar-onboarding | imageContain (portrait) | `/projects/edge-sidebar-onboarding/card.png` | colSpan 2 |

### Card image — small variant (bleed)
- `ml-6 flex-shrink-0 w-[130%] bg-cover bg-left-top min-h-[500px] rounded-card`
- `min-h-[500px]` (not `aspect-ratio`) ensures bleed at all viewport widths
- `group-hover:-translate-y-4` on hover

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
- "Cindy Tsai" uses VariableProximity (`wght` 300→900, radius 150)
- Link order: LINKEDIN then E-MAIL

### Franklin Payroll hero layout
- Left col: tags + title + body (no metadata)
- Divider: `hidden md:block w-px bg-[#c7c7c2] self-stretch`
- Right col: `flex-1 pt-[50px] flex flex-col gap-8` — MetricCountUp ($2.9M counter + caption) then metadata items in **horizontal row** (`flex-row gap-8`)
- Metadata (Role/Timeline/Status): same label/value style as HeroSection, but `flex-row` not `flex-col`

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
