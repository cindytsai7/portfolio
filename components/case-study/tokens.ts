/**
 * Shared class strings for case-study pages.
 *
 * Only genuinely multi-page values live here. Single-use strings (franklin's
 * CANVAS/CAPTION/PILL, edge-sidebar's CARD, compliance-review's GRID) stay local
 * to their page — centralising those would add indirection without stopping drift.
 *
 * INTRO_GRID is deliberately NOT shared: the three pages use different column
 * gaps on purpose (edge-admin-hub uses gap-4 so its intro paragraph aligns with
 * the card grid directly beneath it).
 */

/** Mono section label. Used by edge-sidebar-onboarding and compliance-review. */
export const CS_LABEL =
  "font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted";

/**
 * The standard two-up card grid. Stacks below md.
 *
 * md (768) is the stacking point, not sm (640): at 640 the content column is
 * 608px, which gives 292px columns — not enough for the card-in-card content
 * (NumberedList's fixed w-12 numeral, SectionBlock's text-h1 headings). 768
 * gives 340px, which is the honest minimum.
 */
export const CS_GRID_2 = "grid grid-cols-1 md:grid-cols-2 gap-4";

/** Two-up grid variant for cards that must match height. */
export const CS_GRID_2_STRETCH = `${CS_GRID_2} items-stretch`;
