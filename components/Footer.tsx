import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 bg-background border-t border-foreground">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16">
          <div className="min-w-0 max-w-xl">
            <p className="text-[10px] tracking-[0.42em] uppercase text-foreground font-normal">Contatti</p>
            <div className="mt-5 text-foreground font-normal">
              <p>
                <a className="hover:underline underline-offset-8 text-[11px] md:text-xs tracking-[0.18em] uppercase" href="mailto:arti.inatto@gmail.com">
                  arti.inatto@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="min-w-0 max-w-xl">
            <p className="text-[10px] tracking-[0.42em] uppercase text-foreground font-normal">Social</p>
            <div className="mt-5 text-foreground font-normal">
              <p>
                <a
                  className="hover:underline underline-offset-8 text-[11px] md:text-xs tracking-[0.18em] lowercase"
                  href="https://www.instagram.com/statte_arte_inatto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stattə su Instagram (si apre in una nuova scheda)"
                >
                  instagram
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-[10px] tracking-[0.42em] lowercase text-foreground font-normal">
          stattə &copy; 2026
        </div>
      </Container>
    </footer>
  );
}
