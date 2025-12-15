"use client";

import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

export default function AcademicSettings() {
    const [attendance, setAttendance] = useState(75);
    const [intensity, setIntensity] = useState('Balanced');
    const [breakDur, setBreakDur] = useState(15);

    return (
        <div className="bg-card rounded-[24px] p-6 border border-border space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-[#3EF084]" />
                <h2 className="text-lg font-bold text-foreground">Academic Preferences</h2>
            </div>

            {/* Attendance Goal */}
            <div>
                <div className="flex justify-between text-xs text-muted-foreground font-medium mb-3">
                    <span>Required Attendance Percentage</span>
                    <span className="text-foreground">{attendance}%</span>
                </div>
                <input
                    type="range"
                    min="50"
                    max="100"
                    value={attendance}
                    onChange={(e) => setAttendance(Number(e.target.value))}
                    className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-[#3EF084]"
                />
                <p className="text-[10px] text-muted-foreground mt-2">Used to calculate safe bunks and attendance health.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Default Intensity */}
                <div>
                    <label className="text-xs text-muted-foreground font-medium mb-2 block">Default Study Intensity</label>
                    <select
                        value={intensity}
                        onChange={(e) => setIntensity(e.target.value)}
                        className="w-full bg-background border border-input rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#3EF084]"
                    >
                        <option>Light</option>
                        <option>Balanced</option>
                        <option>Focused</option>
                    </select>
                </div>

                {/* Break Duration */}
                <div>
                    <label className="text-xs text-muted-foreground font-medium mb-2 block">Preferred Break Duration</label>
                    <div className="flex bg-background p-1 rounded-xl border border-input">
                        {[10, 15, 30].map(min => (
                            <button
                                key={min}
                                onClick={() => setBreakDur(min)}
                                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${breakDur === min ? 'bg-[#3EF084] text-black font-bold' : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {min}m
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
