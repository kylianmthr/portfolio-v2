export type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof ContactFields, string>>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: FieldErrors;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

export const LIMITS = {
  name: 80,
  email: 254,
  subject: 120,
  message: 4000,
} as const;

// Deliberately permissive: real delivery is the only true validation.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(fields: ContactFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!fields.name) errors.name = "Le nom est requis.";
  else if (fields.name.length > LIMITS.name)
    errors.name = `Le nom ne peut pas dépasser ${LIMITS.name} caractères.`;

  if (!fields.email) errors.email = "L'email est requis.";
  else if (fields.email.length > LIMITS.email || !EMAIL_RE.test(fields.email))
    errors.email = "Cet email ne semble pas valide.";

  if (!fields.subject) errors.subject = "Le sujet est requis.";
  else if (fields.subject.length > LIMITS.subject)
    errors.subject = `Le sujet ne peut pas dépasser ${LIMITS.subject} caractères.`;

  if (!fields.message) errors.message = "Le message est requis.";
  else if (fields.message.length < 10)
    errors.message = "Le message doit faire au moins 10 caractères.";
  else if (fields.message.length > LIMITS.message)
    errors.message = `Le message ne peut pas dépasser ${LIMITS.message} caractères.`;

  return errors;
}
