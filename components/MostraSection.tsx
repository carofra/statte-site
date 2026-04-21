import LabProgramFrame from "@/components/lab/LabProgramFrame";
import { mostraFinale } from "@/lib/stantteData";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

export default function MostraSection() {
  return (
    <section id="mostra" className="scroll-mt-20 bg-background py-16 text-black md:py-24 lg:py-28">
      <LabProgramFrame>
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>MOSTRA FINALE</h2>
        </header>

        <div className="border-y border-black py-8 text-left md:py-12 lg:py-16">
          <p className="text-[10px] font-normal uppercase tracking-[0.32em] text-black/55 md:text-[11px] md:tracking-[0.38em]">
            27—28 GIUGNO 2026
          </p>
          <p className="mt-6 max-w-3xl text-sm font-normal leading-relaxed text-black/90 md:mt-8 md:text-base md:leading-relaxed lg:text-lg">
            {mostraFinale.description}
          </p>
        </div>
      </LabProgramFrame>
    </section>
  );
}
