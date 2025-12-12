import { Subject, GRADE_POINTS } from "../page";

interface SummaryBoxProps {
    totalCredits: number;
    currentCGPA: number;
    subjects: Subject[];
}

export function SummaryBox({ totalCredits, currentCGPA, subjects }: SummaryBoxProps) {
    // Calculate Min/Max possible if current setup allows for variable future exams 
    // Since this is a predictor based on exact input, max/min possible for *this semester* 
    // usually implies "what if I got O in everything else?". 
    // But here inputs are fixed rows. We'll show stats based on the input.

    // Let's interpret "Max Possible" as "If all current non-O become O"
    const maxPoints = subjects.reduce((sum, sub) => sum + 10 * sub.credits, 0);
    const maxCGPA = totalCredits > 0 ? (maxPoints / totalCredits).toFixed(2) : "10.00";

    // Min possible: If all become F ? No, let's just show current stats summary for now as "Current" vs "Potential" matches the prompt's "Max CGPA possible"

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-[#181B23] p-4 border border-white/5 text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Total Credits</div>
                <div className="text-2xl font-bold text-white">{totalCredits}</div>
            </div>
            <div className="rounded-2xl bg-[#181B23] p-4 border border-white/5 text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Max Possible</div>
                <div className="text-2xl font-bold text-green-400">{maxCGPA}</div>
            </div>
            <div className="rounded-2xl bg-indigo-900/20 p-4 border border-indigo-500/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/10 blur-xl" />
                <div className="text-xs text-indigo-300 uppercase tracking-wider mb-1 relative z-10">Predicted</div>
                <div className="text-2xl font-bold text-indigo-400 relative z-10">{currentCGPA.toFixed(2)}</div>
            </div>
        </div>
    );
}
