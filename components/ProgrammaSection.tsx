import type { ReactNode } from "react";
import LabProgramFrame, { labProgramDisplayCore } from "@/components/lab/LabProgramFrame";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

type Phase = {
  date: string;
  title: string;
  body: ReactNode;
};

const labLinkClass =
  "ml-1 inline-block border-b border-foreground/40 text-sm font-normal tracking-wide text-foreground underline-offset-4 transition-colors hover:border-foreground hover:text-foreground md:text-base";

const phaseBodyClass =
  "mt-4 max-w-2xl text-base font-normal leading-relaxed text-foreground/90 md:mt-5 md:text-lg md:leading-relaxed";

const PHASES: Phase[] = [
  {
    date: "15 GIU",
    title: "APERTURA",
    body: (
      <p className={phaseBodyClass}>
        Arrivo degli artisti e avvio della residenza a Larino.
      </p>
    ),
  },
  {
    date: "20 GIU",
    title: "TALK: ARTE E MOLISE",
    body: (
      <p className={phaseBodyClass}>
        Talk aperto al pubblico, dalle <strong className="font-medium">19:00</strong>.
        <a href="#talk" className={labLinkClass}>
          → Dettagli talk
        </a>
      </p>
    ),
  },
  {
    date: "21-26 GIU",
    title: "RICERCA E PRODUZIONE",
    body: (
      <p className={phaseBodyClass}>
        Giornate di laboratori, ricerca sul campo e produzione delle opere sul territorio.
      </p>
    ),
  },
  {
    date: "27-28 GIU",
    title: "MOSTRA FINALE",
    body: (
      <p className={phaseBodyClass}>
        Restituzione pubblica delle opere realizzate, dalle <strong className="font-medium">17:00</strong>.
        <a href="#mostra" className={labLinkClass}>
          → Mostra
        </a>
      </p>
    ),
  },
];

export default function ProgrammaSection() {
  return (
    <section id="programma" className="scroll-mt-20 bg-background py-24 text-foreground md:py-32 lg:py-40">
      <LabProgramFrame tone="foreground">
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>PROGRAMMA</h2>
          <p className="mt-4 max-w-3xl text-sm font-normal uppercase tracking-[0.18em] text-foreground/55 md:text-base md:tracking-[0.22em]">
            Larino (CB) · 15-28 giugno 2026
          </p>
          <p className="mt-6 max-w-3xl text-base font-normal leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed">
            Due settimane di ricerca, produzione e co-creazione contemporanea tra Larino e il Molise.
          </p>
        </header>

        <div className="mt-10 flex flex-col md:mt-12 lg:mt-14">
          {PHASES.map((phase) => (
            <article key={phase.date + phase.title} className="border-t border-foreground">
              <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:items-start md:gap-x-10 md:py-12 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-x-16 lg:py-14">
                <div
                  className={`${labProgramDisplayCore} max-w-[18ch] text-[clamp(2.1rem,5.2vw,4.75rem)] leading-[0.88] tracking-[-0.035em] text-foreground [text-wrap:balance] md:max-w-none`}
                >
                  {phase.date}
                </div>

                <div className="min-w-0 text-left">
                  <h3
                    className={`${labProgramDisplayCore} text-[clamp(1.15rem,2.8vw,2.35rem)] leading-[1.05] tracking-[-0.02em] text-foreground [text-wrap:balance]`}
                  >
                    {phase.title}
                  </h3>
                  {phase.body}
                </div>
              </div>
            </article>
          ))}
        </div>
      </LabProgramFrame>
    </section>
  );
}
