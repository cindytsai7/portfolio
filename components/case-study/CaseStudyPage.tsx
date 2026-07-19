export default function CaseStudyPage({ children }: { children: React.ReactNode }) {
  // overflow-x-clip, not overflow-hidden: this is an ancestor of the sticky rail's
  // sibling, and overflow-hidden on such an ancestor can break sticky positioning.
  return (
    <div className="w-full flex flex-col gap-4 pt-4 overflow-x-clip">
      {children}
    </div>
  );
}
