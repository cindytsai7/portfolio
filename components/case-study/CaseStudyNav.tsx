'use client'

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CaseStudyNav() {
  const barRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let rafId: number;
    let current = 0;

    function update() {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;

      if (barRef.current) {
        barRef.current.style.width = `${progress * 100}%`;
      }

      // Lerp toward target offset (full slide at 80px scroll, max 52px outward)
      const target = Math.min(1, scrollTop / 80) * 100;
      current += (target - current) * 0.1;

      if (backRef.current) backRef.current.style.transform = `translateX(${-current}px)`;
      if (aboutRef.current) aboutRef.current.style.transform = `translateX(${current}px)`;

      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <nav className="relative sticky top-0 z-10">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        <Link
          ref={backRef}
          href="/"
          className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors will-change-transform"
        >
          ← Back
        </Link>
        <Link
          ref={aboutRef}
          href="/about"
          className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors will-change-transform"
        >
          About
        </Link>
      </div>
      <div
        ref={barRef}
        style={{ width: "0%", transition: "width 0.1s linear" }}
        className="absolute top-0 left-0 h-[2px] bg-portfolio-surface"
      />
    </nav>
  );
}
