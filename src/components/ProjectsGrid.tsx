"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/content";

const DELAYS = ["rd1", "rd2", "rd3"];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Drive the native <dialog> from state: it gives us Escape, focus
  // containment and an inert background for free.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    else if (!active && dialog.open) dialog.close();
  }, [active]);

  const close = useCallback(() => setActive(null), []);

  // Close on backdrop click. Tested against the dialog's box rather than the
  // event target, which stays correct however the panel is filled.
  const onDialogClick = useCallback(
    (event: React.MouseEvent<HTMLDialogElement>) => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      const box = dialog.getBoundingClientRect();
      const inside =
        event.clientX >= box.left &&
        event.clientX <= box.right &&
        event.clientY >= box.top &&
        event.clientY <= box.bottom;
      if (!inside) setActive(null);
    },
    [],
  );

  return (
    <>
      <div className="mt-12 grid grid-cols-3 gap-[22px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setActive(project)}
            aria-haspopup="dialog"
            className={`card card-interactive reveal ${DELAYS[i % DELAYS.length]} ${
              project.featured ? "card-featured" : ""
            }`}
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
            <span className="card-more">
              En savoir plus
              <ArrowIcon />
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClick={onDialogClick}
        onClose={close}
        aria-labelledby="project-dialog-title"
        className="project-dialog"
      >
        {active && (
          <div className="project-dialog-inner">
            <button
              type="button"
              onClick={close}
              className="project-dialog-close"
              aria-label="Fermer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <p className="card-tag">{active.tag}</p>
            <h3 id="project-dialog-title" className="project-dialog-title">
              {active.title}
            </h3>
            <p className="project-dialog-summary">{active.summary}</p>

            {active.details.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="project-dialog-text">
                {paragraph}
              </p>
            ))}

            {active.highlights.length > 0 && (
              <ul className="project-dialog-list">
                {active.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            <div className="mt-2 flex flex-wrap gap-2">
              {active.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            {active.link && (
              <a
                href={active.link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-glow mt-7 self-start"
              >
                {active.link.label}
                <ExternalIcon />
              </a>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
