"use client";

import React, { useState } from "react";
import { Sparkles, RefreshCw, BookOpen, ExternalLink, Calendar, CheckCircle, X } from "lucide-react";

type SuggestionType = "study" | "assignment" | "attendance" | "rest";

interface Suggestion {
    id: string;
    type: SuggestionType;
    message: React.ReactNode;
    context: string;
    primaryAction: { label: string; icon: React.ReactNode };
    secondaryAction?: { label: string; icon: React.ReactNode };
}

export function AIAssistantCard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Mock Suggestions based on "Context"
    const suggestions: Suggestion[] = [
        {
            id: "1",
            type: "study",
            message: (
                <>
                    You have <span className="font-bold text-[#F7D25D]">2 hours</span> of free time. I recommend revisiting <span className="font-bold text-white">Data Structures</span> or starting your Physics assignment.
                </>
            ),
            context: "Based on today’s timetable",
            primaryAction: { label: "Start Studying", icon: <BookOpen className="w-4 h-4" /> },
            secondaryAction: { label: "View Assignment", icon: <ExternalLink className="w-4 h-4" /> },
        },
        {
            id: "2",
            type: "attendance",
            message: (
                <>
                    Your attendance in <span className="font-bold text-white">Linear Algebra</span> is at <span className="font-bold text-[#F7D25D]">72%</span>. Consider attending the next class to stay safe.
                </>
            ),
            context: "Attendance risk detected",
            primaryAction: { label: "View Timetable", icon: <Calendar className="w-4 h-4" /> },
        },
        {
            id: "3",
            type: "assignment",
            message: (
                <>
                    <span className="font-bold text-white">Calculus Problem Set</span> is due tomorrow. You've only completed <span className="font-bold text-[#F7D25D]">10%</span> of it.
                </>
            ),
            context: "Assignment deadline approaching",
            primaryAction: { label: "View Assignment", icon: <ExternalLink className="w-4 h-4" /> },
        },
    ];

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % suggestions.length);
            setIsRefreshing(false);
        }, 600);
    };

    const currentSuggestion = suggestions[currentIndex];

    return (
        <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-[24px] p-6 shadow-2xl shadow-purple-900/40 text-white font-sans">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-900/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />

            {/* 2. CARD HEADER */}
            <div className="relative flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                        <Sparkles className="w-5 h-5 text-[#F7D25D]" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold leading-none tracking-tight">AI Assistant</h2>
                        <span className="text-[10px] font-medium text-purple-100 uppercase tracking-wider opacity-90">
                            Smart Suggestion
                        </span>
                    </div>
                </div>
                <button
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className={`p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all ${isRefreshing ? "animate-spin" : ""}`}
                    title="Refresh suggestion"
                >
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            {/* 3. RECOMMENDATION CONTENT */}
            <div className="relative min-h-[80px] mb-4">
                <p className="text-base text-purple-50 leading-relaxed transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
                    {currentSuggestion.message}
                </p>

                {/* 4. CONTEXT METADATA */}
                <div className="mt-3 flex items-center gap-2">
                    <span className="bg-black/20 text-xs px-2 py-1 rounded-lg text-purple-100 font-medium backdrop-blur-md">
                        {currentSuggestion.context}
                    </span>
                </div>
            </div>

            {/* 5. QUICK ACTION BUTTONS */}
            <div className="relative flex items-center gap-3 pt-2">
                <button className="flex items-center gap-2 bg-white text-[#6D28D9] px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-black/10 hover:bg-gray-50 hover:scale-[1.02] active:scale-95 transition-all">
                    {currentSuggestion.primaryAction.icon}
                    {currentSuggestion.primaryAction.label}
                </button>

                {currentSuggestion.secondaryAction && (
                    <button className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                        {currentSuggestion.secondaryAction.icon}
                        {currentSuggestion.secondaryAction.label}
                    </button>
                )}

                <button className="ml-auto p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Ignore">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
