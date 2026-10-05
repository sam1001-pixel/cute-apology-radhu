"use client";

import React, { useState } from "react";
import { CheckCircle2, Ticket, Gift, RotateCcw, Heart } from "lucide-react";
import { apologyData } from "@/data/apologyData";
import confetti from "canvas-confetti";

interface Step5Props {
  recipientName: string;
  senderName: string;
  onReset: () => void;
}

export default function Step5_Celebration({
  recipientName,
  senderName,
  onReset,
}: Step5Props) {
  const [claimedCoupons, setClaimedCoupons] = useState<string[]>([]);

  const handleClaim = (id: string) => {
    if (!claimedCoupons.includes(id)) {
      setClaimedCoupons([...claimedCoupons, id]);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleCelebrationBlast = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="glass-cute-elevated rounded-3xl p-6 sm:p-10 max-w-2xl w-full text-center relative overflow-hidden transition-all duration-300">
      {/* Top heart badge */}
      <div className="text-5xl sm:text-6xl mb-3 animate-bounce-cute select-none">
        🎉🥰💖
      </div>

      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-3">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <span>Forgiveness Accepted & Sealing With Love</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-950 font-heading mb-2">
        Yay! Thank you, my sweet {recipientName}!
      </h2>

      <p className="text-rose-800/80 text-sm sm:text-base mb-6 max-w-md mx-auto">
        You made my heart whole again. As my promise to make it up to you, here are 3 official peace treat coupons!
      </p>

      {/* Love Coupons Section */}
      <div className="space-y-3.5 text-left mb-8">
        {apologyData.coupons.map((coupon) => {
          const isClaimed = claimedCoupons.includes(coupon.id);

          return (
            <div
              key={coupon.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isClaimed
                  ? "bg-emerald-50/90 border-emerald-300"
                  : "bg-white/90 border-rose-200 hover:border-rose-300 shadow-sm"
              }`}
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <span className="text-3xl p-2 rounded-2xl bg-rose-100 shrink-0">
                  {coupon.emoji}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-rose-950 text-base font-heading">
                      {coupon.title}
                    </h3>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 font-bold">
                      {coupon.code}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-800/80 mt-0.5">
                    {coupon.subtitle}
                  </p>
                  <p className="text-[11px] text-rose-400 font-semibold mt-1">
                    {coupon.validity}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleClaim(coupon.id)}
                disabled={isClaimed}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 shrink-0 cursor-pointer ${
                  isClaimed
                    ? "bg-emerald-600 text-white cursor-default"
                    : "bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-300/40 active:scale-95"
                }`}
              >
                {isClaimed ? "Redeemed! ✨" : "Claim Coupon 🎟️"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Extra confetti & action triggers */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={handleCelebrationBlast}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-100 text-pink-700 hover:bg-pink-200 border border-pink-200 font-bold text-sm active:scale-95 transition-all cursor-pointer"
        >
          <Gift className="w-4 h-4" />
          <span>Shower More Confetti! 🎊</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 text-rose-600 hover:bg-white border border-rose-200 font-semibold text-xs active:scale-95 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay Journey</span>
        </button>
      </div>

      <div className="mt-8 text-center text-xs text-rose-500 font-medium">
        Made with endless love by {senderName} for {recipientName} ❤️
      </div>
    </div>
  );
}
