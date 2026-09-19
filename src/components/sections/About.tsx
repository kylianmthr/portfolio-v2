import { stats } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="py-[120px] max-sm:py-20">
      <p className="s-tag reveal">À propos</p>
      <div className="s-sep reveal rd1" />

      <div className="reveal rd2 grid grid-cols-2 items-start gap-20 max-lg:grid-cols-1 max-lg:gap-12">
        <div>
          <h2 className="s-title">
            Passionné par le bas <span className="grad">niveau</span> et l&apos;IA
          </h2>
          <p
            className="mt-6 max-w-[460px] text-[15px]"
            style={{ color: "#303030", lineHeight: 1.85 }}
          >
            Étudiant à l&apos;École 42, je construis des outils robustes en C, C++
            et Python. Ma curiosité m&apos;emmène des entrailles du système
            d&apos;exploitation jusqu&apos;aux architectures de modèles de langage.
          </p>
          <p
            className="mt-4 max-w-[460px] text-[15px]"
            style={{ color: "#303030", lineHeight: 1.85 }}
          >
            J&apos;aime comprendre comment les choses fonctionnent vraiment —
            qu&apos;il s&apos;agisse d&apos;un scheduler ou d&apos;un transformer.
          </p>

          <div className="mt-9 flex flex-wrap gap-[14px] max-sm:flex-col">
            <a href="#contact" className="btn-glow">
              Me contacter
            </a>
            <a href="#projects" className="btn-ghost">
              Voir mes projets
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`stat-card ${stat.wide ? "col-span-full" : ""}`}
            >
              <div
                className="stat-num"
                style={stat.wide ? { fontSize: 28 } : undefined}
              >
                {stat.value}
              </div>
              <div className="stat-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
