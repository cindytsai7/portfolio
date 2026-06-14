import HeroCard from "@/components/ui/HeroCard";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="flex flex-col gap-3">
      <Reveal>
        <HeroCard />
      </Reveal>
    </section>
  );
}
