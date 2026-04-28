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

const PHASES: Phase[] = [
  {
    date: "15 GIU",
    title: "INIZIO RESIDENZA",
    body: (
      <>
        Apertura della residenza: arrivo degli artisti e avvio dei laboratori sul territorio (mattina e
        pomeriggio).
      </>
    ),
  },
  {
    date: "16-19 GIU",
    title: "PRATICHE E LABORATORI",
    body: (
      <>
        Workshop quotidiani tra mattina e pomeriggio - musica, editoria, immagine, corpo e comunità in dialogo con il
        Molise.
        <a href="#lab" className={labLinkClass}>
          → Calendario lab
        </a>
      </>
    ),
  },
  {
    date: "20 GIU",
    title: "TALK: ARTE E MOLISE",
    body: (
      <>
        Sabato 20: laboratori al mattino, poi alle <strong className="font-medium">17:00</strong> il talk pubblico con
        ospiti da Le Fonticelle e Sagra Futuro.
        <a href="#talk" className={labLinkClass}>
          → Dettagli talk
        </a>
      </>
    ),
  },
  {
    date: "21-26 GIU",
    title: "RESIDENZA E LAB",
    body: (
      <>
        Il programma dei laboratori prosegue fino al 26 giugno - ultimo giorno di laboratori prima della mostra
        (musichiamo, pittura, viaggi nei ritmi del Sud, architetture dell&apos;anima e altre pratiche).
        <a href="#lab" className={labLinkClass}>
          → Calendario lab
        </a>
      </>
    ),
  },
  {
    date: "27-28 GIU",
    title: "MOSTRA FINALE",
    body: (
      <>
        Chiusura in forma espositiva: sabato 27 e domenica 28 giugno restituzione delle pratiche condivise nella
        residenza.
        <a href="#mostra" className={labLinkClass}>
          → Mostra
        </a>
      </>
    ),
  },
];

export default function ProgrammaSection() {
  return (
    <section id="programma" className="scroll-mt-20 bg-background py-24 text-foreground md:py-32 lg:py-40">
      <LabProgramFrame tone="foreground">
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>PROGRAMMA</h2>
        </header>

        <div className="flex flex-col">
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
                  <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-foreground/90 md:mt-5 md:text-lg md:leading-relaxed">
                    {phase.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </LabProgramFrame>
    </section>
  );
}
