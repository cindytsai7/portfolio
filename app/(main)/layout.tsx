import HeroCard from "@/components/ui/HeroCard";
import Reveal from "@/components/motion/Reveal";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col xl:flex-row">

      {/* Left rail — sticky from xl. Below xl it stacks on top.
          Rail is xl (1280) not lg (1024): at lg the 508px rail collapsed the
          content column to 516px — narrower than at 768px. */}
      <div className="p-4 xl:pt-8 xl:pr-[60px] xl:pb-8 xl:pl-8 xl:w-[508px] xl:shrink-0 xl:sticky xl:top-0 xl:h-screen xl:flex xl:flex-col">
        <Reveal className="flex flex-col h-full">
          <HeroCard vertical />
        </Reveal>
      </div>

      {/* Right panel — scrolls with the page */}
      <div className="flex-1 min-w-0">
        {children}
      </div>

    </main>
  );
}
