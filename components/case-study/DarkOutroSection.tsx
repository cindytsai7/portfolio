import SectionBlock from "./SectionBlock";

interface DarkOutroSectionProps {
  label: string;
  heading: string;
  body: string;
}

export default function DarkOutroSection({
  label,
  heading,
  body,
}: DarkOutroSectionProps) {
  return (
    <section className="bg-portfolio-primary rounded-[20px] px-8 md:px-16 py-24 md:py-32">
      <div className="max-w-[720px]">
        <SectionBlock label={label} heading={heading} body={body} light />
      </div>
    </section>
  );
}
