import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import SectionBlock from "@/components/case-study/SectionBlock";
import FullWidthShowcase from "@/components/case-study/FullWidthShowcase";
import Reveal from "@/components/motion/Reveal";
import ScrollRevealQuote from "@/components/case-study/ScrollRevealQuote";
import MetricCountUp from "@/components/case-study/MetricCountUp";

const IMGS = {
  batchDistribution: "/projects/franklin-payroll/batch-distribution.png",
  payrollConfirmation: "/projects/franklin-payroll/payroll-confirmation.png",
  navigationLeft: "/projects/franklin-payroll/navigation-left.png",
  navigationRight: "/projects/franklin-payroll/navigation-right.png",
  dashboard: "/projects/franklin-payroll/dashboard.png",
};

const TAGS = ["START UP", "WEB3", "PAYROLL"];
const METADATA = [
  { label: "Role", value: "Lead Designer" },
  { label: "Timeline", value: "2022" },
  { label: "Status", value: "Shipped" },
];

export default function FranklinPayrollPage() {
  return (
    <main className="bg-portfolio-background min-h-screen">
      <CaseStudyNav />

      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 pb-4 md:pb-8">

        {/* 1 · Hero */}
        <section className="px-4 md:px-8 pt-4 md:pt-8">
          <div className="bg-portfolio-surface rounded-[20px] p-8 md:p-12 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-start gap-12">

              {/* Left: tags + title + body + metadata */}
              <div className="flex flex-col gap-6 flex-1 max-w-[720px]">
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <span key={tag} className="inline-flex items-center h-[26px] border border-[#c7c7c2] rounded-full px-3 text-caption font-mono text-portfolio-muted uppercase tracking-wider whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-h1 font-bold leading-tight tracking-tight text-portfolio-primary">
                    From 0–1, a Web3 payroll suite
                  </h1>
                  <div className="flex flex-col gap-3">
                    <p className="text-body text-portfolio-muted">The concept of Franklin is straightforward: increase Web3 adoption by integrating crypto into payments.</p>
                    <p className="text-body text-portfolio-muted">As the sole designer for this start up, I designed a full payroll suite for crypto-native startups, and worked end-to-end with the founding team to ship a product used in production.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-8">
                  {METADATA.map((item, i) => (
                    <div key={item.label} className="flex flex-row items-stretch gap-8">
                      {i > 0 && <div className="w-px bg-[#c7c7c2] self-stretch" />}
                      <div className="flex flex-col gap-1">
                        <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">{item.label}</p>
                        <p className="text-body font-medium text-portfolio-primary">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block w-px bg-[#c7c7c2] self-stretch shrink-0" />

              {/* Right: impact counter — offset to align with title */}
              <div className="flex-1 pt-[50px]">
                <MetricCountUp
                  target={2900000}
                  caption="A strategic soft launch validated the product market fit, driving investor interest to close the seed round."
                />
              </div>

            </div>
          </div>
        </section>

        {/* 2 · Business opportunity */}
        <CaseStudySection>
          <Reveal>
            <div className="bg-portfolio-primary rounded-[20px] px-8 md:px-12 py-10 md:py-12 flex flex-col gap-4">
              <p className="text-caption font-mono uppercase tracking-widest text-white/50">
                Business Opportunity
              </p>
              <h2 className="text-h1 font-bold leading-tight tracking-tight text-white">
                Web3 companies lack out-of-the-box financial tools
              </h2>
              <p className="text-body text-white/60">
                The market needs crypto-native solutions for essential business processes that traditional systems simply can&apos;t handle.
              </p>
            </div>
          </Reveal>
        </CaseStudySection>

        {/* 3 · Goal / challenge quote */}
        <ScrollRevealQuote text="Our goal with Franklin was to build a crypto-native back-office suite that made managing complex financial operations feel seamless and intuitive. The challenge was bridging the gap between volatile Web3 technology and the rigid, high-stakes requirements of tax compliance." />

        {/* 4–7 · Solutions */}
        <CaseStudySection className="flex flex-col gap-[80px]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <SectionBlock label="Solutions" heading="The operational framework" />
            </Reveal>
            <Reveal image>
              <FullWidthShowcase
                image={IMGS.batchDistribution}
                alt="Employee bonus batch distribution interface"
                rounded
                heading="Batch distribution"
                body="This interface provides a clear high-density view of distribution status, enabling administrators to quickly identify 'Pending' or 'Draft' items while ensuring that critical 'Approve all' workflows remain intuitive and secure."
              />
            </Reveal>
          </div>

          <Reveal image>
            <FullWidthShowcase
              image={IMGS.payrollConfirmation}
              alt="Recurring payroll run confirmation modal"
              rounded
              heading="Payroll confirmation"
              body="This confirmation modal provides a final, high-fidelity safety net, surfacing critical 'dual-currency' breakdowns to administrators to identify vulnerability before committing on-chain funds."
            />
          </Reveal>

          <Reveal image>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <img src={IMGS.navigationLeft} alt="Original Franklin navigation" className="w-full rounded-[20px] object-cover" />
                <img src={IMGS.navigationRight} alt="Revised client-facing navigation" className="w-full rounded-[20px] object-cover" />
              </div>
              <div className="flex flex-col gap-2 w-3/4">
                <p className="text-body font-semibold text-portfolio-primary leading-tight">Navigation</p>
                <p className="text-body text-portfolio-muted leading-snug">
                  The early navigation (left) relied on a flat, top-down structure. Through research and user testing, we moved to the right-hand design (a better support model) which shows more, allowing users to toggle between administrator and personal controls.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal image>
            <FullWidthShowcase
              image={IMGS.dashboard}
              alt="Franklin payroll dashboard"
              rounded
              heading="Dashboard"
              body="The dashboard surface offers clear summaries and operational accounting requirements, providing clear real-time visibility into outstanding debt and payment progress to help teams make more informed financial decisions."
            />
          </Reveal>
        </CaseStudySection>

        {/* 8 · Reflections */}
        <CaseStudySection>
          <Reveal>
            <div className="bg-portfolio-surface rounded-[20px] p-8 md:p-12 flex flex-col gap-6">
              <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
                Reflections
              </p>
              <h2 className="text-h1 font-bold leading-tight tracking-tight text-portfolio-primary">
                Bridging founder vision and user needs
              </h2>
              <p className="text-body text-portfolio-muted">
                As Franklin&apos;s founding designer, I owned the brand, visual and product architecture, moving at startup speed without sacrificing design integrity. My role evolved beyond execution to influence product strategy and business decision-making directly. I led technically and advocated for the user, balanced competing requirements, and honest calm alignment — delivering not just usable interfaces, but a coherent product strategy.
              </p>
            </div>
          </Reveal>
        </CaseStudySection>

      </div>
    </main>
  );
}
