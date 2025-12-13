"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div className="relative flex justify-between">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-[#181B23] -z-10 -translate-y-1/2 rounded-full" />
                <div
                    className="absolute top-1/2 left-0 h-1 bg-[#6366F1] -z-10 -translate-y-1/2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                />

                {/* Steps */}
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isCurrent = stepNumber === currentStep;

                    return (
                        <div
                            key={stepNumber}
                            className={cn(
                                "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 bg-[#0E1017]",
                                isCompleted ? "border-[#6366F1] bg-[#6366F1] text-white" :
                                    isCurrent ? "border-[#6366F1] text-[#6366F1]" :
                                        "border-[#181B23] text-gray-600"
                            )}
                        >
                            {isCompleted ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">{stepNumber}</span>}
                        </div>
                    );
                })}
            </div>

            {/* Step Label - Optional, dynamic based on step */}
            <div className="text-center mt-4">
                <p className="text-sm font-medium text-gray-400">
                    Step {currentStep} of {totalSteps}
                </p>
            </div>
        </div>
    );
}
