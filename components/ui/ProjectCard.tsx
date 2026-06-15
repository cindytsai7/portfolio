import Link from "next/link";
import HoverCard from "@/components/ui/HoverCard";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function MetaString({ tags, index, passwordProtected }: { tags: string[]; index: number; passwordProtected?: boolean }) {
  const indexStr = String(index).padStart(2, "0");
  return (
    <div className="flex flex-col gap-1.5">
      <p className="font-mono text-[13px] tracking-[0.05em] uppercase">
        <span className="text-portfolio-muted">{indexStr}</span>
        {tags.map((tag) => (
          <span key={tag}>
            <span className="text-portfolio-rule"> · </span>
            <span className="text-portfolio-muted">{tag}</span>
          </span>
        ))}
      </p>
      {passwordProtected && (
        <p className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted">
          PASSWORD PROTECTED
        </p>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  if (project.variant === "editorial") {
    return (
      <Link href={project.href} className="block">
        <HoverCard as="article" className="flex flex-col md:h-[560px]">
          {/* Tags + Title + Description + password notice */}
          <div className="flex flex-col gap-3 px-6 pt-6 pb-6 md:px-10 md:pt-10 flex-1">
            <MetaString tags={project.tags} index={index} passwordProtected={project.passwordProtected} />
            <h2 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">
              {project.title}
            </h2>
            <p className="text-body text-portfolio-muted">
              {project.description}
            </p>
          </div>

          {/* Metadata footer */}
          <div className="flex gap-10 px-6 py-6 md:px-10 md:py-8">
            {project.role && (
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted">Role</span>
                <span className="text-body font-medium text-portfolio-muted">{project.role}</span>
              </div>
            )}
            {project.timeline && (
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[13px] tracking-[0.05em] uppercase text-portfolio-muted">Timeline</span>
                <span className="text-body font-medium text-portfolio-muted">{project.timeline}</span>
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
          <MetaString tags={project.tags} index={index} passwordProtected={project.passwordProtected} />
          <h2 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">
            {project.title}
          </h2>
        </div>

        {/* Image */}
        {project.variant === "small" ? (
          <div
            className="ml-6 flex-shrink-0 w-[130%] bg-cover bg-left-top min-h-[500px] rounded-[16px] transition-transform duration-[400ms] ease-in-out group-hover:-translate-y-4"
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
