"use client";

import React from 'react';
import { ClipboardList, AlertCircle, CalendarClock, Info, Check, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type NotificationType = 'Assignment' | 'Attendance' | 'Timetable' | 'System';

export interface NotificationItem {
    id: number;
    type: NotificationType;
    title: string;
    message: string;
    timestamp: string;
    read: boolean;
}

interface NotificationCardProps {
    notification: NotificationItem;
    onMarkRead: (id: number) => void;
    onDelete: (id: number) => void;
}

const TYPE_CONFIG: Record<NotificationType, { icon: React.ElementType, color: string, bgColor: string }> = {
    Assignment: { icon: ClipboardList, color: '#3B82F6', bgColor: 'bg-blue-500/10' },
    Attendance: { icon: AlertCircle, color: '#FF5A5A', bgColor: 'bg-red-500/10' },
    Timetable: { icon: CalendarClock, color: '#6366F1', bgColor: 'bg-indigo-500/10' },
    System: { icon: Info, color: '#A855F7', bgColor: 'bg-purple-500/10' },
};

export default function NotificationCard({ notification, onMarkRead, onDelete }: NotificationCardProps) {
    const config = TYPE_CONFIG[notification.type];
    const Icon = config.icon;

    return (
        <div className={cn(
            "group relative flex items-start gap-4 p-4 rounded-[20px] border transition-all duration-300",
            notification.read
                ? "bg-[#181B23] border-white/5 opacity-80 hover:opacity-100"
                : "bg-[#1C2029] border-white/10 shadow-lg shadow-black/20"
        )}>
            {/* Type Icon */}
            <div className={cn("p-3 rounded-xl shrink-0", config.bgColor)}>
                <Icon className="w-5 h-5" style={{ color: config.color }} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                    <h3 className={cn("text-sm font-bold truncate pr-8", notification.read ? "text-gray-300" : "text-white")}>
                        {notification.title}
                    </h3>
                    <span className="text-[10px] text-gray-500 whitespace-nowrap shrink-0">{notification.timestamp}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {notification.message}
                </p>
            </div>

            {/* Actions */}
            <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {!notification.read && (
                    <button
                        onClick={() => onMarkRead(notification.id)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-green-500/20 hover:text-green-400 text-gray-400 transition-colors"
                        title="Mark as Read"
                    >
                        <Check className="w-3.5 h-3.5" />
                    </button>
                )}
                <button
                    onClick={() => onDelete(notification.id)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 transition-colors"
                    title="Delete"
                >
                    <Trash2 className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Unread Dot */}
            {!notification.read && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#6366F1] group-hover:opacity-0 transition-opacity" />
            )}
        </div>
    );
}
