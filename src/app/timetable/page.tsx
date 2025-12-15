"use client";

import React, { useState, useEffect } from 'react';
import { CalendarDays } from 'lucide-react';
import TimetableConfig, { TimetableConfigData } from '@/components/TimetableConfig';
import TimetableGrid from '@/components/TimetableGrid';
import SummaryPanel from '@/components/SummaryPanel';
import ViewToggle from '@/components/ViewToggle';
import { TimetableSession } from '@/components/TimetableBlock';

const DEFAULT_CONFIG: TimetableConfigData = {
    subjects: [],
    startHour: 9,
    endHour: 17,
    selectedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    intensity: 'Balanced',
    breakDuration: 15,
};

// Helper to format time
const formatTime = (minutesFromMidnight: number) => {
    const h = Math.floor(minutesFromMidnight / 60);
    const m = minutesFromMidnight % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

export default function TimetableGeneratorPage() {
    const [config, setConfig] = useState<TimetableConfigData>(DEFAULT_CONFIG);
    const [schedule, setSchedule] = useState<Record<string, TimetableSession[]>>({});
    const [viewMode, setViewMode] = useState<'Daily' | 'Weekly'>('Daily');
    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    // Sync current day index if days changes
    useEffect(() => {
        if (currentDayIndex >= config.selectedDays.length) {
            setCurrentDayIndex(0);
        }
    }, [config.selectedDays, currentDayIndex]);

    const handleReset = () => {
        setConfig(DEFAULT_CONFIG);
        setSchedule({});
    };

    const generateTimetable = () => {
        // Basic Heuristic Generation Logic
        const newSchedule: Record<string, TimetableSession[]> = {};
        const { subjects, startHour, endHour, selectedDays, breakDuration, intensity } = config;

        if (subjects.length === 0) return;

        const totalMinutesPerDay = (endHour - startHour) * 60;
        if (totalMinutesPerDay <= 0) return;

        // Determine session length based on intensity
        let sessionLength = 60; // Standard
        if (intensity === 'Focused') sessionLength = 90;
        if (intensity === 'Light') sessionLength = 45;

        selectedDays.forEach(day => {
            const daySessions: TimetableSession[] = [];
            let currentMinutes = startHour * 60;
            const endMinutes = endHour * 60;

            // Simple round robin subject distribution for now
            let subjectIndex = 0;

            while (currentMinutes + sessionLength <= endMinutes) {
                // Add Study Session
                const subject = subjects[subjectIndex % subjects.length];
                daySessions.push({
                    id: Math.random().toString(36).substr(2, 9),
                    subjectId: subject.id,
                    subjectName: subject.name,
                    color: subject.color,
                    startTime: formatTime(currentMinutes),
                    endTime: formatTime(currentMinutes + sessionLength),
                    duration: sessionLength,
                    type: 'Study'
                });

                currentMinutes += sessionLength;
                subjectIndex++;

                // Add Break if not end of day
                if (currentMinutes + breakDuration <= endMinutes) {
                    daySessions.push({
                        id: Math.random().toString(36).substr(2, 9),
                        subjectId: 'break',
                        subjectName: 'Break',
                        color: '#ffffff',
                        startTime: formatTime(currentMinutes),
                        endTime: formatTime(currentMinutes + breakDuration),
                        duration: breakDuration,
                        type: 'Break'
                    });
                    currentMinutes += breakDuration;
                }
            }
            newSchedule[day] = daySessions;
        });

        setSchedule(newSchedule);
        setViewMode('Weekly'); // Switch to weekly view on generate to show overview
    };

    // Stats Calculation
    const totalHours = Object.values(schedule).flat().filter(s => s.type === 'Study').reduce((acc, curr) => acc + curr.duration, 0) / 60;
    const uniqueSubjects = new Set(Object.values(schedule).flat().filter(s => s.type === 'Study').map(s => s.subjectId)).size;
    const totalBreaks = Object.values(schedule).flat().filter(s => s.type === 'Break').length;


    return (
        <main className="min-h-screen bg-background p-4 md:p-8 font-sans pb-20">
            <div className="max-w-[1600px] mx-auto h-[calc(100vh-100px)] flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <CalendarDays className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold font-heading text-foreground">Timetable Generator</h1>
                            <p className="text-muted-foreground">Generate a personalized daily or weekly timetable based on your subjects, available hours, and study preferences.</p>
                        </div>
                    </div>

                    {/* View Toggle on Desktop (moved to panel in design, but good here too) */}
                    <div className="hidden md:block">
                        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
                    </div>
                </div>

                {/* Content Layout */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">

                    {/* Left Panel: Config (4 Cols) */}
                    <div className="lg:col-span-4 h-full overflow-hidden">
                        <TimetableConfig
                            config={config}
                            setConfig={setConfig}
                            onGenerate={generateTimetable}
                            onReset={handleReset}
                        />
                    </div>

                    {/* Right Panel: Output (8 Cols) */}
                    <div className="lg:col-span-8 h-full flex flex-col overflow-hidden">

                        {/* Mobile View Toggle */}
                        <div className="md:hidden mb-4">
                            <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
                        </div>

                        {/* Stats */}
                        <SummaryPanel
                            totalHours={Math.round(totalHours)}
                            subjectCount={uniqueSubjects}
                            breakCount={totalBreaks}
                        />

                        {/* Grid */}
                        <TimetableGrid
                            schedule={schedule}
                            viewMode={viewMode}
                            currentDayIndex={currentDayIndex}
                            setCurrentDayIndex={setCurrentDayIndex}
                            days={config.selectedDays}
                        />
                    </div>

                </div>
            </div>
        </main>
    );
}
