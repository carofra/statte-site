"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Carica i loghi sponsor solo quando la sezione è vicina al viewport. */
export default function SponsorLogosGate({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || active) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={ref} className="min-h-[28rem] md:min-h-[32rem]">
      {active ? children : null}
    </div>
  );
}
