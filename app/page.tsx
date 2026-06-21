import HeroCard from "@/components/ui/HeroCard";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/motion/Reveal";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row">
      {/* Left rail — sticky on desktop */}
      <div className="p-4 md:pt-8 md:pr-[60px] md:pb-8 md:pl-8 md:w-[508px] md:shrink-0 md:sticky md:top-0 md:h-screen md:flex md:flex-col">
        <Reveal className="flex flex-col h-full">
          <HeroCard vertical />
        </Reveal>
      </div>

      {/* Right — scrolls */}
      <div className="flex-1 flex flex-col gap-4 px-4 pb-4 md:pt-8 md:pr-8 md:pb-8 md:pl-0">
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
