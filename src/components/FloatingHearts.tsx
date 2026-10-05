"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  char: string;
}

export default function FloatingHearts() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const chars = ["💖", "✨", "🌸", "💕", "🧸", "🌷", "🤍"];
    const generated: Particle[] = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across width
      size: Math.floor(Math.random() * 16) + 16, // 16px to 32px
      duration: Math.random() * 12 + 10, // 10s to 22s float time
      delay: Math.random() * 8, // 0 to 8s start delay
      opacity: Math.random() * 0.4 + 0.3,
      char: chars[Math.floor(Math.random() * chars.length)],
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none animate-float-slow transition-transform"
          style={{
            left: `${p.x}%`,
            bottom: "-30px",
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `riseUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.char}
        </span>
      ))}
      <style jsx>{`
        @keyframes riseUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
