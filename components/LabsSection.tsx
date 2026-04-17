import WideContainer from "./WideContainer";
import { labs } from "@/lib/stantteData";

const titleHoverClass =
  "inline-block font-normal text-foreground cursor-default border-b-2 border-transparent pb-1 transition-[border-color,transform] duration-500 ease-out motion-safe:hover:border-foreground motion-safe:hover:-translate-y-0.5";

export default function LabsSection() {
  return (
    <section id="lab" className="pt-40 md:pt-56 lg:pt-72 pb-28 md:pb-40 scroll-mt-20">
      <WideContainer>
        <div className="flex flex-col gap-16 md:gap-20 text-left">
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-foreground font-normal">
              Lab
            </p>
            <h2 className="mt-6 text-3xl md:text-6xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
              Laboratori
            </h2>
          </div>

          <div className="flex flex-col">
            {labs.map((lab, idx) => (
              <article
                key={lab.title}
                className={["py-16 md:py-24", idx > 0 ? "border-t border-foreground" : ""].join(" ")}
              >
                <p
                  className={`text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.04em] ${titleHoverClass}`}
                >
                  {lab.title}
                </p>
                <p className="mt-4 md:mt-5 text-[11px] md:text-xs tracking-[0.26em] uppercase text-foreground font-normal max-w-3xl">
                  {lab.curator}
                </p>
              </article>
            ))}
          </div>

          <div className="pt-4 md:pt-6 max-w-4xl">
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-foreground leading-loose font-normal">
              Altri 10 laboratori
              <br />
              Programma completo — in definizione
            </p>
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
