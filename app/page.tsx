import HeroCard from "@/components/ui/HeroCard";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/motion/Reveal";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto w-full p-4 md:p-8 flex flex-col gap-4">
      <Reveal>
        <HeroCard />
      </Reveal>
      <div className="mt-40">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
