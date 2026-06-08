import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/motion/Reveal";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section className="flex flex-col gap-4 md:grid md:grid-cols-3">
      {projects.map((project, i) => (
        <div
          key={project.id}
          className={project.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"}
        >
          <Reveal delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        </div>
      ))}
    </section>
  );
}
