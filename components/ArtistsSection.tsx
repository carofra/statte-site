import WideContainer from "./WideContainer";
import { artists, labCurators } from "@/lib/stantteData";

const nameHoverClass =
  "inline-block font-normal text-foreground cursor-default border-b-2 border-transparent pb-1 transition-[border-color,transform] duration-500 ease-out motion-safe:hover:border-foreground motion-safe:hover:-translate-y-0.5";

export default function ArtistsSection() {
  return (
    <section id="artisti" className="pt-32 md:pt-44 lg:pt-52 pb-40 md:pb-56 lg:pb-72 scroll-mt-20">
      <WideContainer centered>
        <div className="flex flex-col gap-16 md:gap-20 text-center items-center">
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-foreground font-normal">
              Artisti
            </p>
            <h2 className="mt-6 text-3xl md:text-6xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
              Nomi
            </h2>
          </div>

          <div className="flex flex-col w-full max-w-5xl">
            {artists.map((name, idx) => (
              <div
                key={name}
                className={["py-16 md:py-24", idx > 0 ? "border-t border-foreground" : ""].join(" ")}
              >
                <p className={`text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.04em] ${nameHoverClass}`}>
                  {name}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 md:pt-12 w-full max-w-5xl">
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-foreground font-normal">
              Lab — curatori
            </p>
          </div>

          <div className="flex flex-col w-full max-w-5xl">
            {labCurators.map((name, idx) => (
              <div
                key={name}
                className={["py-14 md:py-20", idx > 0 ? "border-t border-foreground" : ""].join(" ")}
              >
                <p className={`text-[clamp(2.35rem,7.2vw,6rem)] leading-[0.98] tracking-[-0.035em] ${nameHoverClass}`}>
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
