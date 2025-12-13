"use client";

import React from 'react';
import TrendChart from '@/components/analytics/TrendChart';
import BarChart from '@/components/analytics/BarChart';
import DonutChart from '@/components/analytics/DonutChart';

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-white font-heading">Platform Analytics</h1>
                <p className="text-gray-400 mt-1">Deep dive into usage stats and system performance.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[400px]">
                <TrendChart
                    title="User Growth (Monthly)"
                    data={[120, 150, 180, 220, 300, 350, 420, 500, 650, 800, 950, 1200]}
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                    color="#6366F1"
                />
                <BarChart data={[
                    { label: "Assignments", completed: 4500, pending: 1200, overdue: 300 },
                    { label: "Notes", completed: 3200, pending: 0, overdue: 0 },
                    { label: "Reports", completed: 1500, pending: 0, overdue: 0 },
                ]} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <div className="h-[350px]">
                    <DonutChart data={[
                        { label: "Mobile", value: 65, color: "#6366F1" },
                        { label: "Desktop", value: 30, color: "#3EF084" },
                        { label: "Tablet", value: 5, color: "#F7D25D" },
                    ]} />
                </div>

                <div className="xl:col-span-2 bg-[#181B23] rounded-[24px] border border-white/5 p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Feature Usage Heatmap</h3>
                    <div className="grid grid-cols-7 gap-2 h-full content-center">
                        {Array.from({ length: 28 }).map((_, i) => (
                            <div
                                key={i}
                                className={`aspect-square rounded-lg ${Math.random() > 0.7 ? 'bg-[#6366F1]' :
                                        Math.random() > 0.4 ? 'bg-[#6366F1]/50' :
                                            'bg-[#181B23] border border-white/5'
                                    } hover:scale-110 transition-transform`}
                                title={`Day ${i + 1}`}
                            />
                        ))}
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-4">Activity intensity over last 4 weeks</p>
                </div>
            </div>
        </div>
    );
}
