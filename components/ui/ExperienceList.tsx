import { experience } from "@/lib/experience";
import WorkEntry from "@/components/ui/WorkEntry";

export default function ExperienceList() {
  return (
    <div className="flex flex-col gap-4">
      {experience.map((entry) => (
        <WorkEntry key={entry.company} {...entry} />
      ))}
    </div>
  );
}
