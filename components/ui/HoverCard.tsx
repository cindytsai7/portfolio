interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function HoverCard({ children, className = "", as: Tag = "div" }: HoverCardProps) {
  return (
    <Tag className={`group bg-portfolio-surface hover:bg-[#dddcd7] transition-colors duration-[400ms] ease-in-out rounded-[20px] overflow-hidden ${className}`}>
      {children}
    </Tag>
  );
}
