import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle, AlertCircle, LayoutList } from 'lucide-react';

interface AssignmentStatsProps {
    total: number;
    pending: number;
    completed: number;
    overdue: number;
}

export default function AssignmentStats({ total, pending, completed, overdue }: AssignmentStatsProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            <div className="bg-[#181B23] p-4 rounded-[20px] border border-white/5 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#6366F1]/10">
                        <LayoutList className="w-4 h-4 text-[#6366F1]" />
                    </div>
                    <span className="text-gray-400 text-xs uppercase font-medium tracking-wide">Total</span>
                </div>
                <span className="text-2xl font-bold text-white">{total}</span>
            </div>

            <div className="bg-[#181B23] p-4 rounded-[20px] border border-white/5 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#6366F1]/10">
                        <Circle className="w-4 h-4 text-[#6366F1]" />
                    </div>
                    <span className="text-gray-400 text-xs uppercase font-medium tracking-wide">Pending</span>
                </div>
                <span className="text-2xl font-bold text-[#6366F1]">{pending}</span>
            </div>

            <div className="bg-[#181B23] p-4 rounded-[20px] border border-white/5 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#3EF084]/10">
                        <CheckCircle2 className="w-4 h-4 text-[#3EF084]" />
                    </div>
                    <span className="text-gray-400 text-xs uppercase font-medium tracking-wide">Completed</span>
                </div>
                <span className="text-2xl font-bold text-[#3EF084]">{completed}</span>
            </div>

            <div className="bg-[#181B23] p-4 rounded-[20px] border border-white/5 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#FF5A5A]/10">
                        <AlertCircle className="w-4 h-4 text-[#FF5A5A]" />
                    </div>
                    <span className="text-gray-400 text-xs uppercase font-medium tracking-wide">Overdue</span>
                </div>
                <span className="text-2xl font-bold text-[#FF5A5A]">{overdue}</span>
            </div>
        </div>
    );
}
