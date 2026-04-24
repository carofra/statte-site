"use client";

import { useCallback, useState } from "react";
import BookingModal from "@/components/BookingModal";

type Props = {
  labTitle: string;
  dateDisplay: string;
  timeRange: string;
};

export default function LabBookingPanel({ labTitle, dateDisplay, timeRange }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = useCallback(() => setModalOpen(false), []);

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
            onClick={() => setModalOpen(true)}
            className="w-full border border-black bg-[#1d1d1b] px-6 py-4 text-center text-xs font-normal uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:py-5 md:text-sm md:tracking-[0.26em]"
          >
            PRENOTA IL TUO POSTO
          </button>
        </div>
      </aside>

      <BookingModal
        labTitle={labTitle}
        dateDisplay={dateDisplay}
        timeRange={timeRange}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </>
  );
}
