import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CardsAssembly from "@/components/case-study/CardsAssembly";
import SectionBlock from "@/components/case-study/SectionBlock";
import NumberedList from "@/components/case-study/NumberedList";
import ThreeColumnSection from "@/components/case-study/ThreeColumnSection";
import FullWidthShowcase from "@/components/case-study/FullWidthShowcase";
import DarkOutroSection from "@/components/case-study/DarkOutroSection";
import Reveal from "@/components/motion/Reveal";

// ─── Image paths ────────────────────────────────────────────────────────────
// Drop exports into: Portfolio/public/projects/edge-admin-hub/
const IMGS = {
  challenge:           "/projects/edge-admin-hub/the-problem.png",
  spatialArchitecture: "/projects/edge-admin-hub/spatial-architecture.png",
  framework:           "/projects/edge-admin-hub/redesigned-framework.png",
  craftCards:          "/projects/edge-admin-hub/systemic-craft-cards.png",
  craftLayouts:        "/projects/edge-admin-hub/systemic-craft-layouts.png",
  craftBeforeAfter:    "/projects/edge-admin-hub/systemic-craft-before-after.png",
};

export default function EdgeAdminHubPage() {
  return (
    <CaseStudyPage>

        {/* 0 · Animation hero */}
        <section className="px-4 md:px-8 py-8 md:py-12">
          <CardsAssembly />
        </section>

        {/* 1 · Editorial hero */}
        <section className="px-4 md:px-8 pt-6 pb-16 md:pb-24 flex flex-col gap-16 md:gap-24">
          <p className="text-[clamp(20px,2.2vw,36px)] font-normal leading-[1.05] tracking-[-0.04em] text-portfolio-primary max-w-[1100px] md:pl-[20%]">
            I led the redesign of Edge Browser's admin hub at Microsoft, creating a scalable framework that simplifies complex policy management. By re-architecting the admin center around a unified design system and an adaptable kit of parts, I established a foundation that streamlines future feature expansion.
          </p>

          <div className="grid grid-cols-[160px_1fr] gap-y-2 md:pl-[20%]">
            {[
              { label: "Role",     value: "Lead Product Designer" },
              { label: "Timeline", value: "2024" },
              { label: "Team",     value: "1 PM · 2 Eng · 1 UXR" },
              { label: "Status",   value: "Shipped" },
            ].map(({ label, value }) => (
              <>
                <p key={label + "-l"} className="text-body text-portfolio-muted">{label}</p>
                <p key={label + "-v"} className="text-body text-portfolio-primary">{value}</p>
              </>
            ))}
          </div>
        </section>

        {/* 2 · Challenge / Opportunity */}
        <CaseStudySection className="grid md:grid-cols-2 gap-4">
          <Reveal>
            <div className="surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-10 flex flex-col gap-6 h-full">
              <SectionBlock
                label="The Challenge"
                heading="Users weren't getting alerted"
                body="No unified framework, no hierarchy, no cohesion."
              />
              <img
                src={IMGS.challenge}
                alt="Dashboard before redesign"
                className="w-full rounded-[12px] object-cover mt-auto"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-10 flex flex-col gap-6 h-full">
              <SectionBlock
                label="The Opportunity"
                heading="From confusion to conversion"
              />
              <NumberedList
                items={[
                  {
                    priority: "P0",
                    title: "Critical work flows",
                    description: "Users grouped by workflow, not technical categories.",
                  },
                  {
                    priority: "P1",
                    title: "Contextual data",
                    description: "Standardizing the 80%, leaving room for the 20%.",
                  },
                  {
                    priority: "P1",
                    title: "Passive education",
                    description: "Data replaced assumptions about feature usage.",
                  },
                ]}
              />
            </div>
          </Reveal>
        </CaseStudySection>

        {/* 3 · Spatial Architecture */}
        <CaseStudySection className="flex flex-col gap-6 mt-20">
          <Reveal>
            <SectionBlock
              label="Spatial architecture"
              heading="The spatial architecture maps directly to a priority framework"
            />
          </Reveal>
          <Reveal image>
            <FullWidthShowcase
              image={IMGS.spatialArchitecture}
              placeholderLabel="Spatial architecture diagram"
              rounded={false}
              body="P0 commands prime positioning at the top of the viewport to surface immediate, workflow-based actions. P1 contextual data occupies the center with rich visualizations. P1 passive education sits lower on the page to provide data-backed learning guardrails."
            />
          </Reveal>
        </CaseStudySection>

        {/* 4 · Constraints */}
        <CaseStudySection className="mt-20">
          <Reveal>
            <ThreeColumnSection
              label="The Constraints"
              title="Designing within limits"
              columns={[
                {
                  heading: "Latency",
                  body: "Real time updates are not possible because the dashboard refreshes on a fixed polling interval.",
                },
                {
                  heading: "Legacy gaps",
                  body: "Building on top of older frameworks and disjointed data required careful abstraction to maintain consistency.",
                },
                {
                  heading: "Guardrails",
                  body: "Backend actions require multi-factor approval, shaping how actions are presented and confirmed.",
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        {/* 5 · Systemic Craft */}
        <CaseStudySection className="flex flex-col gap-[80px] mt-20">
          <div className="flex flex-col gap-6">
            <Reveal>
              <SectionBlock label="Systemic craft" heading="The building blocks" />
            </Reveal>
            <Reveal image>
              <FullWidthShowcase
                image={IMGS.craftCards}
                placeholderLabel="Modular action cards dashboard"
                heading="Modular action cards"
                body="A flexible block system that adapts to varying data densities and intents. Whether surfacing critical alerts, key metrics, or onboarding tasks, these cards enforce consistent spatial and hierarchical constraints across the ecosystem."
              />
            </Reveal>
          </div>

          <Reveal image>
            <FullWidthShowcase
              image={IMGS.craftLayouts}
              placeholderLabel="Scale-agnostic layouts"
              heading="Scale agnostic layouts for data"
              body="Scalable card layout that reorganizes complex metrics, tabular data, and primary actions across viewports, preserving perfect hierarchy and alignment instead of just shrinking content."
            />
          </Reveal>

          <Reveal image>
            <FullWidthShowcase
              image={IMGS.craftBeforeAfter}
              placeholderLabel="Before / After"
              heading="Optimizing the first time user experience"
              body="The re-designed framework replaces an ambiguous, unactivated loading state with an intentional gate for first-time setups."
            />
          </Reveal>
        </CaseStudySection>

        {/* 7 · Strategic Outcome */}
        <CaseStudySection className="mt-20">
          <Reveal>
            <DarkOutroSection
              variant="overcast"
              label="Strategic alignment and outcome"
              heading="Unifying the system to unlock scale"
              metrics={[
                { value: "38%", label: "Reduction in bounce rate" },
                { value: "15%", label: "Retention increase" },
                { value: "↑", label: "User sentiment" },
              ]}
              body="Rather than designing in a piecemeal fashion to satisfy isolated feature requests, I aligned cross-functional leadership around a unified dashboard foundation. This strategic shift ensured long-term usability and yielded immediate, measurable performance gains across the platform ecosystem."
            />
          </Reveal>
        </CaseStudySection>

    </CaseStudyPage>
  );
}
