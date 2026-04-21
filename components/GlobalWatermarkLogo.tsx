"use client";

import RotatingLogoE from "@/components/RotatingLogoE";

/** Marchio + blend, senza shell di posizionamento (per animare solo il marchio). */
export function WatermarkRotatingMark({ priority = false }: { priority?: boolean }) {
  return (
    <div className="mix-blend-multiply opacity-[0.08] contrast-[0.95] md:opacity-[0.1]">
      <RotatingLogoE
        decorative
        size="min(48vmin, 480px)"
        imageSizes="(max-width: 768px) 280px, 480px"
        priority={priority}
        rotationMode="motionScroll"
      />
    </div>
  );
}

export type GlobalWatermarkLogoProps = {
  className?: string;
  /** Dentro un contenitore già `fixed` (es. motion per scale in entrata). */
  nested?: boolean;
};

export default function GlobalWatermarkLogo({
  className = "",
  nested = false,
}: GlobalWatermarkLogoProps) {
  const shell = nested
    ? "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden motion-reduce:hidden"
    : "pointer-events-none fixed inset-0 z-[50] flex items-center justify-center overflow-hidden motion-reduce:hidden";

  return (
    <div className={`${shell} ${className}`.trim()} aria-hidden>
      <WatermarkRotatingMark />
    </div>
  );
}
