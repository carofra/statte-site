import LabProgramFrame, { labProgramDisplayClass } from "@/components/lab/LabProgramFrame";
import { artists } from "@/data/artists.js";
import { artistHasPage, type Artist } from "@/lib/artistTypes";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const portfolioBtnClass =
  "inline-flex w-full items-center justify-center gap-2 border border-black bg-[#1d1d1b] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white [text-shadow:0_1px_0_rgba(0,0,0,0.35)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:py-5 md:text-sm md:tracking-[0.26em]";

export function generateStaticParams() {
  return artists.filter(artistHasPage).map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) return { title: "Artista · Stattð" };
  return {
    title: `${artist.name} · Artisti · Stattð`,
    description: artist.bio,
  };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug) as Artist | undefined;
  if (!artist || !artistHasPage(artist)) notFound();

  const socials = artist.socials ?? [];

  return (
    <main className="bg-background pb-20 pt-6 text-black md:pb-28 md:pt-10">
      <LabProgramFrame>
        <nav className="border-b border-black py-4 md:py-5">
          <Link
            href="/#artisti"
            className="inline-block border-b border-transparent pb-0.5 text-[10px] font-normal uppercase tracking-[0.38em] text-black transition-colors hover:border-black"
          >
            ← ARTISTI
          </Link>
        </nav>

        <header className="border-b border-black py-10 md:py-12 lg:py-14">
          <p className="text-[10px] font-normal tracking-[0.42em] text-black/50 md:text-[11px]">
            <span className="uppercase">Artista</span> · statte 2026
          </p>
          <h1
            className={`${labProgramDisplayClass} mt-5 text-5xl leading-none [text-wrap:balance] md:mt-6 md:text-7xl`}
          >
            {artist.name}
          </h1>
        </header>

        <div className="border-b border-black py-8 md:py-10 lg:py-12">
          <div className="md:grid md:grid-cols-12 md:gap-8 lg:gap-10">
            <div className="md:col-span-8">
              {artist.bio ? (
                <article>
                  <p className="text-lg font-normal leading-relaxed text-black md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed">
                    {artist.bio}
                  </p>
                </article>
              ) : (
                <p className="text-base font-normal italic leading-relaxed text-black/55 md:text-lg">
                  La biografia sarà pubblicata a breve.
                </p>
              )}
            </div>
            <div className="md:col-span-4 md:flex md:flex-col md:justify-end">
              {artist.portfolioUrl ? (
                <a
                  href={artist.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={portfolioBtnClass}
                  style={{ color: "#fff" }}
                >
                  Portfolio <span aria-hidden>↗</span>
                </a>
              ) : null}

              {socials.length > 0 ? (
                <div className="mt-8 border-t border-black/40 pt-6 text-left md:mt-10 md:pt-8">
                  <p className="m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]">
                    Social
                  </p>
                  <ul className="m-0 mt-3 list-none p-0">
                    {socials.map((social) => (
                      <li
                        key={`${social.platform}-${social.handle}`}
                        className="text-sm font-normal leading-relaxed text-black/80 md:text-base [&+&]:mt-2"
                      >
                        <span className="text-black/50">{social.platform}:</span>{" "}
                        {social.url ? (
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-black/40 text-black underline-offset-4 transition-colors hover:border-black"
                          >
                            {social.handle}
                          </a>
                        ) : (
                          <span className="text-black">{social.handle}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </LabProgramFrame>
    </main>
  );
}
