import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/motion/Reveal";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="work" className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
      {projects.map((project, i) => (
        <div
          key={project.id}
          className={project.colSpan === 2 ? "lg:col-span-2" : "lg:col-span-1"}
        >
          <Reveal delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        </div>
      ))}
    </section>
  );
}
