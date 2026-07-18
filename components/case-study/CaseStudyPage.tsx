export default function CaseStudyPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-4 pt-4 overflow-hidden">
      {children}
    </div>
  );
}
