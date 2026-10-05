"use client";

import React from "react";
import { Heart, ArrowRight, ArrowLeft, ShieldAlert } from "lucide-react";

interface Step2Props {
  recipientName: string;
  senderName: string;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2_Apology({
  recipientName,
  senderName,
  onNext,
  onBack,
}: Step2Props) {
  return (
    <div className="glass-cute rounded-3xl p-6 sm:p-10 max-w-xl w-full text-left relative overflow-hidden transition-all duration-300">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-rose-200/60 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-500">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-rose-950 font-heading">
              From My Sincere Heart
            </h2>
            <p className="text-xs text-rose-500 font-medium">To {recipientName}</p>
          </div>
        </div>
        <span className="text-2xl select-none">🧸</span>
      </div>

      {/* Sincere letter card */}
      <div className="bg-rose-50/70 border border-rose-200/70 rounded-2xl p-5 sm:p-6 text-rose-900/90 text-sm sm:text-base leading-relaxed space-y-4 mb-6 shadow-inner font-sans">
        <p className="font-semibold text-rose-950 text-base sm:text-lg">
          Dearest {recipientName},
        </p>

        <p>
          I am truly, deeply sorry for hurting your feelings. Seeing you sad or upset breaks my heart into tiny pieces, especially knowing that I was the reason behind it.
        </p>

        <p>
          I don’t want to give silly excuses or defend myself. Your feelings are completely valid, and you have every right to be mad at me. You deserve patience, warmth, and gentleness—never confusion or distress.
        </p>

        <p>
          I cherish you and our bond more than anything else in my world. I promise to listen to you better, communicate with more care, and never take your beautiful smile for granted.
        </p>

        <p className="pt-2 text-right font-bold text-rose-700">
          — Forever yours, <span className="underline decoration-rose-300 underline-offset-4">{senderName}</span> ❤️
        </p>
      </div>

      {/* Promise highlight badge */}
      <div className="flex items-center gap-3 p-3.5 bg-white/80 rounded-2xl border border-rose-200/60 mb-8">
        <div className="p-2 rounded-xl bg-amber-100 text-amber-600 shrink-0">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <p className="text-xs sm:text-sm text-rose-900 font-medium">
          <strong>My pledge to you:</strong> No repeats of this mistake. Active listening, honesty, and prioritizing your happiness.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between gap-4 pt-2">
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
          <span>Why You Mean The World To Me</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
