import LabProgramFrame, { labProgramDisplayClass } from "@/components/lab/LabProgramFrame";
import { labs } from "@/data/labs.js";
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
  if (!lab) return { title: "Lab · Stattə" };
  return {
    title: `${lab.title} · Lab · Stattə`,
    description: lab.description,
  };
}

export default async function LabPage({ params }: Props) {
  const { slug } = await params;
  const lab = labs.find((l) => l.slug === slug);
  if (!lab) notFound();

  return (
    <main className="bg-background pb-20 pt-6 text-black md:pb-28 md:pt-10">
      <LabProgramFrame>
        <nav className="border-b border-black py-4 md:py-5">
          <Link
            href="/#lab"
            className="inline-block border-b border-transparent pb-0.5 text-[10px] font-normal uppercase tracking-[0.38em] text-black transition-colors hover:border-black"
          >
            ← Elenco lab
          </Link>
        </nav>

        <header className="border-b border-black py-12 md:py-16 lg:py-20">
          <p className="text-[10px] font-normal uppercase tracking-[0.42em] text-black/50 md:text-[11px]">
            Laboratorio · Stattə 2026
          </p>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs font-normal tabular-nums tracking-[0.04em] text-black/70 md:mt-5 md:text-sm">
            <span>{lab.dateDisplay}</span>
            <span className="text-black/40">·</span>
            <span>{lab.timeRange}</span>
          </p>
          <h1
            className={`${labProgramDisplayClass} mt-5 text-[clamp(2.35rem,10vw,8rem)] [text-wrap:balance] md:mt-6`}
          >
            {lab.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg italic leading-snug text-black md:mt-8 md:text-2xl lg:text-3xl">
            <span>{lab.curator}</span>
            <span className="ml-2 inline-block translate-y-px text-2xl not-italic md:text-3xl" aria-hidden>
              ↗
            </span>
          </p>
        </header>

        <article className="border-b border-black py-12 md:py-16 lg:py-20">
          <p className="max-w-2xl text-base font-normal leading-[1.7] text-black md:text-lg md:leading-[1.75]">
            {lab.description}
          </p>
        </article>

        <footer className="pt-10 md:pt-12">
          <Link
            href="/#lab"
            className="inline-block border-b border-black pb-1 text-[10px] font-normal uppercase tracking-[0.38em] text-black"
          >
            Torna all&apos;elenco
          </Link>
        </footer>
      </LabProgramFrame>
    </main>
  );
}
