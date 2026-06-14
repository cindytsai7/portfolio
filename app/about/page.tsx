import Link from "next/link";
import HeroCard from "@/components/ui/HeroCard";
import Reveal from "@/components/motion/Reveal";
import Testimonials from "@/components/sections/Testimonials";

export default function About() {
  return (
    <main className="max-w-[1440px] mx-auto w-full p-4 md:p-8 flex flex-col gap-4">
      <nav className="flex justify-between py-3 md:py-4">
        <Link
          href="/"
          className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors"
        >
          ← Back
        </Link>
      </nav>
      <Reveal>
        <HeroCard />
      </Reveal>
      <div className="mt-[64px]">
        <Testimonials />
      </div>
    </main>
  );
}
