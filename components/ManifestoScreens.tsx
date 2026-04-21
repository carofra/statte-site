"use client";

import { motion, useReducedMotion } from "framer-motion";
import { manifestoPhrases } from "@/lib/stantteData";

export default function ManifestoScreens() {
  const reduceMotion = useReducedMotion();

  return (
    <div id="manifesto" className="bg-[#ffffff] text-[#1d1d1b]">
      <div role="region" aria-label="Manifesto">
        {manifestoPhrases.map((phrase, idx) => (
          <section
            key={`${idx}-${phrase}`}
            className="min-h-[92dvh] flex items-center justify-center bg-[#ffffff] px-4 md:px-8 lg:px-12 py-24 md:py-32 lg:py-36"
          >
            <motion.p
              className="mx-auto w-full max-w-5xl text-justify text-3xl font-normal leading-snug tracking-[-0.02em] text-[#1d1d1b] md:text-5xl md:leading-snug"
              lang="it"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.38, margin: "0px 0px -12% 0px" }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
              }
            >
              {phrase}
            </motion.p>
          </section>
        ))}
      </div>
    </div>
  );
}
