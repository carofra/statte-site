import Link from "next/link";
import { Fragment } from "react";
import LabProgramFrame, { labProgramDisplayClass } from "@/components/lab/LabProgramFrame";
import { labs } from "@/data/labs.js";

const sortedLabs = [...labs].sort((a, b) => a.dateSort.localeCompare(b.dateSort));

const LAB_INTRO =
  "La ricerca non resta chiusa negli studi, ma si apre alla comunità. Una serie di workshop per sperimentare tecniche, visioni e materia viva, guidati dai curatori della residenza.";

export default function LabsSection() {
  return (
    <section
      id="lab"
      aria-labelledby="lab-laboratori-heading"
      className="scroll-mt-20 bg-background pb-14 text-black md:pb-20"
    >
      {/* Spazio bianco forte dopo il manifesto */}
      <div className="pt-40 md:pt-52 lg:pt-64 xl:pt-72">
        <LabProgramFrame>
          {/* Intestazione monumentale + narrativa: chiusa dalla prima linea del blocco lista */}
          <header className="text-left">
            <h2
              id="lab-laboratori-heading"
              className={`${labProgramDisplayClass} text-[clamp(2.75rem,11vw,10.5rem)] leading-[0.82] [text-wrap:balance]`}
            >
              LABORATORI
            </h2>
            <p className="mt-8 max-w-2xl text-left text-lg font-normal leading-relaxed tracking-wide text-black/85 md:mt-10 md:text-xl md:leading-relaxed lg:mt-12 lg:w-1/2 lg:max-w-none">
              {LAB_INTRO}
            </p>
          </header>

          {/* Lista programma: border-t chiude il blocco sopra e apre il registro Desina */}
          <div className="mt-12 flex flex-col border-t border-black md:mt-14 lg:mt-16">
            {sortedLabs.map((lab, index) => {
              const prev = index > 0 ? sortedLabs[index - 1] : null;
              const showDayHeader = !prev || prev.dateDisplay !== lab.dateDisplay;

              return (
                <Fragment key={lab.id}>
                  {showDayHeader && (
                    <div className="border-b border-black py-6 md:py-8">
                      <p
                        className={`${labProgramDisplayClass} text-[clamp(1.75rem,5vw,3.5rem)] text-black/80`}
                      >
                        {lab.dateDisplay}
                      </p>
                    </div>
                  )}

                  <Link
                    href={`/lab/${lab.slug}`}
                    className="group grid grid-cols-[minmax(2.25rem,2.75rem)_minmax(0,1fr)_minmax(1.75rem,2.5rem)] items-start gap-x-3 border-b border-black py-10 outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:gap-x-4 md:grid-cols-[minmax(3.5rem,5rem)_minmax(0,1fr)_minmax(2.5rem,4rem)] md:gap-x-10 md:py-14 lg:gap-x-14 lg:py-16"
                  >
                    <span className="select-none pt-1 text-[9px] font-medium uppercase leading-snug tracking-[0.32em] text-black/45 sm:text-[10px] md:pt-2 md:text-[11px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-[11px] font-normal tabular-nums tracking-[0.04em] text-black/70 md:mb-3 md:text-xs">
                        {lab.timeRange}
                      </p>
                      <h3
                        className={`${labProgramDisplayClass} text-[clamp(1.65rem,5.2vw,5.75rem)] [text-wrap:balance]`}
                      >
                        {lab.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-base italic leading-snug tracking-[0.01em] text-black md:mt-5 md:text-lg lg:text-xl">
                        {lab.curator}
                      </p>
                    </div>

                    <span
                      className="select-none justify-self-end text-3xl leading-none transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0 sm:text-4xl md:pt-1 md:text-6xl lg:text-7xl"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </LabProgramFrame>
      </div>
    </section>
  );
}
