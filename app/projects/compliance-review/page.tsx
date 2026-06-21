import { Fragment } from "react";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";

const METADATA = [
  { label: "Role",     value: "Product Designer" },
  { label: "Timeline", value: "2025 – Now" },
];

const WHAT_I_OWN = [
  { label: "End-to-end workflow design",    body: "Mapped the end-to-end submitter and reviewer journey, surfacing critical breakdowns in the operational workflow." },
  { label: "Review experience",             body: "Designed the full review experience — structured status visibility, proactive context, and clear next steps at every stage." },
  { label: "Data versioning",               body: "Led a new data architecture that carries forward historical evidence across iterative reviews, eliminating redundant manual work." },
  { label: "Structured intake patterns",    body: "Created structured intake patterns that translate complex end-user context into reviewer-legible signals for novel risk categories." },
  { label: "Routing & decision-support",    body: "Designed intelligent routing and decision-support tooling for triage and escalation, blending automation with human review." },
];

export default function ComplianceReviewPage() {
  return (
    <CaseStudyPage>

      {/* 1 · Editorial hero */}
      <section className="px-4 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="md:pl-[20%] flex flex-col gap-16 md:gap-24">
          <p className="text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary max-w-[760px]">
            At Meta, I design the intelligent, scalable risk review systems that protect billions of users across our platforms.
          </p>

          <div className="grid grid-cols-[160px_1fr] gap-y-2">
            {METADATA.map(({ label, value }) => (
              <Fragment key={label}>
                <p className="text-body text-portfolio-muted">{label}</p>
                <p className="text-body text-portfolio-primary">{value}</p>
              </Fragment>
            ))}
          </div>

          <div className="max-w-[760px] flex flex-col gap-12">
            {/* Context */}
            <div>
              <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted mb-2">Context</p>
              <p className="text-body text-portfolio-muted italic mb-3">
                This work is covered by an NDA — some specifics are abstracted here, happy to go deeper in conversation.
              </p>
              <p className="text-body text-portfolio-muted">
                As part of the risk organization, I lead design for internal systems that surface risk signals for researchers, streamline end-to-end triage and escalation workflows for review teams, and shape the long-term vision for an agentic AI-powered risk review experience.
              </p>
            </div>

            {/* What I own */}
            <div>
              <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted mb-2">Role</p>
              <div className="flex flex-col gap-4">
                {WHAT_I_OWN.map(({ label, body }) => (
                  <p key={label} className="text-body text-portfolio-muted">
                    <span className="font-semibold text-portfolio-primary">{label}: </span>{body}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Further reading */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="md:pl-[20%]">
          <div className="max-w-[760px] flex flex-col gap-2">
            <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted">Further reading</p>
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
        </div>
      </section>

    </CaseStudyPage>
  );
}
