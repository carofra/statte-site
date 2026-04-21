import type { ReactNode } from "react";

/** Stack tipografico display (Providence), senza colore — aggiungi `text-black` o `text-foreground`. */
export const labProgramDisplayCore =
  "font-normal uppercase tracking-[-0.04em] leading-[0.82] [font-family:'Providence_Sans_Pro','Providence_Sans',ui-sans-serif,sans-serif]";

/** Display listing lab (nero pieno). */
export const labProgramDisplayClass = `${labProgramDisplayCore} text-black`;

type FrameTone = "black" | "foreground";

/** Contenitore largo e padding generosi, in linea con listing tipo desina.it/programma */
export default function LabProgramFrame({
  children,
  tone = "black",
}: {
  children: ReactNode;
  tone?: FrameTone;
}) {
  const toneClass = tone === "foreground" ? "text-foreground" : "text-black";

  return (
    <div className={`w-full ${toneClass}`}>
      <div className="mx-auto w-full max-w-[min(1920px,100%)] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:px-32">
        {children}
      </div>
    </div>
  );
}
