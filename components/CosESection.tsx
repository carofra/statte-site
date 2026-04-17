import Image from "next/image";

export default function CosESection() {
  return (
    <section id="cos-e" className="scroll-mt-20">
      <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <h1 className="flex w-full justify-center">
          <Image
            src="/stattelogo.png"
            alt="Stattə"
            width={2400}
            height={800}
            priority
            className="w-auto max-w-[min(98vw,1750px)] h-[72vh] max-h-[88vh] object-contain object-center"
            sizes="98vw"
          />
        </h1>

        <p className="mt-16 md:mt-24 lg:mt-28 max-w-4xl text-center text-[11px] sm:text-xs md:text-sm tracking-[0.18em] md:tracking-[0.22em] uppercase text-foreground font-normal leading-relaxed">
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
