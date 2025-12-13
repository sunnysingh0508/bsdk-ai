import React from 'react';
import TimetableBlock, { TimetableSession } from './TimetableBlock';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimetableGridProps {
    schedule: Record<string, TimetableSession[]>; // Key: Day 'Mon', 'Tue' etc.
    viewMode: 'Daily' | 'Weekly';
    currentDayIndex: number; // 0-6
    setCurrentDayIndex: (index: number) => void;
    days: string[];
}

export default function TimetableGrid({ schedule, viewMode, currentDayIndex, setCurrentDayIndex, days }: TimetableGridProps) {

    const currentDay = days.length > 0 ? days[currentDayIndex] : null;
    const currentSessions = currentDay && schedule[currentDay] ? schedule[currentDay] : [];

    const handlePrevDay = () => {
        setCurrentDayIndex((currentDayIndex - 1 + days.length) % days.length);
    };

    const handleNextDay = () => {
        setCurrentDayIndex((currentDayIndex + 1) % days.length);
    };

    if (!currentDay) {
        return (
            <div className="flex bg-[#181B23] rounded-[24px] border border-white/5 h-96 items-center justify-center text-gray-500">
                No days selected or schedule generated.
            </div>
        )
    }

    return (
        <div className="flex-1 bg-[#181B23] rounded-[24px] border border-white/5 p-6 h-full overflow-hidden flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold font-heading text-white">
                    {viewMode === 'Daily' ? currentDay : 'Weekly Overview'}
                </h2>

                {viewMode === 'Daily' && (
                    <div className="flex items-center gap-2">
                        <button onClick={handlePrevDay} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={handleNextDay} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>

            {/* Grid Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {viewMode === 'Daily' ? (
                    // Daily View List
                    <div className="space-y-4 max-w-lg mx-auto">
                        {currentSessions.length > 0 ? (
                            currentSessions.map((session, idx) => {
                                // Render a time marker if gap? Keep simple for now.
                                return (
                                    <div key={session.id} className="flex gap-4">
                                        <div className="w-16 text-xs text-gray-500 font-medium pt-3 text-right">
                                            {session.startTime}
                                        </div>
                                        <div className="flex-1">
                                            <TimetableBlock session={session} viewMode="Daily" />
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center text-gray-500 py-12">No sessions scheduled for this day.</div>
                        )}
                    </div>
                ) : (
                    // Weekly View Grid
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-2 min-w-[800px]">
                        {days.map(day => (
                            <div key={day} className="flex flex-col gap-2">
                                <div className="text-center text-sm font-bold text-gray-400 mb-2">{day}</div>
                                {schedule[day] && schedule[day].map(session => (
                                    <TimetableBlock key={session.id} session={session} viewMode="Weekly" />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
