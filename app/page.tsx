import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="p-4 md:p-8 flex flex-col gap-4">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
