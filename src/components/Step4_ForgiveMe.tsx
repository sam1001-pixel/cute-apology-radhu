"use client";

import React, { useState } from "react";
import { Heart, ArrowLeft, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface Step4Props {
  recipientName: string;
  onForgive: () => void;
  onBack: () => void;
}

const runawayQuotes = [
  "No 🙅‍♀️",
  "Are you sure? 🥺",
  "Think again please! 💔",
  "You don't mean that! 😭",
  "Pretty please with sprinkles? 🍨",
  "I'll give you backrubs forever! 🧸",
  "Boba on me tomorrow?! 🧋",
  "Look how big the YES button is! 👉",
];

export default function Step4_ForgiveMe({
  recipientName,
  onForgive,
  onBack,
}: Step4Props) {
  const [noIndex, setNoIndex] = useState(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const [yesScale, setYesScale] = useState(1);
  const [heartMeter, setHeartMeter] = useState(50); // percentage

  const handleNoInteraction = () => {
    // Generate playful offset within container
    const randomX = Math.floor(Math.random() * 240) - 120; // -120 to +120px
    const randomY = Math.floor(Math.random() * 160) - 80; // -80 to +80px
    setNoPosition({ x: randomX, y: randomY });
    setNoIndex((prev) => (prev + 1) % runawayQuotes.length);
    setYesScale((prev) => Math.min(prev + 0.15, 2.0));
    setHeartMeter((prev) => Math.min(prev + 10, 100));
  };

  const handleYesClick = () => {
    // Confetti cannon
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#f43f5e", "#fb7185", "#fda4af", "#ffedd5", "#f472b6"],
      });
    } catch {
      // safe fallback
    }
    onForgive();
  };

  return (
    <div className="glass-cute-elevated rounded-3xl p-6 sm:p-10 max-w-lg w-full text-center relative overflow-hidden transition-all duration-300">
      {/* Cuteness meter */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-bold text-rose-600 mb-1.5 px-1">
          <span>Forgiveness Pressure Meter</span>
          <span>{heartMeter}% 💖</span>
        </div>
        <div className="w-full bg-rose-100 rounded-full h-3 overflow-hidden p-0.5 border border-rose-200">
          <div
            className="bg-gradient-to-r from-pink-400 to-rose-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${heartMeter}%` }}
          />
        </div>
      </div>

      <div className="text-5xl sm:text-6xl my-4 animate-bounce-cute select-none">
        🥺👉👈
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-950 font-heading tracking-tight mb-3">
        Will you forgive me, {recipientName}?
      </h2>

      <p className="text-rose-800/80 text-sm sm:text-base mb-8 max-w-sm mx-auto">
        I know I messed up, but I love you with all my heart. Can we make up?
      </p>

      {/* Buttons zone */}
      <div className="relative min-h-[160px] flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
        {/* The YES Button */}
        <button
          onClick={handleYesClick}
          style={{ transform: `scale(${yesScale})` }}
          className="z-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-lg shadow-xl shadow-emerald-400/40 hover:from-emerald-600 hover:to-teal-600 active:scale-95 transition-all duration-200 cursor-pointer animate-pulse-glow"
        >
          <Heart className="w-5 h-5 fill-current" />
          <span>Yes, I Forgive You! ❤️</span>
        </button>

        {/* The runaway NO button */}
        <button
          onMouseEnter={handleNoInteraction}
          onClick={handleNoInteraction}
          onTouchStart={handleNoInteraction}
          style={
            noPosition
              ? {
                  transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }
              : {}
          }
          type="button"
          className="z-20 inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-rose-100/90 text-rose-700 font-bold text-sm sm:text-base border-2 border-rose-300 hover:bg-rose-200 active:scale-95 transition-colors cursor-pointer select-none"
        >
          <span>{runawayQuotes[noIndex]}</span>
        </button>
      </div>

      {noIndex > 0 && (
        <div className="inline-flex items-center gap-1.5 text-xs text-rose-500 font-medium mt-3 animate-fadeIn">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>The No button seems to be running away from you! 😉</span>
        </div>
      )}

      {/* Back button */}
      <div className="pt-8 text-left">
        <button
          onClick={onBack}
          type="button"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-rose-500 hover:text-rose-700 hover:bg-rose-100/50 text-xs font-semibold active:scale-95 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Review previous reasons</span>
        </button>
      </div>
    </div>
  );
}
