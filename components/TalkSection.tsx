import Container from "./Container";

export default function TalkSection() {
  return (
    <section id="talk" className="py-32 md:py-44 lg:py-52 scroll-mt-20">
      <Container>
        <div className="flex flex-col gap-10 md:gap-14 text-left">
          <div>
            <p className="text-xs md:text-sm tracking-[0.22em] uppercase text-foreground font-normal">
              Talk
            </p>
            <h2 className="mt-6 text-3xl md:text-6xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
              Arte e Molise
            </h2>
            <p className="mt-6 md:mt-8 text-lg md:text-2xl leading-snug text-foreground font-normal">
              Sabato 20 Giugno
            </p>
          </div>

          <p className="max-w-3xl text-lg md:text-2xl leading-snug text-foreground font-normal">
            Un momento di confronto sul valore della residenza come spazio di ascolto e produzione:
            pratiche, territori e storie che si incontrano.
          </p>
        </div>
      </Container>
    </section>
  );
}
