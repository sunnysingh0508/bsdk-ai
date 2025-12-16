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
            <div className="bg-[#181B23] border border-white/5 rounded-[20px] p-4 flex flex-col justify-center items-center text-center">
                <div className="p-2 bg-[#6366F1]/10 rounded-full mb-1">
                    <Clock className="w-4 h-4 text-[#6366F1]" />
                </div>
                <span className="text-xl font-bold text-white">{totalHours}h</span>
                <span className="text-[10px] uppercase tracking-wide text-gray-500 font-medium">Study / Week</span>
            </div>

            <div className="bg-[#181B23] border border-white/5 rounded-[20px] p-4 flex flex-col justify-center items-center text-center">
                <div className="p-2 bg-[#A855F7]/10 rounded-full mb-1">
                    <BookOpen className="w-4 h-4 text-[#A855F7]" />
                </div>
                <span className="text-xl font-bold text-white">{subjectCount}</span>
                <span className="text-[10px] uppercase tracking-wide text-gray-500 font-medium">Subjects</span>
            </div>

            <div className="bg-[#181B23] border border-white/5 rounded-[20px] p-4 flex flex-col justify-center items-center text-center">
                <div className="p-2 bg-[#3EF084]/10 rounded-full mb-1">
                    <Coffee className="w-4 h-4 text-[#3EF084]" />
                </div>
                <span className="text-xl font-bold text-white">{breakCount}</span>
                <span className="text-[10px] uppercase tracking-wide text-gray-500 font-medium">Breaks</span>
            </div>
        </div>
    );
}
