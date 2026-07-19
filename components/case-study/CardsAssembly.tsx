'use client';

import { useEffect, useRef } from 'react';

const EASE = 'cubic-bezier(0.30, 1.30, 0.45, 1)';
const BASE = '/projects/edge-dashboard-assembly/assets';

const PIECES = [
  { key: 'header',  src: `${BASE}/header.png`,  pos: { left: '22.254%', top: '13.731%', width: '88.787%' }, enter: { dx: 0,    dy: -120, s: 0.92, r: 0  }, alt: 'Policies for Microsoft Edge — header' },
  { key: 'card1',   src: `${BASE}/card1.png`,   pos: { left: '22.111%', top: '29.749%', width: '22.254%' }, enter: { dx: -240, dy: 20,   s: 0.90, r: -8 }, alt: 'Zero-day incident alerts' },
  { key: 'card2',   src: `${BASE}/card2.png`,   pos: { left: '44.422%', top: '29.749%', width: '22.254%' }, enter: { dx: 0,    dy: -200, s: 0.85, r: 4  }, alt: 'Web content filtering' },
  { key: 'card3',   src: `${BASE}/card3.png`,   pos: { left: '66.733%', top: '29.749%', width: '22.254%' }, enter: { dx: 240,  dy: 20,   s: 0.90, r: 8  }, alt: 'Extensions safety' },
  { key: 'main',    src: `${BASE}/main.png`,    pos: { left: '22.111%', top: '45.725%', width: '44.565%' }, enter: { dx: -140, dy: 280,  s: 0.88, r: -3 }, alt: 'Edge updates — all devices' },
  { key: 'version', src: `${BASE}/version.png`, pos: { left: '66.733%', top: '45.725%', width: '22.254%' }, enter: { dx: 220,  dy: 240,  s: 0.88, r: 6  }, alt: 'Edge version management' },
];

export default function CardsAssembly() {
  const stageRef = useRef<HTMLDivElement>(null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const play = () => {
    PIECES.forEach((p, i) => {
      const el = refs.current[p.key];
      if (!el) return;
      el.getAnimations().forEach((a) => a.cancel());
      const { dx, dy, s, r } = p.enter;
      el.animate(
        [
          { opacity: 0, filter: 'blur(6px)', transform: `translate(${dx}px, ${dy}px) scale(${s}) rotate(${r}deg)` },
          { opacity: 1, filter: 'blur(0px)', transform: 'translate(0,0) scale(1) rotate(0deg)' },
        ],
        { duration: 700, delay: i * 95, easing: EASE, fill: 'both' }
      );
    });
  };

  useEffect(() => {
    // Skip the fly-in on phones as well as for reduced-motion: the entry offsets
    // are fixed pixels (up to 240px) which exceed the stage width at 375, so
    // pieces launch from far off-canvas. The final composition is positioned in
    // % against an aspect-ratio stage, so the static state is already fluid.
    const reduce =
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      matchMedia('(max-width: 767px)').matches;
    if (reduce) {
      PIECES.forEach((p) => { if (refs.current[p.key]) refs.current[p.key]!.style.opacity = '1'; });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) play(); }),
      { threshold: 0.4 }
    );
    if (stageRef.current) io.observe(stageRef.current);

    return () => io.disconnect();
  }, []);

  return (
    <div className="ca-stage" ref={stageRef}>
      <img className="ca-bg" src={`${BASE}/bg.png`} alt="Microsoft 365 admin center" draggable={false} />
      {PIECES.map((p) => (
        <div
          key={p.key}
          className="ca-piece"
          ref={(el) => { refs.current[p.key] = el; }}
          style={p.pos}
        >
          <img src={p.src} alt={p.alt} draggable={false} />
        </div>
      ))}
    </div>
  );
}
