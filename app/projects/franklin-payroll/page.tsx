import { Fragment } from "react";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import SectionBlock from "@/components/case-study/SectionBlock";
import Reveal from "@/components/motion/Reveal";

const IMGS = {
  batchDistribution:   "/projects/franklin-payroll/batch-distribution.png",
  batchEdge1:          "/projects/franklin-payroll/batch-distribution-edge-1.png",
  batchEdge2:          "/projects/franklin-payroll/batch-distribution-edge-2.png",
  payrollConfirmation: "/projects/franklin-payroll/payroll-confirmation.png",
  navigationLeft:      "/projects/franklin-payroll/navigation-left.png",
  navigationRight:     "/projects/franklin-payroll/navigation-right.png",
  onboardingMacro:     "/projects/franklin-payroll/image_e85e2e.png",
  onboardingChecklist: "/projects/franklin-payroll/image_e85df1.png",
};

const SHOWCASE_CANVAS = "w-full rounded-card surface-card bg-portfolio-surface/50 flex items-center justify-center px-32 py-32";
const SHOWCASE_IMG    = "w-full max-w-[88%] h-auto object-contain";
const SHOWCASE_CAPTION = "flex flex-col gap-[6px] max-w-[560px]";

const METADATA = [
  { label: "Role",     value: "Lead Designer" },
  { label: "Timeline", value: "2022" },
  { label: "Status",   value: "Shipped" },
];

const OWNERSHIP = [
  { label: "0-to-1 Product Launch",      body: "Spearheaded the end-to-end design lifecycle as the sole Product Designer, taking the crypto-native platform from a completely blank canvas to a successful market launch in five months." },
  { label: "Workflow Architecture",       body: "Engineered intuitive web application experiences designed to seamlessly bridge the gap between decentralized ledger technology and legacy corporate financial workflows." },
  { label: "End-to-End System Ownership", body: "Defined and mapped complex user flows for mission-critical corporate financial tools, specifically targeting automated business payroll, compliance taxes, and bookkeeping accounting." },
  { label: "Rapid Validation",            body: "Established a fast-paced feedback loop by executing rapid, automated usability testing to validate design iterations and accelerate time-to-market." },
];

const SHOWCASES = [
  {
    img:     IMGS.batchDistribution,
    alt:     "Employee bonus batch distribution interface",
    heading: "Batch distribution",
    body:    "This interface provides a clear high-density view of distribution status, enabling administrators to quickly identify 'Pending' or 'Draft' items while ensuring that critical 'Approve all' workflows remain intuitive and secure.",
  },
  {
    img:     IMGS.payrollConfirmation,
    alt:     "Recurring payroll run confirmation modal",
    heading: "Payroll confirmation",
    body:    "This confirmation modal provides a final, high-fidelity safety net, surfacing critical 'dual-currency' breakdowns to administrators to identify vulnerability before committing on-chain funds.",
  },
];

