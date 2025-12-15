"use client";

import { Navbar } from "@/components/dashboard/layout/Navbar";
import { Sidebar } from "@/components/dashboard/layout/Sidebar";
import { CalendarCheck } from "lucide-react";
import { AttendanceSummary } from "./components/AttendanceSummary";
import { SubjectAttendanceCard } from "./components/SubjectAttendanceCard";
import { LowAttendanceCard } from "./components/LowAttendanceCard";

// Mock Data
const attendanceData = [
    { id: "1", subject: "Mathematics", attended: 22, total: 25 },
    { id: "2", subject: "Physics", attended: 18, total: 24 },
    { id: "3", subject: "Data Structures", attended: 28, total: 30 },
    { id: "4", subject: "English", attended: 12, total: 15 },
    { id: "5", subject: "Chemistry", attended: 14, total: 20 }, // 70% - Danger
    { id: "6", subject: "Computer Science", attended: 20, total: 22 },
];

export default function AttendancePage() {
    const totalClasses = attendanceData.reduce((sum, item) => sum + item.total, 0);
    const totalAttended = attendanceData.reduce((sum, item) => sum + item.attended, 0);
    const averageAttendance = totalClasses > 0 ? (totalAttended / totalClasses) * 100 : 0;

    const lowAttendanceSubjects = attendanceData.filter(
        (item) => (item.attended / item.total) * 100 < 75
    );

    return (
        <div className="flex h-screen w-full bg-background text-foreground overflow-hidden">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent">
                    <div className="mx-auto max-w-7xl space-y-8">

                        {/* Page Title Section */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400">
                                    <CalendarCheck className="h-5 w-5" />
                                </div>
                                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                                    Attendance Tracker
                                </h1>
                            </div>
                            <p className="text-muted-foreground ml-14">
                                Track your attendance percentage across all subjects and stay within the required limits.
                            </p>
                        </div>

                        {/* Overall Attendance Summary */}
                        <AttendanceSummary
                            average={averageAttendance}
                            totalSubjects={attendanceData.length}
                            totalAttended={totalAttended}
                            totalClasses={totalClasses}
                        />

                        {/* Subject-wise Attendance Grid */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-foreground">Subject Attendance Overview</h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {attendanceData.map((item) => (
                                    <SubjectAttendanceCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>

                        {/* Low Attendance Highlights - Only Show if applicable */}
                        {lowAttendanceSubjects.length > 0 && (
                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold text-white">Low Attendance Alerts</h2>
                                <div className="flex flex-wrap gap-4">
                                    {lowAttendanceSubjects.map((item) => (
                                        <LowAttendanceCard key={item.id} data={item} />
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
}
