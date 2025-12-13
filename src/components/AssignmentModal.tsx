import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Assignment, AssignmentPriority, AssignmentStatus } from './AssignmentCard';

interface AssignmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (assignment: Omit<Assignment, 'id'>) => void;
    initialData?: Assignment | null;
}

export default function AssignmentModal({ isOpen, onClose, onSave, initialData }: AssignmentModalProps) {
    const [formData, setFormData] = useState<{
        title: string;
        subject: string;
        description: string;
        dueDate: string;
        priority: AssignmentPriority;
        status: AssignmentStatus;
        progress: number;
    }>({
        title: '',
        subject: '',
        description: '',
        dueDate: '',
        priority: 'Medium',
        status: 'Pending',
        progress: 0,
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title,
                subject: initialData.subject,
                description: initialData.description || '',
                dueDate: initialData.dueDate,
                priority: initialData.priority,
                status: initialData.status,
                progress: initialData.progress,
            });
        } else {
            // Reset form for new assignment
            setFormData({
                title: '',
                subject: '',
                description: '',
                dueDate: '',
                priority: 'Medium',
                status: 'Pending',
                progress: 0,
            });
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-lg bg-[#181B23] border border-white/10 rounded-[24px] shadow-2xl overflow-hidden scale-in-center animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0E1017]/50">
                    <h2 className="text-xl font-bold font-heading text-white">
                        {initialData ? 'Edit Assignment' : 'Add Assignment'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1.5">Assignment Title</label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            placeholder="e.g. Linear Algebra Worksheet 3"
                            className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all placeholder-gray-600"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1.5">Subject</label>
                            <input
                                type="text"
                                required
                                value={formData.subject}
                                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                placeholder="e.g. Math"
                                className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all placeholder-gray-600"
                            />
                        </div>
                        {/* Due Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1.5">Due Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    required
                                    value={formData.dueDate}
                                    onChange={e => setFormData({ ...formData, dueDate: e.target.value })}
                                    className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all placeholder-gray-600 dark:calendar-invert"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1.5">Description (Optional)</label>
                        <textarea
                            rows={3}
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Add details..."
                            className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all placeholder-gray-600 resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Priority */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1.5">Priority</label>
                            <select
                                value={formData.priority}
                                onChange={e => setFormData({ ...formData, priority: e.target.value as AssignmentPriority })}
                                className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all appearance-none cursor-pointer"
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        {/* Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1.5">Initial Status</label>
                            <select
                                value={formData.status}
                                onChange={e => setFormData({ ...formData, status: e.target.value as AssignmentStatus })}
                                className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all appearance-none cursor-pointer"
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4 mt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 rounded-xl font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-3 rounded-xl font-medium text-white bg-[#6366F1] hover:bg-[#5558e6] transition-colors shadow-lg shadow-[#6366F1]/20"
                        >
                            {initialData ? 'Save Changes' : 'Save Assignment'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
