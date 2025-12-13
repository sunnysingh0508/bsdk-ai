"use client";

import React from 'react';
import { Users, FileText, CheckCircle, StickyNote, Activity } from 'lucide-react';
import KpiCard from '@/components/admin/KpiCard';

export default function AdminDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white font-heading">Dashboard Overview</h1>
                <p className="text-gray-400 mt-1">Monitor platform performance and user activity.</p>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <KpiCard
                    title="Total Users"
                    value="2,543"
                    change="+12%"
                    trend="up"
                    icon={Users}
                    color="#6366F1"
                />
                <KpiCard
                    title="Active Today"
                    value="845"
                    change="+5%"
                    trend="up"
                    icon={Activity}
                    color="#3EF084"
                />
                <KpiCard
                    title="Assignments"
                    value="12.5k"
                    change="+8%"
                    trend="up"
                    icon={CheckCircle}
                    color="#A855F7"
                />
                <KpiCard
                    title="Notes Uploaded"
                    value="3,402"
                    change="-2%"
                    trend="down"
                    icon={StickyNote}
                    color="#F7D25D"
                />
            </div>

            {/* Recent Activity Section (Mock) */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Main Chart Placeholder */}
                <div className="xl:col-span-2 bg-[#181B23] rounded-[24px] border border-white/5 p-6 h-[400px] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-6 left-6 z-10">
                        <h3 className="text-lg font-bold text-white">User Growth</h3>
                        <p className="text-xs text-gray-500">New registrations over last 30 days</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#6366F1]/20 to-transparent" />
                    <svg viewBox="0 0 100 40" className="w-full h-full absolute bottom-0 opacity-50">
                        <polyline
                            points="0,40 10,35 20,38 30,25 40,30 50,15 60,20 70,10 80,12 90,5 100,2"
                            fill="none"
                            stroke="#6366F1"
                            strokeWidth="0.5"
                        />
                        <circle cx="90" cy="5" r="1" fill="#6366F1" className="animate-pulse" />
                    </svg>
                    <p className="text-gray-600 font-medium">Chart Visualization Placeholder</p>
                </div>

                {/* Recent Logs */}
                <div className="bg-[#181B23] rounded-[24px] border border-white/5 p-6 h-[400px] flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
                    <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
                        {[
                            { action: "User Suspended", user: "John Doe", time: "2m ago", color: "text-red-400" },
                            { action: "New Report", user: "System", time: "15m ago", color: "text-blue-400" },
                            { action: "New Registration", user: "Sarah Smith", time: "32m ago", color: "text-green-400" },
                            { action: "Login Failed", user: "Unknown", time: "1h ago", color: "text-yellow-400" },
                            { action: "Settings Updated", user: "Admin", time: "2h ago", color: "text-purple-400" },
                        ].map((log, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className={`w-2 h-2 rounded-full mt-1.5 ${log.color.replace('text-', 'bg-')}`} />
                                <div>
                                    <p className="text-sm font-bold text-gray-200">{log.action}</p>
                                    <p className="text-xs text-gray-500">{log.user} • {log.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
