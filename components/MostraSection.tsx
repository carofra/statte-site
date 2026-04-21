import LabProgramFrame, { labProgramDisplayClass } from "@/components/lab/LabProgramFrame";
import { mostraFinale } from "@/lib/stantteData";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

export default function MostraSection() {
  return (
    <section
      id="mostra"
      className="scroll-mt-20 bg-background pb-20 pt-20 text-[#1d1d1b] md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <LabProgramFrame>
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>MOSTRA</h2>
        </header>

        <div className="text-left">
          <p className="mt-2 max-w-xl text-xs font-normal uppercase leading-relaxed tracking-[0.2em] text-[#1d1d1b]/50 md:text-sm md:tracking-[0.24em]">
            {mostraFinale.dates}
          </p>
          <h3
            className={`${labProgramDisplayClass} mt-6 text-4xl leading-none text-[#1d1d1b] [text-wrap:balance] md:mt-8 md:text-6xl lg:text-7xl`}
          >
            MOSTRA FINALE
          </h3>
          <p className="mt-10 max-w-2xl text-base font-normal leading-relaxed text-[#1d1d1b]/90 md:mt-12 md:text-lg md:leading-relaxed">
            {mostraFinale.description}
          </p>
        </div>
      </LabProgramFrame>
    </section>
  );
}
