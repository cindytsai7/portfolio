interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function HoverCard({ children, className = "", as: Tag = "div" }: HoverCardProps) {
  return (
    <Tag className={`group relative bg-portfolio-surface/50 hover:bg-portfolio-surface/80 transition-colors duration-[400ms] ease-in-out rounded-card overflow-hidden ${className}`}>
      {children}
      <div className="absolute inset-0 rounded-card shadow-[inset_0_0_0_1px_#E6E5E1] pointer-events-none z-10" />
    </Tag>
  );
}
