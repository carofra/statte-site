"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { WatermarkRotatingMark } from "@/components/GlobalWatermarkLogo";

const HERO_ID = "cos-e";

/** Tolleranza subpixel: l’hero è considerato del tutto uscito. */
const HERO_OUT_EPS = 0.5;

/** Partenza discreta: poco zoom-in, così la molla non sembra un “gadget”. */
const ENTER_SCALE_FROM = 0.78;

/**
 * Marchio rotante solo quando l’hero (#cos-e) non occupa più un pixel del viewport;
 * sulle altre pagine (senza hero) è sempre visibile. Entrata con molla morbida + leggero fade.
 */
export default function ScrollGatedGlobalWatermark() {
  const [visible, setVisible] = useState(false);
  const raf = useRef(0);
  const reduceMotion = useReducedMotion();

  const update = useCallback(() => {
    const hero = document.getElementById(HERO_ID);
    if (!hero) {
      setVisible(true);
      return;
    }
    const header = document.querySelector("header");
    const headerBottom = header instanceof HTMLElement ? header.getBoundingClientRect().bottom : 0;
    const bottom = hero.getBoundingClientRect().bottom;
    // Trigger quando l'hero è uscito sotto l'header sticky (non solo a y=0 viewport).
    setVisible(bottom <= headerBottom + HERO_OUT_EPS);
  }, []);

  useEffect(() => {
    update();
    const onFrame = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        update();
      });
    };
    window.addEventListener("scroll", onFrame, { passive: true });
    window.addEventListener("resize", onFrame);
    return () => {
      window.removeEventListener("scroll", onFrame);
      window.removeEventListener("resize", onFrame);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [update]);

  const enterTransition = reduceMotion
    ? { duration: 0 }
    : {
        scale: {
          type: "spring" as const,
          stiffness: 46,
          damping: 28,
          mass: 0.88,
        },
        opacity: {
          duration: 0.62,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[50] flex items-center justify-center overflow-hidden motion-reduce:hidden"
      initial={{ opacity: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        transition: reduceMotion
          ? { duration: 0 }
          : { duration: visible ? 0.28 : 0.42, ease: visible ? [0.22, 1, 0.36, 1] : [0.4, 0, 0.2, 1] },
      }}
      aria-hidden
    >
      <motion.div
        initial={
          reduceMotion
            ? { scale: 1, opacity: 1 }
            : { scale: ENTER_SCALE_FROM, opacity: 0.74 }
        }
        animate={{ scale: visible ? 1 : ENTER_SCALE_FROM, opacity: visible ? 1 : 0.74 }}
        transition={enterTransition}
        style={{ transformOrigin: "50% 50%" }}
        className="flex items-center justify-center"
      >
        <WatermarkRotatingMark priority />
      </motion.div>
    </motion.div>
  );
}
