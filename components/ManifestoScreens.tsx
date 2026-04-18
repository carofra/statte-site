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
            className="min-h-[92dvh] flex items-center justify-center bg-[#ffffff] px-4 md:px-8 lg:px-12 py-32 md:py-40 lg:py-48"
          >
            <motion.p
              className="w-full max-w-[min(1400px,calc(100vw-2rem))] mx-auto text-justify text-[clamp(3rem,7vw,8.5rem)] leading-[1.12] tracking-[-0.04em] font-normal text-[#1d1d1b]"
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
