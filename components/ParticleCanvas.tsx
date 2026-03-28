"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  homeAngle: number;
  homeRadius: number;
  isRing: boolean;
}

const CONFIG = {
  particleRadius: 1.5,
  particleColor: "#4A4A4A",
  backgroundColor: "#F5F0EB",
  connectionDistance: 110,
  connectionLineWidth: 0.6,
  maxVelocity: 3.0,
  ringRadiusFactor: 0.33,
  ringBandWidth: 0.30,
  ringSpringForce: 0.0006,
  ringRotationSpeed: 0.0008,
  homeForce: 0.008,
  mouseRepelRadius: 250,
  mouseRepelForce: 3.5,
  dampingFactor: 0.97,
  returnForce: 0.02,
} as const;

function clampVelocity(v: number): number {
  return Math.max(-CONFIG.maxVelocity, Math.min(CONFIG.maxVelocity, v));
}

function createParticles(
  count: number,
  width: number,
  height: number
): Particle[] {
  const particles: Particle[] = [];
  const cx = width / 2;
  const cy = height / 2;
  const ringRadius = Math.min(width, height) * CONFIG.ringRadiusFactor;
  const ringCount = Math.floor(count * 0.82);

  for (let i = 0; i < count; i++) {
    const isRing = i < ringCount;

    let x: number, y: number;
    let homeAngle = 0;
    let homeRadius = 0;

    if (isRing) {
      homeAngle = Math.random() * Math.PI * 2;
      const bandHalfWidth = ringRadius * CONFIG.ringBandWidth;
      homeRadius =
        ringRadius +
        (Math.random() - 0.5) * 2 * bandHalfWidth;
      x = cx + Math.cos(homeAngle) * homeRadius;
      y = cy + Math.sin(homeAngle) * homeRadius;
    } else {
      x = Math.random() * width;
      y = Math.random() * height;
    }

    particles.push({
      x,
      y,
      homeX: x,
      homeY: y,
      homeAngle,
      homeRadius,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      isRing,
    });
  }

  return particles;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);
  const sizeRef = useRef({ w: 0, h: 0 });
  const rotationRef = useRef(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w: width, h: height } = sizeRef.current;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const cx = width / 2;
    const cy = height / 2;
    const ringRadius = Math.min(width, height) * CONFIG.ringRadiusFactor;
    const innerR = ringRadius * (1 - CONFIG.ringBandWidth);
    const outerR = ringRadius * (1 + CONFIG.ringBandWidth);

    rotationRef.current += CONFIG.ringRotationSpeed;

    ctx.fillStyle = CONFIG.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    for (const p of particles) {
      if (p.isRing) {
        // Compute current home position from polar coords + global rotation
        const currentAngle = p.homeAngle + rotationRef.current;
        const homeX = cx + Math.cos(currentAngle) * p.homeRadius;
        const homeY = cy + Math.sin(currentAngle) * p.homeRadius;

        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
          let force = 0;
          if (dist < innerR) {
            force = CONFIG.ringSpringForce * (dist - innerR);
          } else if (dist > outerR) {
            force = CONFIG.ringSpringForce * (dist - outerR);
          }
          if (force !== 0) {
            p.vx -= (dx / dist) * force;
            p.vy -= (dy / dist) * force;
          }
        }

        // Pull toward rotating home position
        p.vx += (homeX - p.x) * CONFIG.homeForce;
        p.vy += (homeY - p.y) * CONFIG.homeForce;
      }

      if (!p.isRing) {
        p.vx += (p.homeX - p.x) * CONFIG.returnForce;
        p.vy += (p.homeY - p.y) * CONFIG.returnForce;
      }

      if (mouse) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.mouseRepelRadius && dist > 0) {
          const norm = dist / CONFIG.mouseRepelRadius;
          const force = CONFIG.mouseRepelForce * (1 - norm) * (1 - norm);
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }

      p.vx = clampVelocity(p.vx * CONFIG.dampingFactor);
      p.vy = clampVelocity(p.vy * CONFIG.dampingFactor);

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) {
        p.x = 0;
        p.vx *= -0.5;
      } else if (p.x > width) {
        p.x = width;
        p.vx *= -0.5;
      }
      if (p.y < 0) {
        p.y = 0;
        p.vy *= -0.5;
      } else if (p.y > height) {
        p.y = height;
        p.vy *= -0.5;
      }
    }

    ctx.lineWidth = CONFIG.connectionLineWidth;
    const connDist = CONFIG.connectionDistance;
    const connDist2 = connDist * connDist;

    for (let i = 0; i < particles.length; i++) {
      const pi = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const pj = particles[j];
        const dx = pi.x - pj.x;
        const dy = pi.y - pj.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < connDist2) {
          const alpha = (1 - Math.sqrt(d2) / connDist) * 0.4;
          ctx.strokeStyle = `rgba(74, 74, 74, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    ctx.fillStyle = CONFIG.particleColor;
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, CONFIG.particleRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);

      sizeRef.current = { w, h };

      const count = w < 768 ? 220 : 450;
      particlesRef.current = createParticles(count, w, h);
    };

    setSize();

    const handleResize = () => {
      cancelAnimationFrame(animationRef.current);
      setSize();
      if (!reducedMotionRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        animate();
      }
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    if (reducedMotionRef.current) {
      animate();
    } else {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
