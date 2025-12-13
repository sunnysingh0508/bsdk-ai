"use client";

import React, { useState } from 'react';
import { Bell, Clock, Calendar, BarChart } from 'lucide-react';

interface StepNotificationsProps {
    data: any;
    onUpdate: (data: any) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function StepNotifications({ data, onUpdate, onNext, onBack }: StepNotificationsProps) {
    const [preferences, setPreferences] = useState(data || {
        assignments: true,
        attendance: true,
        timetable: true,
        performance: false
    });

    const toggle = (field: string) => {
        const updated = { ...preferences, [field]: !preferences[field] };
        setPreferences(updated);
        onUpdate(updated);
    };

    const OPTIONS = [
        { id: 'assignments', label: 'Assignment Reminders', desc: 'Get notified 24h before deadlines.', icon: Clock, color: '#F7D25D' },
        { id: 'attendance', label: 'Attendance Alerts', desc: 'Warnings when attendance drops below 75%.', icon: Bell, color: '#FF5A5A' },
        { id: 'timetable', label: 'Timetable Updates', desc: 'Daily schedule summary every morning.', icon: Calendar, color: '#6366F1' },
        { id: 'performance', label: 'Weekly Summary', desc: 'Weekly report of your academic progress.', icon: BarChart, color: '#3EF084' },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Notifications</h2>
            <p className="text-gray-400 text-center mb-8">Stay updated with what matters.</p>

            <div className="space-y-3">
                {OPTIONS.map(opt => (
                    <div
                        key={opt.id}
                        onClick={() => toggle(opt.id)}
                        className="flex items-center justify-between p-4 bg-[#181B23] border border-white/5 rounded-xl cursor-pointer hover:border-white/10 transition-colors group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-white/5" style={{ color: opt.color }}>
                                <opt.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-medium group-hover:text-[#6366F1] transition-colors">{opt.label}</p>
                                <p className="text-xs text-gray-500">{opt.desc}</p>
                            </div>
                        </div>

                        {/* Toggle Switch */}
                        <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${preferences[opt.id] ? 'bg-[#6366F1]' : 'bg-gray-700'}`}>
                            <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${preferences[opt.id] ? 'translate-x-6' : 'translate-x-0'}`} />
                        </div>
                    </div>
                ))}
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
