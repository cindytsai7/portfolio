import type { ReactNode } from "react";

/**
 * Uppercase text link with a trailing ↗ arrow (viewBox 0 0 11 11).
 * The single source for this pattern — used by the /about hero links and
 * compliance-review's "Read Meta's Announcement" link. The arrow is part of
 * this component, so callers pass text only — never a literal ↗ in children.
 */
export default function ArrowLink({
  href,
  external = false,
  tone = "default",
  className = "",
  children,
}: {
  href: string;
  external?: boolean;
  /** "inverse" for use on dark surfaces. A `text-*` class passed via className
   *  would collide with the base colour — same specificity, and the winner is
   *  decided by stylesheet order, not class order — so the colour is a prop. */
  tone?: "default" | "inverse";
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-0.5 text-[14px] font-bold uppercase ${
        tone === "inverse" ? "text-white" : "text-portfolio-primary"
      } transition-opacity duration-200 hover:opacity-60 ${className}`}
    >
      {children}
      <svg
        viewBox="0 0 11 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[0.65em] h-[0.65em] shrink-0"
      >
        <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" />
      </svg>
    </a>
  );
}
