import SectionBlock from "./SectionBlock";
import Reveal from "@/components/motion/Reveal";

interface ColumnItem {
  heading: string;
  body: string;
}

interface ThreeColumnSectionProps {
  label: string;
  title: string;
  columns: ColumnItem[];
}

export default function ThreeColumnSection({
  label,
  title,
  columns,
}: ThreeColumnSectionProps) {
  return (
    <div className="bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-10">
      <SectionBlock label={label} heading={title} />
      <div className="grid md:grid-cols-3 gap-8">
        {columns.map((col, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="flex flex-col gap-4">
              <div className="bg-portfolio-rule h-px w-full" />
              <h3 className="text-h2 font-bold text-portfolio-primary">{col.heading}</h3>
              <p className="text-body text-portfolio-muted">{col.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
