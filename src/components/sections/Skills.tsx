import { skillGroups } from "@/lib/content";

const DELAYS = ["rd1", "rd2", "rd3", "rd4"];

export function Skills() {
  return (
    <section id="skills" className="py-[120px] max-sm:py-20">
      <p className="s-tag reveal">Compétences</p>
      <div className="s-sep reveal rd1" />
      <h2 className="s-title reveal rd2">
        Mon <span className="grad">environnement</span>
      </h2>

      <div className="mt-12 grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            className={`skill-g reveal ${DELAYS[i % DELAYS.length]}`}
          >
            <p className="skill-g-label">{group.label}</p>
            <div className="flex flex-wrap gap-[9px]">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
