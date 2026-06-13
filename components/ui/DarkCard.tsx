interface DarkCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function DarkCard({ children, className = "", as: Tag = "div" }: DarkCardProps) {
  return (
    <Tag className={`relative bg-white/5 rounded-card overflow-hidden ${className}`}>
      {children}
      <div className="absolute inset-0 rounded-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] pointer-events-none z-10" />
    </Tag>
  );
}
