"use client";

import React from 'react';
import { cn } from '@/lib/utils'; // Assumes you have this utility

export default function ReportPreview() {
    return (
        <div className="bg-card p-1 rounded-[24px] border border-border shadow-2xl shadow-black/50">
            <div className="w-full aspect-[1/1.4] bg-white rounded-[20px] overflow-hidden relative flex flex-col text-black p-8 md:p-12">

                {/* Header */}
                <div className="flex justify-between items-start mb-8 border-b-2 border-gray-100 pb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">Academic Report</h1>
                        <p className="text-sm text-gray-500">Generated on Oct 24, 2023</p>
                    </div>
                    <div className="text-right">
                        <div className="text-xl font-bold text-indigo-600 mb-1">BSDK AI</div>
                        <p className="text-xs text-gray-400">Smart College OS</p>
                    </div>
                </div>

                {/* Content Simulation */}
                <div className="space-y-8 flex-1">

                    {/* Summary Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { label: "Attendance", value: "82%" },
                            { label: "CGPA", value: "8.7" },
                            { label: "Tasks", value: "12" }
                        ].map((stat, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</div>
                                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart Placeholder */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold text-gray-900">Performance Trend</h3>
                        <div className="h-48 bg-gray-50 rounded-xl border border-gray-100 flex items-end justify-between p-4 gap-2">
                            {[40, 60, 45, 70, 85, 65, 90, 75, 80, 50].map((h, i) => (
                                <div key={i} className="w-full bg-indigo-100 rounded-t-sm relative group">
                                    <div className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t-sm transition-all" style={{ height: `${h}%` }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Table Placeholder */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold text-gray-900">Subject Details</h3>
                        <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                    <span className="font-medium text-gray-700">Subject Code 00{i}</span>
                                    <span className="text-gray-500">Passing</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                    <span>Page 1 of 3</span>
                    <span>Confidential Report</span>
                </div>

                {/* Overlay Gradient for "Preview Mode" feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
            </div>
        </div>
    );
}
