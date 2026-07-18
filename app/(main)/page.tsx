import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-4 lg:pt-8 lg:pr-8 lg:pb-8 lg:pl-0">
      <Projects />
      <Footer />
    </div>
  );
}
