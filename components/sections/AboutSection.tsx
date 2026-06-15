'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Reveal from '@/components/motion/Reveal';

const testimonials = [
  {
    quote: "Working with Cindy has been an absolute pleasure. She's deeply thoughtful in her design process and always strives for excellence in the details, no matter the scope of the project. One of the things I truly admire about Cindy is her ability to think in options—she never settles for the first idea.",
    name: "Xiangqi Liu",
    title: "Product Designer",
    company: "Microsoft AI",
  },
  {
    quote: "Cindy worked on my team for several years as a UX designer. In that time I found her to be smart, creative, engaged, energetic and a great team player. I would not hesitate to recommend Cindy for another position.",
    name: "Rob Frye",
    title: "Partner Design Director",
    company: "Microsoft AI",
  },
  {
    quote: "Cindy's end-to-end delivery of the Smart Switch for Microsoft Edge Business elevates the product experience with elegance, precision and empathy. Leveraging micro interactions for macro impact is an art form that engages with code, business and brand, simultaneously.",
    name: "Farhan Mian",
    title: "Senior Product Designer",
    company: "Microsoft",
  },
];

function ParallaxBlock({ children, speed = 40, delay = 0 }: { children: React.ReactNode; speed?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} style={{ y }}>
      <Reveal delay={delay}>{children}</Reveal>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-6 pt-32 flex flex-col gap-32">

      {/* How I work */}
      <ParallaxBlock speed={30}>
        <div className="grid grid-cols-1 md:grid-cols-[447fr_895fr] gap-6 md:gap-8 md:items-start">
          <p className="font-mono text-[13px] tracking-[0.12em] uppercase text-portfolio-primary md:pt-[6px]">
            How I work
          </p>
          <p className="text-[20px] leading-[1.3] tracking-tight text-portfolio-muted max-w-[760px]">
            I bring clarity to ambiguous problems by mapping the system, its actors, and its constraints before designing. I prototype with AI to test many directions fast, converging on solutions that stay legible and defensible. Then I ship early and let real feedback drive what I refine next.
          </p>
        </div>
      </ParallaxBlock>

      {/* What people say */}
      <ParallaxBlock speed={30} delay={0.08}>
        <div className="grid grid-cols-1 md:grid-cols-[447fr_895fr] gap-6 md:gap-8 md:items-start">
          <p className="font-mono text-[13px] tracking-[0.12em] uppercase text-portfolio-primary md:pt-[6px]">
            What people say
          </p>
          <div className="flex flex-col">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="py-7 border-t border-portfolio-stroke/50 first:border-t-0 first:pt-0 flex flex-col gap-3"
              >
                <p className="text-[20px] leading-[1.3] tracking-tight text-portfolio-muted max-w-[760px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-mono text-[12px] tracking-[0.08em] uppercase text-portfolio-muted">
                  <span className="text-portfolio-primary">{t.name}</span> · {t.title} · {t.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxBlock>

    </section>
  );
}
