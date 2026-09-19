import { HeroCanvas } from "@/components/HeroCanvas";
import { site } from "@/lib/content";

const RINGS = [
  { size: "clamp(200px,30vw,380px)", delay: "0s", color: "hsla(255,55%,75%,.05)" },
  { size: "clamp(300px,45vw,580px)", delay: "1.2s", color: "hsla(255,55%,75%,.03)" },
  { size: "clamp(420px,62vw,800px)", delay: "2.4s", color: "hsla(255,55%,75%,.016)" },
  { size: "clamp(560px,80vw,1040px)", delay: "3.6s", color: "hsla(255,55%,75%,.009)" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroCanvas />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {RINGS.map((ring, i) => (
          <div
            key={ring.size}
            className={`hero-ring ${i === 3 ? "max-sm:hidden" : ""}`}
            style={{
              width: ring.size,
              height: ring.size,
              animationDelay: ring.delay,
              borderColor: ring.color,
            }}
          />
        ))}
      </div>

      <div className="animate-fade-up relative z-1 text-center">
        <h1
          className="grad font-display"
          style={{
            fontSize: "clamp(52px,11vw,148px)",
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: "-2px",
          }}
        >
          {site.name}.
        </h1>
        <div
          className="mx-auto h-px w-[52px]"
          style={{
            background: "hsla(255,55%,75%,.25)",
            marginBlock: "clamp(20px,3vw,34px)",
          }}
        />
        <p
          className="font-display"
          style={{
            fontSize: "clamp(13px,1.5vw,17px)",
            fontWeight: 400,
            color: "#9a9a9a",
            letterSpacing: "2px",
          }}
        >
          {site.role} &nbsp;·&nbsp; {site.location}
        </p>
      </div>

      <a
        href="#about"
        className="animate-bounce-arrow absolute bottom-[52px] left-1/2 flex flex-col items-center gap-[9px] no-underline"
      >
        <span
          className="font-body text-[10px] font-semibold uppercase"
          style={{ color: "#808080", letterSpacing: "3px" }}
        >
          Scroll
        </span>
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden>
          <path
            d="M1 1l8 8 8-8"
            stroke="hsla(255,55%,75%,.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="sr-only">Aller à la section À propos</span>
      </a>
    </section>
  );
}
