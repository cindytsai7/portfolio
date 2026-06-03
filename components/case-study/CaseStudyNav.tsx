import Link from "next/link";

export default function CaseStudyNav() {
  return (
    <nav className="sticky top-0 z-10 bg-portfolio-background/90 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 py-4 md:py-8">
      <Link
        href="/"
        className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors"
      >
        ← Back
      </Link>
      <Link
        href="/about"
        className="text-body text-portfolio-primary hover:text-portfolio-muted transition-colors"
      >
        About
      </Link>
    </nav>
  );
}
