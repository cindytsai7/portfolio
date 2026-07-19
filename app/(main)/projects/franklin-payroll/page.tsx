import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import Reveal from "@/components/motion/Reveal";

const IMGS = {
  hero:                "/projects/franklin-payroll/franklin-hero.png",
  batchDistribution:   "/projects/franklin-payroll/batch-distribution.png",
  batchEdge1:          "/projects/franklin-payroll/batch-distribution-edge-1.png",
  batchEdge2:          "/projects/franklin-payroll/batch-distribution-edge-2.png",
  payrollConfirmation: "/projects/franklin-payroll/payroll-confirmation.png",
  onboardingMacro:     "/projects/franklin-payroll/image_e85e2e.png",
  onboardingChecklist: "/projects/franklin-payroll/image_e85df1.png",
};

// Mirrors bento grid proportions so text aligns with V2 card content
const INTRO_GRID = "grid grid-cols-2 gap-x-6 items-start";

const PILL    = "font-mono text-[11px] tracking-[0.05em] uppercase text-portfolio-muted px-2 py-0.5 rounded-[6px]";
const CANVAS  = "w-full rounded-card surface-card bg-portfolio-surface/50 flex items-center justify-center px-20 py-24";
const CAPTION      = "flex flex-col gap-[6px]";
const CAPTION_WIDE = "flex flex-col gap-[6px] max-w-[50%]";

const METADATA = ["Lead Designer", "2022", "Shipped"];

const IMPACT = [
  { value: "$2.9M", label: "Seed raised at launch" },
  { value: "5mo",   label: "Blank canvas to market" },
];

const OWNERSHIP = [
  { label: "0-to-1 Product Launch",       body: "Spearheaded the end-to-end design lifecycle as the sole Product Designer, taking the crypto-native platform from a completely blank canvas to a successful market launch in five months." },
  { label: "Workflow Architecture",        body: "Engineered intuitive web application experiences designed to seamlessly bridge the gap between decentralized ledger technology and legacy corporate financial workflows." },
  { label: "End-to-End System Ownership", body: "Defined and mapped complex user flows for mission-critical corporate financial tools, specifically targeting automated business payroll, compliance taxes, and bookkeeping accounting." },
  { label: "Rapid Validation",            body: "Established a fast-paced feedback loop by executing rapid, automated usability testing to validate design iterations and accelerate time-to-market." },
];

