interface SectionBlockProps {
  label?: string;
  heading: string;
  body?: string;
  className?: string;
  bodyClassName?: string;
  light?: boolean;
}

export default function SectionBlock({
  label,
  heading,
  body,
  className = "",
  bodyClassName = "",
  light = false,
}: SectionBlockProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col gap-1">
        {label && (
          <p className={`text-caption font-mono uppercase tracking-widest ${light ? "text-white/50" : "text-portfolio-muted"}`}>
            {label}
          </p>
        )}
        <h2 className={`text-h1 font-bold leading-tight tracking-tight ${light ? "text-white" : "text-portfolio-primary"}`}>
          {heading}
        </h2>
      </div>
      {body && (
        <p className={`text-body max-w-[560px] ${light ? "text-white/70" : "text-portfolio-muted"} ${bodyClassName}`}>
          {body}
        </p>
      )}
    </div>
  );
}
