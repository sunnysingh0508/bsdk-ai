"use client";

import React, { useState } from "react";
import { AssignmentItem, Assignment } from "@/components/dashboard/AssignmentItem";
import { ChevronRight, ClipboardCheck } from "lucide-react";
import Link from "next/link";

export function PendingAssignments() {
    // Mock Data Generation
    // We create some sensitive dates relative to now to demonstrate the logic
    const generateMockAssignments = (): Assignment[] => {
        const now = new Date();

        const overdueDate = new Date(now);
        overdueDate.setDate(now.getDate() - 2); // 2 days ago

        const dueTodayDate = new Date(now);
        dueTodayDate.setHours(now.getHours() + 5); // 5 hours from now

        const dueTomorrowDate = new Date(now);
        dueTomorrowDate.setDate(now.getDate() + 1); // Tomorrow

        const dueLaterDate = new Date(now);
        dueLaterDate.setDate(now.getDate() + 4); // 4 days later

        return [
            {
                id: "1",
                subject: "Calculus",
                title: "Differential Equations Set 4",
                dueDate: overdueDate,
                priority: "High",
                status: "Pending",
            },
            {
                id: "2",
                subject: "Physics",
                title: "Lab Report: Magnetism",
                dueDate: dueTodayDate,
                priority: "High",
                status: "Pending",
            },
            {
                id: "3",
                subject: "Computer Science",
                title: "Algorithm Complexity Analysis",
                dueDate: dueTomorrowDate,
                priority: "Medium",
                status: "Pending",
            },
            {
                id: "4",
                subject: "English",
                title: "Essay Draft",
                dueDate: dueLaterDate,
                priority: "Low",
                status: "Pending",
            },
        ];
    };

    const [assignments, setAssignments] = useState<Assignment[]>(generateMockAssignments());

    const handleToggleComplete = (id: string) => {
        // Optimistic UI removal for demo purposes
        setAssignments(prev => prev.filter(a => a.id !== id));
    };

    // Sorting Logic: Overdue first, then by date
    const sortedAssignments = [...assignments].sort((a, b) => {
        return a.dueDate.getTime() - b.dueDate.getTime();
    });

    return (
        <div className="w-full bg-[#181B23] rounded-[24px] p-6 shadow-2xl shadow-black/20 border border-white/5 font-sans h-full flex flex-col">
            {/* 2. WIDGET HEADER */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                        Pending Assignments
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Assignments that still need to be completed.
                    </p>
                </div>
                <Link
                    href="/assignments"
                    className="text-xs font-semibold text-[#6366F1] hover:text-[#818cf8] flex items-center gap-1 transition-colors"
                >
                    View All
                    <ChevronRight className="w-3 h-3" />
                </Link>
            </div>

            {/* 3. ASSIGNMENTS LIST */}
            <div className="flex-1 flex flex-col gap-1 min-h-[200px]">
                {sortedAssignments.length > 0 ? (
                    sortedAssignments.map((assignment) => (
                        <AssignmentItem
                            key={assignment.id}
                            assignment={assignment}
                            onToggleComplete={handleToggleComplete}
                        />
                    ))
                ) : (
                    /* 6. EMPTY STATE */
                    <div className="flex flex-col items-center justify-center flex-1 py-10 text-center animate-in fade-in">
                        <div className="w-16 h-16 bg-[#1F232C] rounded-full flex items-center justify-center mb-4 border border-white/5">
                            <ClipboardCheck className="w-8 h-8 text-[#3EF084]" />
                        </div>
                        <h3 className="text-white font-bold text-lg">No pending assignments 🎉</h3>
                        <p className="text-gray-500 text-sm mt-1 max-w-[200px]">
                            You’re all caught up. Great work!
                        </p>
                    </div>
                )}
            </div>

            {/* Footer Summary (Optional, nice to have) */}
            {sortedAssignments.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                    <p className="text-xs text-gray-500">
                        {sortedAssignments.filter(a => a.priority === "High").length} High Priority • {sortedAssignments.length} Total
                    </p>
                </div>
            )}
        </div>
    );
}
