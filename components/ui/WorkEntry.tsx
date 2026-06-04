import type { Experience } from "@/lib/experience";

export default function WorkEntry({ years, company, isActive, isLast }: Experience & { isLast?: boolean }) {
  return (
    <div>
      <p className="text-caption font-mono text-portfolio-muted uppercase tracking-widest">{years}</p>
      <div className="flex items-center gap-2 mt-0.5">
        {isActive && (
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-portfolio-muted opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-portfolio-muted" />
          </span>
        )}
        <p className="text-body font-medium text-portfolio-primary">{company}</p>
      </div>
      {!isLast && <hr className="border-t border-portfolio-muted/30 mt-3" />}
    </div>
  );
}
