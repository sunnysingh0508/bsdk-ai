"use client";

import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NotificationSettings() {
    const [toggles, setToggles] = useState({
        assignments: true,
        attendance: true,
        lowAttendance: true,
        timetable: false,
        weeklySummary: true
    });

    const toggle = (key: keyof typeof toggles) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const renderToggle = (key: keyof typeof toggles, label: string, desc: string) => (
        <div className="flex items-center justify-between py-1">
            <div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>
            <button
                onClick={() => toggle(key)}
                className={cn(
                    "w-11 h-6 rounded-full transition-colors relative",
                    toggles[key] ? "bg-[#6366F1]" : "bg-white/10"
                )}
            >
                <div className={cn(
                    "w-4 h-4 rounded-full bg-white absolute top-1 transition-all",
                    toggles[key] ? "left-6" : "left-1"
                )} />
            </button>
        </div>
    );

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <Bell className="w-5 h-5 text-[#F7D25D]" />
                <h2 className="text-lg font-bold text-white">Notifications</h2>
            </div>

            <div className="space-y-4">
                {renderToggle('assignments', 'Assignment Reminders', 'Get notified 24h before submission.')}
                {renderToggle('attendance', 'Attendance Alerts', 'Daily summary of attendance updates.')}
                {renderToggle('lowAttendance', 'Low Attendance Warning', 'Alert when dropping below safe limit.')}
                {renderToggle('timetable', 'Timetable Changes', 'Notify if a class is rescheduled.')}
                <div className="h-px bg-white/5 my-2" />
                {renderToggle('weeklySummary', 'Weekly Summary Email', 'Receive a report every Sunday evening.')}
            </div>
        </div>
    );
}
