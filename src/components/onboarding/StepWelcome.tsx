"use client";

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface StepWelcomeProps {
    onNext: () => void;
}

export default function StepWelcome({ onNext }: StepWelcomeProps) {
    return (
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                <Sparkles className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Welcome to BSDK AI 👋
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-sm mx-auto">
                Let’s set up your academic dashboard in just a few steps.
            </p>

            <button
                onClick={onNext}
                className="px-8 py-3.5 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] text-white font-bold transition-all shadow-lg shadow-[#6366F1]/25 flex items-center gap-2 mx-auto group"
            >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
}
