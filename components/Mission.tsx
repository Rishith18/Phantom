"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 py-32 px-6"
    >
      <div className="max-w-[680px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-sans text-phantom-body leading-[1.75]"
          style={{ fontSize: "1.05rem" }}
        >
          Phantom is an ambient AI system that sees the world through your
          glasses and acts on your behalf — silently, proactively, and only
          when it&apos;s confident you&apos;d want it to.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-8 font-sans text-phantom-body leading-[1.75]"
          style={{ fontSize: "1.05rem" }}
        >
          No commands. No screens. No friction. Just intention and outcome.
        </motion.p>
      </div>
    </motion.section>
  );
}
