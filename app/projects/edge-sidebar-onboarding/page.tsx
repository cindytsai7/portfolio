import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import HeroSection from "@/components/case-study/HeroSection";
import SectionBlock from "@/components/case-study/SectionBlock";
import NumberedList from "@/components/case-study/NumberedList";
import FullWidthShowcase from "@/components/case-study/FullWidthShowcase";
import DarkOutroSection from "@/components/case-study/DarkOutroSection";
import Reveal from "@/components/motion/Reveal";

// Drop exports into: Portfolio/public/projects/edge-sidebar-onboarding/
const IMGS = {
  whatIsSidebar:        "/projects/edge-sidebar-onboarding/what-is-sidebar.png",
  challenge:            "/projects/edge-sidebar-onboarding/challenge.png",
  prototypeOnboarding:  "/projects/edge-sidebar-onboarding/prototype-onboarding.mov",
  solutionCustomize:    "/projects/edge-sidebar-onboarding/solution-customize.png",
  explorationNotif:     "/projects/edge-sidebar-onboarding/exploration-notification.png",
  explorationTooltip:   "/projects/edge-sidebar-onboarding/exploration-tooltip.png",
  explorationSettings:  "/projects/edge-sidebar-onboarding/exploration-settings.png",
  prototypeExpansion:   "/projects/edge-sidebar-onboarding/prototype-expansion.png",
};

