import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import HeroSection from "@/components/case-study/HeroSection";
import SectionBlock from "@/components/case-study/SectionBlock";

const IMPACT_ITEMS = [
  "Mapped the end-to-end submitter and reviewer journey, surfacing critical breakdowns in the operational workflow.",
  "Designed the full review experience — structured status visibility, proactive context, and clear next steps at every stage.",
  "Led a data versioning model so iterative reviews carry forward prior evidence instead of restarting from zero.",
  "Created structured intake patterns that translate complex end-user context into reviewer-legible signals for novel risk categories.",
  "Designed intelligent routing and decision-support tooling for triage and escalation, blending automation with human review.",
];

export default function ComplianceReviewPage() {
  return (
    <CaseStudyPage>
        <HeroSection
          index="02"
          tags={["META", "PLATFORM", "NDA"]}
          title="Risk systems"
          notice="This work is covered by an NDA. Some specifics are abstracted here, happy to go deeper in conversation."
          body={[
            "At Meta, I design tools that help teams identify, triage, and act on integrity risks across platforms. The goal is to make complex risk review workflows faster, more accurate, and scalable for the people protecting billions of users.",
            "Currently, this has spanned designing systems that surface risk signals for researchers, end-to-end triage and escalation workflows for review teams, and leading the design vision for an agentic AI-powered risk review experience.",
          ]}
          metadata={[
            { label: "Role", value: "Lead Designer" },
            { label: "Timeline", value: "2025 – Now" },
          ]}
        />
        <CaseStudySection>
          <div className="surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-10 flex flex-col gap-6">
            <SectionBlock label="Impact" heading="Why this mattered" />
            <ul className="flex flex-col gap-3 list-disc list-inside marker:text-portfolio-rule">
              {IMPACT_ITEMS.map((item, i) => (
                <li key={i} className="text-body text-portfolio-muted">{item}</li>
              ))}
            </ul>
            <hr className="border-portfolio-rule" />
            <p className="text-body text-portfolio-muted">
              Meta has written publicly about this broader initiative —{" "}
              <a
                href="https://about.fb.com/news/2026/03/how-ai-is-ushering-in-the-next-era-of-risk-review-at-meta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-bold uppercase text-portfolio-primary hover:opacity-60 transition-opacity duration-200 inline-flex items-center"
              >
                How AI Is Ushering in the Next Era of Risk Review at Meta
                <svg viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[0.65em] h-[0.65em] shrink-0 ml-0.5">
                  <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" />
                </svg>
              </a>
            </p>
          </div>
        </CaseStudySection>
    </CaseStudyPage>
  );
}
