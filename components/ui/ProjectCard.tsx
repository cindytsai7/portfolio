import Link from "next/link";
import HoverCard from "@/components/ui/HoverCard";
import type { Project } from "@/lib/projects";

function CardHeader({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="flex justify-between items-start gap-6 px-6 pt-6 lg:px-10 lg:pt-10 pb-6">
      <h2 className="text-[20px] font-semibold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">
        {title}
      </h2>
      <div className="flex flex-col text-left shrink-0">
        {tags.map((tag) => (
          <span key={tag} className="text-[20px] font-normal leading-[1.08] tracking-[-0.025em] text-portfolio-muted">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function MetaLogo() {
  return (
    <img
      src="/projects/Meta_lockup_mono_black_RGB.png"
      alt="Meta"
      className="w-[180px] select-none"
    />
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  if (project.lockIcon) {
    return (
      <Link href={project.href} className="block">
        <HoverCard as="article" className="flex flex-col lg:h-[460px]">
          <CardHeader title={project.title} tags={project.tags} />
          <div className="absolute inset-0 flex items-center justify-center">
            <MetaLogo />
          </div>
        </HoverCard>
      </Link>
    );
  }

  return (
    <Link href={project.href} className="block">
      <HoverCard as="article" className="flex flex-col lg:h-[460px]">
        <CardHeader title={project.title} tags={project.tags} />

        {project.imageContain ? (
          <div className="flex-1 flex items-center px-6 pb-6 lg:px-10 lg:pb-8">
            <div className="mx-auto" style={{ width: project.imageWidth ?? "68%" }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-[6px] transition-transform duration-[400ms] ease-in-out group-hover:-translate-y-4"
              />
            </div>
          </div>
        ) : (
          <div className="px-6 lg:px-10">
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
