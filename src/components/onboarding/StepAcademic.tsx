"use client";

import React, { useState } from 'react';
import { GraduationCap, BookOpen, Calendar, Calculator } from 'lucide-react';

interface StepAcademicProps {
    data: any;
    onUpdate: (data: any) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function StepAcademic({ data, onUpdate, onNext, onBack }: StepAcademicProps) {
    const [formData, setFormData] = useState(data || {
        college: '',
        course: '',
        semester: '1',
        gradingSystem: '10'
    });

    const handleChange = (field: string, value: string) => {
        const newData = { ...formData, [field]: value };
        setFormData(newData);
        onUpdate(newData);
    };

    const isValid = formData.college && formData.course;

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Academic Details</h2>
            <p className="text-gray-400 text-center mb-8">Tell us about your current academic standing.</p>

            <div className="space-y-5">

                {/* College Name */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#6366F1]" />
                        College / University
                    </label>
                    <input
                        type="text"
                        placeholder="Ex: IIT Bombay, VIT Vellore..."
                        className="w-full bg-[#181B23] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1]"
                        value={formData.college}
                        onChange={(e) => handleChange('college', e.target.value)}
                    />
                </div>

                {/* Course */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#A855F7]" />
                        Course / Branch
                    </label>
                    <input
                        type="text"
                        placeholder="Ex: B.Tech Computer Science"
                        className="w-full bg-[#181B23] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1]"
                        value={formData.course}
                        onChange={(e) => handleChange('course', e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Semester */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#3EF084]" />
                            Semester
                        </label>
                        <select
                            className="w-full bg-[#181B23] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
                            value={formData.semester}
                            onChange={(e) => handleChange('semester', e.target.value)}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                                <option key={sem} value={sem}>Semester {sem}</option>
                            ))}
                        </select>
                    </div>

                    {/* Grading System */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Calculator className="w-4 h-4 text-[#F7D25D]" />
                            Grading
                        </label>
                        <select
                            className="w-full bg-[#181B23] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
                            value={formData.gradingSystem}
                            onChange={(e) => handleChange('gradingSystem', e.target.value)}
                        >
                            <option value="10">10-Point Scale</option>
                            <option value="4">4-Point Scale</option>
                        </select>
                    </div>
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
                    disabled={!isValid}
                    className="px-8 py-2.5 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold transition-all shadow-lg shadow-[#6366F1]/20"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
