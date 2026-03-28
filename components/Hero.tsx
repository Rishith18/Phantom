"use client";

import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <ParticleCanvas />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(245,240,235,0.85) 0%, rgba(245,240,235,0) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 text-center pointer-events-none select-none px-4">
        <h1
          className="font-serif text-phantom-text tracking-tight"
          style={{
            fontSize: "clamp(4rem, 8vw, 8rem)",
            letterSpacing: "-0.02em",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Phan·tom
        </h1>

        <p
          className="mt-4 font-sans text-phantom-muted"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          /ˈfan(t)əm/
        </p>

        <p
          className="mt-6 font-sans"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            fontWeight: 400,
            color: "#6A6A6A",
          }}
        >
          AI that acts before you ask.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 animate-scroll-pulse">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9A9A9A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