export default function FranklinPayrollPage() {
  return (
    <CaseStudyPage>

      {/* Hero image */}
      <section className="px-4 md:px-8 pt-16">
        <div className="relative [clip-path:inset(0_round_16px)]">
          <img src={IMGS.hero} alt="Franklin payroll hero" className="w-full block" />
          <div className="absolute inset-0 rounded-card shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none" />
        </div>
      </section>

      {/* ── Asymmetric intro: metadata left / description + bullets right ── */}
      <section className="px-4 md:px-8 pt-8 md:pt-12 pb-[48px]">
        <div className={INTRO_GRID}>
          <div className="flex flex-col gap-1">
            {METADATA.map((value) => (
              <p key={value} className="text-body text-portfolio-muted">{value}</p>
            ))}
          </div>
          <div className="flex flex-col gap-8 pl-6">
            <p className="text-body text-portfolio-muted">
              I took Franklin from initial concept to a $2.9M seed launch: Designing the enterprise financial suite that transforms complex blockchain data into compliant corporate payroll. I designed an enterprise payroll platform that abstracts the complex friction of smart contracts, gas fees, and wallet connections into an intuitive interface for non-technical finance and HR admins.
            </p>
            <div className="flex flex-col gap-4">
              {OWNERSHIP.map(({ label, body }) => (
                <p key={label} className="text-body text-portfolio-muted">
                  <span className="font-semibold text-portfolio-primary">{label}: </span>{body}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-width visual canvas ── */}
      <section className="px-4 md:px-8 pt-20 pb-0">
        <div className="flex flex-col gap-20">

          {/* Bento */}
          <Reveal>
            <div className="grid grid-cols-2 gap-6 items-stretch">

              <div className="flex flex-col gap-4">
                <div className="surface-card bg-portfolio-surface/50 rounded-card overflow-hidden flex flex-col min-h-[520px]">
                  <div className="p-4 shrink-0">
                    <span className={PILL}>V1 System Framework</span>
                  </div>
                  <div className="flex-1 min-h-0 flex items-center justify-center px-6 pb-6">
                    <img src={IMGS.onboardingMacro} alt="V1 system framework" className="w-full h-auto object-contain block" />
                  </div>
                </div>
                <div className={CAPTION}>
                  <p className="text-body font-semibold text-portfolio-primary">Gated dashboard architecture</p>
                  <p className="text-body text-portfolio-muted">Mapping out how the onboarding checklist integrates with the core web application ecosystem, safely gating sensitive financial modules until smart contract verification completes.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="surface-card bg-portfolio-surface/50 rounded-card p-6 flex flex-col gap-4 overflow-hidden min-h-[520px]">
                  <span className={`${PILL} self-start`}>V2 Component Iteration</span>
                  <div className="flex flex-1 items-center justify-center">
                    <img src={IMGS.onboardingChecklist} alt="Onboarding checklist component" className="w-full max-w-[380px] xl:max-w-[420px] h-auto object-contain" />
                  </div>
                </div>
                <div className={CAPTION}>
                  <p className="text-body font-semibold text-portfolio-primary">Optimized checklist</p>
                  <p className="text-body text-portfolio-muted">Iterating on the micro-interface to convert protocol mechanics into digestible actions, integrating clean validation states and real-time telemetry.</p>
                </div>
              </div>

            </div>
          </Reveal>

          {/* Interactive prototype */}
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
              <div className={CAPTION_WIDE}>
                <p className="text-body font-semibold text-portfolio-primary">Treasury tracking (Interactive)</p>
                <p className="text-body text-portfolio-muted">To support quick business decisions, this view elevates core treasury indicators alongside real-time time-series charts, allowing enterprise admins to instantly cross-reference daily transactions with macro portfolio growth.</p>
              </div>
            </div>
          </Reveal>

          {/* Batch distribution */}
          <Reveal image>
            <div className="flex flex-col gap-4">
              <div className="w-full rounded-card surface-card bg-portfolio-surface/50 flex flex-col">
                <div className="p-4 shrink-0">
                  <span className={PILL}>Bulk disbursements</span>
                </div>
                <div className="flex items-center justify-center px-20 py-16">
                  <img src={IMGS.batchDistribution} alt="Employee bonus batch distribution interface" className="w-full max-w-[88%] h-auto object-contain" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="surface-card bg-portfolio-surface/50 rounded-card overflow-hidden flex flex-col min-h-[500px] relative">
                  <div className="p-4 shrink-0"><span className={PILL}>Edge case</span></div>
                  <img src={IMGS.batchEdge1} alt="Batch distribution edge case" className="mt-auto w-full h-auto" />
                  <div className="absolute inset-0 rounded-card shadow-[inset_0_0_0_1px_#E6E5E1] pointer-events-none" />
                </div>
                <div className="surface-card bg-portfolio-surface/50 rounded-card overflow-hidden flex flex-col min-h-[500px] relative">
                  <div className="p-4 shrink-0"><span className={PILL}>Edge case</span></div>
                  <img src={IMGS.batchEdge2} alt="Batch distribution edge case flagged" className="mt-auto w-full h-auto" />
                  <div className="absolute inset-0 rounded-card shadow-[inset_0_0_0_1px_#E6E5E1] pointer-events-none" />
                </div>
              </div>
              <div className={CAPTION_WIDE}>
                <p className="text-body font-semibold text-portfolio-primary">Batch distribution</p>
                <p className="text-body text-portfolio-muted">This interface provides a clear high-density view of distribution status, enabling administrators to quickly identify 'Pending' or 'Draft' items while ensuring that critical 'Approve all' workflows remain intuitive and secure.</p>
              </div>
            </div>
          </Reveal>

          {/* Payroll confirmation */}
          <Reveal image>
            <div className="flex flex-col gap-6">
              <div className={CANVAS}>
                <img src={IMGS.payrollConfirmation} alt="Recurring payroll run confirmation modal" className="w-full max-w-[88%] h-auto object-contain" />
              </div>
              <div className={CAPTION_WIDE}>
                <p className="text-body font-semibold text-portfolio-primary">Payroll confirmation</p>
                <p className="text-body text-portfolio-muted">This confirmation modal provides a final, high-fidelity safety net, surfacing critical 'dual-currency' breakdowns to administrators to identify vulnerability before committing on-chain funds.</p>
              </div>
            </div>
          </Reveal>

          {/* Reflections */}
          <Reveal>
            <div className="surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-12">
              <div className="grid grid-cols-[1fr_1px_1fr] gap-x-10 items-start">

                {/* Text */}
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-portfolio-muted">Impact</span>
                  <h2 className="text-h2 font-bold text-portfolio-primary">
                    Bridging founder vision and user needs
                  </h2>
                  <p className="text-body text-portfolio-muted max-w-[560px]">
                    I was brought in to redesign and architect Franklin&apos;s product ecosystem from the ground up. Moving at startup speed, I owned the visual and brand strategy, translating highly technical protocol logic into clear digital experiences. My ownership went beyond execution—I collaborated directly on business strategy, balanced engineering constraints, and brought calm, system-level alignment to the team to deliver a coherent enterprise platform.
                  </p>
                </div>

                {/* Vertical divider */}
                <div className="bg-portfolio-rule self-stretch" />

                {/* Stats */}
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                    {IMPACT.map(({ value, label }) => (
                      <div key={label} className="flex flex-col gap-1">
                        <span className="text-[32px] font-bold leading-none tracking-[-0.03em] text-portfolio-primary">{value}</span>
                        <span className="text-body text-portfolio-muted">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>

    </CaseStudyPage>
  );
}
