import Container from "./Container";
import RotatingLogoE from "./RotatingLogoE";

export default function Footer() {
  return (
    <footer className="relative border-t border-foreground bg-background py-10 pb-24 md:py-12 md:pb-20">
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
                  aria-label="Stattð su Instagram (si apre in una nuova scheda)"
                >
                  instagram
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 max-w-[calc(100%-8rem)] md:max-w-[calc(100%-9rem)] lg:max-w-none"
          aria-label="stattð, copyright 2026, realizzato da carofra.dev"
        >
          <p className="m-0 flex flex-col gap-1.5 text-[10px] font-normal lowercase text-foreground sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2 sm:gap-y-1">
            <span className="tracking-[0.42em]">stattð &copy; 2026</span>
            <span className="text-foreground/45 max-sm:hidden" aria-hidden>
              ·
            </span>
            <span className="tracking-[0.24em] text-foreground/90">
              realizzato da{" "}
              <a
                href="https://carofra.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-4 transition-colors hover:underline"
              >
                carofra.dev
              </a>
            </span>
          </p>
        </div>
      </Container>

      <div
        className="pointer-events-none absolute bottom-5 right-4 md:bottom-7 md:right-7"
        aria-hidden
      >
        <RotatingLogoE
          size="clamp(5.75rem, 5vw + 3.5rem, 7rem)"
          className="opacity-[0.94]"
          rotationMode="motionScroll"
          imageSizes="(max-width: 768px) 160px, 200px"
        />
      </div>
    </footer>
  );
}
