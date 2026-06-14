'use client';

import { useRef } from 'react';

const testimonials = [
  {
    quote: "Working with Cindy has been an absolute pleasure. She's deeply thoughtful in her design process and always strives for excellence in the details, no matter the scope of the project. One of the things I truly admire about Cindy is her ability to think in options—she never settles for the first idea.",
    name: "Xiangqi Liu",
    company: "Microsoft AI",
  },
  {
    quote: "Cindy worked on my team for several years as a UX designer. In that time I found her to be smart, creative, engaged, energetic and a great team player. I would not hesitate to recommend Cindy for another position.",
    name: "Rob Frye",
    company: "Microsoft AI",
  },
  {
    quote: "I have had the opportunity to work with Cindy at Microsoft and would recommend her without hesitation. She has a great design eye, communicates well, and perhaps most importantly she has growth mindset and is always looking to learn!",
    name: "Kyle Risan",
    company: "Microsoft AI",
  },
  {
    quote: "Cindy's end-to-end delivery of the Smart Switch for Microsoft Edge Business elevates the product experience with elegance, precision and empathy. Leveraging micro interactions for macro impact is an art form that engages with code, business and brand, simultaneously.",
    name: "Farhan Mian",
    company: "Microsoft",
  },
  {
    quote: "She quickly differentiated herself as an adept communicator. Early on she identified subject-matter-experts and worked with stakeholders across the organization to deliver high-quality work.",
    name: "Alexander Yamato",
    company: "Microsoft AI",
  },
  {
    quote: "Cindy Tsai brings so much talent to a team and is a dream employee as an individual contributor. She is a very dedicated employee, empathetic to those around her and an asset to any team. I can confidently recommend her as an excellent designer and teammate.",
    name: "Kimberly Bombery Smith",
    company: "Gensler",
  },
];

function NavButton({ dir, onClick }: { dir: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
      className="w-9 h-9 rounded-full border border-portfolio-stroke flex items-center justify-center text-portfolio-primary hover:bg-portfolio-surface/80 transition-colors text-body"
    >
      {dir === 'left' ? '←' : '→'}
    </button>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]') as HTMLElement;
    const amount = (card?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
            Testimonials
          </p>
          <h2 className="text-h1 font-bold leading-tight tracking-tight text-portfolio-primary">
            What people say
          </h2>
        </div>
        <div className="flex gap-2 mb-1">
          <NavButton dir="left" onClick={() => scroll('left')} />
          <NavButton dir="right" onClick={() => scroll('right')} />
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            data-card
            style={{ scrollSnapAlign: 'start' }}
            className="bg-[#D1CCC5]/50 shadow-[inset_0_0_0_1px_#D1CCC5] rounded-card p-6 md:p-8 flex flex-col gap-6 w-[300px] md:w-[340px] flex-shrink-0"
          >
            {/* Attribution */}
            <div className="flex flex-col gap-0.5">
                <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-black font-bold">
                  {t.name}
                </p>
                <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-black/50">
                  {t.company}
                </p>
            </div>
            {/* Quote */}
            <p className="text-body text-black leading-[1.6]">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
