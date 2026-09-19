"use client";

import { useCallback, useRef, useState } from "react";
import { navLinks, site } from "@/lib/content";

type FrameStyle = {
  left: number;
  top: number;
  width: number;
  height: number;
  opacity: number;
};

const HIDDEN: FrameStyle = { left: 0, top: 0, width: 0, height: 0, opacity: 0 };

/**
 * Pill navigation with a frame that slides to whichever item is hovered.
 * The frame geometry is measured from the DOM, mirroring the mockup.
 */
export function Navbar() {
  const pillRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState<FrameStyle>(HIDDEN);

  const moveFrame = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const pill = pillRef.current;
    if (!pill) return;
    const pr = pill.getBoundingClientRect();
    const ir = event.currentTarget.getBoundingClientRect();
    setFrame({
      left: ir.left - pr.left,
      top: ir.top - pr.top,
      width: ir.width,
      height: ir.height,
      opacity: 1,
    });
  }, []);

  const hideFrame = useCallback(() => {
    setFrame((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <nav className="fixed top-[22px] left-1/2 z-100 -translate-x-1/2">
      <div className="max-[400px]:max-w-[calc(100vw-32px)] max-[400px]:overflow-x-auto">
        <div
          ref={pillRef}
          onMouseLeave={hideFrame}
          className="relative flex items-center gap-[2px] rounded-[50px] border border-white/[0.07] px-[14px] py-2 backdrop-blur-[30px] max-sm:gap-0 max-sm:px-[10px] max-sm:py-[6px]"
          style={{
            background: "rgba(10,10,10,.88)",
            boxShadow: "0 4px 32px rgba(0,0,0,.7)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute z-0 rounded-[50px] border"
            style={{
              borderColor: "hsla(255,55%,75%,.3)",
              background: "hsla(255,55%,75%,.05)",
              left: frame.left,
              top: frame.top,
              width: frame.width,
              height: frame.height,
              opacity: frame.opacity,
              transition:
                "left .22s cubic-bezier(0.4,0,0.2,1), width .22s cubic-bezier(0.4,0,0.2,1), top .22s cubic-bezier(0.4,0,0.2,1), height .22s cubic-bezier(0.4,0,0.2,1), opacity .18s",
            }}
          />

          <a
            href="#hero"
            onMouseEnter={moveFrame}
            className="nav-link font-syne max-sm:!px-[10px] max-sm:!text-xs"
            style={{ color: "#c8c8c8", fontWeight: 700, fontSize: 14 }}
          >
            {site.name}
          </a>

          <div className="mx-1 h-[14px] w-px shrink-0 bg-white/[0.07]" />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={moveFrame}
              className="nav-link max-sm:!px-[10px] max-sm:!text-xs"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
