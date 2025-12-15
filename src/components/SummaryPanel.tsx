import React from 'react';
import { Clock, BookOpen, Coffee } from 'lucide-react';

interface SummaryPanelProps {
    totalHours: number;
    subjectCount: number;
    breakCount: number;
}

export default function SummaryPanel({ totalHours, subjectCount, breakCount }: SummaryPanelProps) {
    return (
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
            <div className="bg-card border border-border rounded-[20px] p-4 flex flex-col justify-center items-center text-center">
                <div className="p-2 bg-primary/10 rounded-full mb-1">
                    <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xl font-bold text-foreground">{totalHours}h</span>
                <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Study / Week</span>
            </div>

            <div className="bg-card border border-border rounded-[20px] p-4 flex flex-col justify-center items-center text-center">
                <div className="p-2 bg-secondary/10 rounded-full mb-1">
                    <BookOpen className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-xl font-bold text-foreground">{subjectCount}</span>
                <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Subjects</span>
            </div>

            <div className="bg-card border border-border rounded-[20px] p-4 flex flex-col justify-center items-center text-center">
                <div className="p-2 bg-green-500/10 rounded-full mb-1">
                    <Coffee className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-xl font-bold text-foreground">{breakCount}</span>
                <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Breaks</span>
            </div>
        </div>
    );
}
