import React from 'react';
import { cn } from '@/lib/utils';
import { Subject } from './TimetableConfig';

export interface TimetableSession {
    id: string;
    subjectId: string;
    subjectName: string;
    startTime: string; // HH:MM
    endTime: string; // HH:MM
    duration: number; // minutes
    color: string;
    type: 'Study' | 'Break';
}

interface TimetableBlockProps {
    session: TimetableSession;
    viewMode: 'Daily' | 'Weekly';
    onClick?: () => void;
}

export default function TimetableBlock({ session, viewMode, onClick }: TimetableBlockProps) {
    const isBreak = session.type === 'Break';

    return (
        <div
            onClick={onClick}
            className={cn(
                "rounded-xl p-3 relative overflow-hidden transition-all hover:brightness-110 cursor-pointer border",
                isBreak
                    ? "bg-white/5 border-white/5 text-gray-400 border-dashed"
                    : "border-transparent text-white"
            )}
            style={{
                backgroundColor: isBreak ? undefined : `${session.color}20`, // 20% opacity
                borderColor: isBreak ? undefined : `${session.color}40`, // 40% opacity border
            }}
        >
            {/* Color stripe for study sessions */}
            {!isBreak && (
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: session.color }} />
            )}

            <div className="flex flex-col h-full justify-between">
                <div>
                    <p className={cn("font-bold text-sm truncate", isBreak && "italic font-normal text-xs")}>
                        {session.subjectName}
                    </p>
                    <p className="text-[10px] opacity-70">
                        {session.startTime} - {session.endTime}
                    </p>
                </div>

                {!isBreak && (
                    <div className="text-[10px] font-medium opacity-50 text-right mt-1">
                        {session.duration}m
                    </div>
                )}
            </div>
        </div>
    );
}
