"use client";

import React from "react";
import { Heart, Sparkles } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onSelectStep?: (step: number) => void;
}

const stepLabels = [
  "A Little Knock",
  "From My Heart",
  "Why I Adore You",
  "A Big Question",
  "My Promise & Treat",
];

export default function ProgressBar({
  currentStep,
  totalSteps,
  onSelectStep,
}: ProgressBarProps) {
  return (
    <div className="w-full max-w-md mx-auto mb-6 px-4">
      <div className="flex items-center justify-between relative">
        {/* Background track line */}
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-rose-200/80 -translate-y-1/2 rounded-full -z-0" />
        {/* Active track line */}
        <div
          className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-rose-400 to-rose-500 -translate-y-1/2 rounded-full transition-all duration-500 ease-out -z-0"
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
          }}
        />

        {Array.from({ length: totalSteps }, (_, idx) => {
          const stepNum = idx + 1;
          const isPassed = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <button
              key={stepNum}
              type="button"
              onClick={() => onSelectStep && isPassed && onSelectStep(stepNum)}
              disabled={!isPassed && !isCurrent}
              aria-label={`Go to step ${stepNum}: ${stepLabels[idx]}`}
              className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 font-bold text-sm shadow-sm ${
                isCurrent
                  ? "bg-rose-500 text-white scale-110 shadow-rose-300 shadow-md ring-4 ring-rose-200/60"
                  : isPassed
                  ? "bg-rose-400 text-white hover:bg-rose-500 cursor-pointer"
                  : "bg-white text-rose-300 border-2 border-rose-200"
              }`}
            >
              {isPassed ? (
                <Heart className="w-4 h-4 fill-current" />
              ) : isCurrent ? (
                <Sparkles className="w-4 h-4 fill-current animate-spin-slow" />
              ) : (
                <span>{stepNum}</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-center mt-3">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rose-500 bg-rose-100/80 px-3 py-1 rounded-full border border-rose-200">
          Step {currentStep} of {totalSteps}: {stepLabels[currentStep - 1]}
        </span>
      </div>
    </div>
  );
}
