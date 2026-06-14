import { experience } from "@/lib/experience";

export default function ExperienceList() {
  return (
    <div className="flex flex-col border-t border-portfolio-stroke">
      {experience.map(({ years, company }) => (
        <div key={years} className="grid grid-cols-[100px_1fr] gap-x-[52px] py-[3px] border-b border-portfolio-stroke">
          <p className="text-body font-medium leading-[1.25] tracking-tight text-portfolio-muted">{years}</p>
          <p className="text-body font-medium leading-[1.25] tracking-tight text-portfolio-primary">{company}</p>
        </div>
      ))}
    </div>
  );
}
