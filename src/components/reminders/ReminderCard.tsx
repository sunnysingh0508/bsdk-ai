import React, { useMemo } from 'react';
import { Reminder, CATEGORY_COLORS, STATUS_COLORS } from '@/app/reminders/types';
import { Card } from '@/components/ui/Card';
import { Clock, CheckCircle2, Trash2, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReminderCardProps {
    reminder: Reminder;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
    onSnooze?: (id: string) => void;
}

export const ReminderCard: React.FC<ReminderCardProps> = ({
    reminder,
    onComplete,
    onDelete
}) => {
    const timeStatus = useMemo(() => {
        const now = new Date();
        const diff = reminder.date.getTime() - now.getTime();
        const diffMinutes = Math.floor(diff / (1000 * 60));
        const diffHours = Math.floor(diff / (1000 * 60 * 60));
        const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (reminder.status === 'Completed') return { text: 'Completed', color: 'text-[#3EF084]' };
        if (diffMinutes < 0) return { text: 'Overdue', color: 'text-[#FF5A5A]' };
        if (diffMinutes === 0) return { text: 'Due Now', color: 'text-[#FF5A5A]' };
        if (diffMinutes < 60) return { text: `In ${diffMinutes} min`, color: 'text-[#F7D25D]' };
        if (diffHours < 24) return { text: `In ${diffHours} hr`, color: 'text-[#6366F1]' };

        return {
            text: reminder.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
            color: 'text-gray-400'
        };
    }, [reminder.date, reminder.status]);

    return (
        <Card className="bg-[#181B23] border border-gray-800/50 p-4 transition-all duration-300 hover:border-gray-700/50 hover:shadow-lg group relative overflow-hidden">
            {/* Soft Glow Effect */}
            <div className={`absolute top-0 left-0 w-1 h-full ${CATEGORY_COLORS[reminder.category].split(' ')[0]}`} />

            <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", CATEGORY_COLORS[reminder.category], "bg-opacity-10 text-opacity-100")}>
                            {reminder.category}
                        </span>
                        {reminder.repeat !== 'Once' && (
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {reminder.repeat}
                            </span>
                        )}
                    </div>

                    <h4 className={cn("text-lg font-medium truncate text-white mb-1", reminder.status === 'Completed' && "line-through opacity-50")}>
                        {reminder.title}
                    </h4>

                    <div className={cn("flex items-center gap-2 text-sm font-medium", timeStatus.color)}>
                        {reminder.status !== 'Completed' && <Bell className="w-3.5 h-3.5" />}
                        {timeStatus.text}
                    </div>
                </div>

                <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {reminder.status !== 'Completed' && (
                        <button
                            onClick={() => onComplete(reminder.id)}
                            className="p-2 rounded-lg bg-[#3EF084]/10 text-[#3EF084] hover:bg-[#3EF084]/20 transition-colors"
                            title="Complete"
                        >
                            <CheckCircle2 className="w-5 h-5" />
                        </button>
                    )}
                    <button
                        onClick={() => onDelete(reminder.id)}
                        className="p-2 rounded-lg bg-[#FF5A5A]/10 text-[#FF5A5A] hover:bg-[#FF5A5A]/20 transition-colors"
                        title="Delete"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </Card>
    );
};
