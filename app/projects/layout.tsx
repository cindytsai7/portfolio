import Footer from "@/components/sections/Footer";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="max-w-[1440px] mx-auto w-full p-4 md:p-8 pt-4">
        <Footer />
      </div>
    </>
  );
}
