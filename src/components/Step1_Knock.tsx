"use client";

import React, { useState } from "react";
import { Mail, HeartHandshake, ArrowRight, Sparkles } from "lucide-react";

interface Step1Props {
  recipientName: string;
  nickname: string;
  onNext: () => void;
}

export default function Step1_Knock({
  recipientName,
  nickname,
  onNext,
}: Step1Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onNext();
    }, 900);
  };

  return (
    <div className="glass-cute rounded-3xl p-6 sm:p-10 max-w-lg w-full text-center relative overflow-hidden transition-all duration-300">
      {/* Decorative top badge */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-600 text-xs sm:text-sm font-semibold mb-6 animate-pulse">
        <Sparkles className="w-4 h-4 text-rose-500" />
        <span>A Special Delivery For {nickname}</span>
      </div>

      <div className="my-6">
        {/* Envelope / cute delivery animation */}
        <div
          onClick={handleOpen}
          className={`cursor-pointer group relative inline-flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-rose-400 via-rose-500 to-pink-400 text-white shadow-xl shadow-rose-300/50 transition-all duration-500 transform hover:scale-105 active:scale-95 ${
            isOpen ? "scale-110 rotate-3 shadow-rose-400/80" : "animate-bounce-cute"
          }`}
        >
          <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Mail
            className={`w-16 h-16 sm:w-20 sm:h-20 transition-all duration-500 ${
              isOpen ? "scale-125 opacity-0" : "group-hover:rotate-6"
            }`}
          />
          {isOpen && (
            <div className="absolute inset-0 flex items-center justify-center animate-ping text-3xl">
              💌
            </div>
          )}
          <span className="absolute -top-3 -right-3 bg-white text-rose-500 text-xs font-bold px-2.5 py-1 rounded-full shadow-md border border-rose-100">
            Click Me!
          </span>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-950 font-heading tracking-tight mb-3">
        Hey {recipientName}... 🥺
      </h1>

      <p className="text-rose-800/80 text-base sm:text-lg mb-8 leading-relaxed max-w-sm mx-auto">
        I know things got a little messy, and I made you feel hurt or upset.
        Can I borrow just 2 minutes of your time to talk to you?
      </p>

      <button
        onClick={handleOpen}
        disabled={isOpen}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-lg shadow-lg shadow-rose-400/40 hover:from-rose-600 hover:to-pink-600 active:scale-95 transition-all duration-200 cursor-pointer group"
      >
        <span>Open My Apology Letter</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-rose-400 font-medium">
        <HeartHandshake className="w-4 h-4" />
        <span>Written with 100% honesty and love</span>
      </div>
    </div>
  );
}
