import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import Reveal from "@/components/motion/Reveal";
import { CS_LABEL } from "@/components/case-study/tokens";

// Single column below md — at 375 the 1fr_3fr split plus a 64px gap left a 70px
// label column and a 209px body column.
const GRID  = "grid grid-cols-1 gap-y-8 md:grid-cols-[1fr_3fr] md:gap-x-16 md:gap-y-12 items-start";
const LABEL = CS_LABEL;

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

      <section className="px-4 md:px-8 pt-16 md:pt-24 pb-24 md:pb-40">
        <div className={GRID}>

          {/* Row — Intro. Spacer only exists to occupy the label column at md+ */}
          <div className="hidden md:block" />
          <p className="max-w-[560px] text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary">
            At Meta, I design the intelligent, scalable risk review systems that protect billions of users across our platforms.
          </p>

          {/* Row — Context */}
          <p className={LABEL}>Context</p>
          <Reveal>
            <div className="flex flex-col gap-3 max-w-[560px]">
              <p className="text-body text-portfolio-muted italic">
                This work is covered by an NDA — some specifics are abstracted here, happy to go deeper in conversation.
              </p>
              <p className="text-body text-portfolio-muted">
                As part of the risk organization, I lead design for internal systems that surface risk signals for researchers, streamline end-to-end triage and escalation workflows for review teams, and shape the long-term vision for an agentic AI-powered risk review experience.
              </p>
            </div>
          </Reveal>

          {/* Row — Role */}
          <p className={LABEL}>Role</p>
          <Reveal>
            <div className="flex flex-col gap-4 max-w-[560px]">
              {WHAT_I_OWN.map(({ label, body }) => (
                <p key={label} className="text-body text-portfolio-muted">
                  <span className="font-semibold text-portfolio-primary">{label}: </span>{body}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Row — Further reading */}
          <p className={LABEL}>Further reading</p>
          <Reveal>
            <div className="flex flex-col gap-2 max-w-[560px]">
              <p className="text-body text-portfolio-muted">
                Meta has written publicly about this broader initiative.
              </p>
              <a
                href="https://about.fb.com/news/2026/03/how-ai-is-ushering-in-the-next-era-of-risk-review-at-meta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-bold uppercase text-portfolio-primary hover:opacity-60 transition-opacity duration-200 inline-flex items-center gap-0.5"
              >
                Read article
                <svg viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[0.65em] h-[0.65em] shrink-0">
                  <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" />
                </svg>
              </a>
            </div>
          </Reveal>

        </div>
      </section>

    </CaseStudyPage>
  );
}
