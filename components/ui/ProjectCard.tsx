import Link from "next/link";
import HoverCard from "@/components/ui/HoverCard";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.href} className="block">
    <HoverCard as="article" className="flex flex-col md:h-[560px]">
      {/* Text content */}
      <div className="flex flex-col gap-3 p-6 md:px-10 md:pt-10 md:pb-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const isFilled = project.filledTags?.includes(tag);
            return (
              <span
                key={tag}
                className={`border border-[#c7c7c2] group-hover:border-[#a8a8a3] transition-colors duration-[400ms] ease-in-out rounded-full px-3 py-[5px] text-caption font-mono text-portfolio-muted uppercase tracking-wider whitespace-nowrap${isFilled ? " bg-[#c7c7c2]/60" : ""}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <h2 className="text-h2 font-bold leading-[1.2] tracking-[-0.02em] text-portfolio-primary">
          {project.title}
        </h2>
      </div>

      {/* Image */}
      {project.variant === "small" ? (
        // Fixed width wider than card — overflows right and bottom edges
        <div className="relative flex-1 min-h-[280px]">
          <div
            className="absolute top-4 left-10 w-[640px] rounded-[12px] transition-transform duration-[400ms] ease-in-out group-hover:-translate-y-4"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              aspectRatio: "16/10",
            }}
          />
        </div>
      ) : (
        // Natural 16/10 size, overflows bottom edge
        <div className="px-6 md:px-10">
          <div
            className="card-visual-wrapper transition-transform duration-[400ms] ease-in-out group-hover:-translate-y-4"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>
      )}
    </HoverCard>
    </Link>
  );
}
