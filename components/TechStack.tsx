"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "OpenClaw", description: "Agentic reasoning engine" },
  { name: "Composio", description: "860+ service integrations" },
  { name: "Computer Vision", description: "Real-time scene understanding" },
  { name: "Smart Glasses", description: "Passive visual input" },
];

export default function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 py-32 px-6"
    >
      <div className="max-w-[800px] mx-auto">
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
          Tech Stack
        </motion.h2>

        <div className="flex flex-wrap justify-center">
          {stack.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="text-center px-6 md:px-8 py-6 relative"
            >
              {index > 0 && (
                <span
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10"
                  style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                />
              )}
              <p
                className="font-sans text-phantom-text mb-1"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {item.name}
              </p>
              <p
                className="font-sans text-phantom-muted"
                style={{ fontSize: "0.85rem", fontWeight: 400 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
