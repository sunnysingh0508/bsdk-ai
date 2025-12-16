"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const subjects = [
    { name: "Data Structures", attendance: 85, grade: "A", completed: 12, risk: "Low" },
    { name: "Operating Systems", attendance: 68, grade: "C+", completed: 8, risk: "High" },
    { name: "DBMS", attendance: 76, grade: "B", completed: 10, risk: "Medium" },
    { name: "Computer Networks", attendance: 92, grade: "A+", completed: 15, risk: "Low" },
    { name: "Web Development", attendance: 88, grade: "A", completed: 14, risk: "Low" },
];

export default function SubjectTable() {
    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5">
                <h3 className="text-lg font-bold text-white">Subject-wise Breakdown</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#0E1017]/50 text-xs text-gray-500 uppercase tracking-wider">
                            <th className="p-4 font-medium pl-6">Subject</th>
                            <th className="p-4 font-medium">Attendance</th>
                            <th className="p-4 font-medium">Avg Grade</th>
                            <th className="p-4 font-medium">Tasks Done</th>
                            <th className="p-4 font-medium">Risk Level</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                        {subjects.map((sub, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4 pl-6 font-medium text-white">{sub.name}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <span className={cn(
                                            "font-bold",
                                            sub.attendance < 75 ? "text-[#FF5A5A]" : "text-[#3EF084]"
                                        )}>{sub.attendance}%</span>
                                        {(sub.attendance < 75) && <AlertCircle className="w-4 h-4 text-[#FF5A5A]" />}
                                    </div>
                                </td>
                                <td className="p-4">{sub.grade}</td>
                                <td className="p-4">{sub.completed}</td>
                                <td className="p-4">
                                    <span className={cn(
                                        "text-xs font-bold px-2.5 py-1 rounded-full border",
                                        sub.risk === "Low" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                                            sub.risk === "Medium" ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" :
                                                "bg-red-500/10 text-red-500 border-red-500/20"
                                    )}>
                                        {sub.risk}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
