import CaseStudyNav from "./CaseStudyNav";

export default function CaseStudyPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-portfolio-background">
      <CaseStudyNav />
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-4 pt-4 overflow-hidden">
        {children}
      </div>
    </main>
  );
}
