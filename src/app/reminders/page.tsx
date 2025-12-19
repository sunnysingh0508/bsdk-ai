"use client";

import React, { useState, useEffect } from 'react';
import { Reminder, ReminderStatus } from './types';
import { ReminderList } from '@/components/reminders/ReminderList';
import { ReminderForm } from '@/components/reminders/ReminderForm';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function RemindersPage() {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Initial dummy data or load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('bsdk-reminders');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // Convert date strings back to Date objects
                const hydrated = parsed.map((r: any) => ({
                    ...r,
                    date: new Date(r.date),
                    createdAt: new Date(r.createdAt)
                }));
                setReminders(hydrated);
            } catch (e) {
                console.error("Failed to parse reminders", e);
            }
        } else {
            // Optional: Add some sample data if empty
        }
    }, []);

    useEffect(() => {
        if (reminders.length > 0 || localStorage.getItem('bsdk-reminders')) {
            localStorage.setItem('bsdk-reminders', JSON.stringify(reminders));
        }
    }, [reminders]);

    const handleCreateReminder = (data: Omit<Reminder, 'id' | 'createdAt' | 'status'>) => {
        const newReminder: Reminder = {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            status: 'Upcoming',
            ...data
        };
        setReminders(prev => [...prev, newReminder]);
    };

    const handleDeleteReminder = (id: string) => {
        setReminders(prev => prev.filter(r => r.id !== id));
    };

    const handleCompleteReminder = (id: string) => {
        setReminders(prev => prev.map(r =>
            r.id === id ? { ...r, status: 'Completed' as ReminderStatus } : r
        ));
    };

    return (
        <div className="min-h-screen bg-[#0E1017] p-6 md:p-8 lg:p-12 text-white font-sans">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
                            Reminders
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Never miss a class, assignment, or study session.
                        </p>
                    </div>

                    <Button
                        onClick={() => setIsFormOpen(true)}
                        className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg shadow-indigo-500/25 rounded-xl px-6 h-12 flex items-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        Create Reminder
                    </Button>
                </div>

                {/* Content */}
                <ReminderList
                    reminders={reminders}
                    onCreateClick={() => setIsFormOpen(true)}
                    onDelete={handleDeleteReminder}
                    onComplete={handleCompleteReminder}
                />
            </div>

            {/* Modal */}
            <ReminderForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleCreateReminder}
            />
        </div>
    );
}
