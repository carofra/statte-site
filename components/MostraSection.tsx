import Container from "./Container";
import { mostraFinale } from "@/lib/stantteData";

export default function MostraSection() {
  return (
    <section id="mostra" className="py-32 md:py-44 lg:py-52 scroll-mt-20">
      <Container>
        <div className="flex flex-col gap-10 md:gap-14 text-left">
          <div>
            <p className="text-xl md:text-2xl uppercase tracking-wide text-foreground font-normal">
              Mostra
            </p>
            <h2 className="mt-6 text-3xl md:text-6xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
              {mostraFinale.title}
            </h2>
            <p className="mt-6 md:mt-8 text-lg md:text-2xl leading-snug text-foreground font-normal">
              {mostraFinale.dates}
            </p>
          </div>

          <p className="max-w-3xl text-lg md:text-2xl leading-snug text-foreground font-normal">
            {mostraFinale.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
