interface CaseStudySectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function CaseStudySection({ children, className = "" }: CaseStudySectionProps) {
  return (
    <section className={`px-4 md:px-8 ${className}`}>
      {children}
    </section>
  );
}
