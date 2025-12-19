import React, { useState } from 'react';
import { Reminder, ReminderCategory, ReminderRepeat, CATEGORY_COLORS } from '@/app/reminders/types';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { X, Calendar, Clock, Tag, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReminderFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (reminder: Omit<Reminder, 'id' | 'createdAt' | 'status'>) => void;
}

export const ReminderForm: React.FC<ReminderFormProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState<ReminderCategory>('Assignment');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [repeat, setRepeat] = useState<ReminderRepeat>('Once');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!title.trim()) {
            setError('Title is required');
            return;
        }

        if (!date || !time) {
            setError('Date and Time are required');
            return;
        }

        const scheduledDate = new Date(`${date}T${time}`);

        // Simple client-side validation
        if (isNaN(scheduledDate.getTime())) {
            setError('Invalid date/time');
            return;
        }

        onSubmit({
            title,
            category,
            date: scheduledDate,
            repeat
        });

        // Reset form
        setTitle('');
        setCategory('Assignment');
        setDate('');
        setTime('');
        setRepeat('Once');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-[#181B23] border border-gray-800 rounded-3xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                    <h2 className="text-xl font-bold text-white">New Reminder</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <Input
                        label="What needs to be done?"
                        placeholder="e.g., Submit Math Assignment"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-[#0E1017] border-gray-800 text-white placeholder:text-gray-600 focus:border-indigo-500 focus:ring-indigo-500/20"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <Tag className="w-4 h-4 text-indigo-400" /> Category
                            </label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value as ReminderCategory)}
                                className="w-full h-11 px-3 rounded-xl bg-[#0E1017] border border-gray-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
                            >
                                {Object.keys(CATEGORY_COLORS).map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <RefreshCw className="w-4 h-4 text-indigo-400" /> Repeat
                            </label>
                            <select
                                value={repeat}
                                onChange={(e) => setRepeat(e.target.value as ReminderRepeat)}
                                className="w-full h-11 px-3 rounded-xl bg-[#0E1017] border border-gray-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
                            >
                                <option value="Once">Once</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-indigo-400" /> Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full h-11 px-3 rounded-xl bg-[#0E1017] border border-gray-800 text-white focus:outline-none focus:border-indigo-500 text-sm [color-scheme:dark]"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <Clock className="w-4 h-4 text-indigo-400" /> Time
                            </label>
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full h-11 px-3 rounded-xl bg-[#0E1017] border border-gray-800 text-white focus:outline-none focus:border-indigo-500 text-sm [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm font-medium">{error}</p>
                    )}

                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            variant="ghost"
                            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white border-0"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white border-0 shadow-lg shadow-indigo-500/25"
                        >
                            Save Reminder
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
