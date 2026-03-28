"use client";

import { motion } from "framer-motion";

/** Tight layout: equal visual margins, no empty band on the right */
function ArchitectureDiagram() {
  const stroke = "rgba(42, 42, 42, 0.22)";
  const strokeStrong = "rgba(42, 42, 42, 0.35)";
  const fill = "#FDFCF9";
  const text = "#2A2A2A";
  const accent = "#5A8A5A";

  const pad = 28;
  const gap = 22;
  const w = 112;
  const h = 54;
  const rx = 11;

  const c1 = pad;
  const c2 = pad + w + gap;
  const c3 = pad + (w + gap) * 2;

  const cx1 = c1 + w / 2;
  const cx2 = c2 + w / 2;
  const cx3 = c3 + w / 2;

  const yTop = 26;
  const yGem = yTop + h + 18;
  const yOpen = yGem + h + 18;
  const yCloud = yOpen + h + 16;

  const midYTop = yTop + h / 2;
  const midOpen = yOpen + h / 2;

  const vbW = c3 + w + pad;
  const vbH = yCloud + 62 + pad;

  return (
    <figure className="w-full flex justify-center" aria-label="System architecture flow">
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="w-full max-w-[min(100%,520px)] h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="arch-soft" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2A2A2A" floodOpacity="0.06" />
          </filter>
          <marker id="arch-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill={strokeStrong} />
          </marker>
        </defs>

        <g stroke={stroke} strokeWidth="1.25" fill="none" markerEnd="url(#arch-arrow)">
          <path d={`M${c1 + w} ${midYTop} H${c2}`} />
          <path d={`M${c2 + w} ${midYTop} H${c3}`} />
          <path d={`M${cx3} ${yTop + h} V${yGem}`} />
          <path d={`M${cx3} ${yGem + h} V${yOpen}`} />
          <path d={`M${cx3} ${yOpen + h} V${yCloud}`} />
          <path d={`M${c3} ${midOpen} H${c1 + w}`} />
          <path d={`M${cx1} ${yOpen} V${yTop + h}`} />
        </g>

        <g filter="url(#arch-soft)">
          <rect x={c1} y={yTop} width={w} height={h} rx={rx} fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x={c2} y={yTop} width={w} height={h} rx={rx} fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x={c3} y={yTop} width={w} height={h} rx={rx} fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x={c3} y={yGem} width={w} height={h} rx={rx} fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x={c3} y={yOpen} width={w} height={h} rx={rx} fill={fill} stroke={strokeStrong} strokeWidth="1" />
          <rect x={c1} y={yOpen} width={w} height={h} rx={rx} fill={fill} stroke={accent} strokeWidth="1.5" strokeOpacity="0.55" />
        </g>

        {/* Cloud — sized to fit label */}
        <g transform={`translate(${cx3 - 78}, ${yCloud})`}>
          <path
            d="M78 28c-6 0-11-4-13-9-8 0-14-6-14-13s6-13 14-13h62c9 0 16 7 16 15 0 6-3 11-8 13 1 2 2 5 2 8 0 9-7 16-16 16H78z"
            fill={fill}
            stroke={strokeStrong}
            strokeWidth="1"
            filter="url(#arch-soft)"
          />
        </g>

        <g fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fill={text} textAnchor="middle">
          <text x={cx1} y={midYTop + 4} fontSize="12">
            User
          </text>
          <text x={cx2} y={midYTop - 3} fontSize="10">
            <tspan x={cx2} dy="0">
              Audio / Video
            </tspan>
            <tspan x={cx2} dy="12">
              Input
            </tspan>
          </text>
          <text x={cx3} y={midYTop - 3} fontSize="9.5">
            <tspan x={cx3} dy="0">
              Meta DAT
            </tspan>
            <tspan x={cx3} dy="11">
              SDK
            </tspan>
          </text>
          <text x={cx3} y={yGem + h / 2 + 4} fontSize="11">
            Gemini Live
          </text>
          <text x={cx3} y={yOpen + h / 2 + 4} fontSize="11">
            OpenClaw
          </text>
          <text x={cx1} y={yOpen + h / 2 + 4} fontSize="11">
            Voice Agent
          </text>
          <text x={cx3} y={yCloud + 36} fontSize="10.5">
            External Apps
          </text>
        </g>
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
          className="rounded-2xl border border-phantom-text/10 bg-white/40 px-4 py-8 sm:px-10 backdrop-blur-[2px] flex justify-center"
        >
          <ArchitectureDiagram />
        </motion.div>
      </div>
    </motion.section>
  );
}
