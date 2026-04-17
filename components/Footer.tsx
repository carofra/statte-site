import Container from "./Container";
import { guestLogos } from "@/lib/stantteData";

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 bg-background border-t border-foreground">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16">
          <div className="min-w-0 max-w-xl">
            <p className="text-[10px] tracking-[0.42em] uppercase text-foreground font-normal">Contatti</p>
            <div className="mt-5 space-y-8 text-foreground font-normal">
              <p>
                <a className="hover:underline underline-offset-8 text-[11px] md:text-xs tracking-[0.18em] uppercase" href="mailto:arti.inatto@gmail.com">
                  arti.inatto@gmail.com
                </a>
              </p>

              <div className="grid gap-1">
                <p className="text-[10px] tracking-[0.28em] uppercase text-foreground">Raffaella Mastrogiuseppe</p>
                <a
                  className="w-fit text-[11px] md:text-xs tracking-[0.12em] tabular-nums hover:underline underline-offset-8"
                  href="tel:+393515292781"
                >
                  +39 351 529 2781
                </a>
              </div>

              <div className="grid gap-1">
                <p className="text-[10px] tracking-[0.28em] uppercase text-foreground">Schasa Ricci</p>
                <a
                  className="w-fit text-[11px] md:text-xs tracking-[0.12em] tabular-nums hover:underline underline-offset-8"
                  href="tel:+393483777930"
                >
                  +39 348 377 7930
                </a>
              </div>
            </div>
          </div>

          <div className="min-w-0 max-w-xl">
            <p className="text-[10px] tracking-[0.42em] uppercase text-foreground font-normal">Partner</p>
            <div className="mt-5 space-y-3 text-[11px] md:text-xs tracking-[0.18em] uppercase text-foreground leading-relaxed font-normal">
              {guestLogos.map((name) => (
                <p key={name}>{name}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-[10px] tracking-[0.42em] uppercase text-foreground font-normal">
          Stattə &copy; 2026
        </div>
      </Container>
    </footer>
  );
}
