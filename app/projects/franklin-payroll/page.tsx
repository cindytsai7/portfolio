import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import HeroSection from "@/components/case-study/HeroSection";
import SectionBlock from "@/components/case-study/SectionBlock";
import NumberedList from "@/components/case-study/NumberedList";
import ThreeColumnSection from "@/components/case-study/ThreeColumnSection";
import FullWidthShowcase from "@/components/case-study/FullWidthShowcase";
import DarkOutroSection from "@/components/case-study/DarkOutroSection";
import Reveal from "@/components/motion/Reveal";

// ─── Image paths ────────────────────────────────────────────────────────────
// Drop exports into: Portfolio/public/projects/franklin-payroll/
const IMGS = {
  challenge:        "/projects/franklin-payroll/the-problem.png",
  architecture:     "/projects/franklin-payroll/architecture.png",
  framework:        "/projects/franklin-payroll/redesigned-framework.png",
  craftCards:       "/projects/franklin-payroll/craft-cards.png",
  craftLayouts:     "/projects/franklin-payroll/craft-layouts.png",
  craftBeforeAfter: "/projects/franklin-payroll/craft-before-after.png",
};

export default function FranklinPayrollPage() {
  return (
    <main className="bg-portfolio-background min-h-screen">
      <CaseStudyNav />

      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 pb-8">

        {/* 1 · Hero */}
        <HeroSection
          tags={["START UP", "WEB3", "PAYROLL"]}
          title="0 to 1, a Web3 payroll suite"
          body="Designed a full payroll suite for crypto-native startups — from wallet-based employee onboarding to multi-token disbursement. Worked end-to-end with the founding team to ship a product used in production."
          metadata={[
            { label: "Role", value: "Lead Product Designer" },
            { label: "Timeline", value: "2022–2023" },
            { label: "Status", value: "Shipped" },
          ]}
        />

        {/* 2 · Challenge / Opportunity */}
        <CaseStudySection className="grid md:grid-cols-2 gap-4">
          <Reveal>
            <div className="bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-6 h-full">
              <SectionBlock
                label="The Challenge"
                heading="Crypto payroll had no playbook"
                body="Existing payroll tools assumed fiat rails and traditional banking. Crypto-native teams had no reliable way to pay employees in token, manage vesting, or stay compliant across jurisdictions."
              />
              <img
                src={IMGS.challenge}
                alt="Payroll problem space"
                className="w-full rounded-[12px] object-cover mt-auto"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-6 h-full">
              <SectionBlock
                label="The Opportunity"
                heading="Build the infrastructure layer"
              />
              <NumberedList
                items={[
                  {
                    priority: "P0",
                    title: "Wallet-native onboarding",
                    description: "Employees connect wallets, not bank accounts.",
                  },
                  {
                    priority: "P1",
                    title: "Multi-token disbursement",
                    description: "Pay in any token, auto-convert to stablecoin if needed.",
                  },
                  {
                    priority: "P1",
                    title: "Compliance guardrails",
                    description: "Tax and vesting logic baked into the flow, not bolted on.",
                  },
                ]}
              />
            </div>
          </Reveal>
        </CaseStudySection>

        {/* 3 · Architecture */}
        <CaseStudySection className="flex flex-col gap-6 mt-12">
          <Reveal>
            <SectionBlock
              label="System architecture"
              heading="A three-layer model for payroll on-chain"
            />
          </Reveal>
          <Reveal image>
            <FullWidthShowcase
              image={IMGS.architecture}
              placeholderLabel="Payroll system architecture"
              rounded={false}
              body="The product separates employer configuration (org setup, token selection, schedule) from employee experience (wallet connect, history, claims) with a shared compliance layer in between — keeping complexity away from end users while giving operators full control."
            />
          </Reveal>
        </CaseStudySection>

        {/* 4 · Constraints */}
        <CaseStudySection className="mt-12">
          <Reveal>
            <ThreeColumnSection
              label="The Constraints"
              title="Designing for trust in trustless systems"
              columns={[
                {
                  heading: "Gas volatility",
                  body: "Transaction costs fluctuate unpredictably, requiring the UI to communicate fees in real time without creating anxiety.",
                },
                {
                  heading: "Key recovery",
                  body: "No password reset on a blockchain. Onboarding had to educate users on wallet security without losing them.",
                },
                {
                  heading: "Regulatory grey zone",
                  body: "Crypto compensation laws vary by country and were actively changing during the project — the design had to flex.",
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        {/* 5 · Solutions */}
        <CaseStudySection className="flex flex-col gap-6 mt-12">
          <Reveal>
            <SectionBlock label="Solutions" heading="The Payroll Suite" />
          </Reveal>
          <Reveal image>
            <FullWidthShowcase
              image={IMGS.framework}
              placeholderLabel="Franklin Payroll dashboard"
              rounded={false}
              heading="The unified payroll dashboard"
              body="A single operator view surfaces pending disbursements, employee wallet status, vesting schedules, and on-chain transaction confirmations — replacing a fragmented spreadsheet-and-Gnosis-Safe workflow with a purpose-built interface."
            />
          </Reveal>
        </CaseStudySection>

        {/* 6 · Craft */}
        <CaseStudySection className="flex flex-col gap-[80px] mt-[48px]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <SectionBlock label="Craft" heading="The building blocks" />
            </Reveal>
            <Reveal image>
              <FullWidthShowcase
                image={IMGS.craftCards}
                placeholderLabel="Payroll action cards"
                heading="Modular payroll cards"
                body="Reusable card components that adapt across employee list, vesting timeline, and disbursement queue views — enforcing consistent data density and action hierarchy throughout the product."
              />
            </Reveal>
          </div>

          <Reveal image>
            <FullWidthShowcase
              image={IMGS.craftLayouts}
              placeholderLabel="Responsive layouts"
              heading="Layouts that scale with team size"
              body="Whether a 3-person seed-stage team or a 50-person Series A, the layout system reorganizes content without sacrificing hierarchy — collapsing secondary data and promoting critical actions at smaller scales."
            />
          </Reveal>

          <Reveal image>
            <FullWidthShowcase
              image={IMGS.craftBeforeAfter}
              placeholderLabel="Before / After"
              heading="From manual to managed"
              body="Replaced a multi-step Gnosis Safe + spreadsheet workflow with a single guided disbursement flow — reducing operator time-to-pay from 45 minutes to under 5."
            />
          </Reveal>
        </CaseStudySection>

        {/* 7 · Outcome */}
        <CaseStudySection className="mt-12">
          <Reveal>
            <DarkOutroSection
              label="Outcome"
              heading="Shipped a category-defining tool from zero"
              metrics={[
                { value: "0→1", label: "Full product built" },
                { value: "45m→5m", label: "Time to pay employees" },
                { value: "3", label: "Token types supported at launch" },
              ]}
              body="Working directly with the founders, I owned the entire design surface — from early concept sketches through production. The suite shipped and was used by real teams processing live payroll on-chain."
            />
          </Reveal>
        </CaseStudySection>

      </div>
    </main>
  );
}
