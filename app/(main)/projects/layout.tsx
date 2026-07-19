import Footer from "@/components/sections/Footer";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* pt small at all widths — md:p-8 was overriding the trailing pt-4, forcing
          32px back and leaving a large gap above the footer. 16px matches the
          landing page's card-to-footer gap. */}
      <div className="w-full px-4 md:px-8 pb-4 md:pb-8 pt-4">
        <Footer />
      </div>
    </>
  );
}
