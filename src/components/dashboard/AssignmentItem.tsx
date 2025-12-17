"use client";

import React from "react";
import { CheckCircle, ExternalLink, Bell, Clock, AlertCircle } from "lucide-react";

export interface Assignment {
    id: string;
    subject: string;
    title: string;
    dueDate: Date;
    priority: "Low" | "Medium" | "High";
    status: "Pending" | "Completed";
}

interface AssignmentItemProps {
    assignment: Assignment;
    onToggleComplete: (id: string) => void;
}

export function AssignmentItem({ assignment, onToggleComplete }: AssignmentItemProps) {
    const { id, subject, title, dueDate, priority } = assignment;

    // Time Logic
    const now = new Date();
    const diffMs = dueDate.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    let timeliness: "Overdue" | "Due Today" | "Due Tomorrow" | "Due Later" = "Due Later";
    let timeLeftText = "";

    if (diffMs < 0) {
        timeliness = "Overdue";
        const overdueDays = Math.abs(diffDays);
        timeLeftText = overdueDays === 0 ? "Overdue today" : `Overdue by ${overdueDays} day${overdueDays !== 1 ? "s" : ""}`;
    } else if (diffHours < 24 && new Date().getDate() === dueDate.getDate()) {
        timeliness = "Due Today";
        timeLeftText = `Due in ${diffHours} hours`;
    } else if (diffDays <= 1) {
        timeliness = "Due Tomorrow";
        timeLeftText = "Due Tomorrow";
    } else {
        timeLeftText = `Due in ${diffDays} days`;
    }

    // Urgency Rules for Styling
    const getUrgencyStyles = () => {
        switch (timeliness) {
            case "Overdue":
            case "Due Today":
                return "border-l-4 border-[#FF5A5A] bg-[#FF5A5A]/5";
            case "Due Tomorrow":
                return "border-l-4 border-[#F7D25D] bg-[#F7D25D]/5";
            default:
                return "border-l-4 border-[#6366F1] bg-[#1F232C]";
        }
    };

    const getPriorityBadgeStyle = () => {
        switch (priority) {
            case "High": return "text-[#FF5A5A] bg-[#FF5A5A]/10 border-[#FF5A5A]/20";
            case "Medium": return "text-[#F7D25D] bg-[#F7D25D]/10 border-[#F7D25D]/20";
            case "Low": return "text-[#3EF084] bg-[#3EF084]/10 border-[#3EF084]/20";
        }
    };

    return (
        <div className={`group relative flex items-center justify-between p-4 rounded-xl mb-3 transition-all duration-300 hover:bg-[#252A35] ${getUrgencyStyles()}`}>

            <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{subject}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${getPriorityBadgeStyle()}`}>
                        {priority}
                    </span>
                    {(timeliness === "Overdue" || timeliness === "Due Today") && (
                        <div className="flex items-center gap-1 text-[#FF5A5A] text-[10px] font-bold animate-pulse">
                            <AlertCircle className="w-3 h-3" />
                            {timeliness === "Overdue" ? "Overdue" : "Due Today"}
                        </div>
                    )}
                </div>

                <h3 className="text-white font-bold text-sm md:text-base leading-tight truncate pr-4">
                    {title}
                </h3>

                <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{timeLeftText}</span>
                </div>
            </div>

            {/* Quick Actions (Visible on Hover/Focus for Desktop, Always for Touch maybe? Let's keep distinct) */}
            <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <button
                    onClick={() => onToggleComplete(id)}
                    title="Mark as Done"
                    className="p-2 text-gray-400 hover:text-[#3EF084] hover:bg-[#3EF084]/10 rounded-lg transition-colors"
                >
                    <CheckCircle className="w-4 h-4" />
                </button>
                <button
                    title="Add Reminder"
                    className="p-2 text-gray-400 hover:text-[#F7D25D] hover:bg-[#F7D25D]/10 rounded-lg transition-colors hidden md:block"
                >
                    <Bell className="w-4 h-4" />
                </button>
                <button
                    title="Open Assignment"
                    className="p-2 text-gray-400 hover:text-[#3B82F6] hover:bg-[#3B82F6]/10 rounded-lg transition-colors"
                >
                    <ExternalLink className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
