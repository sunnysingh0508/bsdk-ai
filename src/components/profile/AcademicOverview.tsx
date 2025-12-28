"use client";

import React from 'react';
import { TrendingUp, CheckCircle, Book, Calendar } from 'lucide-react';

import Link from 'next/link';

export default function AcademicOverview() {
    const stats = [
        { label: "Current CGPA", value: "8.7", icon: TrendingUp, color: "#6366F1", sub: "+0.2 from last sem", href: "/cgpa-predictor" },
        { label: "Avg Attendance", value: "82%", icon: CheckCircle, color: "#3EF084", sub: "Safe Zone", href: "/attendance" },
        { label: "Total Subjects", value: "6", icon: Book, color: "#A855F7", sub: "Active Courses", href: "/dashboard" },
        { label: "Pending Tasks", value: "3", icon: Calendar, color: "#F7D25D", sub: "Assignments Due", href: "/assignments" },
    ];

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5">
            <h2 className="text-lg font-bold text-white mb-6">Academic Overview</h2>

            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                    <Link
                        href={stat.href}
                        key={i}
                        className="bg-[#0E1017] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors block group"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400 font-medium mb-1">{stat.label}</div>
                        <div className="text-xs text-gray-500">{stat.sub}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
