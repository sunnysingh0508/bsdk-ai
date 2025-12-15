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
        <div className="bg-card rounded-[24px] border border-border p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg font-bold text-foreground mb-6">Configuration</h3>

            <div className="space-y-6">
                {/* Date Range */}
                <div className="space-y-2">
                    <label className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        Date Range
                    </label>
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="7days">Last 7 Days</option>
                        <option value="30days">Last 30 Days</option>
                        <option value="semester">Full Semester</option>
                    </select>
                </div>

                {/* Subjects */}
                <div className="space-y-2">
                    <label className="text-xs text-muted-foreground font-medium flex items-center gap-2">
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
                                    ? "bg-primary/20 border-primary text-foreground"
                                    : "bg-background border-input text-muted-foreground hover:border-input/80"
                                    }`}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-3">
                    <label className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                        <BarChart className="w-3.5 h-3.5" />
                        Include Sections
                    </label>
                    <div className="space-y-2">
                        {[
                            { id: 'charts', label: 'Charts & Graphs' },
                            { id: 'tables', label: 'Detailed Tables' },
                            { id: 'insights', label: 'AI Insights Summary' }
                        ].map((section) => (
                            <label key={section.id} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-input cursor-pointer hover:border-input/80 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={sections[section.id as keyof typeof sections]}
                                    onChange={() => setSections(prev => ({ ...prev, [section.id]: !prev[section.id as keyof typeof sections] }))}
                                    className="w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-card"
                                />
                                <span className="text-sm text-foreground">{section.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
