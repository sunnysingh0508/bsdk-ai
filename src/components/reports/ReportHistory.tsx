"use client";

import React from 'react';
import { Download, FileText, RefreshCw } from 'lucide-react';

const HISTORY = [
    { title: "Oct Attendance Summary", date: "Oct 24, 2023", type: "PDF" },
    { title: "Sem 5 CGPA Analysis", date: "Sep 12, 2023", type: "CSV" },
    { title: "Assignment Tracking", date: "Aug 30, 2023", type: "PDF" },
];

export default function ReportHistory() {
    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Report History</h3>
                <button title="Refresh" className="text-gray-500 hover:text-white transition-colors">
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            <div className="divide-y divide-white/5">
                {HISTORY.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:bg-[#6366F1]/10 group-hover:text-[#6366F1] transition-colors">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-200">{item.title}</p>
                                <p className="text-xs text-gray-500">{item.date} • {item.type}</p>
                            </div>
                        </div>
                        <button className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-colors">
                            <Download className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
