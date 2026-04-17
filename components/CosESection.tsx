import Image from "next/image";

export default function CosESection() {
  return (
    <section id="cos-e" className="scroll-mt-20">
      <div className="min-h-[100dvh] flex flex-col items-center px-6 md:px-12 lg:px-16">
        <div className="flex flex-1 w-full min-h-0 flex-col items-center justify-center pt-12 md:pt-16 pb-4">
          <h1 className="flex w-full justify-center">
            <Image
              src="/stattelogo.png"
              alt="Stattə"
              width={2400}
              height={800}
              priority
              className="w-auto max-w-[min(98vw,1750px)] max-h-[min(72vh,720px)] md:max-h-[min(76vh,780px)] h-auto object-contain object-center"
              sizes="98vw"
            />
          </h1>
        </div>

        <p className="shrink-0 w-full max-w-4xl pb-8 md:pb-10 text-center text-[11px] sm:text-xs md:text-sm tracking-[0.18em] md:tracking-[0.22em] uppercase text-foreground font-normal leading-relaxed">
          Residenza Artistica Molise{" "}
          <span className="inline-block px-2 sm:px-3 select-none" aria-hidden="true">
            |
          </span>
          15 - 28 Giugno 2026
        </p>
      </div>
    </section>
  );
}
