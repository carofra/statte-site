import Link from "next/link";
import LabProgramFrame, { labProgramDisplayClass } from "@/components/lab/LabProgramFrame";
import { labScheduleSorted, labs } from "@/data/labs.js";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

const workshopBySlug = Object.fromEntries(labs.map((l) => [l.slug, l]));

const LAB_INTRO =
  "La ricerca non resta chiusa negli studi, ma si apre alla comunità. Una serie di workshop per sperimentare tecniche, visioni e materia viva, guidati dai curatori della residenza.";

type ScheduleRow = (typeof labScheduleSorted)[number];

type SessionRow = { kind: "session"; key: string; schedule: ScheduleRow; index: number };

function buildLabListRows(): SessionRow[] {
  return labScheduleSorted.map((schedule, index) => ({
    kind: "session",
    key: schedule.id,
    schedule,
    index,
  }));
}

const rowGridClass =
  "group grid w-full grid-cols-[minmax(2.25rem,2.75rem)_minmax(0,1fr)_minmax(1.75rem,2.5rem)] items-start gap-x-3 py-6 text-left text-[#1d1d1b] outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1b] focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:gap-x-4 md:grid-cols-[minmax(3.5rem,5rem)_minmax(0,1fr)_minmax(2.5rem,4rem)] md:gap-x-8 md:py-8 lg:gap-x-10";

export default function LabsSection() {
  const listRows = buildLabListRows();

  return (
    <section
      id="lab"
      aria-labelledby="lab-section-heading"
      className="scroll-mt-20 bg-background pb-16 text-[#1d1d1b] md:pb-24 lg:pb-28"
    >
      <div className="pt-40 md:pt-52 lg:pt-64 xl:pt-72">
        <LabProgramFrame>
          <header className="text-left">
            <h2 id="lab-section-heading" className={`${sectionEyebrowHeadingClass} normal-case`}>
              Lab
            </h2>
            <p className="max-w-2xl text-left text-base font-normal leading-relaxed tracking-wide text-[#1d1d1b]/85 md:text-lg md:leading-relaxed lg:w-1/2 lg:max-w-none">
              {LAB_INTRO}
            </p>
          </header>

          <ul className="m-0 mt-8 list-none border-t border-[#1d1d1b] p-0 md:mt-10 lg:mt-12">
            {listRows.map((row) => (
              <SessionListItem key={row.key} row={row} />
            ))}
          </ul>
        </LabProgramFrame>
      </div>
    </section>
  );
}

function SessionListItem({ row }: { row: SessionRow }) {
  const s = row.schedule;
  const workshop = s.slug ? workshopBySlug[s.slug] : undefined;
  const title = workshop?.title ?? s.displayTitle ?? "";
  const curator = workshop?.curator ?? s.displayCurator ?? "";
  const labHref = s.slug ? `/lab/${s.slug}` : "#";

  const inner = (
    <>
      <span className="select-none pt-0.5 text-[9px] font-medium uppercase leading-snug tracking-[0.32em] text-[#1d1d1b]/50 sm:text-[10px] md:pt-1 md:text-[11px]">
        {String(row.index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <h3 className={`${labProgramDisplayClass} text-4xl leading-none text-[#1d1d1b] [text-wrap:balance] md:text-6xl`}>
          {title}
        </h3>
        {curator ? (
          <p className="mt-3 max-w-3xl text-sm italic leading-snug tracking-[0.01em] text-[#1d1d1b] md:mt-3.5 md:text-base">
            {curator}
          </p>
        ) : null}
      </div>

      <span
        className="select-none justify-self-end text-2xl leading-none transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0 sm:text-3xl md:pt-0.5 md:text-5xl lg:text-6xl"
        aria-hidden
      >
        ↗
      </span>
    </>
  );

  return (
    <li className="m-0 list-none border-b border-[#1d1d1b] p-0">
      {s.externalHref ? (
        <a href={s.externalHref} className={rowGridClass}>
          {inner}
        </a>
      ) : (
        <Link href={labHref} className={rowGridClass}>
          {inner}
        </Link>
      )}
    </li>
  );
}
