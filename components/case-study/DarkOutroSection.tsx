import DarkCard from "@/components/ui/DarkCard";
import ArrowLink from "@/components/ui/ArrowLink";
import { CS_LABEL } from "@/components/case-study/tokens";

interface Metric {
  value: string;
  label: string;
}

interface Cta {
  href: string;
  label: string;
}

interface DarkOutroSectionProps {
  label?: string;
  /** Optional. compliance-review runs label + metrics only. */
  heading?: string;
  /** Optional closing paragraph. edge-admin-hub and edge-sidebar both pass one;
   *  compliance-review is metrics-only, so the card ends on the stat row. */
  body?: string;
  metrics?: Metric[];
  /** Optional trailing action bar. Renders inside the card so the CTA belongs to
   *  it rather than floating between the card and whatever follows. */
  cta?: Cta;
  /** Padding is a prop, not a className merge: `p-8` and an incoming `px-6` are
   *  different properties, so the cascade — not class order — would pick the
   *  winner. Overriding the whole string keeps it deterministic. */
  padding?: string;
  variant?: 'dark' | 'overcast';
}

export default function DarkOutroSection({
  label,
  heading,
  body,
  metrics,
  cta,
  padding = 'p-8 md:p-12',
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
      <section className={`surface-card bg-portfolio-surface/50 rounded-card ${padding} flex flex-col gap-12`}>
        <div className="flex flex-col gap-4">
          {label && <p className={CS_LABEL}>{label}</p>}
          {heading && <h2 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">{heading}</h2>}
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

        {body && <p className="text-portfolio-muted text-body max-w-[560px]">{body}</p>}

        {/* justify-end, not justify-between: with a single child justify-between
            resolves to flex-start, which would sit the CTA on the left.
            No border-t and no mt/pt — each metric already carries its own bottom
            rule, so a full-width rule here read as a doubled line, and the card's
            gap-12 supplies the spacing on its own. */}
        {cta && (
          <div className="flex items-center justify-end">
            <ArrowLink
              href={cta.href}
              external
              className="rounded-full border border-black/10 px-4 py-2 hover:bg-black/[0.03]"
            >
              {cta.label}
            </ArrowLink>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="bg-black rounded-card overflow-hidden">
      <DarkCard className="px-8 md:px-12 py-10 md:py-12 flex flex-col gap-8">

        <div className="flex flex-col gap-4">
          {/* Dark variant uses white label text; CS_LABEL bakes in the muted
              color, so this one stays inline to avoid a color conflict. */}
          {label && <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-white/50">{label}</p>}
          {heading && <h2 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-white">{heading}</h2>}
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

        {body && <p className="text-white/70 text-body max-w-[560px]">{body}</p>}

        {/* Dark twin of the overcast action bar. */}
        {cta && (
          <div className="flex items-center justify-end">
            <ArrowLink
              href={cta.href}
              external
              tone="inverse"
              className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/5"
            >
              {cta.label}
            </ArrowLink>
          </div>
        )}

      </DarkCard>
    </section>
  );
}
