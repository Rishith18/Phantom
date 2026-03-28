"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    level: "High Confidence",
    action: "Acts silently",
    color: "#5A8A5A",
    examples: [
      "You walk into a meeting room → phone silences itself",
      "Someone hands you a business card → contact saved automatically",
      "You glance at an empty coffee cup at 8am → added to grocery list",
    ],
  },
  {
    level: "Medium Confidence",
    action: "Whispers and asks",
    color: "#B8963E",
    examples: [
      "You stare at a bill for 3+ seconds → \"Want me to pay that?\"",
      "You look at a flight confirmation → \"Add this to your calendar?\"",
      "You look at someone you haven't texted in months → \"Want to reach out?\"",
    ],
  },
  {
    level: "Low Confidence",
    action: "Observes and waits",
    color: "#A06060",
    examples: [
      "A quick glance at anything financial",
      "Looking at someone you don't know well",
      "Anything involving sending money",
    ],
  },
];

export default function ConfidenceSpectrum() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 py-32 px-6"
    >
      <div className="max-w-[680px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-phantom-text text-center mb-20"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 400,
          }}
        >
          The Confidence Spectrum
        </motion.h2>

        <div className="space-y-20">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tier.color }}
                />
                <span
                  className="font-sans text-phantom-muted"
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {tier.level}
                </span>
              </div>

              <p
                className="font-serif text-phantom-text mb-6"
                style={{
                  fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                  fontWeight: 400,
                }}
              >
                {tier.action}
              </p>

              <ul className="space-y-3">
                {tier.examples.map((example) => (
                  <li
                    key={example}
                    className="font-sans text-phantom-body leading-[1.75] pl-5 relative"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <span
                      className="absolute left-0 top-[0.65em] w-1 h-1 rounded-full"
                      style={{ backgroundColor: "#BEBEBE" }}
                    />
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
