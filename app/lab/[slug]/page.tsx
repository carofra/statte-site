import LabBookingPanel from "@/components/lab/LabBookingPanel";
import LabProgramFrame, { labProgramDisplayClass } from "@/components/lab/LabProgramFrame";
import { getFirstSessionForSlug, labs } from "@/data/labs.js";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lab = labs.find((l) => l.slug === slug);
  if (!lab) return { title: "Lab · Stattð" };
  return {
    title: `${lab.title} · Lab · Stattð`,
    description: lab.description,
  };
}

export default async function LabPage({ params }: Props) {
  const { slug } = await params;
  const lab = labs.find((l) => l.slug === slug);
  if (!lab) notFound();

  const { dateDisplay, timeRange } = getFirstSessionForSlug(lab.slug);

  return (
    <main className="bg-background pb-20 pt-6 text-black md:pb-28 md:pt-10">
      <LabProgramFrame>
        <nav className="border-b border-black py-4 md:py-5">
          <Link
            href="/#lab"
            className="inline-block border-b border-transparent pb-0.5 text-[10px] font-normal uppercase tracking-[0.38em] text-black transition-colors hover:border-black"
          >
            ← ELENCO LAB
          </Link>
        </nav>

        <header className="border-b border-black py-10 md:py-12 lg:py-14">
          <p className="text-[10px] font-normal tracking-[0.42em] text-black/50 md:text-[11px]">
            <span className="uppercase">Laboratorio</span> · statte 2026
          </p>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs font-normal tabular-nums tracking-[0.04em] text-black/70 md:mt-5 md:text-sm">
            <span>{dateDisplay}</span>
            <span className="text-black/40">·</span>
            <span>{timeRange}</span>
          </p>
          <h1
            className={`${labProgramDisplayClass} mt-5 text-5xl leading-none [text-wrap:balance] md:mt-6 md:text-7xl`}
          >
            {lab.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base italic leading-snug text-black md:mt-6 md:text-lg">
            {lab.curator}
          </p>
        </header>

        <div className="border-b border-black py-8 md:py-10 lg:py-12">
          <div className="md:grid md:grid-cols-12 md:gap-8 lg:gap-10">
            <div className="md:col-span-8">
              <article>
                <p className="text-lg font-normal leading-relaxed text-black md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed">
                  {lab.description}
                </p>
              </article>
            </div>
            <div className="md:col-span-4">
              <LabBookingPanel labTitle={lab.title} dateDisplay={dateDisplay} timeRange={timeRange} />
            </div>
          </div>
        </div>
      </LabProgramFrame>
    </main>
  );
}
