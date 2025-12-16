"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Navbar } from "@/components/dashboard/layout/Navbar";
import { Sidebar } from "@/components/dashboard/layout/Sidebar";
import { GradeTable } from "./components/GradeTable";
import { CGPADonut } from "./components/CGPADonut";
import { SummaryBox } from "./components/SummaryBox";
import { AISuggestions } from "./components/AISuggestions";
import { Subject, GRADE_POINTS } from "./types";

// --- Helpers ---
const generateId = () => Math.random().toString(36).substring(2, 11);

// --- Page Component ---
export default function CGPAPredictorPage() {
    const [subjects, setSubjects] = useState<Subject[]>([
        { id: generateId(), name: "Mathematics", grade: "A", credits: 4 },
        { id: generateId(), name: "Data Structures", grade: "O", credits: 4 },
        { id: generateId(), name: "Physics", grade: "A+", credits: 3 },
    ]);

    // Calculate Stats
    const { totalCredits, totalPoints, cgpa } = useMemo(() => {
        const totalCredits = subjects.reduce((sum, sub) => sum + sub.credits, 0);
        const totalPoints = subjects.reduce((sum, sub) => sum + GRADE_POINTS[sub.grade] * sub.credits, 0);
        const cgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
        return { totalCredits, totalPoints, cgpa };
    }, [subjects]);

    // Handlers
    const addSubject = () => {
        setSubjects((prev) => [
            ...prev,
            { id: generateId(), name: "", grade: "A", credits: 3 }
        ]);
    };

    const updateSubject = (id: string, field: keyof Subject, value: any) => {
        setSubjects((prev) => prev.map(sub =>
            sub.id === id ? { ...sub, [field]: value } : sub
        ));
    };

    const removeSubject = (id: string) => {
        setSubjects((prev) => prev.filter(sub => sub.id !== id));
    };

    return (
        <div className="flex h-screen w-full bg-[#0D0F15] text-white overflow-hidden">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent">
                    <div className="mx-auto max-w-6xl space-y-8">

                        {/* Header */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold tracking-tight text-white">
                                CGPA Predictor
                            </h1>
                            <p className="text-muted-foreground">
                                Calculate your expected CGPA based on current grades and credits.
                            </p>
                        </div>

                        {/* Top Section: Donut + Summary */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Left: Donut Chart */}
                            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-[#181B23]/50 p-6 rounded-[24px] border border-white/5">
                                <CGPADonut cgpa={cgpa} subjects={subjects} />
                            </div>

                            {/* Right: Summary & AI */}
                            <div className="lg:col-span-8 flex flex-col gap-6">
                                <SummaryBox
                                    totalCredits={totalCredits}
                                    currentCGPA={cgpa}
                                    subjects={subjects}
                                />
                                <div className="flex-1">
                                    <AISuggestions subjects={subjects} />
                                </div>
                            </div>
                        </div>

                        {/* Grade Table Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-white">Subject Grades</h2>
                                <button
                                    onClick={addSubject}
                                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <Plus className="h-4 w-4" />
                                    Add Subject
                                </button>
                            </div>

                            <GradeTable
                                subjects={subjects}
                                updateSubject={updateSubject}
                                removeSubject={removeSubject}
                            />
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
