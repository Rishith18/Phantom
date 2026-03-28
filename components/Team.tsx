"use client";

import { motion } from "framer-motion";

const members = [
  {
    name: "Ryan Shah",
    linkedin: "https://www.linkedin.com/in/ryan-shah12/",
  },
  {
    name: "Harsh Akunuri",
    linkedin: "https://www.linkedin.com/in/harsh-akunuri/",
  },
  {
    name: "Pranav Karra",
    linkedin: "https://www.linkedin.com/in/pranavkarra/",
  },
  {
    name: "Rishith Prathi",
    linkedin: "https://www.linkedin.com/in/rishith-prathi-529a22246/",
  },
];

export default function Team() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 py-32 px-6"
    >
      <div className="max-w-[680px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-phantom-text mb-12"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 400,
          }}
        >
          Team
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-y-2"
        >
          {members.map((member, index) => (
            <span key={member.name} className="flex items-center">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-phantom-body transition-colors duration-300 hover:text-phantom-text"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 400,
                  textDecorationLine: "underline",
                  textDecorationColor: "transparent",
                  textUnderlineOffset: "4px",
                  transition:
                    "color 0.3s, text-decoration-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.textDecorationColor =
                    "#2A2A2A";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.textDecorationColor =
                    "transparent";
                }}
              >
                {member.name}
              </a>
              {index < members.length - 1 && (
                <span
                  className="mx-3 text-phantom-light select-none"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-12 space-y-2"
        >
          <p
            className="font-sans text-phantom-muted"
            style={{ fontSize: "0.9rem", fontWeight: 400 }}
          >
            Built at Carnegie Mellon University
          </p>
          <p
            className="font-sans text-phantom-light"
            style={{ fontSize: "0.85rem", fontWeight: 400 }}
          >
            VentureHacks 2026 · Hosted by Felicis Ventures
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