export default function FranklinPayrollPage() {
  return (
    <CaseStudyPage>

      {/* 1 · Editorial hero */}
      <section className="px-4 md:px-8 pt-16 md:pt-24 pb-24 md:pb-40">
        <div className="flex flex-col gap-16 md:gap-24">

          {/* Label left · display text center-right */}
          <div className="grid grid-cols-1 md:grid-cols-[20%_1fr] items-start gap-4 md:gap-8">
            <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted md:pt-1">Web 3 Payroll</p>
            <p className="text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary max-w-[760px]">
              Taking Franklin from initial concept to a $2.9M seed launch: Designing the enterprise financial suite that transforms complex blockchain data into compliant corporate payroll.
            </p>
          </div>

          {/* Metadata + ownership — aligned to display text column */}
          <div className="md:pl-[20%] flex flex-col gap-16 md:gap-24">
            <div className="grid grid-cols-[160px_1fr] gap-y-2">
              {METADATA.map(({ label, value }) => (
                <Fragment key={label}>
                  <p className="text-body text-portfolio-muted">{label}</p>
                  <p className="text-body text-portfolio-primary">{value}</p>
                </Fragment>
              ))}
            </div>

            <div className="max-w-[760px]">
              <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted mb-2">The Challenge</p>
              <p className="text-body text-portfolio-muted mb-12">To design an enterprise payroll platform that abstracts the complex friction of smart contracts, gas fees, and wallet connections into an intuitive interface for non-technical finance and HR admins.</p>

              <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted mb-2">During my time here, I owned</p>
              <div className="flex flex-col gap-4">
                {OWNERSHIP.map(({ label, body }) => (
                  <p key={label} className="text-body text-portfolio-muted">
                    <span className="font-semibold text-portfolio-primary">{label}: </span>{body}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2 · Solutions */}
      <CaseStudySection className="flex flex-col gap-[80px] mt-12">
        <div className="flex flex-col gap-6">
          <Reveal>
            <SectionBlock label="Solutions" heading="The operational framework" />
          </Reveal>

          {/* Onboarding bento */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Col 1: V1 System Framework — pure media canvas */}
              <div className="flex flex-col gap-4">
                <div className="surface-card bg-portfolio-surface/50 rounded-card overflow-hidden flex flex-col min-h-[580px]">
                  <div className="p-4 shrink-0">
                    <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-portfolio-muted bg-portfolio-surface px-2 py-0.5 rounded-[6px]">
                      V1 System Framework
                    </span>
                  </div>
                  <div className="flex-1 min-h-0 flex items-center justify-center px-6 pb-6">
                    <img
                      src={IMGS.onboardingMacro}
                      alt="Franklin onboarding dashboard system framework"
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                </div>
                <div className={SHOWCASE_CAPTION}>
                  <p className="text-body font-semibold text-portfolio-primary">Gated dashboard architecture</p>
                  <p className="text-body text-portfolio-muted">Mapping out how the onboarding checklist integrates with the core web application ecosystem, safely gating sensitive financial modules until smart contract verification completes.</p>
                </div>
              </div>

              {/* Col 2: V2 Component Iteration — centered canvas */}
              <div className="flex flex-col gap-4">
                <div className="surface-card bg-portfolio-surface/50 rounded-card p-6 flex flex-col gap-4 overflow-hidden flex-1 min-h-[580px]">
                  <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-portfolio-muted bg-portfolio-surface px-2 py-0.5 rounded-[6px] self-start">
                    V2 Component Iteration
                  </span>
                  <div className="flex flex-1 items-center justify-center">
                    <img
                      src={IMGS.onboardingChecklist}
                      alt="Onboarding checklist component close-up"
                      className="w-full max-w-[380px] xl:max-w-[420px] h-auto object-contain"
                    />
                  </div>
                </div>
                <div className={SHOWCASE_CAPTION}>
                  <p className="text-body font-semibold text-portfolio-primary">Optimized checklist</p>
                  <p className="text-body text-portfolio-muted">Iterating on the micro-interface to convert protocol mechanics into digestible actions, integrating clean validation states and real-time telemetry.</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Interactive prototype — Revenue Slider */}
        <Reveal image>
          <div className="flex flex-col gap-6">
            <div className="rounded-card overflow-hidden w-full">
              <iframe
                src="/projects/franklin-payroll/revenue-slider.html"
                title="Interactive Treasury Tracking Prototype"
                className="w-full h-[500px] block border-0 overflow-hidden"
                scrolling="no"
              />
            </div>
            <div className={SHOWCASE_CAPTION}>
              <p className="text-body font-semibold text-portfolio-primary">Treasury tracking (Interactive)</p>
              <p className="text-body text-portfolio-muted">To support quick business decisions, this view elevates core treasury indicators alongside real-time time-series charts, allowing enterprise admins to instantly cross-reference daily transactions with macro portfolio growth.</p>
            </div>
          </div>
        </Reveal>

        {/* Batch distribution */}
        <Reveal image>
          <div className="flex flex-col gap-4">
            <div className={SHOWCASE_CANVAS}>
              <img src={IMGS.batchDistribution} alt="Employee bonus batch distribution interface" className={SHOWCASE_IMG} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="surface-card bg-portfolio-surface/50 rounded-card overflow-hidden flex flex-col min-h-[360px]">
                <div className="p-4 shrink-0">
                  <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-portfolio-muted bg-portfolio-surface px-2 py-0.5 rounded-[6px]">
                    Edge case
                  </span>
                </div>
                <div className="flex-1 relative">
                  <img src={IMGS.batchEdge1} alt="Batch distribution edge case" className="absolute bottom-0 right-0 w-[85%] h-auto" />
                </div>
              </div>
              <div className="surface-card bg-portfolio-surface/50 rounded-card overflow-hidden flex flex-col min-h-[360px]">
                <div className="p-4 shrink-0">
                  <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-portfolio-muted bg-portfolio-surface px-2 py-0.5 rounded-[6px]">
                    Edge case
                  </span>
                </div>
                <div className="flex-1 relative">
                  <img src={IMGS.batchEdge2} alt="Batch distribution edge case flagged" className="absolute bottom-0 right-0 w-[85%] h-auto" />
                </div>
              </div>
            </div>
            <div className={SHOWCASE_CAPTION}>
              <p className="text-body font-semibold text-portfolio-primary">Batch distribution</p>
              <p className="text-body text-portfolio-muted">This interface provides a clear high-density view of distribution status, enabling administrators to quickly identify 'Pending' or 'Draft' items while ensuring that critical 'Approve all' workflows remain intuitive and secure.</p>
            </div>
          </div>
        </Reveal>

        {/* Payroll confirmation */}
        <Reveal image>
          <div className="flex flex-col gap-6">
            <div className={SHOWCASE_CANVAS}>
              <img src={IMGS.payrollConfirmation} alt="Recurring payroll run confirmation modal" className={SHOWCASE_IMG} />
            </div>
            <div className={SHOWCASE_CAPTION}>
              <p className="text-body font-semibold text-portfolio-primary">Payroll confirmation</p>
              <p className="text-body text-portfolio-muted">This confirmation modal provides a final, high-fidelity safety net, surfacing critical 'dual-currency' breakdowns to administrators to identify vulnerability before committing on-chain funds.</p>
            </div>
          </div>
        </Reveal>

        {/* Navigation */}
        <Reveal image>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <img src={IMGS.navigationLeft} alt="Original Franklin navigation" className="w-full rounded-card object-cover" />
              <img src={IMGS.navigationRight} alt="Revised client-facing navigation" className="w-full rounded-card object-cover" />
            </div>
            <div className={SHOWCASE_CAPTION}>
              <p className="text-body font-semibold text-portfolio-primary">Navigation</p>
              <p className="text-body text-portfolio-muted">
                The early navigation (left) relied on a flat, top-down structure. Through research and user testing, we moved to the right-hand design (a better support model) which shows more, allowing users to toggle between administrator and personal controls.
              </p>
            </div>
          </div>
        </Reveal>
      </CaseStudySection>

      {/* 3 · Reflections */}
      <CaseStudySection className="mt-16">
        <Reveal>
          <div className="surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-12 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
                Reflections
              </p>
              <h2 className="text-h1 font-bold leading-tight tracking-tight text-portfolio-primary">
                Bridging founder vision and user needs
              </h2>
            </div>
            <p className="text-body text-portfolio-muted">
              As Franklin&apos;s founding designer, I owned the brand, visual and product architecture, moving at startup speed without sacrificing design integrity. My role evolved beyond execution to influence product strategy and business decision-making directly. I led technically and advocated for the user, balanced competing requirements, and honest calm alignment — delivering not just usable interfaces, but a coherent product strategy.
            </p>
          </div>
        </Reveal>
      </CaseStudySection>

    </CaseStudyPage>
  );
}
