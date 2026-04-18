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

function scrollToSectionId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffsetPx();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(navItems[0]?.id ?? "");
  const ignoreObserverUntilRef = useRef(0);

  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!els.length) return;

    const headerH = getHeaderOffsetPx();

    const obs = new IntersectionObserver(
      (entries) => {
        if (Date.now() < ignoreObserverUntilRef.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${headerH}px 0px -42% 0px`,
        threshold: [0.08, 0.2, 0.35, 0.5],
      },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  const onNavClick = useCallback((id: string) => {
    setOpen(false);
    setActiveId(id);
    ignoreObserverUntilRef.current = Date.now() + 1000;
    scrollToSectionId(id);
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
