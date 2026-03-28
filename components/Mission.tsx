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
          Phantom is an AI life assistant built on OpenClaw and Meta Ray-Ban
          glasses that passively watches your world and takes action on your
          behalf — without you having to ask. It uses a three-tier confidence
          system to decide when to act silently, when to whisper and ask, and
          when to stay completely silent out of respect for ambiguity and
          privacy. The core insight is that the next era of AI isn&apos;t driven
          by manual prompting — it&apos;s driven by autonomy, where intelligence
          acts on your life rather than waiting to be told to.
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
