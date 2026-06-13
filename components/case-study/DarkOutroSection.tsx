import DarkCard from "@/components/ui/DarkCard";

interface Metric {
  value: string;
  label: string;
}

interface DarkOutroSectionProps {
  label: string;
  heading: string;
  body: string;
  metrics?: Metric[];
  link?: { text: string; href: string };
  variant?: 'dark' | 'overcast';
}

export default function DarkOutroSection({
  label,
  heading,
  body,
  metrics,
  link,
  variant = 'dark',
}: DarkOutroSectionProps) {
  const isOvercast = variant === 'overcast';

  if (isOvercast) {
    return (
      <section className="surface-card bg-portfolio-surface-deep/55 rounded-card px-8 md:px-16 py-16 md:py-20 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-black/50">{label}</p>
          <h2 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-black">{heading}</h2>
        </div>

        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-3">
                <span className="text-black font-bold text-[52px] leading-none">{m.value}</span>
                <span className="text-black/50 text-body">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <p className="text-black/70 text-body leading-relaxed">{body}</p>

        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/50 text-caption font-mono uppercase tracking-widest underline underline-offset-4 hover:text-black transition-colors w-fit"
          >
            {link.text}
          </a>
        )}
      </section>
    );
  }

  return (
    <section className="bg-black rounded-card overflow-hidden">
      <DarkCard className="px-8 md:px-16 py-16 md:py-20 flex flex-col gap-12">

        <div className="flex flex-col gap-4">
          <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-white/50">{label}</p>
          <h2 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-white">{heading}</h2>
        </div>

        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-3">
                <span className="text-white font-bold text-[52px] leading-none">{m.value}</span>
                <span className="text-white/50 text-body pb-4 border-b border-white/[0.08]">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <p className="text-white/70 text-body leading-relaxed">{body}</p>

        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-caption font-mono uppercase tracking-widest underline underline-offset-4 hover:text-white transition-colors w-fit"
          >
            {link.text}
          </a>
        )}

      </DarkCard>
    </section>
  );
}
