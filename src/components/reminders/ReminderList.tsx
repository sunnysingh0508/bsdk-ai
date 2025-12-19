import React, { useMemo, useState } from 'react';
import { Reminder } from '@/app/reminders/types';
import { ReminderCard } from './ReminderCard';
import { EmptyState } from './EmptyState';
import { Search, Filter } from 'lucide-react';

interface ReminderListProps {
    reminders: Reminder[];
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
    onCreateClick: () => void;
}

export const ReminderList: React.FC<ReminderListProps> = ({
    reminders,
    onComplete,
    onDelete,
    onCreateClick
}) => {
    const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');

    const sortedReminders = useMemo(() => {
        return [...reminders].sort((a, b) => {
            // Priority: Overdue > Due Now > Upcoming > Completed
            // Within same status: Time ascending

            const getScore = (r: Reminder) => {
                if (r.status === 'Completed') return 4;
                if (r.status === 'Due Now') return 1;
                const now = new Date();
                if (r.date < now) return 0; // Overdue
                return 2; // Upcoming
            };

            const scoreA = getScore(a);
            const scoreB = getScore(b);

            if (scoreA !== scoreB) return scoreA - scoreB;

            return a.date.getTime() - b.date.getTime();
        });
    }, [reminders]);

    const filteredReminders = useMemo(() => {
        if (filter === 'All') return sortedReminders;
        if (filter === 'Completed') return sortedReminders.filter(r => r.status === 'Completed');
        return sortedReminders.filter(r => r.status !== 'Completed');
    }, [sortedReminders, filter]);

    if (reminders.length === 0) {
        return <EmptyState onCreateClick={onCreateClick} />;
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex bg-[#181B23] p-1 rounded-xl border border-gray-800/50">
                    {(['All', 'Upcoming', 'Completed'] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f
                                    ? 'bg-[#2D3342] text-white shadow-sm'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Placeholder for future search implementation */}
                {/* <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Search className="w-5 h-5" />
                </button> */}
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredReminders.map(reminder => (
                    <ReminderCard
                        key={reminder.id}
                        reminder={reminder}
                        onComplete={onComplete}
                        onDelete={onDelete}
                    />
                ))}
            </div>

            {filteredReminders.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No {filter.toLowerCase()} reminders found.
                </div>
            )}
        </div>
    );
};
