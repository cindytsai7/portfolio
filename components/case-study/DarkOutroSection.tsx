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
  link?: { text: string; href: string };
}

export default function DarkOutroSection({
  label,
  heading,
  body,
  metrics,
  link,
}: DarkOutroSectionProps) {
  return (
    <section className="bg-portfolio-primary rounded-[20px] ring-1 ring-inset ring-[#2C2C2C] px-8 md:px-16 py-16 md:py-20 flex flex-col gap-12">
      <SectionBlock label={label} heading={heading} light />

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

      <p className="text-white/70 text-body leading-relaxed">{body}</p>

      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 text-caption font-mono uppercase tracking-widest underline underline-offset-4 hover:text-white/80 transition-colors w-fit"
        >
          {link.text}
        </a>
      )}
    </section>
  );
}
