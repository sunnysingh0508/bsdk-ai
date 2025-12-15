"use client";

import React from 'react';
import { Check, Clock, FileText, CalendarDays } from 'lucide-react';

export default function ActivityTimeline() {
    const activities = [
        { text: "Submitted 'Data Structures' Assignment", time: "2 hours ago", icon: FileText, color: "bg-blue-500" },
        { text: "Marked attendance for 'Computer Networks'", time: "4 hours ago", icon: Check, color: "bg-green-500" },
        { text: "Scanned 'OS Notes Unit 3'", time: "Yesterday", icon: FileText, color: "bg-purple-500" },
        { text: "Generated new Study Timetable", time: "2 days ago", icon: CalendarDays, color: "bg-indigo-500" },
    ];

    return (
        <div className="bg-card rounded-[24px] p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-foreground">Recent Activity</h2>
                <button className="text-xs text-[#6366F1] hover:underline">View All</button>
            </div>

            <div className="relative pl-4 space-y-6">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border -ml-[0.5px]" />

                {activities.map((item, i) => (
                    <div key={i} className="relative flex items-center gap-4 group">
                        <div className={`w-2 h-2 rounded-full ring-4 ring-card z-10 ${item.color}`} />
                        <div className="flex-1 p-3 rounded-xl bg-background border border-border group-hover:bg-muted/50 transition-colors">
                            <p className="text-sm text-foreground font-medium">{item.text}</p>
                            <div className="flex items-center gap-1 mt-1">
                                <Clock className="w-3 h-3 text-muted-foreground" />
                                <span className="text-[10px] text-muted-foreground">{item.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
