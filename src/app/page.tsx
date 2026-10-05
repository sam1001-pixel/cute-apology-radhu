"use client";

import React, { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ProgressBar from "@/components/ProgressBar";
import Step1_Knock from "@/components/Step1_Knock";
import Step2_Apology from "@/components/Step2_Apology";
import Step3_Reasons from "@/components/Step3_Reasons";
import Step4_ForgiveMe from "@/components/Step4_ForgiveMe";
import Step5_Celebration from "@/components/Step5_Celebration";
import { apologyData } from "@/data/apologyData";
import { Sparkles, Edit3 } from "lucide-react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [recipient, setRecipient] = useState(apologyData.recipientName);
  const [sender, setSender] = useState(apologyData.senderName);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-4 sm:p-8 z-10">
      {/* Background ambient floating particles */}
      <FloatingHearts />

      {/* Top Navbar / Personalization quick toggle */}
      <header className="w-full max-w-2xl flex items-center justify-between py-2 px-3 mb-2 z-20">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌸</span>
          <span className="font-heading font-bold text-rose-900 text-sm sm:text-base">
            For {recipient}
          </span>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-rose-600 border border-rose-200/80 text-xs font-semibold shadow-sm transition-all cursor-pointer"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>{isEditing ? "Done Customizing" : "Edit Names"}</span>
        </button>
      </header>

      {/* Customization Drawer / Box when toggled */}
      {isEditing && (
        <div className="w-full max-w-md bg-white/95 rounded-2xl p-4 mb-4 border border-rose-200 shadow-lg z-20 text-xs space-y-3 animate-fadeIn">
          <div className="font-bold text-rose-900 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Customize Names (Changes reflect instantly!)</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-rose-700 font-semibold mb-1">
                Her Name / Nickname:
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-900 bg-rose-50/50"
              />
            </div>
            <div>
              <label className="block text-rose-700 font-semibold mb-1">
                Your Name:
              </label>
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-900 bg-rose-50/50"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Interactive Stage */}
      <div className="w-full flex-1 flex flex-col items-center justify-center py-4 z-20">
        <ProgressBar
          currentStep={currentStep}
          totalSteps={totalSteps}
          onSelectStep={(step) => setCurrentStep(step)}
        />

        <div className="w-full flex items-center justify-center">
          {currentStep === 1 && (
            <Step1_Knock
              recipientName={recipient}
              nickname={apologyData.nickname}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <Step2_Apology
              recipientName={recipient}
              senderName={sender}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <Step3_Reasons
              onNext={() => setCurrentStep(4)}
              onBack={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 4 && (
            <Step4_ForgiveMe
              recipientName={recipient}
              onForgive={() => setCurrentStep(5)}
              onBack={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 5 && (
            <Step5_Celebration
              recipientName={recipient}
              senderName={sender}
              onReset={() => setCurrentStep(1)}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-4 text-xs text-rose-400/90 font-medium z-20">
        Tap the steps above anytime to revisit • Handcrafted with love 💖
      </footer>
    </main>
  );
}
