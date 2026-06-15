import { experience } from "@/lib/experience";

export default function ExperienceList() {
  return (
    <div className="flex flex-col">
      {experience.map(({ years, company }) => (
        <div key={years} className="grid grid-cols-[100px_1fr] gap-x-[52px] py-[3px] border-b border-portfolio-stroke/50 last:border-b-0">
          <p className="text-body font-medium text-portfolio-muted tracking-tight">{years}</p>
          <p className="text-body font-medium text-portfolio-primary tracking-tight">{company}</p>
        </div>
      ))}
    </div>
  );
}
