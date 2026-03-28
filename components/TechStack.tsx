"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechStack() {
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
          <Image
            src="/architecture.png"
            alt="Phantom architecture diagram showing the flow from User through Audio/Video Input, Meta DAT SDK, Gemini Live, OpenClaw, and Voice Agent"
            width={900}
            height={600}
            className="w-full h-auto"
            priority={false}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
