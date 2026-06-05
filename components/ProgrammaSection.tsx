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

const phaseListClass = `${phaseBodyClass} list-none space-y-3 p-0`;

const PHASES: Phase[] = [
  {
    date: "15 GIU",
    title: "APERTURA E AVVIO DELLE ATTIVITÀ",
    body: (
      <ul className={phaseListClass}>
        <li>
          <strong className="font-medium">Inizio della residenza:</strong> arrivo ufficiale degli artisti
          selezionati presso la sede della residenza a Larino.
        </li>
        <li>
          <strong className="font-medium">Sessione di benvenuto e briefing:</strong> incontro introduttivo con
          curatori, partner di progetto e realtà locali per l&apos;inquadramento logistico e concettuale delle
          attività.
        </li>
        <li>
          <strong className="font-medium">Avvio dei laboratori sul territorio:</strong> prime sessioni di
          esplorazione urbana e rurale, con i primi contatti tra artisti, comunità locale, maestranze e patrimonio
          storico-antropologico del luogo.
        </li>
      </ul>
    ),
  },
  {
    date: "20 GIU",
    title: "TALK: ARTE E MOLISE",
    body: (
      <>
        <ul className={phaseListClass}>
          <li>
            <strong className="font-medium">Incontro e tavola rotonda:</strong> dibattito aperto al pubblico e alla
            cittadinanza, finalizzato a mappare e valorizzare le energie creative della regione.
          </li>
          <li>
            <strong className="font-medium">Obiettivo:</strong> creare una rete di confronto sinergica tra gli
            artisti in residenza e i principali collettivi e associazioni culturali che operano nel territorio
            molisano, approfondendo le sfide e le opportunità del fare arte e cultura in Molise oggi.
          </li>
        </ul>
        <p className={`${phaseBodyClass} mt-5`}>
          Sabato 20 giugno, ore <strong className="font-medium">19:00</strong>.
          <a href="#talk" className={labLinkClass}>
            → Dettagli talk
          </a>
        </p>
      </>
    ),
  },
  {
    date: "21-26 GIU",
    title: "SVILUPPO, RICERCA E PRODUZIONE",
    body: (
      <ul className={phaseListClass}>
        <li>
          <strong className="font-medium">Prosecuzione della residenza:</strong> giornate intensive dedicate alla
          ricerca sul campo, alla sperimentazione artistica e alla produzione delle opere.
        </li>
        <li>
          <strong className="font-medium">Laboratori e pratiche condivise:</strong> continuazione dei laboratori
          partecipativi e delle attività di co-progettazione sul territorio, in sinergia con il contesto locale per
          tradurre gli stimoli raccolti in dispositivi visivi, performativi o installativi.
        </li>
      </ul>
    ),
  },
  {
    date: "27-28 GIU",
    title: "RESTITUZIONE PUBBLICA E MOSTRA FINALE",
    body: (
      <>
        <ul className={phaseListClass}>
          <li>
            <strong className="font-medium">Chiusura in forma espositiva:</strong> evento conclusivo della residenza
            artistica, aperto alla cittadinanza, ai media e alle istituzioni.
          </li>
          <li>
            <strong className="font-medium">Mostra finale:</strong> presentazione e restituzione pubblica delle
            pratiche condivise e delle opere realizzate durante le due settimane di permanenza, in un percorso
            site-specific volto a valorizzare i luoghi ospitanti e a testimoniare l&apos;impatto culturale
            dell&apos;interazione tra artisti e territorio molisano.
          </li>
        </ul>
        <p className={`${phaseBodyClass} mt-5`}>
          Sabato 27 e domenica 28 giugno, dalle <strong className="font-medium">16:30 alle 18:30</strong>.
          <a href="#mostra" className={labLinkClass}>
            → Mostra
          </a>
        </p>
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
          <p className="mt-4 max-w-3xl text-sm font-normal uppercase tracking-[0.18em] text-foreground/55 md:text-base md:tracking-[0.22em]">
            Larino (CB) · 15–28 giugno 2026
          </p>
          <p className="mt-6 max-w-3xl text-base font-normal leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed">
            La residenza artistica Stattð si propone come uno spazio di ricerca, produzione e co-creazione
            contemporanea radicato nel contesto territoriale di Larino e del Molise. Di seguito il programma
            dettagliato dell&apos;edizione 2026.
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
