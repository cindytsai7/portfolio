"use client";

import { useEffect, useRef } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function formatDollars(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)} million`;
  if (n >= 1_000) return `$${Math.floor(n / 1_000)}K`;
  return `$${Math.floor(n)}`;
}

interface MetricCountUpProps {
  target: number;
  caption: string;
  duration?: number;
}

export default function MetricCountUp({
  target,
  caption,
  duration = 2000,
}: MetricCountUpProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const counter = counterRef.current;
    if (!root || !counter) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            observer.unobserve(entry.target);

            const start = performance.now();
            function tick(now: number) {
              const t = Math.min(1, (now - start) / duration);
              counter!.textContent = formatDollars(Math.floor(easeOutExpo(t) * target));
              if (t < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={rootRef} className="flex flex-col gap-2">
      <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
        Impact
      </p>
      <p
        ref={counterRef}
        className="text-[52px] font-bold leading-none tracking-tight text-portfolio-primary"
      >
        $0
      </p>
      <p className="text-body text-portfolio-muted">{caption}</p>
    </div>
  );
}
