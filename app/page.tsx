import HeroCard from "@/components/ui/HeroCard";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/motion/Reveal";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row">
      {/* Left rail — sticky on desktop */}
      <div className="p-4 lg:pt-8 lg:pr-[60px] lg:pb-8 lg:pl-8 lg:w-[508px] lg:shrink-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col">
        <Reveal className="flex flex-col h-full">
          <HeroCard vertical />
        </Reveal>
      </div>

      {/* Right — scrolls */}
      <div className="flex-1 flex flex-col gap-4 px-4 pb-4 lg:pt-8 lg:pr-8 lg:pb-8 lg:pl-0">
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
