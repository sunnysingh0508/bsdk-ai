"use client";

import React, { useState } from 'react';
import { Calendar, Layers, BarChart } from 'lucide-react';

export default function ReportConfig() {
    const [dateRange, setDateRange] = useState("30days");
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(["all"]);
    const [sections, setSections] = useState({
        charts: true,
        tables: true,
        insights: true
    });

    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg font-bold text-white mb-6">Configuration</h3>

            <div className="space-y-6">
                {/* Date Range */}
                <div className="space-y-2">
                    <label className="text-xs text-gray-500 font-medium flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        Date Range
                    </label>
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                    >
                        <option value="7days">Last 7 Days</option>
                        <option value="30days">Last 30 Days</option>
                        <option value="semester">Full Semester</option>
                    </select>
                </div>

                {/* Subjects */}
                <div className="space-y-2">
                    <label className="text-xs text-gray-500 font-medium flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" />
                        Subjects
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {['All', 'DSA', 'OS', 'DBMS', 'Networks'].map((sub) => (
                            <button
                                key={sub}
                                onClick={() => setSelectedSubjects(prev =>
                                    sub === 'All' ? ['all'] :
                                        prev.includes('all') ? [sub] :
                                            prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
                                )}
                                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${(sub === 'All' && selectedSubjects.includes('all')) || (!selectedSubjects.includes('all') && selectedSubjects.includes(sub))
                                    ? "bg-[#6366F1]/20 border-[#6366F1] text-white"
                                    : "bg-[#0E1017] border-white/10 text-gray-400 hover:border-white/20"
                                    }`}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-3">
                    <label className="text-xs text-gray-500 font-medium flex items-center gap-2">
                        <BarChart className="w-3.5 h-3.5" />
                        Include Sections
                    </label>
                    <div className="space-y-2">
                        {[
                            { id: 'charts', label: 'Charts & Graphs' },
                            { id: 'tables', label: 'Detailed Tables' },
                            { id: 'insights', label: 'AI Insights Summary' }
                        ].map((section) => (
                            <label key={section.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#0E1017] border border-white/5 cursor-pointer hover:border-white/10 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={sections[section.id as keyof typeof sections]}
                                    onChange={() => setSections(prev => ({ ...prev, [section.id]: !prev[section.id as keyof typeof sections] }))}
                                    className="w-4 h-4 rounded border-gray-600 text-[#6366F1] focus:ring-[#6366F1] bg-[#181B23]"
                                />
                                <span className="text-sm text-gray-300">{section.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
