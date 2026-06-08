import Link from "next/link";
import HoverCard from "@/components/ui/HoverCard";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

function TagList({ tags, filledTags }: { tags: string[]; filledTags?: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isFilled = filledTags?.includes(tag);
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
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (project.variant === "editorial") {
    return (
      <Link href={project.href} className="block">
        <HoverCard as="article" className="flex flex-col md:h-[560px]">
          {/* Tags + Title + Description + password notice */}
          <div className="flex flex-col gap-3 px-6 pt-6 pb-6 md:px-10 md:pt-10 flex-1">
            <TagList tags={project.tags} filledTags={project.filledTags} />
            <h2 className="text-h2 font-bold leading-[1.2] tracking-[-0.02em] text-portfolio-primary">
              {project.title}
            </h2>
            <p className="text-body text-portfolio-muted leading-snug">
              {project.description}
            </p>
            {project.passwordProtected && (
              <span className="text-caption font-mono uppercase tracking-wider text-portfolio-muted">This project is password protected</span>
            )}
          </div>

          {/* Metadata footer */}
          <div className="flex gap-10 px-6 py-6 md:px-10 md:py-8">
            {project.role && (
              <div className="flex flex-col gap-1">
                <span className="text-caption font-mono uppercase tracking-wider text-portfolio-muted">Role</span>
                <span className="text-body font-medium text-portfolio-primary">{project.role}</span>
              </div>
            )}
            {project.timeline && (
              <div className="flex flex-col gap-1">
                <span className="text-caption font-mono uppercase tracking-wider text-portfolio-muted">Timeline</span>
                <span className="text-body font-medium text-portfolio-primary">{project.timeline}</span>
              </div>
            )}
          </div>
        </HoverCard>
      </Link>
    );
  }

  return (
    <Link href={project.href} className="block">
    <HoverCard as="article" className="flex flex-col md:h-[560px]">
      {/* Text content */}
      <div className="flex flex-col gap-3 p-6 md:px-10 md:pt-10 md:pb-6">
        <TagList tags={project.tags} filledTags={project.filledTags} />
        <h2 className="text-h2 font-bold leading-[1.2] tracking-[-0.02em] text-portfolio-primary">
          {project.title}
        </h2>
      </div>

      {/* Image */}
      {project.variant === "small" ? (
        <div
          className="ml-6 flex-shrink-0 w-[130%] bg-cover bg-left-top min-h-[500px] rounded-[20px] transition-transform duration-[400ms] ease-in-out group-hover:-translate-y-4"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      ) : project.imageContain ? (
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
