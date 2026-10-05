"use client";

import React, { useState } from "react";
import { Sparkles, Heart, Crown, Laugh, ArrowRight, ArrowLeft } from "lucide-react";
import { apologyData } from "@/data/apologyData";

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step3_Reasons({ onNext, onBack }: Step3Props) {
  const [revealedIds, setRevealedIds] = useState<number[]>([0]);

  const toggleReveal = (idx: number) => {
    if (revealedIds.includes(idx)) {
      setRevealedIds(revealedIds.filter((id) => id !== idx));
    } else {
      setRevealedIds([...revealedIds, idx]);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Crown":
        return <Crown className="w-5 h-5" />;
      case "Laugh":
        return <Laugh className="w-5 h-5" />;
      default:
        return <Heart className="w-5 h-5" />;
    }
  };

  return (
    <div className="glass-cute rounded-3xl p-6 sm:p-10 max-w-2xl w-full text-center relative overflow-hidden transition-all duration-300">
      {/* Title */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-600 text-xs sm:text-sm font-semibold mb-3">
        <Sparkles className="w-4 h-4 text-rose-500" />
        <span>Tap each card to reveal my thoughts</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-rose-950 font-heading mb-2">
        Reasons Why You Mean Everything To Me
      </h2>
      <p className="text-rose-800/80 text-sm sm:text-base mb-6 max-w-md mx-auto">
        Even on rough days, you remain the best thing that ever happened to me.
      </p>

      {/* Grid of interactive cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
        {apologyData.reasons.map((item, idx) => {
          const isRevealed = revealedIds.includes(idx);

          return (
            <div
              key={idx}
              onClick={() => toggleReveal(idx)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none relative ${
                isRevealed
                  ? "bg-white/95 border-rose-300 shadow-md shadow-rose-200/50 scale-[1.02]"
                  : "bg-white/60 border-rose-200/80 hover:bg-white/80"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isRevealed
                      ? "bg-rose-500 text-white"
                      : "bg-rose-100 text-rose-600"
                  }`}
                >
                  {getIcon(item.icon)}
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100/70 text-rose-700">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-bold text-rose-950 text-base font-heading mb-1.5 flex items-center justify-between">
                <span>{item.title}</span>
                <span className="text-xs text-rose-400 font-normal">
                  {isRevealed ? "▾" : "▸"}
                </span>
              </h3>

              {isRevealed ? (
                <p className="text-rose-800/90 text-xs sm:text-sm leading-relaxed animate-fadeIn">
                  {item.description}
                </p>
              ) : (
                <p className="text-rose-400/80 text-xs italic">
                  Tap to read this note 💌
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          type="button"
          className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl border border-rose-200 text-rose-700 bg-white/60 hover:bg-white text-sm font-semibold active:scale-95 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          onClick={onNext}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-300/40 hover:from-rose-600 hover:to-pink-600 active:scale-95 transition-all cursor-pointer group"
        >
          <span>A Very Important Question</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
