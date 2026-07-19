import { experience } from "@/lib/experience";

export default function ExperienceList() {
  return (
    <div className="flex flex-col">
      {/* 100px + 52px of fixed chrome is 44% of a 343px phone column — tighten below md */}
      {experience.map(({ years, company, isActive }) => (
        <div key={years} className="grid grid-cols-[auto_1fr] gap-x-5 md:grid-cols-[100px_1fr] md:gap-x-[52px] py-[3px] border-b border-portfolio-stroke/50 last:border-b-0">
          <p className="text-body font-medium text-portfolio-muted tracking-tight">{years}</p>
          <p className="text-body font-medium text-portfolio-muted tracking-tight flex items-center gap-2">
            {isActive && (
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-muted opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-muted opacity-40" />
              </span>
            )}
            {company}
          </p>
        </div>
      ))}
    </div>
  );
}
