'use client';

import { useRef } from 'react';
import ExperienceList from '@/components/ui/ExperienceList';
import VariableProximity from '@/components/ui/VariableProximity';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[0.65em] h-[0.65em] shrink-0 ml-0.5">
      <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" />
    </svg>
  );
}

export default function HeroCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative surface-card bg-portfolio-surface/50 rounded-card px-6 py-8 md:px-10 md:py-12 flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-4"
    >
      {/* Left: identity + CTA */}
      <div className="flex flex-col justify-between gap-8 md:col-span-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-[64px] font-bold tracking-[-0.03em] leading-[1.1] text-portfolio-primary">
            <VariableProximity
              label="Cindy Tsai"
              fromFontVariationSettings="'wght' 300"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={150}
              falloff="linear"
            />
          </h1>
          <p className="text-body text-portfolio-muted leading-[1.6] max-w-[538px]">
            Product Designer specializing in complex systems and enterprise infrastructure.
            Currently at Meta, building AI compliance systems that help teams identify and mitigate risks.
          </p>
        </div>
        <div className="flex items-center gap-6 font-sans text-body text-portfolio-primary">
          <a
            href="https://www.linkedin.com/in/cindyctsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:opacity-50 transition-opacity inline-flex items-center"
          >
            LinkedIn<ArrowIcon />
          </a>
          <a
            href="mailto:cindytsai7@gmail.com"
            className="font-bold hover:opacity-50 transition-opacity inline-flex items-center"
          >
            Email<ArrowIcon />
          </a>
        </div>
      </div>

      {/* Right: experience timeline */}
      <ExperienceList />
    </div>
  );
}
