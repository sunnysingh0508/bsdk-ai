"use client";

import React from 'react';
import { TrendingUp, CheckCircle, Book, Calendar } from 'lucide-react';

export default function AcademicOverview() {
    const stats = [
        { label: "Current CGPA", value: "8.7", icon: TrendingUp, color: "#6366F1", sub: "+0.2 from last sem" },
        { label: "Avg Attendance", value: "82%", icon: CheckCircle, color: "#3EF084", sub: "Safe Zone" },
        { label: "Total Subjects", value: "6", icon: Book, color: "#A855F7", sub: "Active Courses" },
        { label: "Pending Tasks", value: "3", icon: Calendar, color: "#F7D25D", sub: "Assignments Due" },
    ];

    return (
        <div className="bg-card rounded-[24px] p-6 border border-border">
            <h2 className="text-lg font-bold text-foreground mb-6">Academic Overview</h2>

            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-background p-4 rounded-2xl border border-border hover:border-border/80 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                            <div className="p-2 rounded-lg bg-muted/50">
                                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</div>
                        <div className="text-xs text-muted-foreground/80">{stat.sub}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
