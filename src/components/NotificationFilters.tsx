"use client";

import React from 'react';
import { Filter, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NotificationType } from './NotificationCard';

interface NotificationFiltersProps {
    currentFilter: NotificationType | 'All';
    setFilter: (filter: NotificationType | 'All') => void;
    showUnreadOnly: boolean;
    setShowUnreadOnly: (show: boolean) => void;
    onMarkAllRead: () => void;
}

export default function NotificationFilters({
    currentFilter,
    setFilter,
    showUnreadOnly,
    setShowUnreadOnly,
    onMarkAllRead
}: NotificationFiltersProps) {

    const filters: (NotificationType | 'All')[] = ['All', 'Assignment', 'Attendance', 'Timetable', 'System'];

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors whitespace-nowrap",
                            currentFilter === f
                                ? "bg-white text-black border-white"
                                : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                        )}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={showUnreadOnly}
                        onChange={(e) => setShowUnreadOnly(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-600 text-[#6366F1] focus:ring-[#6366F1] bg-transparent"
                    />
                    <span className="text-xs text-gray-400 font-medium">Show Unread Only</span>
                </label>

                <button
                    onClick={onMarkAllRead}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#6366F1] hover:text-[#5558e6] transition-colors"
                >
                    <CheckCheck className="w-3.5 h-3.5" />
                    Mark All as Read
                </button>
            </div>
        </div>
    );
}
