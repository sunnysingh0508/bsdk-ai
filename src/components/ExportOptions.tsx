import React from 'react';
import { FileDown, FileImage } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ExportOptions() {
    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 space-y-4">
            <h3 className="font-bold text-white mb-2">Export format</h3>

            <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#6366F1]/10 border border-[#6366F1] text-[#6366F1]">
                    <FileDown className="w-4 h-4" />
                    <span className="text-sm font-bold">PDF</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0E1017] border border-white/5 text-gray-400 hover:bg-white/5 transition-colors">
                    <FileImage className="w-4 h-4" />
                    <span className="text-sm font-medium">Image</span>
                </button>
            </div>

            <div>
                <label className="text-xs text-gray-500 font-medium mb-2 block uppercase tracking-wide">Page Size</label>
                <select className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1] appearance-none cursor-pointer">
                    <option>A4</option>
                    <option>Letter</option>
                    <option>Legal</option>
                </select>
            </div>
        </div>
    );
}
