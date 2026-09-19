import { projects } from "@/lib/content";

const DELAYS = ["rd1", "rd2", "rd3"];

export function Projects() {
  return (
    <section id="projects" className="py-[120px] max-sm:py-20">
      <p className="s-tag reveal">Projets</p>
      <div className="s-sep reveal rd1" />
      <h2 className="s-title reveal rd2">
        Ce que j&apos;ai <span className="grad">construit</span>
      </h2>

      <div className="mt-12 grid grid-cols-3 gap-[22px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`card reveal ${DELAYS[i % DELAYS.length]}`}
          >
            <p className="card-tag">{project.tag}</p>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
