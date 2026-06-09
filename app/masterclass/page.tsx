import LabBookingPanel from "@/components/lab/LabBookingPanel";
import LabProgramFrame from "@/components/lab/LabProgramFrame";
import LabScheduleInfo from "@/components/lab/LabScheduleInfo";
import { masterclass } from "@/lib/stantteData";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diora Madama x Statte · Masterclass · Statte",
  description: masterclass.bio,
};

const titleClass =
  "font-normal tracking-[-0.04em] leading-[0.9] [font-family:'Providence_Sans_Pro','Providence_Sans',ui-sans-serif,sans-serif]";

export default function MasterclassPage() {
  return (
    <main className="bg-background pb-20 pt-6 text-black md:pb-28 md:pt-10">
      <LabProgramFrame>
        <nav className="border-b border-black py-4 md:py-5">
          <Link
            href="/#masterclass"
            className="inline-block border-b border-transparent pb-0.5 text-[10px] font-normal uppercase tracking-[0.38em] text-black transition-colors hover:border-black"
          >
            ← MASTERCLASS
          </Link>
        </nav>

        <header className="border-b border-black py-10 md:py-12 lg:py-14">
          <p className="text-[10px] font-normal tracking-[0.42em] text-black/50 md:text-[11px]">
            <span className="uppercase">Masterclass</span> · stattð 2026
          </p>
          <h1
            className={`${titleClass} mt-5 text-5xl leading-none [text-wrap:balance] md:mt-6 md:text-7xl`}
          >
            {masterclass.title}
          </h1>
          <p className="mt-5 text-sm font-normal tabular-nums tracking-wide text-black/55 md:text-base">
            {masterclass.dateLine} · {masterclass.timeLine}
          </p>
        </header>

        <div className="border-b border-black py-8 md:py-10 lg:py-12">
          <div className="md:grid md:grid-cols-12 md:gap-8 lg:gap-10">
            <div className="md:col-span-8">
              <article>
                <p className="text-lg font-normal leading-relaxed text-black md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed">
                  {masterclass.bio}
                </p>
              </article>
            </div>
            <div className="mt-10 md:col-span-4 md:mt-0">
              <p className="m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]">
                Obiettivo
              </p>
              <p className="mt-3 text-sm font-normal leading-relaxed text-black/80 md:text-base">
                {masterclass.objective}
              </p>
              <div className="mt-8 md:mt-10">
                <LabScheduleInfo sessions={masterclass.schedule} />
                <LabBookingPanel
                  labTitle={masterclass.title}
                  bookingType="masterclass"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="py-8 md:py-10 lg:py-12">
          <p className="m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]">
            Programma della giornata
          </p>
          <ul className="m-0 mt-6 list-none border-t border-black/30 p-0">
            {masterclass.program.map((part) => (
              <li
                key={part.title}
                className="border-b border-black/30 py-6 md:py-8"
              >
                <div className="md:grid md:grid-cols-12 md:gap-8 lg:gap-10">
                  <p className="text-xs font-normal uppercase tracking-[0.2em] text-black/55 md:col-span-4 md:text-sm">
                    {part.time}
                  </p>
                  <div className="mt-3 md:col-span-8 md:mt-0">
                    <h2
                      className={`${titleClass} text-2xl leading-none text-black md:text-3xl`}
                    >
                      {part.title}
                    </h2>
                    <p className="mt-3 text-base font-normal leading-relaxed text-black/80 md:text-lg md:leading-relaxed">
                      {part.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </LabProgramFrame>
    </main>
  );
}
