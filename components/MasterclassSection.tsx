import Link from "next/link";
import LabProgramFrame from "@/components/lab/LabProgramFrame";
import { masterclass } from "@/lib/stantteData";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

const titleClass =
  "font-normal tracking-[-0.04em] leading-[0.9] [font-family:'Providence_Sans_Pro','Providence_Sans',ui-sans-serif,sans-serif]";

export default function MasterclassSection() {
  return (
    <section
      id="masterclass"
      className="scroll-mt-20 bg-background pb-16 pt-24 text-[#1d1d1b] md:pb-20 md:pt-32 lg:pb-24 lg:pt-40"
    >
      <LabProgramFrame>
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>MASTERCLASS</h2>
        </header>

        <div className="border-t border-b border-[#1d1d1b] py-20 text-left md:py-24 lg:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start md:gap-x-12 lg:gap-x-16">
            <div className="md:col-span-5 lg:col-span-4">
              <p className="text-3xl font-normal uppercase leading-[1.05] tracking-[-0.02em] text-[#1d1d1b] md:text-4xl lg:text-5xl">
                {masterclass.dateLine}
              </p>
              <p className="mt-3 text-sm font-normal tabular-nums tracking-wide text-[#1d1d1b]/55 md:text-base">
                {masterclass.timeLine}
              </p>
            </div>

            <div className="md:col-span-7 lg:col-span-8">
              <h3
                className={`${titleClass} text-4xl leading-none text-[#1d1d1b] [text-wrap:balance] md:text-6xl lg:text-7xl`}
              >
                {masterclass.title}
              </h3>
              <p className="mt-8 max-w-2xl text-base font-normal leading-relaxed text-[#1d1d1b]/90 md:mt-10 md:text-lg md:leading-relaxed">
                {masterclass.description}
              </p>
              <Link
                href="/masterclass"
                className="mt-8 inline-flex items-center gap-2 border-b border-[#1d1d1b] pb-1 text-[11px] font-normal uppercase tracking-[0.28em] text-[#1d1d1b] transition-opacity hover:opacity-70 md:mt-10 md:text-xs"
              >
                Bio e dettagli <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </LabProgramFrame>
    </section>
  );
}
