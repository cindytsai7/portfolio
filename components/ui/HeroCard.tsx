'use client';

import { useRef } from 'react';
import ExperienceList from '@/components/ui/ExperienceList';
import LinkedInButton from '@/components/ui/LinkedInButton';
import VariableProximity from '@/components/ui/VariableProximity';

export default function HeroCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative bg-portfolio-surface rounded-2xl px-6 py-8 md:px-10 md:py-12 flex flex-col gap-8 md:grid md:grid-cols-[3fr_2fr] md:gap-16"
    >
      {/* Left: identity + CTA */}
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-display text-portfolio-primary">
            <VariableProximity
              label="Cindy Tsai"
              fromFontVariationSettings="'wght' 300"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={150}
              falloff="linear"
            />
          </h1>
          <p className="text-body text-portfolio-muted max-w-md">
            Product Designer specializing in complex systems and enterprise infrastructure.
            Currently at Meta, building AI compliance systems that help teams identify and mitigate risks.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <LinkedInButton />
          <a
            href="mailto:cindytsai7@gmail.com"
            className="inline-flex items-center bg-portfolio-primary text-white text-body font-medium rounded-[12px] px-6 h-12 hover:opacity-80 transition-opacity"
          >
            Say hello
          </a>
        </div>
      </div>

      {/* Right: experience timeline */}
      <ExperienceList />
    </div>
  );
}
