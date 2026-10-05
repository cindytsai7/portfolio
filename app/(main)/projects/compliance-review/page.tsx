import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import DarkOutroSection from "@/components/case-study/DarkOutroSection";
import Reveal from "@/components/motion/Reveal";
import { CS_LABEL } from "@/components/case-study/tokens";

const WHAT_I_OWN = [
  { label: "End-to-end workflow design",    body: "Mapped the submitter-to-reviewer journey and exposed where the operational workflow broke down." },
  { label: "Data versioning",               body: "Built a versioning architecture that preserves historical evidence across reviews and eliminates redundant manual work." },
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
            gap-12 (48px) is one uniform value across every top-level section here
            (Intro, Context, the Scope-of-work/Strategic-outcome row) — no mixed
            gap sizes. Equivalent to `space-y-12`; gap is the flex-native form and
            avoids margin collapse. */}
        <div className="flex flex-col gap-12">

          {/* Intro */}
          <p className="text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary">
            Agentic AI &amp; Triage Workflows
          </p>

          {/* Context */}
          <Reveal>
            <div className="flex flex-col gap-3">
              <p className={CS_LABEL}>Context</p>
              <p className="text-body text-portfolio-muted">
                As part of the risk organization, I lead design for internal systems that surface risk signals for researchers, streamline end-to-end triage and escalation workflows for review teams, and shape the long-term vision for an agentic AI-powered risk review experience. This work is covered by an NDA — some specifics are abstracted here.
              </p>
            </div>
          </Reveal>

          {/* Scope of work + Strategic outcome — asymmetric row, not a 50/50 grid.
              3fr/2fr (60/40) gives the work list a comfortable reading line length
              while the outcome card stays compact; items-stretch matches both
              cards' heights (DarkOutroSection's cta carries its own mt-auto so it
              still anchors to the bottom of the taller, stretched card). */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 items-stretch">

              {/* Scope of work — card-wrapped to balance the outcome card beside it.
                  Rows are a single stacked column (label line, body line below) now
                  that the card is ~60% width rather than the full 760px column the
                  old [200px_1fr] per-row grid was sized for. */}
              <div className="surface-card bg-portfolio-surface/50 rounded-card p-8 flex flex-col gap-6">
                <p className={CS_LABEL}>Scope of work</p>
                <div className="flex flex-col">
                  {WHAT_I_OWN.map(({ label, body }) => (
                    <div key={label} className="flex flex-col gap-1 py-6 first:pt-0 border-b border-black/5 last:border-b-0">
                      <p className="text-body font-medium text-portfolio-primary">{label}</p>
                      <p className="text-body text-portfolio-muted">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic outcome — same overcast card as edge-admin-hub / edge-sidebar,
                  but stackedMetrics: side-by-side 37%/26% would squeeze both the stat
                  and its (long) label in this narrow a column. Values stay terse
                  ("37%", not "37% reduction") since they render at text-stat (up to
                  52px); the noun lives in the label. The CTA is a `cta` prop so it
                  renders inside the card, anchored at the bottom via justify-end.
                  padding="p-8" overrides the component's default p-8 md:p-12 bump
                  so this card's padding matches Scope-of-work's constant p-8. */}
              <DarkOutroSection
                variant="overcast"
                label="Strategic outcome"
                stackedMetrics
                padding="p-8"
                metrics={[
                  { value: "37%", label: "Reduction in manual data entry, driving operational efficiency" },
                  { value: "26%", label: "Reduction in audit failure rates through automated checks" },
                ]}
                cta={{
                  href: "https://about.fb.com/news/2026/03/how-ai-is-ushering-in-the-next-era-of-risk-review-at-meta/",
                  label: "Read Meta Blog Article",
                }}
              />

            </div>
          </Reveal>

        </div>
      </section>

    </CaseStudyPage>
  );
}
