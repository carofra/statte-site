import Container from "./Container";

export default function ProgrammaSection() {
  return (
    <section id="programma" className="py-36 md:py-48 lg:py-60 scroll-mt-20">
      <Container>
        <div className="flex flex-col gap-10 md:gap-14 text-left">
          <div>
            <p className="text-xl md:text-2xl uppercase tracking-wide text-foreground font-normal">
              Programma
            </p>
            <h2 className="mt-6 text-3xl md:text-6xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
              Dal 15 al 28 giugno 2026
            </h2>
          </div>
          <p className="max-w-3xl text-lg md:text-2xl leading-snug text-foreground font-normal">
            Un calendario essenziale: laboratori, momenti di dialogo e una restituzione finale dedicata
            alle pratiche nate nel tempo condiviso.
          </p>
        </div>
      </Container>
    </section>
  );
}
