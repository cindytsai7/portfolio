import HeroCard from "@/components/ui/HeroCard";
import Reveal from "@/components/motion/Reveal";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col lg:flex-row">

      {/* Left rail — always sticky */}
      <div className="p-4 lg:pt-8 lg:pr-[60px] lg:pb-8 lg:pl-8 lg:w-[508px] lg:shrink-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col">
        <Reveal className="flex flex-col h-full">
          <HeroCard vertical />
        </Reveal>
      </div>

      {/* Right panel — scrolls with the page */}
      <div className="flex-1 min-w-0">
        {children}
      </div>

    </main>
  );
}
