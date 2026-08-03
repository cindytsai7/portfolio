import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import DarkOutroSection from "@/components/case-study/DarkOutroSection";
import Reveal from "@/components/motion/Reveal";
import { CS_LABEL } from "@/components/case-study/tokens";

const WHAT_I_OWN = [
  { label: "End-to-end workflow design",    body: "Mapped the submitter-to-reviewer journey and exposed where the operational workflow broke down." },
  { label: "Review experience",             body: "Delivered structured status visibility, proactive context, and clear next steps at every stage." },
  { label: "Data versioning",               body: "Built a versioning architecture that preserves historical evidence across reviews and eliminates redundant manual work." },
  { label: "Structured intake patterns",    body: "Translated complex end-user context into reviewer-legible signals for novel risk categories." },
  { label: "Routing & decision-support",    body: "Paired intelligent routing with decision-support tooling to balance automation and human judgment in triage and escalation." },
];

export default function ComplianceReviewPage() {
  return (
    <CaseStudyPage>

      {/* xl:pt-[18px] — from xl the rail sits beside this column and the intro's
          cap-height lines up with the "Cindy Tsai" h1. Aligns CAPS, not box tops:
          the h1 is 36px/1.08 and the intro 2.2vw/1.05, so their half-leading differs.
          The exact value drifts with viewport (19.25px at 1280 → 16.5px at 1636+,
          where the intro's clamp caps at 36px and both lock); 18px splits it so the
          error stays under ~1.5px at any desktop width.
          Below xl the rail is stacked above, so the editorial pt-16/pt-24 stands.
          pb-0 rather than the editorial 24/40: this is the page's last section, and
          `app/(main)/projects/layout.tsx` already follows it with the Footer on a
          deliberate pt-4. That 16px is the whole card-to-footer gap and matches the
          landing page's own gap-4 between its last card and the footer. Any pb here
          stacks on top of it — the editorial pb-40 was making it 176px. */}
      <section className="px-4 md:px-8 pt-16 md:pt-24 xl:pt-[18px] pb-0">
        {/* One full-width boundary — no inner max-width. Every block (prose, the
            outcome card, and the Footer card below the section) resolves to the
            same content box: panel width minus the section's px-8.
            Vertical rhythm is 12 / 48 / 64: gap-3 label→content and callout→paragraph,
            py-6 (24 top + 24 bottom = 48) between Role rows, gap-16 between sections.
            gap-16 rather than the old gap-14 (56px) — Role rows now sit 48px apart, so
            56px between sections was too close to read as a bigger break. Equivalent to
            `space-y-16`; gap is the flex-native form and avoids margin collapse. */}
        <div className="flex flex-col gap-16">

          {/* Intro */}
          <p className="text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary">
            Agentic AI &amp; Triage Workflows
          </p>

          {/* Context */}
          <Reveal>
            <div className="flex flex-col gap-3">
              <p className={CS_LABEL}>Context</p>
              {/* gap-3, not gap-4: the callout should read as attached to the
                  paragraph it qualifies rather than floating between blocks. */}
              <div className="flex flex-col gap-3">
                {/* NDA callout — real 1px border, not .surface-card's inset box-shadow.
                    The inset shadow paints beneath child content, so it reads as a fill
                    edge rather than a hairline; border-portfolio-stroke is the same
                    #E6E5E1 value drawn as an actual stroke. Spans the full 680px column. */}
                <div className="rounded-card border border-portfolio-stroke bg-portfolio-surface/50 px-5 py-4">
                  <p className="text-body text-portfolio-muted">
                    This work is covered by an NDA — some specifics are abstracted here.
                  </p>
                </div>
                <p className="text-body text-portfolio-muted">
                  As part of the risk organization, I lead design for internal systems that surface risk signals for researchers, streamline end-to-end triage and escalation workflows for review teams, and shape the long-term vision for an agentic AI-powered risk review experience.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Role */}
          <Reveal>
            <div className="flex flex-col gap-3">
              <p className={CS_LABEL}>Role</p>
              {/* Fixed 200px label column, NOT a fraction. `1fr_2fr` scales the label
                  column with the container (225px at 1280, ~330px at 1600), so short
                  labels like "Data versioning" (104px) left a growing dead gap before
                  the description. A fixed column keeps that gutter constant at every
                  width while `1fr` still carries the description to the right edge.
                  200px is set by the longest label, "End-to-end workflow design" —
                  194px at font-medium, so ~6px slack; a longer label wraps to two
                  lines rather than shifting the column. Bump to 220px if one is added.
                  font-medium, not semibold: the column break already separates label
                  from body, so it no longer needs inline weight contrast to read.
                  Rows are spaced by the parent's gap-6 (= the spec's gap-y-6); keeping
                  one grid per item is what lets the pair stay tight (gap-1) when it
                  stacks below md, which a single shared grid could not do. */}
              {/* Rules come from py-6 + border-b on each row rather than a gap on the
                  container: a gap plus row padding would compound, and padding is what
                  centres the hairline in the space between two rows. first:pt-0 keeps
                  the list flush with the label above it. */}
              <div className="flex flex-col">
                {WHAT_I_OWN.map(({ label, body }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 py-6 first:pt-0 border-b border-black/5 md:grid md:grid-cols-[200px_1fr] md:gap-x-8 md:gap-y-0 md:items-baseline"
                  >
                    <p className="text-body font-medium text-portfolio-primary">{label}</p>
                    <p className="text-body text-portfolio-muted">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Strategic outcome — same overcast card as edge-admin-hub / edge-sidebar.
              Values stay terse ("37%", not "37% reduction") because they render at
              text-stat (up to 52px); the noun lives in the label, matching the other
              two cards. Metrics-only, so no body paragraph.
              padding mirrors FooterCard's px-6 py-8 md:px-10 md:py-12 exactly — the
              component default is p-8 md:p-12, which the other two case studies keep.
              The CTA is a `cta` prop so it renders inside the card as an action bar
              rather than floating between the card and the footer. */}
          <Reveal>
            <DarkOutroSection
              variant="overcast"
              label="Strategic outcome"
              padding="px-6 py-8 md:px-10 md:py-12"
              metrics={[
                { value: "37%", label: "Reduction in manual data entry, driving operational efficiency" },
                { value: "26%", label: "Reduction in audit failure rates through automated checks" },
              ]}
              cta={{
                href: "https://about.fb.com/news/2026/03/how-ai-is-ushering-in-the-next-era-of-risk-review-at-meta/",
                label: "Read Meta Blog Article",
              }}
            />
          </Reveal>

        </div>
      </section>

    </CaseStudyPage>
  );
}
