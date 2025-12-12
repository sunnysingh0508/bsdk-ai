"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/dashboard/layout/Navbar";
import { Sidebar } from "@/components/dashboard/layout/Sidebar";
import { Calculator, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradeTable } from "./components/GradeTable";
import { CGPADonut } from "./components/CGPADonut";
import { SubjectCard } from "./components/SubjectCard";
import { AISuggestions } from "./components/AISuggestions";
import { SummaryBox } from "./components/SummaryBox";

// Types
export type Grade = "O" | "A+" | "A" | "B+" | "B" | "C" | "D" | "F";

export interface Subject {
    id: string;
    name: string;
    grade: Grade;
    credits: number;
}

export const GRADE_POINTS: Record<Grade, number> = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
    D: 4,
    F: 0,
};

export default function CGPAPage() {
    const [subjects, setSubjects] = useState<Subject[]>([
        { id: "1", name: "Data Structures", grade: "A", credits: 4 },
        { id: "2", name: "Mathematics", grade: "B+", credits: 3 },
        { id: "3", name: "Physics", grade: "A+", credits: 4 },
    ]);

    // Real-time CGPA Calculation
    const { cgpa, totalCredits, totalPoints } = useMemo(() => {
        const totalCredits = subjects.reduce((sum, sub) => sum + sub.credits, 0);
        const totalPoints = subjects.reduce(
            (sum, sub) => sum + GRADE_POINTS[sub.grade] * sub.credits,
            0
        );
        const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
        return { cgpa, totalCredits, totalPoints };
    }, [subjects]);

    const addSubject = () => {
        const newSubject: Subject = {
            id: crypto.randomUUID(),
            name: "",
            grade: "A",
            credits: 3,
        };
        setSubjects([...subjects, newSubject]);
    };

    const updateSubject = (id: string, field: keyof Subject, value: any) => {
        setSubjects((prev) =>
            prev.map((sub) => (sub.id === id ? { ...sub, [field]: value } : sub))
        );
    };

    const removeSubject = (id: string) => {
        setSubjects((prev) => prev.filter((sub) => sub.id !== id));
    };

    return (
        <div className="flex h-screen w-full bg-[#0D0F15] text-white overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
                <Navbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent">
                    <div className="mx-auto max-w-7xl space-y-8">
                        {/* Page Title Section */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400">
                                    <Calculator className="h-5 w-5" />
                                </div>
                                <h1 className="text-3xl font-bold tracking-tight text-white">
                                    CGPA Predictor
                                </h1>
                            </div>
                            <p className="text-muted-foreground ml-14">
                                Enter your grades and credit hours to calculate and predict your current semester CGPA.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-12">
                            {/* Left Column: Grade Input Table */}
                            <div className="lg:col-span-7 flex flex-col gap-6">
                                {/* Table Component */}
                                <div className="rounded-[24px] bg-[#181B23] p-6 border border-white/5 shadow-xl">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-lg font-semibold text-white">Current Grades</h2>
                                        <Button
                                            onClick={addSubject}
                                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-indigo-500/20"
                                        >
                                            <Plus className="h-4 w-4 mr-2" /> Add Subject
                                        </Button>
                                    </div>
                                    <GradeTable
                                        subjects={subjects}
                                        updateSubject={updateSubject}
                                        removeSubject={removeSubject}
                                    />
                                </div>

                                {/* Subject Breakdowns */}
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {subjects.map(sub => (
                                        <SubjectCard key={sub.id} subject={sub} totalPoints={totalPoints} />
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Visualization & Summary */}
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                {/* Donut Chart */}
                                <div className="rounded-[24px] bg-[#181B23] p-6 border border-white/5 shadow-xl min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50" />
                                    <CGPADonut cgpa={parseFloat(cgpa)} subjects={subjects} />
                                    <p className="mt-6 text-sm text-center text-muted-foreground">
                                        Your predicted semester CGPA based on current input.
                                    </p>
                                </div>

                                {/* Summary Box */}
                                <SummaryBox
                                    totalCredits={totalCredits}
                                    currentCGPA={parseFloat(cgpa)}
                                    subjects={subjects}
                                />

                                {/* AI Suggestions */}
                                <AISuggestions subjects={subjects} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
