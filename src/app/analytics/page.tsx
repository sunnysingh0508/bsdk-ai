"use client";

import React, { useState } from 'react';
import { LayoutDashboard, GraduationCap, CheckCircle, Clock } from 'lucide-react';
import KpiCard from '@/components/analytics/KpiCard';
import TrendChart from '@/components/analytics/TrendChart';
import BarChart from '@/components/analytics/BarChart';
import DonutChart from '@/components/analytics/DonutChart';
import InsightsCard from '@/components/analytics/InsightsCard';
import SubjectTable from '@/components/analytics/SubjectTable';
import { SemesterExportControls } from '@/components/common/SemesterExportControls';

// Mock Data for Analytics
const ANALYTICS_DATA = {
    "this-semester": {
        kpi: {
            cgpa: { value: "8.7", change: "+0.2", trend: "up", data: [8.1, 8.2, 8.2, 8.3, 8.5, 8.7] },
            attendance: { value: "82%", change: "-1.2%", trend: "down", data: [88, 87, 86, 84, 83, 82] },
            completion: { value: "94%", change: "+5.0%", trend: "up", data: [60, 75, 80, 85, 90, 94] },
            studyHours: { value: "28h", change: "+4h", trend: "up", data: [10, 15, 20, 18, 22, 28] }
        },
        trends: {
            attendance: [90, 88, 85, 87, 84, 81, 78, 79, 82, 80, 76, 75],
            cgpa: [7.8, 7.9, 8.2, 8.4, 8.5, 8.7]
        },
        assignments: [
            { label: "Data Structures", completed: 12, pending: 3, overdue: 1 },
            { label: "Operating Systems", completed: 8, pending: 4, overdue: 3 },
            { label: "DBMS", completed: 10, pending: 2, overdue: 0 },
            { label: "Networks", completed: 15, pending: 1, overdue: 0 },
        ],
        timeDistribution: [
            { label: "Self Study", value: 25, color: "#6366F1" },
            { label: "Classes", value: 35, color: "#3EF084" },
            { label: "Assignments", value: 15, color: "#A855F7" },
            { label: "Breaks", value: 20, color: "#F7D25D" },
        ]
    },
    "last-semester": {
        kpi: {
            cgpa: { value: "8.5", change: "+0.4", trend: "up", data: [7.8, 7.9, 8.0, 8.2, 8.4, 8.5] },
            attendance: { value: "78%", change: "+2.0%", trend: "up", data: [70, 72, 75, 76, 78, 78] },
            completion: { value: "100%", change: "0%", trend: "neutral", data: [100, 100, 100, 100, 100, 100] },
            studyHours: { value: "22h", change: "-2h", trend: "down", data: [25, 24, 23, 22, 22, 22] }
        },
        trends: {
            attendance: [75, 76, 78, 80, 79, 78, 78, 78, 78, 78, 78, 78],
            cgpa: [7.5, 7.6, 7.8, 8.0, 8.2, 8.5]
        },
        assignments: [
            { label: "Linear Algebra", completed: 20, pending: 0, overdue: 0 },
            { label: "Web Dev", completed: 15, pending: 0, overdue: 0 },
            { label: "History", completed: 10, pending: 0, overdue: 0 },
            { label: "Physics", completed: 18, pending: 0, overdue: 0 },
        ],
        timeDistribution: [
            { label: "Self Study", value: 20, color: "#6366F1" },
            { label: "Classes", value: 40, color: "#3EF084" },
            { label: "Assignments", value: 25, color: "#A855F7" },
            { label: "Breaks", value: 15, color: "#F7D25D" },
        ]
    }
};

export default function AnalyticsPage() {
    const [selectedSemester, setSelectedSemester] = useState<string>("this-semester");
    const [isExporting, setIsExporting] = useState(false);

    // Get current data
    const currentData = ANALYTICS_DATA[selectedSemester as keyof typeof ANALYTICS_DATA] || ANALYTICS_DATA["this-semester"];

    const handleExport = () => {
        setIsExporting(true);
        setTimeout(() => {
            setIsExporting(false);
            alert("Analytics report exported successfully!");
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-[#0E1017] p-4 md:p-8 font-sans pb-20">
            <div className="max-w-7xl mx-auto animate-in fade-in duration-500">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-heading text-white mb-2">Analytics Dashboard</h1>
                        <p className="text-gray-400">Visual insights into your academic performance and productivity.</p>
                    </div>

                    <SemesterExportControls
                        onSemesterChange={setSelectedSemester}
                        onExport={handleExport}
                        isExporting={isExporting}
                    />
                </div>

                {/* KPI Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                    <KpiCard
                        title="Current CGPA"
                        value={currentData.kpi.cgpa.value}
                        change={currentData.kpi.cgpa.change}
                        trend={currentData.kpi.cgpa.trend as any}
                        data={currentData.kpi.cgpa.data}
                        icon={GraduationCap}
                        color="#6366F1"
                    />
                    <KpiCard
                        title="Avg Attendance"
                        value={currentData.kpi.attendance.value}
                        change={currentData.kpi.attendance.change}
                        trend={currentData.kpi.attendance.trend as any}
                        data={currentData.kpi.attendance.data}
                        icon={CheckCircle}
                        color="#3EF084"
                    />
                    <KpiCard
                        title="Completion Rate"
                        value={currentData.kpi.completion.value}
                        change={currentData.kpi.completion.change}
                        trend={currentData.kpi.completion.trend as any}
                        data={currentData.kpi.completion.data}
                        icon={LayoutDashboard}
                        color="#A855F7"
                    />
                    <KpiCard
                        title="Study Hours"
                        value={currentData.kpi.studyHours.value}
                        change={currentData.kpi.studyHours.change}
                        trend={currentData.kpi.studyHours.trend as any}
                        data={currentData.kpi.studyHours.data}
                        icon={Clock}
                        color="#F7D25D"
                    />
                </div>

                {/* Trends Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 h-[350px]">
                    <TrendChart
                        title="Attendance Trend"
                        data={currentData.trends.attendance}
                        labels={['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12']}
                        color="#3EF084"
                        baseline={75}
                    />
                    <TrendChart
                        title="CGPA Progress"
                        data={currentData.trends.cgpa}
                        labels={['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6']}
                        color="#6366F1"
                    />
                </div>

                {/* Middle Row: Assignment Stats + Time Donut */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2 h-[320px]">
                        <BarChart data={currentData.assignments} />
                    </div>
                    <div className="h-[320px]">
                        <DonutChart data={currentData.timeDistribution} />
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
