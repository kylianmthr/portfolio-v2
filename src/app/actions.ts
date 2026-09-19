"use server";

import { Resend } from "resend";
import {
  type ContactFields,
  type ContactState,
  validateContact,
} from "@/lib/contact";
import { contactEmailHtml, contactEmailText } from "@/lib/email-template";

const FALLBACK_FROM = "Portfolio Kylian <onboarding@resend.dev>";

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill a field they cannot see.
  if (readField(formData, "company") !== "") {
    return { status: "success", message: "Message envoyé.", fieldErrors: {} };
  }

  const fields: ContactFields = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    subject: readField(formData, "subject"),
    message: readField(formData, "message"),
  };

  const fieldErrors = validateContact(fields);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Merci de corriger les champs indiqués.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Contact: RESEND_API_KEY et/ou CONTACT_TO_EMAIL ne sont pas définis.",
    );
    return {
      status: "error",
      message:
        "Le formulaire n'est pas configuré pour le moment. Écrivez-moi directement par email.",
      fieldErrors: {},
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || FALLBACK_FROM,
      to: [to],
      replyTo: fields.email,
      subject: `[Portfolio] ${fields.subject}`,
      html: contactEmailHtml(fields),
      text: contactEmailText(fields),
    });

    if (error) {
      console.error("Resend a refusé l'envoi:", error);
      return {
        status: "error",
        message:
          "L'envoi a échoué. Réessayez dans un instant ou écrivez-moi directement.",
        fieldErrors: {},
      };
    }

    return {
      status: "success",
      message: "Message envoyé — je vous réponds très vite.",
      fieldErrors: {},
    };
  } catch (cause) {
    console.error("Erreur inattendue à l'envoi du message de contact:", cause);
    return {
      status: "error",
      message:
        "L'envoi a échoué. Réessayez dans un instant ou écrivez-moi directement.",
      fieldErrors: {},
    };
  }
}
