"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Container from "./Container";
import { navItems } from "@/lib/stantteData";

function getHeaderOffsetPx(): number {
  if (typeof document === "undefined") return 56;
  const header = document.querySelector("header");
  if (!(header instanceof HTMLElement)) return 56;
  return Math.ceil(header.getBoundingClientRect().height) + 12;
}

function sectionDocumentTop(el: HTMLElement): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

/** Ultima sezione in ordine di navigazione il cui inizio è sopra la linea di lettura (sotto l'header). */
function computeActiveSectionId(ids: string[], readingLineY: number): string {
  let active = ids[0] ?? "";
  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (sectionDocumentTop(el) <= readingLineY) active = id;
    else break;
  }
  return active;
}

function scrollToSectionId(id: string): ScrollBehavior {
  const el = document.getElementById(id);
  if (!el) return "auto";
  const targetTop = el.getBoundingClientRect().top + window.scrollY - getHeaderOffsetPx();
  const nextY = Math.max(0, targetTop);
  const distance = Math.abs(window.scrollY - nextY);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Salti lunghi: scroll istantaneo (smooth nativo può sembrare "lento" su one-page molto alte).
  const behavior: ScrollBehavior =
    reduceMotion || distance > window.innerHeight * 2.2 ? "auto" : "smooth";
  window.scrollTo({ top: nextY, behavior });
  return behavior;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(navItems[0]?.id ?? "");
  /** Non sovrascrivere l'evidenziazione durante / subito dopo uno scroll programmatico da menu. */
  const ignoreSpyUntilRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!(header instanceof HTMLElement)) return;

    const syncFromScroll = () => {
      if (typeof window === "undefined") return;
      if (Date.now() < ignoreSpyUntilRef.current) return;
      const line = window.scrollY + getHeaderOffsetPx() + 1;
      const next = computeActiveSectionId(sectionIds, line);
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const scheduleSync = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        syncFromScroll();
      });
    };

    scheduleSync();

    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync, { passive: true });

    const ro = new ResizeObserver(() => scheduleSync());
    ro.observe(header);

    return () => {
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      ro.disconnect();
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [sectionIds]);

  const onNavClick = useCallback((id: string) => {
    setOpen(false);
    setActiveId(id);
    const behavior = scrollToSectionId(id);
    ignoreSpyUntilRef.current = Date.now() + (behavior === "smooth" ? 900 : 80);
  }, []);

  return (
    <header className="sticky top-0 z-[110] bg-background border-b border-foreground">
      <Container>
        <div className="flex min-h-14 items-center justify-between gap-6 py-3.5 md:py-4">
          <nav className="hidden md:flex flex-1 items-center justify-between gap-4 lg:gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                }}
                className={[
                  "text-base md:text-lg lowercase tracking-wide text-foreground",
                  activeId === item.id ? "border-b border-foreground pb-0.5" : "",
                ].join(" ")}
                aria-current={activeId === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden ml-auto">
            <button
              type="button"
              className="text-base lowercase tracking-wide text-foreground"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "chiudi" : "menu"}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-foreground">
          <Container>
            <div className="py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(item.id);
                  }}
                  className={[
                    "text-left text-lg lowercase tracking-wide text-foreground",
                    activeId === item.id ? "underline underline-offset-8" : "",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
