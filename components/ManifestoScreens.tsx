"use client";

import { motion, useReducedMotion } from "framer-motion";
import { manifestoPhrases } from "@/lib/stantteData";

const sectionClass =
  "bg-[#ffffff] px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24";

const bodyClass =
  "mx-auto w-full max-w-5xl text-justify text-3xl font-normal leading-snug tracking-[-0.02em] text-[#1d1d1b] md:text-5xl md:leading-snug";

const view = { once: true, amount: 0.38, margin: "0px 0px -12% 0px" } as const;

export default function ManifestoScreens() {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.95, ease: [0.22, 1, 0.36, 1] as const };
  const initial = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 };

  return (
    <div id="manifesto" className="overflow-x-clip bg-[#ffffff] text-[#1d1d1b]">
      <div role="region" aria-label="Manifesto">
        {manifestoPhrases.map((phrase, idx) => (
          <section key={`manifesto-${idx}`} className={sectionClass}>
            <motion.p
              className={bodyClass}
              lang="it"
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={transition}
            >
              {phrase}
            </motion.p>
          </section>
        ))}
      </div>
    </div>
  );
}
