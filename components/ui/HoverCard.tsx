interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function HoverCard({ children, className = "", as: Tag = "div" }: HoverCardProps) {
  return (
    <Tag className={`group relative bg-portfolio-surface hover:bg-[#dddcd7] transition-colors duration-[400ms] ease-in-out rounded-[20px] overflow-hidden ${className}`}>
      {children}
      <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_0_1px_#E6E5E1] pointer-events-none z-10" />
    </Tag>
  );
}
