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
        <div className="bg-card rounded-[24px] border border-border overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="text-lg font-bold text-foreground">Report History</h3>
                <button title="Refresh" className="text-muted-foreground hover:text-foreground transition-colors">
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            <div className="divide-y divide-border">
                {HISTORY.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-foreground">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.date} • {item.type}</p>
                            </div>
                        </div>
                        <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                            <Download className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
