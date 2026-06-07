"use client";

import { useEffect, useRef } from "react";

export default function ScrollRevealQuote({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const wordEls = Array.from(
      container.querySelectorAll<HTMLSpanElement>(".srq-word")
    );

    let rafId: number;
    function update() {
      const threshold = window.innerHeight * 0.65;
      wordEls.forEach((w) => {
        w.classList.toggle("active", w.getBoundingClientRect().top < threshold);
      });
      rafId = requestAnimationFrame(update);
    }
    rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={containerRef} className="px-8 py-24 md:py-32">
      <p
        className="text-left"
        style={{
          fontSize: "42px",
          fontWeight: 300,
          lineHeight: 1.2,
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="srq-word">
            {word}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}
