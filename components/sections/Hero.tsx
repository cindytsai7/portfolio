import HeroCard from "@/components/ui/HeroCard";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="flex flex-col gap-3">
      <nav className="flex justify-end">
        <a href="#about" className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors">
          About
        </a>
      </nav>
      <Reveal>
        <HeroCard />
      </Reveal>
    </section>
  );
}
