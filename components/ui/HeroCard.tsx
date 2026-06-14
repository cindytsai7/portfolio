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

export default function HeroCard({ showExperience = true }: { showExperience?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-8 ${showExperience ? "md:grid md:grid-cols-3 md:gap-4 md:items-start" : ""}`}
    >
      {/* Left: identity + CTA */}
      <div className={`flex flex-col justify-between gap-8 ${showExperience ? "md:col-span-2" : ""}`}>
        <div className="flex flex-col gap-2">
          <h1 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">
            <VariableProximity
              label="Cindy Tsai"
              fromFontVariationSettings="'wght' 300"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={150}
              falloff="linear"
            />
          </h1>
          <p className="text-body leading-[1.3] tracking-tight text-portfolio-muted max-w-[480px] mb-4">
            Product Designer specializing in complex systems and enterprise infrastructure.
            Currently at Meta, building AI compliance systems that help teams identify and mitigate&nbsp;risks.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/cindyctsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-bold uppercase text-portfolio-primary hover:opacity-60 transition-opacity duration-200 inline-flex items-center"
          >
            LinkedIn<ArrowIcon />
          </a>
          <a
            href="mailto:cindytsai7@gmail.com"
            className="text-[14px] font-bold uppercase text-portfolio-primary hover:opacity-60 transition-opacity duration-200 inline-flex items-center"
          >
            Email<ArrowIcon />
          </a>
        </div>
      </div>

      {/* Right: experience timeline */}
      {showExperience && <ExperienceList />}
    </div>
  );
}
