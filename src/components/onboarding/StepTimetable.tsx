"use client";

import React, { useState } from 'react';
import { Clock, CalendarDays, Coffee } from 'lucide-react';

interface StepTimetableProps {
    data: any;
    onUpdate: (data: any) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function StepTimetable({ data, onUpdate, onNext, onBack }: StepTimetableProps) {
    const [preferences, setPreferences] = useState(data || {
        startTime: "09:00",
        endTime: "17:00",
        studyDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        breakDuration: 15
    });

    const handleChange = (field: string, value: any) => {
        const updated = { ...preferences, [field]: value };
        setPreferences(updated);
        onUpdate(updated);
    };

    const toggleDay = (day: string) => {
        const currentDays = preferences.studyDays;
        const updatedDays = currentDays.includes(day)
            ? currentDays.filter((d: string) => d !== day)
            : [...currentDays, day];
        handleChange('studyDays', updatedDays);
    };

    const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Your Schedule</h2>
            <p className="text-gray-400 text-center mb-8">Set your preferred study hours and days.</p>

            <div className="space-y-6">

                {/* Time Range */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#3EF084]" />
                            Start Time
                        </label>
                        <input
                            type="time"
                            className="w-full bg-[#181B23] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
                            value={preferences.startTime}
                            onChange={(e) => handleChange('startTime', e.target.value)}
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#F7D25D]" />
                            End Time
                        </label>
                        <input
                            type="time"
                            className="w-full bg-[#181B23] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
                            value={preferences.endTime}
                            onChange={(e) => handleChange('endTime', e.target.value)}
                        />
                    </div>
                </div>

                {/* Days */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-[#A855F7]" />
                        Study Days
                    </label>
                    <div className="flex justify-between gap-2 overflow-x-auto pb-1">
                        {DAYS.map(day => (
                            <button
                                key={day}
                                onClick={() => toggleDay(day)}
                                className={`w-10 h-10 rounded-lg text-sm font-bold flex items-center justify-center transition-all ${preferences.studyDays.includes(day)
                                        ? "bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/20"
                                        : "bg-[#181B23] border border-white/10 text-gray-500 hover:border-white/20"
                                    }`}
                            >
                                {day.charAt(0)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Break Duration */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-orange-400" />
                        Break Duration
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {[10, 15, 30].map(duration => (
                            <button
                                key={duration}
                                onClick={() => handleChange('breakDuration', duration)}
                                className={`py-2 rounded-xl text-sm font-medium transition-all ${preferences.breakDuration === duration
                                        ? "bg-white text-black"
                                        : "bg-[#181B23] border border-white/10 text-gray-400 hover:bg-white/5"
                                    }`}
                            >
                                {duration} min
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={onBack}
                    className="text-gray-500 hover:text-white font-medium px-4 py-2 transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="px-8 py-2.5 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] text-white font-bold transition-all shadow-lg shadow-[#6366F1]/20"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
