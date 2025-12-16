"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface BarData {
    label: string;
    completed: number;
    pending: number;
    overdue: number;
}

export default function BarChart({ data }: { data: BarData[] }) {
    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 p-6 h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Assignments Performance</h3>
                <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-[#3EF084]" /> Completed
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-[#F7D25D]" /> Pending
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-[#FF5A5A]" /> Overdue
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {data.map((item, i) => {
                    const total = item.completed + item.pending + item.overdue;
                    const pCompleted = (item.completed / total) * 100;
                    const pPending = (item.pending / total) * 100;
                    const pOverdue = (item.overdue / total) * 100;

                    return (
                        <div key={i} className="group">
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-gray-300">{item.label}</span>
                                <span className="text-xs text-gray-500">{Math.round(pCompleted)}% Done</span>
                            </div>
                            <div className="h-2.5 w-full bg-[#0E1017] rounded-full overflow-hidden flex">
                                {item.completed > 0 && <div style={{ width: `${pCompleted}%` }} className="h-full bg-[#3EF084] group-hover:bg-[#32d873] transition-colors" />}
                                {item.pending > 0 && <div style={{ width: `${pPending}%` }} className="h-full bg-[#F7D25D] group-hover:bg-[#ecd545] transition-colors" />}
                                {item.overdue > 0 && <div style={{ width: `${pOverdue}%` }} className="h-full bg-[#FF5A5A] group-hover:bg-[#ff4040] transition-colors" />}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
