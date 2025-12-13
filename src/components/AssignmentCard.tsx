import React from 'react';
import { Calendar, Clock, Edit2, Trash2, CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type AssignmentStatus = 'Pending' | 'In Progress' | 'Completed' | 'Overdue';
export type AssignmentPriority = 'Low' | 'Medium' | 'High';

export interface Assignment {
    id: string;
    title: string;
    subject: string;
    description?: string;
    dueDate: string; // ISO date string
    status: AssignmentStatus;
    priority: AssignmentPriority;
    progress: number; // 0-100
}

interface AssignmentCardProps {
    assignment: Assignment;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

export default function AssignmentCard({ assignment, onEdit, onDelete, onToggleComplete }: AssignmentCardProps) {
    const isOverdue = assignment.status === 'Overdue';
    const isCompleted = assignment.status === 'Completed';

    // Helper for priority colors
    const getPriorityColor = (priority: AssignmentPriority) => {
        switch (priority) {
            case 'High': return 'text-[#FF5A5A] bg-[#FF5A5A]/10 border-[#FF5A5A]/20';
            case 'Medium': return 'text-[#F7D25D] bg-[#F7D25D]/10 border-[#F7D25D]/20';
            case 'Low': return 'text-[#3EF084] bg-[#3EF084]/10 border-[#3EF084]/20';
            default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
        }
    };

    // Helper for status colors
    const getStatusColor = (status: AssignmentStatus) => {
        switch (status) {
            case 'Completed': return 'text-[#3EF084] bg-[#3EF084]/10';
            case 'Overdue': return 'text-[#FF5A5A] bg-[#FF5A5A]/10';
            case 'In Progress': return 'text-[#6366F1] bg-[#6366F1]/10';
            default: return 'text-gray-400 bg-gray-400/10';
        }
    };

    const getDaysRemaining = (dueDate: string) => {
        const today = new Date();
        const due = new Date(dueDate);
        const diffTime = due.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return 'Overdue';
        if (diffDays === 0) return 'Due Today';
        if (diffDays === 1) return 'Due Tomorrow';
        return `Due in ${diffDays} days`;
    };

    return (
        <div className={cn(
            "group relative bg-[#181B23] rounded-[24px] p-6 border transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/5 hover:-translate-y-1",
            isOverdue ? "border-[#FF5A5A]/50 shadow-[0_0_20px_rgba(255,90,90,0.1)]" : "border-white/5 hover:border-white/10"
        )}>
            {/* Overdue Badge */}
            {isOverdue && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#FF5A5A] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#FF5A5A]/20">
                    Overdue
                </div>
            )}

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-gray-400 font-medium border border-white/5">
                            {assignment.subject}
                        </span>
                        <span className={cn("px-2.5 py-1 rounded-lg text-xs font-bold border uppercase tracking-wider", getPriorityColor(assignment.priority))}>
                            {assignment.priority}
                        </span>
                    </div>
                    <h3 className={cn("text-lg font-bold font-heading mb-1", isCompleted ? "text-gray-500 line-through" : "text-white")}>
                        {assignment.title}
                    </h3>
                    {assignment.description && (
                        <p className="text-sm text-gray-500 line-clamp-2">{assignment.description}</p>
                    )}
                </div>

                <button
                    onClick={() => onToggleComplete(assignment.id)}
                    className={cn("p-2 rounded-full transition-colors", isCompleted ? "text-[#3EF084] bg-[#3EF084]/10" : "text-gray-600 hover:text-[#6366F1] hover:bg-[#6366F1]/10")}
                >
                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                </button>
            </div>

            {/* Middle Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-400 bg-[#0E1017] p-2.5 rounded-xl border border-white/5">
                    <Calendar className="w-4 h-4 text-[#6366F1]" />
                    <span className="text-xs font-medium">{new Date(assignment.dueDate).toLocaleDateString()}</span>
                </div>
                <div className={cn("flex items-center gap-2 p-2.5 rounded-xl border border-white/5",
                    isOverdue ? "text-[#FF5A5A] bg-[#FF5A5A]/5" : "text-gray-400 bg-[#0E1017]"
                )}>
                    <Clock className={cn("w-4 h-4", isOverdue ? "text-[#FF5A5A]" : "text-[#6366F1]")} />
                    <span className="text-xs font-medium">{getDaysRemaining(assignment.dueDate)}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
                <div className="flex justify-between items-end mb-1">
                    <span className="text-xs text-gray-500 font-medium tracking-wide">{assignment.status}</span>
                    <span className="text-xs text-gray-500 font-bold">{assignment.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                        className={cn("h-full rounded-full transition-all duration-500",
                            assignment.status === 'Completed' ? "bg-[#3EF084]" :
                                assignment.status === 'Overdue' ? "bg-[#FF5A5A]" :
                                    "bg-[#6366F1]"
                        )}
                        style={{ width: `${assignment.progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <div className={cn("text-xs font-bold px-2 py-1 rounded-md", getStatusColor(assignment.status))}>
                    {assignment.status}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(assignment.id)}
                        className="p-1.5 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        title="Edit"
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => onDelete(assignment.id)}
                        className="p-1.5 text-gray-500 hover:text-[#FF5A5A] hover:bg-[#FF5A5A]/10 rounded-lg transition-colors"
                        title="Delete"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
