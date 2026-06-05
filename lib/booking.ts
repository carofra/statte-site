import { BOOKING_EMAIL_FALLBACK } from "@/lib/stantteData";

export function resolveBookingRecipient(bookingEmail?: string): string {
  const fromLab = typeof bookingEmail === "string" ? bookingEmail.trim() : "";
  const fromEnv =
    typeof process.env.NEXT_PUBLIC_BOOKING_EMAIL === "string"
      ? process.env.NEXT_PUBLIC_BOOKING_EMAIL.trim()
      : "";
  return fromLab || fromEnv || BOOKING_EMAIL_FALLBACK.trim();
}

export function buildBookingSubject(labTitle?: string, session?: string): string {
  const title = typeof labTitle === "string" ? labTitle.trim() : "";
  const sessionLine = typeof session === "string" ? session.trim() : "";
  const base = `Prenotazione laboratorio - ${title || "Stattð 2026"}`;
  return sessionLine ? `${base} - ${sessionLine}` : base;
}

export function buildDefaultBookingMessage(labTitle?: string, session?: string): string {
  const title = typeof labTitle === "string" ? labTitle.trim() : "";
  const sessionLine = typeof session === "string" ? session.trim() : "";
  const labPart = title ? ` il laboratorio ${title}` : " un laboratorio";
  const sessionPart = sessionLine ? ` per la sessione del ${sessionLine}` : "";
  return `Ciao, vorrei prenotare${labPart}${sessionPart}.`;
}

export function buildBookingMessageWithSession(message: string, session?: string): string {
  const body = message.trim();
  const sessionLine = typeof session === "string" ? session.trim() : "";
  if (!sessionLine) return body;
  const sessionBlock = `Sessione: ${sessionLine}`;
  return body ? `${sessionBlock}\n\n${body}` : sessionBlock;
}

export function hasWeb3FormsKey(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim());
}
