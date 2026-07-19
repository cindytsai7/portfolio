import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import SectionBlock from "@/components/case-study/SectionBlock";
import FullWidthShowcase from "@/components/case-study/FullWidthShowcase";
import NumberedList from "@/components/case-study/NumberedList";
import DarkOutroSection from "@/components/case-study/DarkOutroSection";
import DarkCard from "@/components/ui/DarkCard";
import Reveal from "@/components/motion/Reveal";
import { CS_GRID_2_STRETCH } from "@/components/case-study/tokens";

const IMGS = {
  whatIsSidebar:       "/projects/edge-sidebar-onboarding/what-is-sidebar.png",
  challenge:           "/projects/edge-sidebar-onboarding/challenge.png",
  prototypeOnboarding: "/projects/edge-sidebar-onboarding/prototype-onboarding.mov",
  solutionCustomize:   "/projects/edge-sidebar-onboarding/solution-customize.png",
  explorationNotif:    "/projects/edge-sidebar-onboarding/exploration-notification.png",
  explorationTooltip:  "/projects/edge-sidebar-onboarding/exploration-tooltip.png",
  explorationSettings: "/projects/edge-sidebar-onboarding/exploration-settings.png",
};

// gap-4 mirrors the card grid directly below, so the intro paragraph's left
// edge lines up with the second card
const INTRO_GRID  = "grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-4 items-start";
const CARD        = "surface-card bg-portfolio-surface/50 rounded-card";
const CARD_PADDED = `${CARD} p-8 md:p-10 flex flex-col gap-6 h-full`;

const METADATA = ["Lead Designer", "2023", "Shipped"];

