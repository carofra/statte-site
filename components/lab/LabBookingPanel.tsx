import { EVENTBRITE_BOOKING_FALLBACK } from "@/lib/stantteData";

const btnClass =
  "inline-flex w-full items-center justify-center border border-black bg-[#1d1d1b] px-6 py-4 text-center text-xs font-normal uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:py-5 md:text-sm md:tracking-[0.26em]";

type Props = {
  /** URL pagina Eventbrite solo per questo lab (da data/labs.js). */
  eventbriteUrl?: string;
};

export default function LabBookingPanel({ eventbriteUrl }: Props) {
  const fromLab = typeof eventbriteUrl === "string" ? eventbriteUrl.trim() : "";
  const fromEnv =
    typeof process.env.NEXT_PUBLIC_EVENTBRITE_URL === "string"
      ? process.env.NEXT_PUBLIC_EVENTBRITE_URL.trim()
      : "";
  const bookingUrl = fromLab || fromEnv || EVENTBRITE_BOOKING_FALLBACK.trim();

  return (
    <aside className="mt-12 w-full border-t border-black pt-10 md:mt-0 md:border-t-0 md:pt-0">
      <div className="sticky top-24 w-full md:top-28 lg:top-32">
        {bookingUrl ? (
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnClass}
          >
            PRENOTA IL TUO POSTO
          </a>
        ) : (
          <span
            className={`${btnClass} cursor-not-allowed opacity-60`}
            title="Aggiungi eventbriteUrl sul lab in data/labs.js, oppure NEXT_PUBLIC_EVENTBRITE_URL / EVENTBRITE_BOOKING_FALLBACK"
          >
            PRENOTA IL TUO POSTO
          </span>
        )}
      </div>
    </aside>
  );
}
