import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import HeroSection from "@/components/case-study/HeroSection";
import SectionBlock from "@/components/case-study/SectionBlock";
import NumberedList from "@/components/case-study/NumberedList";
import ThreeColumnSection from "@/components/case-study/ThreeColumnSection";
import FullWidthShowcase from "@/components/case-study/FullWidthShowcase";
import DarkOutroSection from "@/components/case-study/DarkOutroSection";

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
    <main className="bg-portfolio-background min-h-screen">
      <CaseStudyNav />

      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 pb-20">

        {/* 1 · Hero */}
        <HeroSection
          tags={["MICROSOFT", "ENTERPRISE", "SYSTEMS"]}
          title="Building a scalable framework for Edge Browser's admin hub"
          body="I led the redesign of a scalable dashboard that simplifies Edge browser policy management. Working with PMs and developers, I re-architected the admin center around a flexible design system, creating a more unified experience and enabling future feature expansion."
          metadata={[
            { label: "Role", value: "Lead Product Designer" },
            { label: "Timeline", value: "2025" },
            { label: "Status", value: "Shipped" },
          ]}
          heroVideo="/projects/edge-admin-hub/hero.mp4"
        />

        {/* 2 · Challenge / Opportunity */}
        <section className="px-4 md:px-8 grid md:grid-cols-2 gap-4">

          <div className="bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-6">
            <SectionBlock
              label="The Challenge"
              heading="Users weren't getting alerted"
              body="Almost half of users spent 1.5+ hours navigating the dashboard. No unified framework, no hierarchy, no cohesion."
            />
            <img
              src={IMGS.challenge}
              alt="Dashboard before redesign"
              className="w-full rounded-[12px] object-cover mt-auto"
            />
          </div>

          <div className="bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-6">
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

        </section>

        {/* 3 · Spatial Architecture */}
        <section className="px-4 md:px-8 flex flex-col gap-12">
          <SectionBlock
            label="Spatial architecture"
            heading="The spatial architecture maps directly to a priority framework"
            body="P0 commands prime positioning at the top of the viewport to surface immediate, workflow-based actions. P1 contextual data occupies the center with rich visualizations. P1 passive education sits lower on the page to provide data-backed learning guardrails."
            bodyClassName="w-3/4"
          />
          <FullWidthShowcase
            image={IMGS.spatialArchitecture}
            placeholderLabel="Spatial architecture diagram"
            rounded={false}
          />
        </section>

        {/* 4 · Constraints */}
        <section className="px-4 md:px-8">
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
        </section>

        {/* 5 · Redesigned Framework */}
        <section className="px-4 md:px-8 flex flex-col gap-6">
          <SectionBlock
            label="Solutions"
            heading="Redesigned Framework"
          />
          <FullWidthShowcase
            image={IMGS.framework}
            placeholderLabel="Redesigned dashboard"
            rounded={false}
            heading="The unified dashboard"
            body="The final dashboard brings together modular alerts, analytical charts, and configuration workflows. Instead of overwhelming the administrator, the structured grid ensures clear hierarchy, visual alignment, and an intuitive, scale-agnostic layout across complex enterprise tools."
          />
        </section>

        {/* 6 · Systemic Craft */}
        <section className="px-4 md:px-8 flex flex-col gap-[80px] mt-[48px]">

          {/* Modular action cards */}
          <SectionBlock
            label="Systemic craft"
            heading="The building blocks"
          />
          <FullWidthShowcase
            image={IMGS.craftCards}
            placeholderLabel="Modular action cards dashboard"
            heading="Modular action cards"
            body="A flexible block system that adapts to varying data densities and intents. Whether surfacing critical alerts, key metrics, or onboarding tasks, these cards enforce consistent spatial and hierarchical constraints across the ecosystem."
          />

          {/* Scale agnostic layouts */}
          <FullWidthShowcase
            image={IMGS.craftLayouts}
            placeholderLabel="Scale-agnostic layouts"
            heading="Scale agnostic layouts for data"
            body="Scalable card layout that reorganizes complex metrics, tabular data, and primary actions across viewports, preserving perfect hierarchy and alignment instead of just shrinking content."
          />

          {/* Before / After */}
          <FullWidthShowcase
            image={IMGS.craftBeforeAfter}
            placeholderLabel="Before / After"
            heading="Optimizing the first time user experience"
            body="The re-designed framework replaces an ambiguous, unactivated loading state with an intentional gate for first-time setups."
          />

        </section>

        {/* 7 · Strategic Outcome */}
        <div className="px-4 md:px-8">
          <DarkOutroSection
            label="Strategic alignment and outcome"
            heading="Unifying the system to unlock scale"
            body="Rather than designing in a piecemeal fashion to satisfy isolated feature requests, I aligned cross-functional leadership around a unified dashboard foundation. This strategic shift ensured long-term usability and yielded immediate, measurable performance gains across the platform ecosystem."
          />
        </div>

      </div>
    </main>
  );
}
