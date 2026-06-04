import SectionBlock from "./SectionBlock";

interface Metric {
  value: string;
  label: string;
}

interface DarkOutroSectionProps {
  label: string;
  heading: string;
  body: string;
  metrics?: Metric[];
}

export default function DarkOutroSection({
  label,
  heading,
  body,
  metrics,
}: DarkOutroSectionProps) {
  return (
    <section className="bg-portfolio-primary rounded-[20px] px-8 md:px-16 py-16 md:py-20 flex flex-col gap-12">
      <SectionBlock label={label} heading={heading} light className="max-w-[720px]" />

      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-3">
              <span className="text-white font-bold text-[52px] leading-none">{m.value}</span>
              <span className="text-white/70 text-body pb-4 border-b border-white/20">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <p className="text-white/70 text-body leading-relaxed max-w-[640px]">{body}</p>
    </section>
  );
}
