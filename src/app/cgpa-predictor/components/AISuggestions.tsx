import { Sparkles } from "lucide-react";
import { Subject, GRADE_POINTS } from "../types";

interface AISuggestionsProps {
    subjects: Subject[];
}

export function AISuggestions({ subjects }: AISuggestionsProps) {
    const suggestions = [];

    // Logic to generate suggestions
    const improvableSubjects = subjects.filter(s => GRADE_POINTS[s.grade] < 10);

    if (improvableSubjects.length > 0) {
        // Top 2 subjects with highest credits but lower grades (biggest impact)
        const topPriorities = improvableSubjects
            .sort((a, b) => b.credits - a.credits || GRADE_POINTS[a.grade] - GRADE_POINTS[b.grade])
            .slice(0, 2);

        topPriorities.forEach(sub => {
            const currentPoints = GRADE_POINTS[sub.grade];
            // Find next grade
            const grades = Object.keys(GRADE_POINTS) as (keyof typeof GRADE_POINTS)[];
            const currentIdx = grades.indexOf(sub.grade);
            if (currentIdx > 0) {
                const nextGrade = grades[currentIdx - 1];
                suggestions.push(`Raising ${sub.name || "Subject"} from ${sub.grade} to ${nextGrade} will significantly boost your CGPA due to its ${sub.credits} credits.`);
            }
        });
    } else if (subjects.length > 0) {
        suggestions.push("Excellent work! You are maintaining the highest possible grades. Keep it up!");
    } else {
        suggestions.push("Add subjects to get personalized AI suggestions for improving your CGPA.");
    }

    return (
        <div className="rounded-[24px] bg-card p-6 border border-border shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="h-24 w-24 text-purple-500" />
            </div>

            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg shadow-purple-900/20">
                    <Sparkles className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                    AI Suggestions to Improve Your CGPA
                </h2>
            </div>

            <div className="space-y-3 relative z-10">
                {suggestions.map((suggestion, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-foreground/80 bg-muted/30 p-3 rounded-xl border border-border">
                        <span className="text-purple-400 font-bold">•</span>
                        {suggestion}
                    </div>
                ))}
            </div>
        </div>
    );
}
