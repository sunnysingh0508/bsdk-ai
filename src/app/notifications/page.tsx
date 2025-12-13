"use client";

import React, { useState, useMemo } from 'react';
import { Bell } from 'lucide-react';
import NotificationCard, { NotificationItem, NotificationType } from '@/components/NotificationCard';
import NotificationFilters from '@/components/NotificationFilters';
import EmptyState from '@/components/EmptyState';

// Mock Data
const MOCK_NOTIFICATIONS: NotificationItem[] = [
    { id: 1, type: 'Assignment', title: 'Data Structures Project', message: 'The submission for "Graph Algorithms Implementation" is due tomorrow at 11:59 PM.', timestamp: '2 hours ago', read: false },
    { id: 2, type: 'Attendance', title: 'Low Attendance Alert', message: 'Your attendance in "Computer Networks" has dropped to 72%. Attend the next class to stay safe.', timestamp: '5 hours ago', read: false },
    { id: 3, type: 'Timetable', title: 'Class Rescheduled', message: 'The 10:00 AM "Operating Systems" lecture has been moved to 2:00 PM today.', timestamp: '1 day ago', read: true },
    { id: 4, type: 'System', title: 'Weekly Summary Available', message: 'Your academic performance report for the last week is ready to view.', timestamp: '2 days ago', read: true },
    { id: 5, type: 'Assignment', title: 'New Assignment Posted', message: 'Prof. Sharma added a new assignment for "Database Management Systems".', timestamp: '3 days ago', read: true },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
    const [filter, setFilter] = useState<NotificationType | 'All'>('All');
    const [showUnreadOnly, setShowUnreadOnly] = useState(false);

    // Filter Logic
    const filteredNotifications = useMemo(() => {
        return notifications.filter(n => {
            const matchesType = filter === 'All' || n.type === filter;
            const matchesRead = showUnreadOnly ? !n.read : true;
            return matchesType && matchesRead;
        });
    }, [notifications, filter, showUnreadOnly]);

    // Actions
    const handleMarkRead = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const handleDelete = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    return (
        <main className="min-h-screen bg-[#0E1017] p-4 md:p-8 font-sans pb-20">
            <div className="max-w-2xl mx-auto animate-in fade-in duration-500">

                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#6366F1]/10 rounded-lg">
                        <Bell className="w-6 h-6 text-[#6366F1]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold font-heading text-white">Notifications</h1>
                    </div>
                </div>
                <p className="text-sm text-gray-400 mb-8 ml-11">
                    Stay updated with assignments, attendance alerts, and important academic updates.
                </p>

                {/* Controls */}
                <NotificationFilters
                    currentFilter={filter}
                    setFilter={setFilter}
                    showUnreadOnly={showUnreadOnly}
                    setShowUnreadOnly={setShowUnreadOnly}
                    onMarkAllRead={handleMarkAllRead}
                />

                {/* List */}
                <div className="space-y-3">
                    {filteredNotifications.length > 0 ? (
                        filteredNotifications.map(notification => (
                            <NotificationCard
                                key={notification.id}
                                notification={notification}
                                onMarkRead={handleMarkRead}
                                onDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <EmptyState />
                    )}
                </div>

            </div>
        </main>
    );
}
