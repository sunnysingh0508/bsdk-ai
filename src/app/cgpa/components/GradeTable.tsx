import { Trash2 } from "lucide-react";
import { Subject, Grade, GRADE_POINTS } from "../page";
import { cn } from "@/lib/utils";

interface GradeTableProps {
    subjects: Subject[];
    updateSubject: (id: string, field: keyof Subject, value: any) => void;
    removeSubject: (id: string) => void;
}

export function GradeTable({ subjects, updateSubject, removeSubject }: GradeTableProps) {
    return (
        <div className="w-full overflow-hidden">
            <div className="grid grid-cols-12 gap-4 mb-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <div className="col-span-5">Subject Name</div>
                <div className="col-span-3">Grade</div>
                <div className="col-span-3">Credit Hours</div>
                <div className="col-span-1"></div>
            </div>

            <div className="space-y-3">
                {subjects.map((subject) => (
                    <div
                        key={subject.id}
                        className="group grid grid-cols-12 gap-4 items-center bg-[#0D0F15]/50 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                    >
                        {/* Subject Name Input */}
                        <div className="col-span-5">
                            <input
                                type="text"
                                value={subject.name}
                                onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                                placeholder="e.g. Calculus"
                                className="w-full bg-transparent text-sm text-white placeholder-white/20 focus:outline-none border-b border-transparent focus:border-indigo-500 transition-colors py-1"
                            />
                        </div>

                        {/* Grade Dropdown */}
                        <div className="col-span-3">
                            <select
                                value={subject.grade}
                                onChange={(e) => updateSubject(subject.id, "grade", e.target.value as Grade)}
                                className="w-full bg-[#181B23] text-sm text-white rounded-lg border border-white/10 px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                {(Object.keys(GRADE_POINTS) as Grade[]).map((g) => (
                                    <option key={g} value={g}>{g}</option>
                                ))}
                            </select>
                        </div>

                        {/* Credit Hours Input */}
                        <div className="col-span-3">
                            <input
                                type="number"
                                min="1"
                                max="5"
                                value={subject.credits}
                                onChange={(e) => updateSubject(subject.id, "credits", Number(e.target.value))}
                                className="w-full bg-[#181B23] text-sm text-white rounded-lg border border-white/10 px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Remove Button */}
                        <div className="col-span-1 flex justify-end">
                            <button
                                onClick={() => removeSubject(subject.id)}
                                className="text-white/20 hover:text-red-500 transition-colors p-1"
                            >
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}

                {subjects.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground text-sm border border-dashed border-white/10 rounded-xl">
                        No subjects added. Click "Add Subject" to start.
                    </div>
                )}
            </div>
        </div>
    );
}
