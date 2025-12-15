"use client";

import React from 'react';
import { LucideIcon, CheckCircle, GraduationCap, FileBarChart, Clock, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ReportType {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

const REPORT_TYPES: ReportType[] = [
    { id: 'attendance', title: 'Attendance Report', description: 'Detailed logs and percentage summary.', icon: CheckCircle, color: '#3EF084' },
    { id: 'cgpa', title: 'CGPA Report', description: 'Grade breakdown and credit score analysis.', icon: GraduationCap, color: '#6366F1' },
    { id: 'assignment', title: 'Assignments', description: 'Submission status and overdue task list.', icon: FileBarChart, color: '#A855F7' },
    { id: 'productivity', title: 'Productivity', description: 'Study hours and time distribution insights.', icon: Clock, color: '#F7D25D' },
    { id: 'semester', title: 'Full Semester', description: 'Comprehensive report of all activities.', icon: FileText, color: '#3B82F6' },
];

interface ReportSelectorProps {
    selectedReportId: string;
    onSelect: (id: string) => void;
}

export default function ReportSelector({ selectedReportId, onSelect }: ReportSelectorProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REPORT_TYPES.map((report) => (
                <button
                    key={report.id}
                    onClick={() => onSelect(report.id)}
                    className={cn(
                        "relative flex flex-col items-start p-5 rounded-[20px] border transition-all duration-300 text-left group",
                        selectedReportId === report.id
                            ? "bg-card border-primary shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]"
                            : "bg-card border-border hover:border-border/80 hover:bg-muted/50"
                    )}
                >
                    <div
                        className="p-2.5 rounded-xl mb-3 transition-colors"
                        style={{
                            backgroundColor: selectedReportId === report.id ? `${report.color}20` : 'rgba(255,255,255,0.05)',
                        }}
                    >
                        <report.icon
                            className="w-5 h-5 transition-colors"
                            style={{ color: selectedReportId === report.id ? report.color : '#9CA3AF' }}
                        />
                    </div>
                    <h3 className={cn(
                        "font-bold mb-1 transition-colors",
                        selectedReportId === report.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}>
                        {report.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                        {report.description}
                    </p>
                </button>
            ))}
        </div>
    );
}
