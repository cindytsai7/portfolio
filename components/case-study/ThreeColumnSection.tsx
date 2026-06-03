import SectionBlock from "./SectionBlock";

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
          <div key={i} className="flex flex-col gap-4">
            <div className="bg-[#c7c7c2] h-px w-full" />
            <h3 className="text-h2 font-bold text-portfolio-primary">{col.heading}</h3>
            <p className="text-body text-portfolio-muted">{col.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
