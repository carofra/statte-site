import LabProgramFrame from "@/components/lab/LabProgramFrame";
import { talk } from "@/lib/stantteData";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

const TALK_BODY =
  "Un momento di confronto sul valore della residenza come spazio di ascolto e produzione: pratiche, territori e storie che si incontrano.";

export default function TalkSection() {
  return (
    <section id="talk" className="scroll-mt-20 bg-background py-12 text-black md:py-16 lg:py-20">
      <LabProgramFrame>
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>ARTE E MOLISE</h2>
        </header>

        <div className="border-y border-black py-6 md:py-8">
          <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-12 md:gap-x-10 md:gap-y-0 lg:gap-x-12">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="text-[10px] font-normal uppercase leading-relaxed tracking-widest text-black/55 md:text-[11px] md:tracking-[0.45em]">
                SABATO 20 GIUGNO — ORE 18:30
              </p>
            </div>

            <div className="flex flex-col gap-4 md:col-span-5 md:justify-center lg:col-span-6 lg:pt-1">
              <p className="max-w-xl text-sm font-normal leading-relaxed text-black/90 md:text-base md:leading-relaxed lg:max-w-none">
                {TALK_BODY}
              </p>
              <p className="max-w-xl text-xs font-normal leading-relaxed tracking-wide text-black/75 md:text-sm">
                {talk.guests}
              </p>
            </div>
          </div>
        </div>
      </LabProgramFrame>
    </section>
  );
}
