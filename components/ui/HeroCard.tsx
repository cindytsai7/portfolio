'use client';

import { useRef } from 'react';
import Link from 'next/link';
import ExperienceList from '@/components/ui/ExperienceList';
import VariableProximity from '@/components/ui/VariableProximity';
import ArrowLink from '@/components/ui/ArrowLink';

// 22px @375 -> 32px from 900px up (desktop unchanged). At a fixed 32px these two
// paragraphs are ~11 characters per line in the 343px mobile rail.
const BIO = "text-[clamp(22px,14.87px+1.9vw,32px)] leading-[1.05] tracking-[-0.04em]";

function LinkedInLink() {
  return (
    <a
      href="https://www.linkedin.com/in/cindyctsai/"
      target="_blank"
      rel="noopener noreferrer"
      className="italic font-normal text-portfolio-primary hover:opacity-60 transition-opacity duration-200"
    >
      LinkedIn
    </a>
  );
}

function EmailLink() {
  return (
    <a
      href="mailto:cindytsai7@gmail.com"
      className="italic font-normal text-portfolio-primary hover:opacity-60 transition-opacity duration-200"
    >
      Email
    </a>
  );
}

export default function HeroCard({ showExperience = true, vertical = false }: { showExperience?: boolean; vertical?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  if (vertical) {
    return (
      <div ref={containerRef} className="flex flex-col h-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">
            <Link href="/" className="hover:opacity-60 transition-opacity duration-200">
              <VariableProximity
                label="Cindy Tsai"
                fromFontVariationSettings="'wght' 600"
                toFontVariationSettings="'wght' 300"
                containerRef={containerRef}
                radius={150}
                falloff="linear"
              />
            </Link>
          </h1>
          <p className={`${BIO} text-portfolio-primary mb-8 text-pretty`}>
            I&rsquo;m a product designer creating enterprise software and B2B platforms, translating complex systems into clear digital experiences.
          </p>
          <p className={`${BIO} mb-6 text-pretty`} style={{ color: '#666666' }}>
            At Meta, I design AI compliance platforms to identify and mitigate systemic risk. Say hello! You can find me on <LinkedInLink /> or reach out over <EmailLink />.
          </p>
        </div>
        {showExperience && (
          <div className="mt-auto">
            <ExperienceList />
          </div>
        )}
      </div>
    );
  }

  // Original grid layout — used on /about
  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-8 ${showExperience ? "md:grid md:grid-cols-3 md:gap-4 md:items-start" : ""}`}
    >
      <div className={`flex flex-col justify-between gap-8 ${showExperience ? "md:col-span-2" : ""}`}>
        <div className="flex flex-col gap-2">
          <h1 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">
            <VariableProximity
              label="Cindy Tsai"
              fromFontVariationSettings="'wght' 600"
              toFontVariationSettings="'wght' 300"
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
          <ArrowLink href="https://www.linkedin.com/in/cindyctsai/" external>
            LinkedIn
          </ArrowLink>
          <ArrowLink href="mailto:cindytsai7@gmail.com">Email</ArrowLink>
        </div>
      </div>
      {showExperience && <ExperienceList />}
    </div>
  );
}
