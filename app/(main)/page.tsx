import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  // pl-0 only once the rail is beside us (xl); below that it stacks and needs symmetric padding
  return (
    <div className="flex flex-col gap-4 px-4 pb-4 xl:pt-8 xl:pr-8 xl:pb-8 xl:pl-0">
      <Projects />
      <Footer />
    </div>
  );
}
