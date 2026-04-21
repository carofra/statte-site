import Link from "next/link";
import { Fragment } from "react";
import LabProgramFrame, { labProgramDisplayClass } from "@/components/lab/LabProgramFrame";
import { labs } from "@/data/labs.js";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

const sortedLabs = [...labs].sort((a, b) => a.dateSort.localeCompare(b.dateSort));

const LAB_INTRO =
  "La ricerca non resta chiusa negli studi, ma si apre alla comunità. Una serie di workshop per sperimentare tecniche, visioni e materia viva, guidati dai curatori della residenza.";

export default function LabsSection() {
  return (
    <section
      id="lab"
      aria-labelledby="lab-laboratori-heading"
      className="scroll-mt-20 bg-background pb-12 text-black md:pb-16"
    >
      <div className="pt-40 md:pt-52 lg:pt-64 xl:pt-72">
        <LabProgramFrame>
          <header className="text-left">
            <h2 id="lab-laboratori-heading" className={sectionEyebrowHeadingClass}>
              LABORATORI
            </h2>
            <p className="max-w-2xl text-left text-base font-normal leading-relaxed tracking-wide text-black/85 md:text-lg md:leading-relaxed lg:w-1/2 lg:max-w-none">
              {LAB_INTRO}
            </p>
          </header>

          <div className="mt-8 flex flex-col border-t border-black md:mt-10 lg:mt-12">
            {sortedLabs.map((lab, index) => {
              const prev = index > 0 ? sortedLabs[index - 1] : null;
              const showDayHeader = !prev || prev.dateDisplay !== lab.dateDisplay;

              return (
                <Fragment key={lab.id}>
                  {showDayHeader && (
                    <div className="border-b border-black py-4 md:py-5">
                      <p
                        className={`${labProgramDisplayClass} text-2xl leading-none text-black/80 md:text-3xl`}
                      >
                        {lab.dateDisplay}
                      </p>
                    </div>
                  )}

                  <Link
                    href={`/lab/${lab.slug}`}
                    className="group grid grid-cols-[minmax(2.25rem,2.75rem)_minmax(0,1fr)_minmax(1.75rem,2.5rem)] items-start gap-x-3 border-b border-black py-6 outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:gap-x-4 md:grid-cols-[minmax(3.5rem,5rem)_minmax(0,1fr)_minmax(2.5rem,4rem)] md:gap-x-8 md:py-8 lg:gap-x-10"
                  >
                    <span className="select-none pt-0.5 text-[9px] font-medium uppercase leading-snug tracking-[0.32em] text-black/45 sm:text-[10px] md:pt-1 md:text-[11px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <p className="mb-1.5 font-mono text-[10px] font-normal tabular-nums tracking-[0.04em] text-black/70 md:mb-2 md:text-[11px]">
                        {lab.timeRange}
                      </p>
                      <h3
                        className={`${labProgramDisplayClass} text-4xl leading-none [text-wrap:balance] md:text-6xl`}
                      >
                        {lab.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm italic leading-snug tracking-[0.01em] text-black md:mt-3.5 md:text-base">
                        {lab.curator}
                      </p>
                    </div>

                    <span
                      className="select-none justify-self-end text-2xl leading-none transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0 sm:text-3xl md:pt-0.5 md:text-5xl lg:text-6xl"
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
