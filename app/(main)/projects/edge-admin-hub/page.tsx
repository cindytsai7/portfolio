import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import CardsAssembly from "@/components/case-study/CardsAssembly";
import SectionBlock from "@/components/case-study/SectionBlock";
import NumberedList from "@/components/case-study/NumberedList";
import ThreeColumnSection from "@/components/case-study/ThreeColumnSection";
import FullWidthShowcase from "@/components/case-study/FullWidthShowcase";
import DarkOutroSection from "@/components/case-study/DarkOutroSection";
import Reveal from "@/components/motion/Reveal";

const IMGS = {
  challenge:           "/projects/edge-admin-hub/the-problem.png",
  spatialArchitecture: "/projects/edge-admin-hub/spatial-architecture.png",
  craftCards:          "/projects/edge-admin-hub/systemic-craft-cards.png",
  craftLayouts:        "/projects/edge-admin-hub/systemic-craft-layouts.png",
  craftBeforeAfter:    "/projects/edge-admin-hub/systemic-craft-before-after.png",
};

const INTRO_GRID = "grid grid-cols-2 gap-4 items-start";

const METADATA = ["Lead Product Designer", "2024"];

export default function EdgeAdminHubPage() {
  return (
    <CaseStudyPage>

      {/* Hero animation */}
      <section className="pt-16">
        <CardsAssembly />
      </section>

      {/* Intro: metadata left / display paragraph right */}
      <section className="px-4 md:px-8 pt-8 md:pt-12 pb-[48px]">
        <div className={INTRO_GRID}>
          <div className="flex flex-col gap-1">
            {METADATA.map((value) => (
              <p key={value} className="text-body text-portfolio-muted">{value}</p>
            ))}
          </div>
          <p className="text-body text-portfolio-muted">
            I was the sole designer working on Edge Browser&apos;s admin hub at Microsoft. I created a scalable framework that simplifies complex policy management. By re-architecting the admin center around a unified design system and an adaptable kit of parts, I established a foundation that streamlines future feature expansion.
            <br /><br />
            My cross-functional partners included a product manager and two engineers. I also worked with the design systems team to consult and align our patterns with broader enterprise standards, ensuring code-level consistency. By establishing this tight feedback loop, we reduced front-end debt and paved the way for engineering to ship subsequent policy updates twice as fast using the newly componentized kit.
          </p>
        </div>
      </section>

      {/* Full-width canvas */}
      <section className="px-4 md:px-8 pt-20">
        <div className="flex flex-col gap-20">

          {/* The challenge */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4 items-stretch">
              <div className="surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-10 flex flex-col gap-6 h-full">
                <SectionBlock label="The challenge" heading="Users weren&apos;t getting alerted" />
                <p className="text-body text-portfolio-muted">No unified framework, no hierarchy, no cohesion.</p>
                <img
                  src={IMGS.challenge}
                  alt="Dashboard before redesign"
                  className="w-full rounded-[12px] object-cover mt-auto"
                />
              </div>
              <div className="surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-10 flex flex-col gap-6 h-full">
                <SectionBlock label="The Opportunity" heading="From confusion to conversion" />
                <NumberedList
                  items={[
                    { priority: "P0", title: "Critical work flows",  description: "Users grouped by workflow, not technical categories." },
                    { priority: "P1", title: "Contextual data",      description: "Standardizing the 80%, leaving room for the 20%." },
                    { priority: "P1", title: "Passive education",    description: "Data replaced assumptions about feature usage." },
                  ]}
                />
              </div>
            </div>
          </Reveal>

          {/* Spatial architecture */}
          <Reveal image>
            <div className="flex flex-col gap-3">
              <p className="text-h3 text-portfolio-primary">Spatial architecture</p>
              <FullWidthShowcase
                image={IMGS.spatialArchitecture}
                alt="Spatial architecture diagram"
                rounded={false}
                heading="The spatial architecture maps directly to a priority framework"
                body="P0 commands prime positioning at the top of the viewport to surface immediate, workflow-based actions. P1 contextual data occupies the center with rich visualizations. P1 passive education sits lower on the page to provide data-backed learning guardrails."
              />
            </div>
          </Reveal>

          {/* Constraints */}
          <Reveal>
            <div className="flex flex-col gap-6">
              <ThreeColumnSection
                label="Constraints"
                title="Designing within limits"
                columns={[
                  { heading: "Latency",     body: "Real time updates are not possible because the dashboard refreshes on a fixed polling interval." },
                  { heading: "Legacy gaps", body: "Building on top of older frameworks and disjointed data required careful abstraction to maintain consistency." },
                  { heading: "Guardrails", body: "Backend actions require multi-factor approval, shaping how actions are presented and confirmed." },
                ]}
              />
            </div>
          </Reveal>

          {/* Systemic craft */}
          <Reveal image>
            <div className="flex flex-col gap-3">
              <p className="text-h3 text-portfolio-primary">Systemic craft</p>
              <FullWidthShowcase
                image={IMGS.craftCards}
                alt="Modular action cards dashboard"
                heading="Modular action cards"
                body="A flexible block system that adapts to varying data densities and intents. Whether surfacing critical alerts, key metrics, or onboarding tasks, these cards enforce consistent spatial and hierarchical constraints across the ecosystem."
              />
            </div>
          </Reveal>

          <Reveal image>
            <FullWidthShowcase
              image={IMGS.craftLayouts}
              alt="Scale-agnostic layouts"
              heading="Scale agnostic layouts for data"
              body="Scalable card layout that reorganizes complex metrics, tabular data, and primary actions across viewports, preserving perfect hierarchy and alignment instead of just shrinking content."
            />
          </Reveal>

          <Reveal image>
            <FullWidthShowcase
              image={IMGS.craftBeforeAfter}
              alt="Before / After"
              heading="Optimizing the first time user experience"
              body="The re-designed framework replaces an ambiguous, unactivated loading state with an intentional gate for first-time setups."
            />
          </Reveal>

          {/* Strategic outcome */}
          <Reveal>
            <div className="flex flex-col gap-6">
              <DarkOutroSection
                variant="overcast"
                label="Strategic outcome"
                heading="Unifying the system to unlock scale"
                metrics={[
                  { value: "38%", label: "Reduction in bounce rate" },
                  { value: "15%", label: "Retention increase" },
                  { value: "↑",   label: "User sentiment" },
                ]}
                body="Rather than designing in a piecemeal fashion to satisfy isolated feature requests, I aligned cross-functional leadership around a unified dashboard foundation. This strategic shift ensured long-term usability and yielded immediate, measurable performance gains across the platform ecosystem."
              />
            </div>
          </Reveal>

        </div>
      </section>

    </CaseStudyPage>
  );
}
