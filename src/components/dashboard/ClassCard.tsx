"use client";

import React from "react";
import { Clock, MapPin } from "lucide-react";

export interface ClassSession {
    id: string;
    subject: string;
    location: string;
    startTime: Date;
    endTime: Date;
    status: "Upcoming" | "Ongoing" | "Completed";
}

interface ClassCardProps {
    session: ClassSession;
}

export function ClassCard({ session }: ClassCardProps) {
    const { subject, location, startTime, endTime, status } = session;

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    const durationMinutes = Math.round(
        (endTime.getTime() - startTime.getTime()) / (1000 * 60)
    );

    const getStatusStyles = () => {
        switch (status) {
            case "Ongoing":
                return "border-l-4 border-[#3EF084] bg-[#1F232C] shadow-[0_0_15px_rgba(62,240,132,0.1)]";
            case "Upcoming":
                return "border-l-4 border-[#6366F1] bg-[#1F232C]";
            case "Completed":
                return "border-l-4 border-gray-700 bg-[#1F232C]/50 opacity-60";
            default:
                return "bg-[#1F232C]";
        }
    };

    return (
        <div className={`p-4 rounded-xl mb-3 transition-all duration-300 ${getStatusStyles()} hover:bg-[#252A35]`}>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <h3 className="text-white font-bold text-base leading-tight">
                        {subject}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#6366F1]" />
                            <span>
                                {formatTime(startTime)} – {formatTime(endTime)}
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#3B82F6]" />
                            <span>{location}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                    {/* Duration Badge */}
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#181B23] text-gray-300 border border-gray-700">
                        {durationMinutes} min
                    </span>

                    {/* Status Badge */}
                    {status === "Ongoing" && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#3EF084]/20 text-[#3EF084] animate-pulse border border-[#3EF084]/30">
                            Now
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
