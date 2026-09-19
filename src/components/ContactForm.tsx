"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage } from "@/app/actions";
import {
  type ContactFields,
  initialContactState,
  LIMITS,
} from "@/lib/contact";

const EMPTY_FIELDS: ContactFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="font-jakarta text-xs" style={{ color: "#c86b6b" }}>
      {error}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-glow justify-center border-none"
      style={{ cursor: pending ? "not-allowed" : "pointer" }}
    >
      {pending ? "Envoi en cours…" : "Envoyer le message"}
      {!pending && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M22 2L11 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M22 2L15 22l-4-9-9-4 20-7z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    sendContactMessage,
    initialContactState,
  );
  // Controlled inputs: React resets an uncontrolled form after every action,
  // which would discard what the visitor typed whenever validation fails.
  const [fields, setFields] = useState<ContactFields>(EMPTY_FIELDS);

  // Each action response is a fresh object, so this runs once per submission:
  // clear the form on success, keep what was typed on failure.
  const [lastState, setLastState] = useState(state);
  if (state !== lastState) {
    setLastState(state);
    if (state.status === "success") setFields(EMPTY_FIELDS);
  }

  const update =
    (key: keyof ContactFields) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
      const { value } = event.target;
      setFields((prev) => ({ ...prev, [key]: value }));
    };

  const errors = state.fieldErrors;

  return (
    <form action={formAction} noValidate className="flex flex-col gap-[14px]">
      {/* Honeypot — hidden from users, catches naive bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="grid grid-cols-2 gap-[14px] max-sm:grid-cols-1">
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="name" className="sr-only">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nom"
            required
            maxLength={LIMITS.name}
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="c-input"
          />
          <FieldError id="name-error" error={errors.name} />
        </div>

        <div className="flex flex-col gap-[6px]">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            maxLength={LIMITS.email}
            autoComplete="email"
            value={fields.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="c-input"
          />
          <FieldError id="email-error" error={errors.email} />
        </div>
      </div>

      <div className="flex flex-col gap-[6px]">
        <label htmlFor="subject" className="sr-only">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Sujet"
          required
          maxLength={LIMITS.subject}
          value={fields.subject}
          onChange={update("subject")}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="c-input"
        />
        <FieldError id="subject-error" error={errors.subject} />
      </div>

      <div className="flex flex-col gap-[6px]">
        <label htmlFor="message" className="sr-only">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Votre message..."
          required
          maxLength={LIMITS.message}
          value={fields.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="c-input"
        />
        <FieldError id="message-error" error={errors.message} />
      </div>

      <SubmitButton />

      <p
        role="status"
        aria-live="polite"
        className="font-jakarta min-h-[18px] text-[13px]"
        style={{
          color: state.status === "success" ? "hsl(255,60%,76%)" : "#c86b6b",
        }}
      >
        {state.message}
      </p>
    </form>
  );
}
