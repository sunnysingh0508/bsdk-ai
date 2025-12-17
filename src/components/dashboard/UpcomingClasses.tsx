"use client";

import React, { useState, useEffect } from "react";
import { ClassCard, ClassSession } from "@/components/dashboard/ClassCard";
import { Coffee, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export function UpcomingClasses() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    // Hydration fix: Set time only on client
    useEffect(() => {
        setCurrentTime(new Date());
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Mock Data Generation based on "Today"
    const getClassesForToday = (now: Date): ClassSession[] => {
        const year = now.getFullYear();
        const month = now.getMonth();
        const date = now.getDate();

        // Helper to set time
        const setTime = (h: number, m: number) => new Date(year, month, date, h, m);

        return [
            {
                id: "1",
                subject: "Linear Algebra",
                location: "Room 304",
                startTime: setTime(9, 0),
                endTime: setTime(10, 0),
                status: "Completed", // Will be calculated dynamically below
            },
            {
                id: "2",
                subject: "Data Structures",
                location: "Lab 2",
                startTime: setTime(10, 30),
                endTime: setTime(12, 0),
                status: "Upcoming",
            },
            {
                id: "3",
                subject: "Digital Electronics",
                location: "Room 101",
                startTime: setTime(14, 0),
                endTime: setTime(15, 30),
                status: "Upcoming",
            },
        ] as ClassSession[]; // Cast purely for structure
    };

    if (!currentTime) return null; // Prevent hydration mismatch

    const allSessions = getClassesForToday(currentTime);

    // Process Status Dynamicallly
    const processedSessions = allSessions.map((session) => {
        const nowMs = currentTime.getTime();
        const startMs = session.startTime.getTime();
        const endMs = session.endTime.getTime();

        let status: "Upcoming" | "Ongoing" | "Completed" = "Upcoming";
        if (nowMs > endMs) status = "Completed";
        else if (nowMs >= startMs && nowMs <= endMs) status = "Ongoing";

        return { ...session, status };
    });

    // Filtering Logic: Hide past classes?
    // User Requirement: "Automatically hide past classes"
    // "Display only today’s remaining and upcoming classes"
    // So filter out "Completed"
    const displaySessions = processedSessions
        .filter((s) => s.status !== "Completed")
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

    const todaysDateString = currentTime.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

    return (
        <div id="upcoming-classes" className="w-full bg-[#181B23] rounded-[24px] p-6 shadow-2xl shadow-black/20 border border-white/5 font-sans">
            {/* 2. SECTION HEADER */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                        Upcoming Classes Today
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Here’s what’s left on your schedule for today.
                    </p>
                </div>
                <div className="hidden sm:flex flex-col items-end">
                    <span className="text-xs font-medium text-[#6366F1] bg-[#6366F1]/10 px-3 py-1 rounded-full border border-[#6366F1]/20">
                        {todaysDateString}
                    </span>
                </div>
            </div>

            {/* 3. CLASSES LIST */}
            <div className="flex flex-col gap-1 min-h-[200px]">
                {displaySessions.length > 0 ? (
                    displaySessions.map((session) => (
                        <ClassCard key={session.id} session={session} />
                    ))
                ) : (
                    /* 5. EMPTY STATE */
                    <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in">
                        <div className="w-16 h-16 bg-[#1F232C] rounded-full flex items-center justify-center mb-4">
                            <Coffee className="w-8 h-8 text-[#F7D25D]" />
                        </div>
                        <h3 className="text-white font-bold text-lg">No more classes today 🎉</h3>
                        <p className="text-gray-500 text-sm mt-1 max-w-[200px]">
                            Enjoy your free time or start self-study.
                        </p>
                    </div>
                )}
            </div>

            {/* 6. QUICK ACTIONS */}
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                <Link
                    href="/timetable"
                    className="flex items-center gap-2 text-sm font-medium text-[#3B82F6] hover:text-blue-400 transition-colors"
                >
                    View Full Timetable
                    <ArrowRight className="w-4 h-4" />
                </Link>

                <button title="Add Reminder" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                    <Calendar className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
