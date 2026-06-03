import { BOOKING_EMAIL_FALLBACK } from "@/lib/stantteData";

export function resolveBookingRecipient(bookingEmail?: string): string {
  const fromLab = typeof bookingEmail === "string" ? bookingEmail.trim() : "";
  const fromEnv =
    typeof process.env.NEXT_PUBLIC_BOOKING_EMAIL === "string"
      ? process.env.NEXT_PUBLIC_BOOKING_EMAIL.trim()
      : "";
  return fromLab || fromEnv || BOOKING_EMAIL_FALLBACK.trim();
}

export function buildBookingSubject(labTitle?: string): string {
  const title = typeof labTitle === "string" ? labTitle.trim() : "";
  return `Prenotazione laboratorio - ${title || "Stattð 2026"}`;
}

export function buildDefaultBookingMessage(labTitle?: string): string {
  const title = typeof labTitle === "string" ? labTitle.trim() : "";
  return `Ciao, vorrei prenotare il laboratorio${title ? ` ${title}` : ""}.`;
}

export function hasWeb3FormsKey(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim());
}