export default function EdgeSidebarOnboardingPage() {
  return (
    <main className="bg-portfolio-background min-h-screen">
      <CaseStudyNav />

      <div className="max-w-[1440px] mx-auto flex flex-col gap-4 pt-4 md:pt-8 pb-4 md:pb-8">

        {/* 1 · Hero */}
        <HeroSection
          tags={["MICROSOFT", "GROWTH", "CONSUMER"]}
          title="Designing a contextual onboarding framework for Edge sidebar"
          body="Activating dormant browser cohorts through intelligent, progressive onboarding triggers, then sustaining engagement via passive, context-aware collaboration hubs."
          metadata={[
            { label: "Role",     value: "Lead Designer" },
            { label: "Timeline", value: "2023" },
            { label: "Status",   value: "Shipped" },
          ]}
        />

        {/* 2 · Tell me more / Challenge */}
        <CaseStudySection className="grid md:grid-cols-2 gap-4">
          <Reveal>
            <div className="surface-card bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-6 h-full">
              <SectionBlock
                label="Tell me more"
                heading="What is Edge sidebar?"
                body="The sidebar offers quick access to your tools, apps and websites without leaving the main browsing activity."
              />
              <FullWidthShowcase image={IMGS.whatIsSidebar} alt="Edge sidebar diagram" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card bg-portfolio-surface rounded-[20px] overflow-hidden flex flex-col h-full">
              <div className="flex flex-col gap-6 p-8 md:p-10">
                <SectionBlock
                  label="The Challenge"
                  heading="Stale users & feature blindness"
                  body="Dormant sidebar states directly degraded our long-term feature adoption ecosystem, stalling a critical engagement vector for the browser platform."
                />
              </div>
              <img
                src={IMGS.challenge}
                alt="Feature blindness diagram"
                className="mt-auto w-[90%] object-cover"
              />
            </div>
          </Reveal>
        </CaseStudySection>

        {/* 3 · Solution: Sidebar onboarding */}
        <CaseStudySection className="flex flex-col gap-6 mt-12">
          <Reveal>
            <SectionBlock label="Solution" heading="Sidebar onboarding" />
          </Reveal>
          <Reveal image>
            <div className="flex flex-col gap-6">
              <video
                src={IMGS.prototypeOnboarding}
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-[6px]"
              />
              <div className="flex flex-col gap-2 w-3/4">
                <p className="text-body font-semibold text-portfolio-primary">New onboarding experience</p>
                <p className="text-body text-portfolio-muted leading-snug">A tailored first-run experience that prompts users to select their go-to apps, leveraging customization to drive immediate feature adoption.</p>
              </div>
            </div>
          </Reveal>
        </CaseStudySection>

        {/* 4 · How might we nudge existing users */}
        <CaseStudySection className="flex flex-col gap-6 mt-12">
          <Reveal>
            <SectionBlock
              label="Restoring for growth"
              heading="How might we nudge existing users?"
            />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Dual priority framework — col 1, row 1 */}
            <Reveal>
              <div className="surface-card bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-6">
                <SectionBlock label="The approach" heading="Priority framework" />
                <NumberedList
                  items={[
                    {
                      priority: "P0",
                      title: "Personalization",
                      description:
                        "Users are more likely to return to something that feels tailored to their needs rather than generic default options.",
                    },
                    {
                      priority: "P1",
                      title: "Contextual guidance",
                      description:
                        "We can drive growth by offering help exactly when and where users need it, building users' trust with the product.",
                    },
                    {
                      priority: "P2",
                      title: "Frictionless Activation",
                      description:
                        "We maximize feature adoption by embedding triggers directly into existing mental models and workflows, lowering the interaction cost to a single click.",
                    },
                  ]}
                />
              </div>
            </Reveal>

            {/* Solution: Customize app — col 2, rows 1–2 */}
            <Reveal delay={0.08} className="md:row-span-2 h-full">
              <div className="bg-portfolio-primary rounded-[20px] ring-1 ring-inset ring-[#2C2C2C] overflow-hidden flex flex-col h-full">
                <div className="p-8 md:p-10 flex flex-col gap-3">
                  <p className="text-body font-semibold text-white">Solution: Customize app</p>
                  <p className="text-body text-white/70">Final decision was to house this notification within the 'customize' app so that it remains accessible post first-run experience without disrupting the users' primary workflow.</p>
                </div>
                <img src={IMGS.solutionCustomize} alt="Customize app UI" className="mt-auto w-[85%] object-cover object-top" />
              </div>
            </Reveal>

            {/* Notification in omnibox — col 1, row 2 */}
            <Reveal className="h-full">
              <div className="surface-card bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-8 h-full">
                <div className="flex flex-col gap-2">
                  <p className="text-body font-semibold text-portfolio-primary">
                    Exploration: Notification in omnibox
                  </p>
                  <p className="text-body text-portfolio-muted">Main constraint is that the notification in the web URL address bar is reserved for shopping.</p>
                </div>
                <div className="mt-auto">
                  <FullWidthShowcase image={IMGS.explorationNotif} alt="Notification in omnibox" />
                </div>
              </div>
            </Reveal>

            {/* Exploration: Tool tip flyout */}
            <Reveal className="h-full">
              <div className="surface-card bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-4 h-full">
                <div className="flex flex-col gap-2">
                  <p className="text-body font-semibold text-portfolio-primary">
                    Exploration: Tool tip flyout
                  </p>
                  <p className="text-body text-portfolio-muted">Targeted towards existing sidebar users as it's a familiar behavior; however it interrupts the user flow by pulling user attention.</p>
                </div>
                <div className="w-1/2 mx-auto mt-auto">
                  <img src={IMGS.explorationTooltip} alt="Tool tip flyout" className="w-full" />
                </div>
              </div>
            </Reveal>

            {/* Exploration: Settings gear */}
            <Reveal delay={0.08} className="h-full">
              <div className="surface-card bg-portfolio-surface rounded-[20px] overflow-hidden flex flex-col gap-4 h-full">
                <div className="flex flex-col gap-2 p-8 md:p-10">
                  <p className="text-body font-semibold text-portfolio-primary">
                    Exploration: Settings gear
                  </p>
                  <p className="text-body text-portfolio-muted">This is a low disruptive way to signal attention; however, users may overlook it because they have never used the sidebar before.</p>
                </div>
                <img
                  src={IMGS.explorationSettings}
                  alt="Settings gear"
                  className="mt-auto w-[65%] -ml-[5%] object-cover object-right-top"
                />
              </div>
            </Reveal>
          </div>
        </CaseStudySection>

        {/* 5 · How might we expand this experience */}
        <CaseStudySection className="flex flex-col gap-6 mt-12">
          <Reveal>
            <SectionBlock
              label="Solution"
              heading="How might we expand this experience"
            />
          </Reveal>
          <Reveal image>
            <FullWidthShowcase
              placeholderLabel="Insert prototype here"
              body="text"
            />
          </Reveal>
        </CaseStudySection>

        {/* 6 · Strategic Outcome */}
        <CaseStudySection className="mt-12">
          <Reveal>
            <DarkOutroSection
              label="Strategic alignment and outcome"
              heading="Turning dormant users into active adopters"
              metrics={[
                { value: "2×",       label: "Click-through rate (0.8% → 1.2%)" },
                { value: "Positive", label: "User sentiment" },
              ]}
              body="Surfacing the right trigger at the right moment, anchored in users' existing workflows, converted passive browser cohorts into engaged sidebar users without disrupting the core browsing experience."
            />
          </Reveal>
        </CaseStudySection>

      </div>
    </main>
  );
}
