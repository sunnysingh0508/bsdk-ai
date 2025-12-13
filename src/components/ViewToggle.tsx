import React from 'react';
import { CalendarDays, LayoutList } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ViewToggleProps {
    viewMode: 'Daily' | 'Weekly';
    setViewMode: (mode: 'Daily' | 'Weekly') => void;
}

export default function ViewToggle({ viewMode, setViewMode }: ViewToggleProps) {
    return (
        <div className="flex bg-[#181B23] p-1 rounded-xl border border-white/5">
            <button
                onClick={() => setViewMode('Daily')}
                className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    viewMode === 'Daily'
                        ? "bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
            >
                <LayoutList className="w-4 h-4" />
                Daily View
            </button>
            <button
                onClick={() => setViewMode('Weekly')}
                className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    viewMode === 'Weekly'
                        ? "bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
            >
                <CalendarDays className="w-4 h-4" />
                Weekly View
            </button>
        </div>
    );
}
