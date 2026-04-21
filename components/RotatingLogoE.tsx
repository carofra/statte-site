"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useScrollRotationMotionValue } from "@/components/ScrollRotationProvider";

export type RotatingLogoEProps = {
  /** Lato del quadrato sullo schermo (es. `5.75rem`, `112`, `1.05em`). */
  size?: string | number;
  className?: string;
  /** Marchio leggero in secondo piano (~40% opacità), stile “satellite”. */
  ghost?: boolean;
  /** Se true: solo ritmo visivo, niente voce screen reader (`alt=""`, `aria-hidden`). */
  decorative?: boolean;
  /** `sizes` per `next/image` (srcset nitido a diverse larghezze). */
  imageSizes?: string;
  /** Caricamento prioritario (es. watermark dopo l’hero, evita “pop” a metà animazione). */
  priority?: boolean;
  /**
   * `css`: animazione 30s in `globals.css`.
   * `motionScroll`: stesso angolo condiviso (provider in layout) — watermark e footer allineati.
   */
  rotationMode?: "css" | "motionScroll";
  /** Tooltip nativo (es. incipit “interattivo” nel manifesto). */
  title?: string;
  tabIndex?: number;
  "aria-label"?: string;
};

const DEFAULT_SIZE = "5.75rem";
const DEFAULT_IMAGE_SIZES = "(max-width: 768px) 128px, 180px";

function sizeToCss(size: string | number | undefined): string {
  if (size === undefined) return DEFAULT_SIZE;
  if (typeof size === "number") return `${size}px`;
  return size;
}

/**
 * “e” del wordmark: rotazione CSS (30s) oppure `motionScroll` (Framer: idle lentissimo + velocità da scroll).
 */
export default function RotatingLogoE({
  size = DEFAULT_SIZE,
  className = "",
  ghost = false,
  decorative = false,
  imageSizes = DEFAULT_IMAGE_SIZES,
  priority = false,
  rotationMode = "css",
  title,
  tabIndex,
  "aria-label": ariaLabel = "Stattð",
}: RotatingLogoEProps) {
  const dim = sizeToCss(size);
  const box: CSSProperties = { width: dim, height: dim };
  const reduceMotion = useReducedMotion();
  const scrollRotationEnabled = rotationMode === "motionScroll" && !reduceMotion;
  const sharedScrollRotate = useScrollRotationMotionValue();

  const imageClass =
    rotationMode === "motionScroll"
      ? "block h-full w-full object-contain object-center"
      : "rotating-logo-e-svg object-contain object-center";

  return (
    <span
      className={`relative inline-block shrink-0 align-middle overflow-hidden ${ghost ? "opacity-[0.4]" : ""} ${className}`.trim()}
      style={box}
      title={title}
      tabIndex={tabIndex}
      aria-hidden={decorative ? true : undefined}
    >
      {rotationMode === "motionScroll" ? (
        <motion.span
          className="absolute inset-0 block"
          style={{ rotate: scrollRotationEnabled ? sharedScrollRotate : 0 }}
        >
          <Image
            src="/stattewordmark.png"
            alt={decorative ? "" : ariaLabel}
            fill
            sizes={imageSizes}
            quality={95}
            priority={priority}
            className={imageClass}
          />
        </motion.span>
      ) : (
        <Image
          src="/stattewordmark.png"
          alt={decorative ? "" : ariaLabel}
          fill
          sizes={imageSizes}
          quality={95}
          priority={priority}
          className={imageClass}
        />
      )}
    </span>
  );
}
