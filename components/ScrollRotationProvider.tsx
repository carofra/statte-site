"use client";

import type { MotionValue } from "framer-motion";
import { useMotionValue, useReducedMotion } from "framer-motion";
import { createContext, useContext, useEffect } from "react";

const ScrollRotationContext = createContext<MotionValue<number> | null>(null);

/**
 * Angolo condiviso (gradi) per tutte le “e” in `rotationMode="motionScroll"`:
 * watermark e footer restano allineate e con la stessa velocità da scroll + idle.
 */
export function useScrollRotationMotionValue(): MotionValue<number> {
  const v = useContext(ScrollRotationContext);
  if (!v) {
    throw new Error(
      "useScrollRotationMotionValue va usato dentro ScrollRotationProvider (layout).",
    );
  }
  return v;
}

/** Rotazione idle (gradi al secondo, senso orario). */
const IDLE_DEG_PER_SEC = 5.4;

const MAX_SCROLL_BOOST_DEG_PER_SEC = 88;
const SCROLL_REF_PX_PER_SEC = 520;
const SCROLL_VELOCITY_DEADZONE = 10;

export function ScrollRotationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const rotate = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      rotate.set(0);
      return;
    }

    let prevY = typeof window !== "undefined" ? window.scrollY : 0;
    let prevT = performance.now();
    let vSmooth = 0;
    let lastScrollSign = 1;
    let rafId = 0;
    let active = true;

    const tick = (t: number) => {
      if (!active) return;
      const dt = Math.min(Math.max((t - prevT) / 1000, 0), 0.08);
      prevT = t;

      const y = window.scrollY;
      const instantV = dt > 0 ? (y - prevY) / dt : 0;
      prevY = y;

      const absInstant = Math.abs(instantV);
      vSmooth = vSmooth * 0.82 + absInstant * 0.18;

      if (absInstant > SCROLL_VELOCITY_DEADZONE) {
        lastScrollSign = Math.sign(instantV) || lastScrollSign;
      }

      let scrollBoost = 0;
      if (vSmooth > SCROLL_VELOCITY_DEADZONE) {
        const norm = Math.min(vSmooth / SCROLL_REF_PX_PER_SEC, 1.35);
        scrollBoost = Math.pow(norm, 0.72) * MAX_SCROLL_BOOST_DEG_PER_SEC;
      }

      const deltaDeg =
        IDLE_DEG_PER_SEC * dt + lastScrollSign * scrollBoost * dt;

      const next = rotate.get() + deltaDeg;
      rotate.set(((next % 360) + 360) % 360);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      active = false;
      cancelAnimationFrame(rafId);
    };
  }, [reduceMotion, rotate]);

  return (
    <ScrollRotationContext.Provider value={rotate}>
      {children}
    </ScrollRotationContext.Provider>
  );
}
