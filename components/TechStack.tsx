"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const basePath = process.env.NODE_ENV === "production" ? "/Phantom" : "";

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 py-32 px-6"
    >
      <div className="max-w-[900px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-phantom-text text-center mb-16"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 400,
          }}
        >
          Architecture
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/architecture.png`}
            alt="Phantom architecture diagram showing the flow from User through Audio/Video Input, Meta DAT SDK, Gemini Live, OpenClaw, and Voice Agent"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
