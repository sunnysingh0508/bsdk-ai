"use client";

import React from 'react';
import { ArrowLeft, Check, Clock, FileText, CalendarDays } from 'lucide-react';
import Link from 'next/link';

export default function ActivityPage() {
    const activities = [
        { text: "Submitted 'Data Structures' Assignment", time: "2 hours ago", icon: FileText, color: "bg-blue-500" },
        { text: "Marked attendance for 'Computer Networks'", time: "4 hours ago", icon: Check, color: "bg-green-500" },
        { text: "Scanned 'OS Notes Unit 3'", time: "Yesterday", icon: FileText, color: "bg-purple-500" },
        { text: "Generated new Study Timetable", time: "2 days ago", icon: CalendarDays, color: "bg-indigo-500" },
        { text: "Completed 'React Basics' module", time: "3 days ago", icon: Check, color: "bg-green-500" },
        { text: "Joined 'AI Ethics' seminar", time: "4 days ago", icon: CalendarDays, color: "bg-indigo-500" },
        { text: "Uploaded 'Project Draft'", time: "Last Week", icon: FileText, color: "bg-blue-500" },
    ];

    return (
        <main className="min-h-screen bg-[#0E1017] p-4 md:p-8 font-sans pb-20">
            <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/profile" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-white">All Activity</h1>
                </div>

                <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5">
                    <div className="relative pl-4 space-y-6">
                        {/* Vertical Line */}
                        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-white/5 -ml-[0.5px]" />

                        {activities.map((item, i) => (
                            <div key={i} className="relative flex items-center gap-4 group">
                                <div className={`w-2 h-2 rounded-full ring-4 ring-[#181B23] z-10 ${item.color}`} />
                                <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                                    <p className="text-base text-gray-200 font-medium">{item.text}</p>
                                    <div className="flex items-center gap-1.5 mt-1.5">
                                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                                        <span className="text-xs text-gray-400">{item.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
