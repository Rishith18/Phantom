"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 py-32 px-6"
    >
      <div className="max-w-[720px] mx-auto text-center">
        <div className="relative">
          <span
            className="font-serif text-phantom-light select-none absolute -top-8 -left-2 md:-left-8"
            style={{ fontSize: "4rem", lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote
            className="font-serif italic text-phantom-text leading-relaxed"
            style={{
              fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            The smartphone made information accessible. Phantom makes action
            frictionless. The next computing paradigm isn&apos;t a better
            screen — it&apos;s no screen at all.
          </blockquote>

          <span
            className="font-serif text-phantom-light select-none absolute -bottom-12 -right-2 md:-right-8"
            style={{ fontSize: "4rem", lineHeight: 1 }}
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </div>
      </div>
    </motion.section>
  );
}
