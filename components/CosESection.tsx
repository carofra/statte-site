import Image from "next/image";

export default function CosESection() {
  return (
    <section id="cos-e" className="scroll-mt-20">
      <div className="min-h-[100dvh] flex flex-col items-center px-6 md:px-12 lg:px-16">
        <div className="flex flex-1 w-full min-h-0 flex-col items-center justify-center pt-12 md:pt-16 pb-14 md:pb-20 lg:pb-24">
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
          <p className="mt-1 md:mt-2 w-full max-w-4xl text-center text-sm sm:text-base md:text-lg tracking-[0.14em] md:tracking-[0.18em] uppercase text-foreground font-normal leading-relaxed">
            Dal 15 al 28 giugno 2026
          </p>
        </div>
      </div>
    </section>
  );
}
