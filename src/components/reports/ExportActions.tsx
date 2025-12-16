"use client";

import React from 'react';
import { Download, Mail, FolderHeart, FileSpreadsheet, FileText } from 'lucide-react';

export default function ExportActions() {
    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Export Options</h3>

            <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#6366F1] hover:bg-[#5558e6] text-white font-medium transition-all shadow-lg shadow-[#6366F1]/20 group">
                    <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    Download PDF
                </button>

                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/5">
                    <Mail className="w-5 h-5 text-gray-400" />
                    Email Report
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
                <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0E1017] border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    <FileSpreadsheet className="w-4 h-4 text-green-500" />
                    CSV / Excel
                </button>
                <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0E1017] border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    <FolderHeart className="w-4 h-4 text-pink-500" />
                    Save to Files
                </button>
            </div>
        </div>
    );
}
