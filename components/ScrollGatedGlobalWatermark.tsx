"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
    const bottom = hero.getBoundingClientRect().bottom;
    setVisible(bottom <= HERO_OUT_EPS);
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
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="global-watermark"
          className="pointer-events-none fixed inset-0 z-[50] flex items-center justify-center overflow-hidden motion-reduce:hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0, transition: { duration: 0 } }
              : { opacity: 0, transition: { duration: 0.42, ease: [0.4, 0, 0.2, 1] } }
          }
          aria-hidden
        >
          <motion.div
            initial={
              reduceMotion
                ? { scale: 1, opacity: 1 }
                : { scale: ENTER_SCALE_FROM, opacity: 0.74 }
            }
            animate={{ scale: 1, opacity: 1 }}
            transition={enterTransition}
            style={{ transformOrigin: "50% 50%" }}
            className="flex items-center justify-center"
          >
            <WatermarkRotatingMark priority />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
