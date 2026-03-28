"use client";

import { motion } from "framer-motion";

function ArchitectureDiagram() {
  const stroke = "rgba(42, 42, 42, 0.22)";
  const strokeStrong = "rgba(42, 42, 42, 0.35)";
  const fill = "#FDFCF9";
  const text = "#2A2A2A";
  const accent = "#5A8A5A";

  return (
    <figure className="w-full max-w-[720px] mx-auto" aria-label="System architecture flow">
      <svg
        viewBox="0 0 640 380"
        className="w-full h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <defs>
          <filter id="arch-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2A2A2A" floodOpacity="0.06" />
          </filter>
          <marker id="arch-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill={strokeStrong} />
          </marker>
        </defs>

        {/* Arrows (under nodes) */}
        <g stroke={stroke} strokeWidth="1.25" fill="none" markerEnd="url(#arch-arrow)">
          <path d="M118 52 H188" />
          <path d="M278 52 H348" />
          <path d="M393 76 V112" />
          <path d="M393 160 V196" />
          <path d="M393 244 V286" />
          <path d="M348 220 H118" />
          <path d="M73 196 V76" />
        </g>

        {/* Nodes */}
        <g filter="url(#arch-soft)">
          <rect x="28" y="28" width="90" height="48" rx="10" fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x="188" y="28" width="90" height="48" rx="10" fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x="348" y="28" width="90" height="48" rx="10" fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x="348" y="112" width="90" height="48" rx="10" fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x="348" y="196" width="90" height="48" rx="10" fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x="28" y="196" width="90" height="48" rx="10" fill={fill} stroke={accent} strokeWidth="1.5" strokeOpacity="0.55" />
        </g>

        {/* Glasses — subtle cue for wearable capture */}
        <g transform="translate(248, 42)" stroke={text} strokeWidth="1.1" strokeLinecap="round" opacity="0.4">
          <circle cx="8" cy="5" r="4" fill="none" />
          <circle cx="20" cy="5" r="4" fill="none" />
          <path d="M12 5h4M4 5H1M27 5h3" />
        </g>

        {/* Cloud — External Apps */}
        <g transform="translate(318, 268)">
          <path
            d="M52 36c-8 0-15-5-17-12-10 0-18-7-18-16 0-9 7-16 16-16h78c11 0 20 8 20 18 0 7-4 13-10 16 2 3 3 6 3 10 0 11-9 20-20 20H52z"
            fill={fill}
            stroke={strokeStrong}
            strokeWidth="1"
            filter="url(#arch-soft)"
          />
        </g>

        <text
          x="73"
          y="56"
          textAnchor="middle"
          fill={text}
          fontSize="12"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          User
        </text>
        <text
          x="233"
          y="56"
          textAnchor="middle"
          fill={text}
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          A/V Input
        </text>
        <text
          x="393"
          y="56"
          textAnchor="middle"
          fill={text}
          fontSize="10"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          Meta DAT SDK
        </text>
        <text
          x="393"
          y="140"
          textAnchor="middle"
          fill={text}
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          Gemini Live
        </text>
        <text
          x="393"
          y="224"
          textAnchor="middle"
          fill={text}
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          OpenClaw
        </text>
        <text
          x="73"
          y="224"
          textAnchor="middle"
          fill={text}
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          Voice Agent
        </text>
        <text
          x="393"
          y="312"
          textAnchor="middle"
          fill={text}
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          External Apps
        </text>
      </svg>
    </figure>
  );
}

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
          className="rounded-2xl border border-phantom-text/10 bg-white/40 px-4 py-8 sm:px-8 backdrop-blur-[2px]"
        >
          <ArchitectureDiagram />
        </motion.div>
      </div>
    </motion.section>
  );
}
