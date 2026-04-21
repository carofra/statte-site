"use client";

import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

/**
 * Rotazione quando non c’è scroll (gradi al secondo, senso orario).
 * ~5.4°/s ≈ giro completo in ~67s.
 */
const IDLE_DEG_PER_SEC = 5.4;

/** A scroll molto veloce, contributo extra massimo (°/s). */
const MAX_SCROLL_BOOST_DEG_PER_SEC = 88;

/** |velocity| tipica (px/s) per avvicinarsi al boost massimo. */
const SCROLL_REF_PX_PER_SEC = 520;

/** Sotto questa |velocity| (px/s) il contributo scroll è nullo (solo idle). */
const SCROLL_VELOCITY_DEADZONE = 10;

/**
 * Angolo di rotazione continuo: idle sempre molto lento; con scroll la velocità
 * cresce con l’intensità dello scroll (direzione = verso di scroll).
 */
export function useScrollLinkedRotation(enabled: boolean) {
  const rotate = useMotionValue(0);

  useEffect(() => {
    if (!enabled) return;

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
  }, [enabled, rotate]);

  return rotate;
}