export default function EdgeSidebarOnboardingPage() {
  return (
    <CaseStudyPage>

      {/* Hero video */}
      <section className="px-4 md:px-8 pt-16">
        <div className="relative [clip-path:inset(0_round_16px)]">
          <video
            src={IMGS.prototypeOnboarding}
            autoPlay
            loop
            muted
            playsInline
            className="w-full block"
          />
          <div className="absolute inset-0 rounded-card shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none" />
        </div>
      </section>

      {/* Intro: metadata left / display paragraph right */}
      <section className="px-4 md:px-8 pt-8 md:pt-12 pb-[48px]">
        <div className={INTRO_GRID}>
          <div className="flex flex-col gap-1">
            {METADATA.map((value) => (
              <p key={value} className="text-body text-portfolio-muted">{value}</p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-body text-portfolio-muted">
              The Edge sidebar is an ecosystem designed to bring utility directly into the browsing experience. It ships with a suite of default productivity apps right out of the box to help users multitask without leaving their active tabs. However, we found that a severe lack of user awareness caused most people to either overlook these tools completely or dismiss the entire interface as browser clutter.
            </p>
            <p className="text-body text-portfolio-muted">
              I worked alongside a product manager and an engineer as the lead designer on this retention vertical. My role included designing a progressive onboarding framework and contextual triggers that can turn an ignored browser feature into an indispensable daily workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width canvas */}
      <section className="px-4 md:px-8 pt-20 pb-8">
        <div className="flex flex-col gap-20">

          {/* Tell me more / The challenge */}
          <Reveal>
            <div className={CS_GRID_2_STRETCH}>
              <div className={CARD_PADDED}>
                <SectionBlock
                  label="Tell me more"
                  heading="What is Edge sidebar?"
                  body="The sidebar offers quick access to your tools, apps and websites without leaving the main browsing activity."
                />
                <FullWidthShowcase image={IMGS.whatIsSidebar} alt="Edge sidebar diagram" />
              </div>
              <div className={`${CARD} overflow-hidden flex flex-col h-full`}>
                <div className="flex flex-col gap-6 p-8 md:p-10">
                  <SectionBlock
                    label="The challenge"
                    heading="Stale users & feature blindness"
                    body="Dormant sidebar states directly degraded our long-term feature adoption ecosystem, stalling a critical engagement vector for the browser platform."
                  />
                </div>
                <img
                  src={IMGS.challenge}
                  alt="Feature blindness diagram"
                  className="mt-auto w-full md:w-[90%] object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Designing for growth */}
          <Reveal>
            <div className="flex flex-col gap-6">
              <p className="text-card-title font-semibold text-portfolio-primary">
                Designing for growth: How might we nudge existing users?
              </p>
              <div className="grid md:grid-cols-2 gap-4">

                {/* Dual priority framework — col 1, row 1 */}
                <div className={CARD_PADDED}>
                  <SectionBlock label="The approach" heading="Dual priority framework" />
                  <NumberedList
                    items={[
                      { priority: "P0", title: "Personalization",     description: "Users are more likely to return to something that feels tailored to their needs rather than generic default options." },
                      { priority: "P1", title: "Contextual guidance", description: "We can drive growth by offering help exactly when and where users need it, building users' trust with the product." },
                    ]}
                  />
                </div>

                {/* Solution: Customize app — col 2, spans 2 rows */}
                <div className="md:row-span-2 bg-black rounded-card overflow-hidden">
                  <DarkCard className="flex flex-col h-full">
                    <div className="p-8 md:p-10 flex flex-col gap-3">
                      <p className="text-body font-semibold text-white">Solution: Customize app</p>
                      <p className="text-body text-white/70">Final decision was to house this notification within the &apos;customize&apos; app so that it remains accessible post first-run experience without disrupting the users&apos; primary workflow.</p>
                    </div>
                    <img src={IMGS.solutionCustomize} alt="Customize app UI" className="mt-auto w-full md:w-[85%] object-cover object-top" />
                  </DarkCard>
                </div>

                {/* Notification in omnibox — col 1, row 2 */}
                <div className={`${CARD} p-8 md:p-10 flex flex-col gap-8 h-full`}>
                  <div className="flex flex-col gap-2">
                    <p className="text-body font-semibold text-portfolio-primary">Exploration: Notification in omnibox</p>
                    <p className="text-body text-portfolio-muted">Main constraint is that the notification in the web URL address bar is reserved for shopping.</p>
                  </div>
                  <div className="mt-auto">
                    <FullWidthShowcase image={IMGS.explorationNotif} alt="Notification in omnibox" />
                  </div>
                </div>

                {/* Tool tip flyout */}
                <div className={`${CARD} p-8 md:p-10 flex flex-col gap-4 h-full`}>
                  <div className="flex flex-col gap-2">
                    <p className="text-body font-semibold text-portfolio-primary">Exploration: Tool tip flyout</p>
                    <p className="text-body text-portfolio-muted">Targeted towards existing sidebar users as it&apos;s a familiar behavior; however it interrupts the user flow by pulling user attention.</p>
                  </div>
                  <div className="w-3/4 md:w-1/2 mx-auto mt-auto">
                    <img src={IMGS.explorationTooltip} alt="Tool tip flyout" className="w-full" />
                  </div>
                </div>

                {/* Settings gear */}
                <div className={`${CARD} overflow-hidden flex flex-col gap-4 h-full`}>
                  <div className="flex flex-col gap-2 p-8 md:p-10">
                    <p className="text-body font-semibold text-portfolio-primary">Exploration: Settings gear</p>
                    <p className="text-body text-portfolio-muted">This is a low disruptive way to signal attention; however, users may overlook it because they have never used the sidebar before.</p>
                  </div>
                  <img
                    src={IMGS.explorationSettings}
                    alt="Settings gear"
                    className="mt-auto w-full md:w-[85%] md:-ml-[5%] object-cover object-right-top"
                  />
                </div>

              </div>
            </div>
          </Reveal>

          {/* Strategic outcome */}
          <Reveal>
            <div className="flex flex-col gap-6">
              <DarkOutroSection
                variant="overcast"
                label="Strategic outcome"
                heading="Turning dormant users into active adopters"
                metrics={[
                  { value: "2×",      label: "Click-through rate (0.8% → 1.2%)" },
                  { value: "Positive", label: "User sentiment" },
                ]}
                body="Surfacing the right trigger at the right moment, anchored in users' existing workflows, converted passive browser cohorts into engaged sidebar users without disrupting the core browsing experience."
              />
            </div>
          </Reveal>

        </div>
      </section>

    </CaseStudyPage>
  );
}
