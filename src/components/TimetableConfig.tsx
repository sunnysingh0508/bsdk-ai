import React, { useState } from 'react';
import { Plus, X, Settings2, RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Subject {
    id: string;
    name: string;
    priority: 'Low' | 'Medium' | 'High';
    color: string;
}

export interface TimetableConfigData {
    subjects: Subject[];
    startHour: number; // 0-23
    endHour: number; // 0-23
    selectedDays: string[];
    intensity: 'Light' | 'Balanced' | 'Focused';
    breakDuration: number; // minutes
}

interface TimetableConfigProps {
    config: TimetableConfigData;
    setConfig: React.Dispatch<React.SetStateAction<TimetableConfigData>>;
    onGenerate: () => void;
    onReset: () => void;
}

const COLORS = ['#6366F1', '#3EF084', '#F7D25D', '#A855F7', '#EC4899', '#3B82F6', '#14B8A6'];

export default function TimetableConfig({ config, setConfig, onGenerate, onReset }: TimetableConfigProps) {
    const [newSubject, setNewSubject] = useState('');
    const [newPriority, setNewPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');

    const addSubject = () => {
        if (!newSubject.trim()) return;
        const color = COLORS[config.subjects.length % COLORS.length];
        const subject: Subject = {
            id: Math.random().toString(36).substr(2, 9),
            name: newSubject,
            priority: newPriority,
            color,
        };
        setConfig(prev => ({ ...prev, subjects: [...prev.subjects, subject] }));
        setNewSubject('');
    };

    const removeSubject = (id: string) => {
        setConfig(prev => ({ ...prev, subjects: prev.subjects.filter(s => s.id !== id) }));
    };

    const toggleDay = (day: string) => {
        setConfig(prev => {
            const exists = prev.selectedDays.includes(day);
            if (exists) return { ...prev, selectedDays: prev.selectedDays.filter(d => d !== day) };
            return { ...prev, selectedDays: [...prev.selectedDays, day] };
        });
    };

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 space-y-8 h-full overflow-y-auto custom-scrollbar">

            {/* 1. Subjects */}
            <div>
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#6366F1]/20 text-[#6366F1] flex items-center justify-center text-xs">1</span>
                    Subjects List
                </h3>

                {/* Add Subject Input */}
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={newSubject}
                        onChange={e => setNewSubject(e.target.value)}
                        placeholder="Subject Name"
                        className="flex-1 bg-[#0E1017] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                        onKeyDown={e => e.key === 'Enter' && addSubject()}
                    />
                    <select
                        value={newPriority}
                        onChange={e => setNewPriority(e.target.value as any)}
                        className="bg-[#0E1017] border border-white/10 rounded-xl px-2 py-2 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <button
                        onClick={addSubject}
                        className="p-2 bg-[#6366F1] hover:bg-[#5558e6] text-white rounded-xl transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>

                {/* List */}
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                    {config.subjects.length === 0 && (
                        <p className="text-xs text-center text-gray-600 italic py-2">No subjects added yet.</p>
                    )}
                    {config.subjects.map(sub => (
                        <div key={sub.id} className="flex items-center justify-between p-2 rounded-lg bg-[#0E1017] border border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sub.color }} />
                                <span className="text-sm font-medium text-white">{sub.name}</span>
                                <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                                    {sub.priority}
                                </span>
                            </div>
                            <button onClick={() => removeSubject(sub.id)} className="text-gray-500 hover:text-red-500">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Available Hours */}
            <div>
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#6366F1]/20 text-[#6366F1] flex items-center justify-center text-xs">2</span>
                    Available Study Hours
                </h3>
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <label className="text-xs text-gray-500 mb-1 block">Start</label>
                        <select
                            value={config.startHour}
                            onChange={e => setConfig(prev => ({ ...prev, startHour: Number(e.target.value) }))}
                            className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-3 py-2 text-sm text-white"
                        >
                            {Array.from({ length: 24 }).map((_, i) => (
                                <option key={i} value={i}>{i}:00</option>
                            ))}
                        </select>
                    </div>
                    <span className="text-gray-500 mt-4">-</span>
                    <div className="flex-1">
                        <label className="text-xs text-gray-500 mb-1 block">End</label>
                        <select
                            value={config.endHour}
                            onChange={e => setConfig(prev => ({ ...prev, endHour: Number(e.target.value) }))}
                            className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-3 py-2 text-sm text-white"
                        >
                            {Array.from({ length: 24 }).map((_, i) => (
                                <option key={i} value={i}>{i}:00</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* 3. Days Selection */}
            <div>
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#6366F1]/20 text-[#6366F1] flex items-center justify-center text-xs">3</span>
                    Days Selection
                </h3>
                <div className="flex flex-wrap gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                        <button
                            key={day}
                            onClick={() => toggleDay(day)}
                            className={cn(
                                "px-3 py-1.5 rounded-lg text-sm font-medium transition-all border",
                                config.selectedDays.includes(day)
                                    ? "bg-[#6366F1] border-[#6366F1] text-white"
                                    : "bg-[#0E1017] border-white/10 text-gray-400 hover:border-white/20"
                            )}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            {/* 4. Intensity */}
            <div>
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#6366F1]/20 text-[#6366F1] flex items-center justify-center text-xs">4</span>
                    Study Intensity
                </h3>
                <div className="space-y-2">
                    <input
                        type="range"
                        min="0"
                        max="2"
                        step="1"
                        value={config.intensity === 'Light' ? 0 : config.intensity === 'Balanced' ? 1 : 2}
                        onChange={e => {
                            const val = Number(e.target.value);
                            const int = val === 0 ? 'Light' : val === 1 ? 'Balanced' : 'Focused';
                            setConfig(prev => ({ ...prev, intensity: int }));
                        }}
                        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#6366F1]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 font-medium px-1">
                        <span className={config.intensity === 'Light' ? 'text-white' : ''}>Light</span>
                        <span className={config.intensity === 'Balanced' ? 'text-white' : ''}>Balanced</span>
                        <span className={config.intensity === 'Focused' ? 'text-white' : ''}>Focused</span>
                    </div>
                </div>
            </div>

            {/* 5. Break Preference */}
            <div>
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#6366F1]/20 text-[#6366F1] flex items-center justify-center text-xs">5</span>
                    Break Preference
                </h3>
                <div className="flex gap-2">
                    {[10, 15, 30].map((min) => (
                        <button
                            key={min}
                            onClick={() => setConfig(prev => ({ ...prev, breakDuration: min }))}
                            className={cn(
                                "flex-1 py-2 rounded-lg text-sm font-medium border transition-all",
                                config.breakDuration === min
                                    ? "bg-[#6366F1]/10 border-[#6366F1] text-[#6366F1]"
                                    : "bg-[#0E1017] border-white/10 text-gray-400 hover:border-white/20"
                            )}
                        >
                            {min} min
                        </button>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col gap-3">
                <button
                    onClick={onGenerate}
                    disabled={config.subjects.length === 0}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-bold shadow-lg shadow-[#6366F1]/20 hover:shadow-[#6366F1]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <Settings2 className="w-4 h-4" />
                    Generate Timetable
                </button>
                <button
                    onClick={onReset}
                    className="w-full py-3 rounded-xl bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2"
                >
                    <RotateCw className="w-4 h-4" />
                    Reset Inputs
                </button>
            </div>

        </div>
    );
}
