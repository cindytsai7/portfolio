import { experience } from "@/lib/experience";

export default function ExperienceList() {
  return (
    // Single grid for the whole list (not one grid per row) so the auto-sized
    // year column shares one track and company names align down the list.
    <div className="grid grid-cols-[auto_1fr] md:grid-cols-[100px_1fr] gap-x-5 md:gap-x-[52px]">
      {experience.map(({ years, company, isActive }) => (
        <div key={years} className="col-span-2 grid grid-cols-subgrid py-[3px] border-b border-portfolio-stroke/50 last:border-b-0">
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
