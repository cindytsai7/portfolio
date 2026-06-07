'use client'

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CaseStudyNav() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    function update() {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;
      if (barRef.current) {
        barRef.current.style.width = `${progress * 100}%`;
      }
      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <nav className="relative sticky top-0 z-10 bg-portfolio-background/90 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        <Link
          href="/"
          className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors"
        >
          ← Back
        </Link>
        <Link
          href="/about"
          className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors"
        >
          About
        </Link>
      </div>
      <div
        ref={barRef}
        style={{ width: "0%", transition: "width 0.1s linear" }}
        className="absolute bottom-0 left-0 h-[2px] bg-portfolio-surface"
      />
    </nav>
  );
}
