import type { ContactFields } from "@/lib/contact";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Plain-text fallback for clients that don't render HTML. */
export function contactEmailText(fields: ContactFields): string {
  return [
    `Nouveau message depuis le portfolio`,
    ``,
    `Nom     : ${fields.name}`,
    `Email   : ${fields.email}`,
    `Sujet   : ${fields.subject}`,
    ``,
    fields.message,
  ].join("\n");
}

export function contactEmailHtml(fields: ContactFields): string {
  const name = escapeHtml(fields.name);
  const email = escapeHtml(fields.email);
  const subject = escapeHtml(fields.subject);
  const message = escapeHtml(fields.message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html lang="fr">
  <body style="margin:0;padding:24px;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:28px 30px;border-bottom:1px solid rgba(255,255,255,.06);">
          <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#9b8fd6;font-weight:600;">
            Portfolio · Nouveau message
          </div>
          <div style="margin-top:8px;font-size:22px;font-weight:700;color:#f0f0f0;">
            ${subject}
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 30px;">
          <p style="margin:0 0 4px;font-size:13px;color:#8a8a8a;">De</p>
          <p style="margin:0 0 18px;font-size:15px;color:#e4e4e4;">
            ${name} &lt;<a href="mailto:${email}" style="color:#9b8fd6;text-decoration:none;">${email}</a>&gt;
          </p>
          <p style="margin:0 0 4px;font-size:13px;color:#8a8a8a;">Message</p>
          <div style="font-size:15px;line-height:1.7;color:#d0d0d0;white-space:pre-wrap;">${message}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 30px;background:rgba(255,255,255,.02);font-size:12px;color:#6a6a6a;">
          Répondez directement à cet email pour contacter ${name}.
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
