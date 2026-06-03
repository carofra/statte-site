import LabBookingForm from "@/components/lab/LabBookingForm";
import {
  buildBookingSubject,
  buildDefaultBookingMessage,
  hasWeb3FormsKey,
  resolveBookingRecipient,
} from "@/lib/booking";

const btnClass =
  "inline-flex w-full items-center justify-center border border-black bg-[#1d1d1b] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white [text-shadow:0_1px_0_rgba(0,0,0,0.35)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:py-5 md:text-sm md:tracking-[0.26em]";

type Props = {
  /** Email prenotazione solo per questo lab (da data/labs.js). */
  bookingEmail?: string;
  /** Titolo laboratorio usato nel subject della mail. */
  labTitle?: string;
  /**
   * Se presente, sostituisce il bottone di prenotazione con questa nota
   * (es. laboratorio riservato a un'utenza specifica).
   */
  bookingNotice?: string;
};

export default function LabBookingPanel({ bookingEmail, labTitle, bookingNotice }: Props) {
  const notice = typeof bookingNotice === "string" ? bookingNotice.trim() : "";
  const subjectTitle = typeof labTitle === "string" ? labTitle.trim() : "";
  const recipientEmail = resolveBookingRecipient(bookingEmail);
  const bookingSubject = buildBookingSubject(subjectTitle);
  const defaultMessage = buildDefaultBookingMessage(subjectTitle);
  const canBook = hasWeb3FormsKey() && Boolean(recipientEmail);

  return (
    <aside className="mt-12 w-full border-t border-black pt-10 md:mt-0 md:border-t-0 md:pt-0">
      <div className="sticky top-24 w-full md:top-28 lg:top-32">
        {notice ? (
          <div
            role="note"
            className="border-t border-black/40 pt-4 text-left text-xs font-normal leading-relaxed text-black/80 md:text-[13px] md:leading-relaxed"
          >
            <p className="m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]">
              Accesso riservato
            </p>
            <p className="mt-2 m-0">{notice}</p>
          </div>
        ) : canBook ? (
          <details className="w-full">
            <summary
              className={`${btnClass} list-none cursor-pointer [&::-webkit-details-marker]:hidden`}
              style={{ color: "#fff" }}
            >
              PRENOTA IL TUO POSTO
            </summary>

            <LabBookingForm
              labTitle={subjectTitle}
              bookingSubject={bookingSubject}
              defaultMessage={defaultMessage}
              recipientEmail={recipientEmail}
            />
          </details>
        ) : (
          <span
            className={`${btnClass} cursor-not-allowed border-black/70 text-[#f8f8f8]/85`}
            title="Aggiungi NEXT_PUBLIC_WEB3FORMS_KEY in .env.local e l'email destinatario in NEXT_PUBLIC_BOOKING_EMAIL o BOOKING_EMAIL_FALLBACK"
          >
            PRENOTA IL TUO POSTO
          </span>
        )}
      </div>
    </aside>
  );
}
