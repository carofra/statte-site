import LabProgramFrame, { labProgramDisplayCore } from "@/components/lab/LabProgramFrame";
import { artists } from "@/lib/stantteData";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

export default function ArtistsSection() {
  return (
    <section
      id="artisti"
      className="scroll-mt-20 bg-background py-16 text-[#1d1d1b] md:py-20 lg:py-24"
    >
      <LabProgramFrame tone="foreground">
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>ARTISTI</h2>
        </header>

        <ul className="m-0 list-none border-t border-[#1d1d1b] p-0">
          {artists.map((name, index) => (
            <li key={name} className="border-b border-[#1d1d1b] py-6 md:py-8">
              <div className="flex items-baseline justify-between gap-4 md:gap-8">
                <span className="shrink-0 tabular-nums text-xs font-normal text-[#1d1d1b]/75 md:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`block min-w-0 flex-1 text-right text-[#1d1d1b] [text-wrap:balance] ${labProgramDisplayCore} text-4xl leading-none md:text-6xl lg:text-7xl`}
                >
                  {name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </LabProgramFrame>
    </section>
  );
}
