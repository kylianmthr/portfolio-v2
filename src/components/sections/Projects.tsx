import { ProjectsGrid } from "@/components/ProjectsGrid";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="py-[120px] max-sm:py-20">
      <p className="s-tag reveal">Projets</p>
      <div className="s-sep reveal rd1" />
      <h2 className="s-title reveal rd2">
        Ce que j&apos;ai <span className="grad">construit</span>
      </h2>

      <ProjectsGrid projects={projects} />
    </section>
  );
}
