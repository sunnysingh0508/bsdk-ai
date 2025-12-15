"use client";

import React, { useState, useEffect } from "react";
import { Calculator, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BunkCalculatorCard() {
    const [attended, setAttended] = useState<number | "">("");
    const [total, setTotal] = useState<number | "">("");
    const [required, setRequired] = useState<number>(75);

    const [result, setResult] = useState<{
        safeBunks: number;
        currentAttendance: number;
        status: "SAFE" | "WARNING" | "DANGER";
        message: string;
    } | null>(null);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        calculateBunks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [attended, total, required]);

    const calculateBunks = () => {
        setError(null);
        if (attended === "" || total === "") {
            setResult(null);
            return;
        }

        const attendedNum = Number(attended);
        const totalNum = Number(total);

        if (attendedNum < 0 || totalNum < 0) {
            setError("Values cannot be negative");
            setResult(null);
            return;
        }

        if (attendedNum > totalNum) {
            setError("Attended classes cannot be more than total classes");
            setResult(null);
            return;
        }

        if (required < 0 || required > 100) {
            setError("Required percentage must be between 0 and 100");
            setResult(null);
            return;
        }


        const currentAttendance = (attendedNum / totalNum) * 100;

        // Logic: maxTotalClassesAllowed = floor(attended / (requiredPercentage / 100))
        // safeBunks = maxTotalClassesAllowed - total
        // But be careful with division by zero. If required is 0, technically infinite bunks.

        let safeBunks = 0;

        if (required === 0) {
            safeBunks = 999; // Arbitrary high number represents infinite
        } else {
            const maxTotalClassesAllowed = Math.floor(attendedNum / (required / 100));
            safeBunks = maxTotalClassesAllowed - totalNum;
        }

        let status: "SAFE" | "WARNING" | "DANGER" = "SAFE";
        let message = "";

        if (safeBunks > 0) {
            status = "SAFE";
            message = `You can bunk ${safeBunks} more classes safely.`;
        } else if (safeBunks === 0) {
            status = "WARNING";
            message = "You are at the minimum attendance limit.";
        } else {
            status = "DANGER";
            message = "Do not bunk any more classes — attendance will fall below required percentage.";
        }

        setResult({
            safeBunks,
            currentAttendance: parseFloat(currentAttendance.toFixed(2)),
            status,
            message,
        });
    };

    const getStatusColor = (status: "SAFE" | "WARNING" | "DANGER") => {
        switch (status) {
            case "SAFE":
                return "text-[#3EF084]"; // Green
            case "WARNING":
                return "text-[#F7D25D]"; // Yellow
            case "DANGER":
                return "text-[#FF5A5A]"; // Red
            default:
                return "text-white";
        }
    };

    const getStatusBg = (status: "SAFE" | "WARNING" | "DANGER") => {
        switch (status) {
            case "SAFE":
                return "bg-[#3EF084]/20 border-[#3EF084]/50";
            case "WARNING":
                return "bg-[#F7D25D]/20 border-[#F7D25D]/50";
            case "DANGER":
                return "bg-[#FF5A5A]/20 border-[#FF5A5A]/50";
            default:
                return "bg-white/10";
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-8 rounded-[24px] bg-card text-foreground shadow-xl border border-border relative overflow-hidden">

            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold font-heading text-foreground">Bunk Calculator</h1>
                <Calculator className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mb-8 font-sans">
                Calculate how many classes you can safely bunk without falling below the required attendance percentage.
            </p>

            {/* Inputs */}
            <div className="space-y-6 mb-8">
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Classes Attended
                    </label>
                    <input
                        type="number"
                        value={attended}
                        onChange={(e) => setAttended(e.target.value === "" ? "" : Number(e.target.value))}
                        placeholder="e.g. 22"
                        className="w-full bg-background border border-input rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-muted-foreground appearance-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Total Classes Conducted
                    </label>
                    <input
                        type="number"
                        value={total}
                        onChange={(e) => setTotal(e.target.value === "" ? "" : Number(e.target.value))}
                        placeholder="e.g. 25"
                        className="w-full bg-background border border-input rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-muted-foreground appearance-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Required Attendance Percentage
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            value={required}
                            onChange={(e) => setRequired(Number(e.target.value))}
                            min="0"
                            max="100"
                            className="w-full bg-background border border-input rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-muted-foreground appearance-none pr-12"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">%</span>
                    </div>

                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-xl mb-6 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{error}</span>
                </div>
            )}

            {/* Results */}
            {result && !error && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-background rounded-2xl p-6 border border-border relative overflow-hidden">
                        {/* Visual Indicator Background Glow */}
                        <div className={cn("absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 rounded-full pointer-events-none transition-colors duration-500",
                            result.status === "SAFE" ? "bg-[#3EF084]" :
                                result.status === "WARNING" ? "bg-[#F7D25D]" : "bg-[#FF5A5A]"
                        )}></div>

                        <div className="relative z-10 text-center mb-6">
                            <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-1 block">Safe Bunks Left</span>
                            <div className={cn("text-6xl font-bold font-heading transition-colors duration-300",
                                result.status === "SAFE" ? "text-foreground" : // Keep number white or colored? User said "Badge color depends on result", number usually neutral or emphasis. Let's keep white for readability on dark, or matching status. User said "Safe Bunks Left: Big bold number". Let's use white for contrast.
                                    "text-foreground"
                            )}>
                                {result.safeBunks < 0 ? 0 : result.safeBunks}
                                {/* 
                           If safeBunks < 0, it means we are already in danger. 
                           "Safe Bunks Left" implies positive capacity. 
                           It might be confusing to show negative safe bunks. 
                           Usually "0" is shown in danger, with a status saying you are short. 
                           However, the logic said: safeBunks < 0 -> DANGER.
                           I will show the actual raw number if the user wants "Safe Bunks Left". 
                           Actually, "Safe Bunks Left" being -2 means you need to attend 2 more. 
                           Let's display 0 for cleanliness if negative, or just the number. 
                           User prompt: "Safe Bunks Left: Big bold number (e.g., 2)"
                           I'll stick to the raw value but maybe cap display at 0 if it makes more sense, 
                           but logically safeBunks is the calculated value. 
                           Let's show the raw calculated value but if it's negative, maybe user wants to know deficit?
                           Let's just show the value. If it's -2, it's -2. 
                           Wait, "Safe Bunks Left" should intuitively be >= 0.
                           If I have negative bunks, I "owe" classes.
                           Let's just show the number.
                        */}
                            </div>
                        </div>

                        <div className="flex items-center justify-between relative z-10 border-t border-border pt-4">
                            <div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Current</div>
                                <div className="text-xl font-bold text-foreground">{result.currentAttendance}%</div>
                            </div>

                            <div className={cn("px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5", getStatusBg(result.status), getStatusColor(result.status))}>
                                {result.status}
                            </div>

                            <div className="text-right">
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Required</div>
                                <div className="text-xl font-bold text-foreground">{required}%</div>
                            </div>
                        </div>
                    </div>

                    {/* Context Message */}
                    <div className={cn("mt-4 text-center font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-300",
                        result.status === "SAFE" ? "text-[#3EF084] bg-[#3EF084]/10" :
                            result.status === "WARNING" ? "text-[#F7D25D] bg-[#F7D25D]/10" :
                                "text-[#FF5A5A] bg-[#FF5A5A]/10"
                    )}>
                        {result.message}
                    </div>
                </div>
            )}
        </div>
    );
}
