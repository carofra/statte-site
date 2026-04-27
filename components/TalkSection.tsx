import LabProgramFrame, { labProgramDisplayClass } from "@/components/lab/LabProgramFrame";
import { talk } from "@/lib/stantteData";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

const TALK_BODY =
  "Un momento di confronto sul valore della residenza come spazio di ascolto e produzione: pratiche, territori e storie che si incontrano.";

const guestsLine = talk.guests.replace(/^\s*Ospiti\s*[-–]\s*/i, "").trim();

export default function TalkSection() {
  return (
    <section
      id="talk"
      className="scroll-mt-20 bg-background pb-16 pt-24 text-[#1d1d1b] md:pb-20 md:pt-32 lg:pb-24 lg:pt-40"
    >
      <LabProgramFrame>
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>TALK</h2>
        </header>

        <div className="border-t border-b border-[#1d1d1b] py-20 text-left md:py-24 lg:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start md:gap-x-12 lg:gap-x-16">
            <div className="md:col-span-5 lg:col-span-4">
              <p className="text-3xl font-normal uppercase leading-[1.05] tracking-[-0.02em] text-[#1d1d1b] md:text-4xl lg:text-5xl">
                SABATO 20 GIUGNO
              </p>
              <p className="mt-3 text-sm font-normal tabular-nums tracking-wide text-[#1d1d1b]/55 md:text-base">
                ORE 17:00
              </p>
            </div>

            <div className="md:col-span-7 lg:col-span-8">
              <h3
                className={`${labProgramDisplayClass} text-4xl leading-none text-[#1d1d1b] [text-wrap:balance] md:text-6xl lg:text-7xl`}
              >
                ARTE E MOLISE
              </h3>
              <p className="mt-8 max-w-2xl text-base font-normal leading-relaxed text-[#1d1d1b]/90 md:mt-10 md:text-lg md:leading-relaxed">
                {TALK_BODY}
              </p>
              <div className="mt-8 md:mt-10">
                <p className="text-[10px] font-normal uppercase tracking-[0.28em] text-[#1d1d1b]/50 md:text-[11px]">
                  Ospiti:
                </p>
                <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-[#1d1d1b]/75 md:text-base">
                  {guestsLine}
                </p>
              </div>
            </div>
          </div>
        </div>
      </LabProgramFrame>
    </section>
  );
}
