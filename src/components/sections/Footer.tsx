import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative z-1 border-t border-white/[0.04]">
      <div className="flex items-center justify-between px-[120px] py-7 max-lg:px-[clamp(32px,6vw,80px)] max-sm:flex-col max-sm:gap-[14px] max-sm:p-6 max-sm:text-center">
        <span
          className="font-display text-[13px] font-bold"
          style={{ color: "#b4b4b4" }}
        >
          {site.name}.
        </span>

        <nav className="flex gap-6 max-sm:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="f-link">
              {link.label}
            </a>
          ))}
        </nav>

        <span className="font-body text-xs" style={{ color: "#9a9a9a" }}>
          © {new Date().getFullYear()} {site.fullName}
        </span>
      </div>
    </footer>
  );
}
