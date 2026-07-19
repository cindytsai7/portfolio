import DarkCard from "@/components/ui/DarkCard";

interface Metric {
  value: string;
  label: string;
}

interface DarkOutroSectionProps {
  label?: string;
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

  // Two metrics sit 2-up (matches franklin's impact card); three keep the 3-col
  // composition. A 2-of-3 grid would leave a rule-less blank column.
  const metricGrid =
    metrics && metrics.length === 2
      ? 'grid-cols-2 gap-x-6 md:gap-x-12'
      : 'grid-cols-1 sm:grid-cols-3 gap-8';

  if (isOvercast) {
    // Matches franklin's impact card: light surface-card + portfolio text tokens
    return (
      <section className="surface-card bg-portfolio-surface/50 rounded-card p-8 md:p-12 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          {label && <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted">{label}</p>}
          <h2 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">{heading}</h2>
        </div>

        {metrics && metrics.length > 0 && (
          <div className={`grid ${metricGrid}`}>
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-4 pb-4 border-b border-portfolio-rule">
                <span className="text-portfolio-primary font-bold text-stat">{m.value}</span>
                <span className="text-portfolio-muted text-body">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <p className="text-portfolio-muted text-body max-w-[560px]">{body}</p>

        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-muted text-caption font-mono uppercase tracking-widest underline underline-offset-4 hover:text-portfolio-primary transition-colors w-fit"
          >
            {link.text}
          </a>
        )}
      </section>
    );
  }

  return (
    <section className="bg-black rounded-card overflow-hidden">
      <DarkCard className="px-8 md:px-12 py-10 md:py-12 flex flex-col gap-8">

        <div className="flex flex-col gap-4">
          {label && <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-white/50">{label}</p>}
          <h2 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-white">{heading}</h2>
        </div>

        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-3">
                <span className="text-white font-bold text-stat">{m.value}</span>
                <span className="text-white/50 text-body pb-4 border-b border-white/[0.08]">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <p className="text-white/70 text-body max-w-[560px]">{body}</p>

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
