import React from 'react';
import { Button } from '@/components/ui/Button';

interface EmptyStateProps {
    onCreateClick: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onCreateClick }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="relative w-48 h-48 mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
                {/* Abstract geometric illustration style */}
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="100" cy="100" r="80" fill="#181B23" stroke="#334155" strokeWidth="2" strokeDasharray="8 8" className="animate-[spin_20s_linear_infinite]" />
                    <circle cx="100" cy="100" r="40" fill="#1E293B" />
                    <path d="M100 60V100L130 130" stroke="#6366F1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Notification bell abstract */}
                    <circle cx="140" cy="60" r="10" fill="#F7D25D" className="animate-bounce" />
                </svg>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">No reminders yet</h3>
            <p className="text-gray-400 max-w-sm mb-8">
                You're all caught up! Create a new reminder to stay on track with your classes, assignments, and study schedule.
            </p>

            <Button
                onClick={onCreateClick}
                size="md"
                className="bg-gradient-to-r from-[#6366F1] to-[#818cf8] hover:shadow-lg hover:shadow-indigo-500/20 text-white font-medium px-8"
            >
                Create Reminder
            </Button>
        </div>
    );
};
