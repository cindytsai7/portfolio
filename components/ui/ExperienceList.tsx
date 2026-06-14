import { experience } from "@/lib/experience";

export default function ExperienceList() {
  return (
    <div className="flex flex-col border-t border-portfolio-stroke">
      {experience.map(({ years, company, isActive }) => (
        <div key={years} className="grid grid-cols-[100px_1fr] gap-x-[52px] py-1 border-b border-portfolio-stroke">
          <div className="flex items-center">
            <p className="text-[1.5vh] font-medium leading-[2vh] text-portfolio-muted">{years}</p>
          </div>
          <p className="text-[1.5vh] font-medium leading-[2vh] text-portfolio-primary">{company}</p>
        </div>
      ))}
    </div>
  );
}
