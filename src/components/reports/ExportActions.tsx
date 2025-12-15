"use client";

import React from 'react';
import { Download, Mail, FolderHeart, FileSpreadsheet, FileText } from 'lucide-react';

export default function ExportActions() {
    return (
        <div className="bg-card rounded-[24px] border border-border p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground">Export Options</h3>

            <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all shadow-lg shadow-primary/20 group">
                    <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    Download PDF
                </button>

                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-muted hover:bg-muted/80 text-foreground font-medium transition-all border border-border">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    Email Report
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
                <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-background border border-input hover:border-input/80 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                    <FileSpreadsheet className="w-4 h-4 text-green-500" />
                    CSV / Excel
                </button>
                <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-background border border-input hover:border-input/80 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                    <FolderHeart className="w-4 h-4 text-pink-500" />
                    Save to Files
                </button>
            </div>
        </div>
    );
}
