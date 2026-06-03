import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section className="flex flex-col gap-4 md:grid md:grid-cols-[2fr_1fr]">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
