"use client";

import React, { useState } from 'react';
import { Plus, Trash2, Book } from 'lucide-react';

interface Subject {
    id: string;
    name: string;
    credits: number;
    minAttendance: number;
}

interface StepSubjectsProps {
    data: { subjects: Subject[] };
    onUpdate: (data: any) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function StepSubjects({ data, onUpdate, onNext, onBack }: StepSubjectsProps) {
    const [subjects, setSubjects] = useState<Subject[]>(data?.subjects || []);
    const [newSubject, setNewSubject] = useState("");
    const [credits, setCredits] = useState(3);

    const addSubject = () => {
        if (!newSubject.trim()) return;

        const newSub: Subject = {
            id: Math.random().toString(36).substr(2, 9),
            name: newSubject,
            credits: credits,
            minAttendance: 75
        };

        const updated = [...subjects, newSub];
        setSubjects(updated);
        onUpdate({ subjects: updated });
        setNewSubject("");
    };

    const removeSubject = (id: string) => {
        const updated = subjects.filter(s => s.id !== id);
        setSubjects(updated);
        onUpdate({ subjects: updated });
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Add Subjects</h2>
            <p className="text-gray-400 text-center mb-8">This helps us calculate CGPA and attendance accurately.</p>

            <div className="space-y-6">

                {/* Add Form */}
                <div className="flex gap-2">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Subject Name"
                            className="w-full bg-[#181B23] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
                            value={newSubject}
                            onChange={(e) => setNewSubject(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addSubject()}
                        />
                    </div>
                    <div className="w-24">
                        <input
                            type="number"
                            placeholder="Cr"
                            className="w-full bg-[#181B23] border border-white/10 rounded-xl px-4 py-3 text-white text-center focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
                            value={credits}
                            onChange={(e) => setCredits(Number(e.target.value))}
                            min={1}
                            max={10}
                        />
                    </div>
                    <button
                        onClick={addSubject}
                        className="w-12 h-[50px] flex items-center justify-center rounded-xl bg-[#6366F1] hover:bg-[#5558e6] text-white transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>

                {/* List */}
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                    {subjects.length === 0 ? (
                        <div className="text-center py-8 border-2 border-dashed border-white/5 rounded-xl text-gray-500">
                            <Book className="w-8 h-8 mx-auto mb-2 opacity-30" />
                            No subjects added yet.
                        </div>
                    ) : (
                        subjects.map(sub => (
                            <div key={sub.id} className="flex items-center justify-between p-4 bg-[#181B23] border border-white/5 rounded-xl group hover:border-white/10 transition-colors">
                                <div>
                                    <p className="font-bold text-white">{sub.name}</p>
                                    <p className="text-xs text-gray-500">{sub.credits} Credits • {sub.minAttendance}% Attendance Req.</p>
                                </div>
                                <button
                                    onClick={() => removeSubject(sub.id)}
                                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>

            </div>

            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={onBack}
                    className="text-gray-500 hover:text-white font-medium px-4 py-2 transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    disabled={subjects.length === 0}
                    className="px-8 py-2.5 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold transition-all shadow-lg shadow-[#6366F1]/20"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
