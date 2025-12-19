
export type ReminderCategory = 'Assignment' | 'Class' | 'Study' | 'Custom';

export type ReminderStatus = 'Upcoming' | 'Due Now' | 'Completed' | 'Snoozed';

export type ReminderRepeat = 'Once' | 'Daily' | 'Weekly' | 'Custom';

export interface Reminder {
    id: string;
    title: string;
    description?: string;
    category: ReminderCategory;
    date: Date; // Keep as Date object for easier manipulation
    status: ReminderStatus;
    repeat: ReminderRepeat;
    createdAt: Date;
}

export const CATEGORY_COLORS: Record<ReminderCategory, string> = {
    Assignment: 'bg-[#6366F1] text-white', // Primary Indigo
    Class: 'bg-[#A855F7] text-white',      // Secondary Purple
    Study: 'bg-[#EC4899] text-white',      // Pink Accent
    Custom: 'bg-gray-500 text-white',
};

export const STATUS_COLORS: Record<ReminderStatus, string> = {
    Upcoming: 'text-gray-400',
    'Due Now': 'text-[#FF5A5A]',           // Red
    Completed: 'text-[#3EF084]',           // Green
    Snoozed: 'text-[#F7D25D]',             // Yellow
};
