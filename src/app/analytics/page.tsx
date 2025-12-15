"use client";

import React from 'react';
import { LayoutDashboard, GraduationCap, CheckCircle, Clock } from 'lucide-react';
import KpiCard from '@/components/analytics/KpiCard';
import TrendChart from '@/components/analytics/TrendChart';
import BarChart from '@/components/analytics/BarChart';
import DonutChart from '@/components/analytics/DonutChart';
import InsightsCard from '@/components/analytics/InsightsCard';
import SubjectTable from '@/components/analytics/SubjectTable';

export default function AnalyticsPage() {
    return (
        <main className="min-h-screen bg-background p-4 md:p-8 font-sans pb-20">
            <div className="max-w-7xl mx-auto animate-in fade-in duration-500">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-heading text-foreground mb-2">Analytics Dashboard</h1>
                        <p className="text-muted-foreground">Visual insights into your academic performance and productivity.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <select className="bg-card text-foreground text-sm border border-input rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50">
                            <option>Last 30 Days</option>
                            <option>This Semester</option>
                            <option>Last Quarter</option>
                        </select>
                        <button className="bg-card hover:bg-muted text-foreground text-sm font-medium border border-input rounded-xl px-4 py-2.5 transition-colors">
                            Export Report
                        </button>
                    </div>
                </div>

                {/* KPI Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                    <KpiCard
                        title="Current CGPA"
                        value="8.7"
                        change="+0.2"
                        trend="up"
                        data={[8.1, 8.2, 8.2, 8.3, 8.5, 8.7]}
                        icon={GraduationCap}
                        color="#6366F1"
                    />
                    <KpiCard
                        title="Avg Attendance"
                        value="82%"
                        change="-1.2%"
                        trend="down"
                        data={[88, 87, 86, 84, 83, 82]}
                        icon={CheckCircle}
                        color="#3EF084"
                    />
                    <KpiCard
                        title="Completion Rate"
                        value="94%"
                        change="+5.0%"
                        trend="up"
                        data={[60, 75, 80, 85, 90, 94]}
                        icon={LayoutDashboard}
                        color="#A855F7"
                    />
                    <KpiCard
                        title="Study Hours"
                        value="28h"
                        change="+4h"
                        trend="up"
                        data={[10, 15, 20, 18, 22, 28]}
                        icon={Clock}
                        color="#F7D25D"
                    />
                </div>

                {/* Trends Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 h-[350px]">
                    <TrendChart
                        title="Attendance Trend"
                        data={[90, 88, 85, 87, 84, 81, 78, 79, 82, 80, 76, 75]}
                        labels={['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12']}
                        color="#3EF084"
                        baseline={75}
                    />
                    <TrendChart
                        title="CGPA Progress"
                        data={[7.8, 7.9, 8.2, 8.4, 8.5, 8.7]}
                        labels={['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6']}
                        color="#6366F1"
                    />
                </div>

                {/* Middle Row: Assignment Stats + Time Donut */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2 h-[320px]">
                        <BarChart data={[
                            { label: "Data Structures", completed: 12, pending: 3, overdue: 1 },
                            { label: "Operating Systems", completed: 8, pending: 4, overdue: 3 },
                            { label: "DBMS", completed: 10, pending: 2, overdue: 0 },
                            { label: "Networks", completed: 15, pending: 1, overdue: 0 },
                        ]} />
                    </div>
                    <div className="h-[320px]">
                        <DonutChart data={[
                            { label: "Self Study", value: 25, color: "#6366F1" },
                            { label: "Classes", value: 35, color: "#3EF084" },
                            { label: "Assignments", value: 15, color: "#A855F7" },
                            { label: "Breaks", value: 20, color: "#F7D25D" },
                        ]} />
                    </div>
                </div>

                {/* Bottom Row: Insights + Table */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-1">
                        <InsightsCard />
                    </div>
                    <div className="xl:col-span-2">
                        <SubjectTable />
                    </div>
                </div>

            </div>
        </main>
    );
}
