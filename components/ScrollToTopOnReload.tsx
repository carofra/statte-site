"use client";

import { useLayoutEffect } from "react";

function isReloadNavigation(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const nav = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === "reload") return true;
    const legacy = performance as Performance & {
      navigation?: { type: number };
    };
    return legacy.navigation?.type === 1;
  } catch {
    return false;
  }
}

/**
 * Dopo un ricaricamento (F5 / cmd+R) porta lo scroll in cima e disattiva il ripristino automatico del browser.
 * Backup rispetto allo script `beforeInteractive` nel layout (alcuni browser ripristinano dopo).
 */
export default function ScrollToTopOnReload() {
  useLayoutEffect(() => {
    if (!isReloadNavigation()) return;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return null;
}
