"use client";

import { useCallback, useEffect, useId, useState } from "react";

type Props = {
  dateDisplay: string;
  timeRange: string;
};

export default function LabBookingPanel({ dateDisplay, timeRange }: Props) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <>
      <aside className="mt-12 border-t border-black pt-10 md:mt-0 md:border-t-0 md:pt-0">
        <div className="sticky top-24 space-y-10 self-start md:top-28 lg:top-32 lg:space-y-12">
          <dl className="space-y-8 text-black">
            <div>
              <dt className="text-[10px] font-normal uppercase tracking-[0.32em] text-black/50">Data</dt>
              <dd className="mt-2 font-mono text-sm font-normal tabular-nums tracking-wide text-black md:text-base">
                {dateDisplay}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-normal uppercase tracking-[0.32em] text-black/50">Orari</dt>
              <dd className="mt-2 font-mono text-sm font-normal tabular-nums tracking-wide text-black md:text-base">
                {timeRange}
              </dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full border border-black bg-[#1d1d1b] px-6 py-4 text-center text-xs font-normal uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:py-5 md:text-sm md:tracking-[0.26em]"
          >
            PRENOTA IL TUO POSTO
          </button>
        </div>
      </aside>

      {open ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/45 px-5 py-10 backdrop-blur-[2px]"
          role="presentation"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-w-md border border-black bg-background p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:p-10"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <h2 id={titleId} className="text-[10px] font-normal uppercase tracking-[0.35em] text-black/50">
              Prenotazione
            </h2>
            <p className="mt-5 text-base font-normal leading-relaxed text-black md:text-lg">
              Le iscrizioni apriranno a breve. Contattaci a{" "}
              <a
                href="mailto:arti.inatto@gmail.com"
                className="border-b border-black/30 text-foreground transition-colors hover:border-black"
              >
                arti.inatto@gmail.com
              </a>
              .
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-8 border-b border-black pb-1 text-[10px] font-normal uppercase tracking-[0.32em] text-black transition-opacity hover:opacity-70"
            >
              Chiudi
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
