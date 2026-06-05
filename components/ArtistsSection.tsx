import Link from "next/link";
import LabProgramFrame, { labProgramDisplayCore } from "@/components/lab/LabProgramFrame";
import { artists } from "@/data/artists.js";
import { sectionEyebrowHeadingClass } from "@/lib/sectionEyebrow";

const nameClass = `block min-w-0 flex-1 text-right text-[#1d1d1b] [text-wrap:balance] ${labProgramDisplayCore} text-4xl leading-none md:text-6xl lg:text-7xl`;
const indexClass =
  "shrink-0 tabular-nums text-xs font-normal text-[#1d1d1b]/75 md:text-sm";

export default function ArtistsSection() {
  return (
    <section
      id="artisti"
      className="scroll-mt-20 bg-background py-16 text-[#1d1d1b] md:py-20 lg:py-24"
    >
      <LabProgramFrame tone="foreground">
        <header className="text-left">
          <h2 className={sectionEyebrowHeadingClass}>ARTISTI IN RESIDENZA</h2>
        </header>

        <ul className="m-0 list-none border-t border-[#1d1d1b] p-0">
          {artists.map((artist, index) => {
            const hasPage = Boolean(artist.bio);
            const number = String(index + 1).padStart(2, "0");

            return (
              <li key={artist.slug} className="border-b border-[#1d1d1b] py-6 md:py-8">
                {hasPage ? (
                  <Link
                    href={`/artista/${artist.slug}`}
                    className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1b] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                    aria-label={`Apri la pagina di ${artist.name}`}
                  >
                    <div className="flex items-baseline justify-between gap-4 md:gap-8">
                      <span className={indexClass}>{number}</span>
                      <span className={nameClass}>
                        <span className="inline border-b-2 border-transparent transition-colors group-hover:border-[#1d1d1b] group-focus-visible:border-[#1d1d1b]">
                          {artist.name}
                        </span>
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-baseline justify-between gap-4 md:gap-8">
                    <span className={indexClass}>{number}</span>
                    <span className={nameClass}>{artist.name}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </LabProgramFrame>
    </section>
  );
}
