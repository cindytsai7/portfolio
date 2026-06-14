import HeroCard from "@/components/ui/HeroCard";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="flex flex-col gap-3">
      <nav className="flex justify-between py-3 md:py-4">
        <a href="#work" className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors">
          Work
        </a>
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
