import Reveal from "@/components/motion/Reveal";

export default function EditorialStatement() {
  return (
    <Reveal>
      <section className="pt-40 pb-16 grid grid-cols-1 md:grid-cols-[447fr_895fr] gap-6 md:gap-8">
        <div />
        <div className="flex flex-col gap-8">
          <p className="text-h1 font-bold leading-[1.3] tracking-tight text-portfolio-primary">
            I&rsquo;m a systems thinker based in Seattle, WA, who designs beyond the &ldquo;flashy UI.&rdquo; I tackle deep ambiguity by mapping systems, actors, and constraints before ever diving into pixels. To bring clarity to complex enterprise infrastructure, I leverage AI tools to prototype and stress-test ideas at speed, quickly converging on clear, highly defensible solutions.
          </p>
          <p className="text-h1 font-bold leading-[1.3] tracking-tight text-portfolio-primary">
            At the core, I care about building high-integrity platforms that make people&rsquo;s lives more connected and efficient. I thrive in low-ego, collaborative environments where curiosity, meticulous execution, and great ideas lead the way.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
