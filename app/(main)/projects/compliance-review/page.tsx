import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import Reveal from "@/components/motion/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";
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
          Below xl the rail is stacked above, so the editorial pt-16/pt-24 stands. */}
      <section className="px-4 md:px-8 pt-16 md:pt-24 xl:pt-[18px] pb-24 md:pb-40">
        {/* Single-column editorial stack — label sits directly above its content.
            max-w-[680px] lives on the stack, not on individual blocks, so every
            element shares one measure and one right edge. Vertical rhythm is a
            12 / 24 / 56 scale: gap-3 label→content and callout→paragraph,
            gap-6 between Role rows, gap-14 between sections. */}
        <div className="flex flex-col gap-14 max-w-[680px]">

          {/* Intro */}
          <p className="text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary">
            At Meta, I design the intelligent, scalable risk review systems that protect billions of users across our platforms.
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
                    This work is covered by an NDA — some specifics are abstracted here, happy to go deeper in conversation.
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
              {/* Two-column from md: a fixed 200px focus-area column puts every
                  description on one common left edge (a 1fr/2fr split would let each
                  row's label width move it). 200px is set by the longest label,
                  "End-to-end workflow design" — 194px at font-medium, so ~6px slack;
                  a longer focus area wraps to two lines rather than shifting the column.
                  font-medium, not semibold: the column break already separates label
                  from body, so it no longer needs inline weight contrast to read — and
                  at semibold the longest label is 199px and would wrap.
                  Below md it stacks — a 200px label column inside a 343px phone column
                  would leave ~110px for the description. */}
              <div className="flex flex-col gap-6">
                {WHAT_I_OWN.map(({ label, body }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 md:grid md:grid-cols-[200px_1fr] md:gap-x-8 md:gap-y-0"
                  >
                    <p className="text-body font-medium text-portfolio-primary">{label}</p>
                    <p className="text-body text-portfolio-muted">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Further reading — link only */}
          <Reveal>
            <ArrowLink
              href="https://about.fb.com/news/2026/03/how-ai-is-ushering-in-the-next-era-of-risk-review-at-meta/"
              external
            >
              Read article
            </ArrowLink>
          </Reveal>

        </div>
      </section>

    </CaseStudyPage>
  );
}
