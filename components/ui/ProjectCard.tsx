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
                className={`inline-flex items-center h-[26px] border border-portfolio-rule group-hover:border-[#a8a8a3] transition-colors duration-[400ms] ease-in-out rounded-full px-3 text-caption font-mono text-portfolio-muted uppercase tracking-wider whitespace-nowrap${isFilled ? " bg-portfolio-rule/60" : ""}`}
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
        // In flex flow — card's fixed height + overflow-hidden handles right/bottom clipping
        <div
          className="ml-6 flex-shrink-0 w-[130%] bg-cover bg-left-top aspect-[16/10] rounded-[20px] transition-transform duration-[400ms] ease-in-out group-hover:-translate-y-4"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      ) : project.imageContain ? (
        // Portrait image — natural proportions, bleeds off bottom edge
        <div className="px-6 md:px-10">
          <div className="w-[68%] mx-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full transition-transform duration-[400ms] ease-in-out group-hover:-translate-y-4"
            />
          </div>
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
