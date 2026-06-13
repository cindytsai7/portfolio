import type { Experience } from "@/lib/experience";

export default function WorkEntry({ years, company, isActive }: Experience) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted">{years}</p>
      <div className="flex items-center gap-2">
        {isActive && (
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-portfolio-muted opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-portfolio-muted" />
          </span>
        )}
        <p className="text-body font-medium text-portfolio-primary">{company}</p>
      </div>
    </div>
  );
}
