import type { ReactNode } from "react";

/** Contenitore largo e padding generosi, in linea con listing tipo desina.it/programma */
export default function LabProgramFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full text-black">
      <div className="mx-auto w-full max-w-[min(1920px,100%)] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:px-32">
        {children}
      </div>
    </div>
  );
}

/** Titolo display programma (Providence stack) */
export const labProgramDisplayClass =
  "font-normal uppercase tracking-[-0.04em] leading-[0.82] text-black [font-family:'Providence_Sans_Pro','Providence_Sans',ui-sans-serif,sans-serif]";
