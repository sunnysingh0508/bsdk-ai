import { Subject, GRADE_POINTS } from "../page";

interface SubjectCardProps {
    subject: Subject;
    totalPoints: number;
}

export function SubjectCard({ subject, totalPoints }: SubjectCardProps) {
    const points = GRADE_POINTS[subject.grade];
    const weightedPoints = points * subject.credits;
    const contribution = totalPoints > 0 ? ((weightedPoints / totalPoints) * 100).toFixed(1) : "0";

    // Color logic
    let colorClass = "bg-white/5 border-white/5";
    let textClass = "text-muted-foreground";

    if (points >= 9) { colorClass = "bg-purple-500/10 border-purple-500/20"; textClass = "text-purple-400"; }
    else if (points >= 8) { colorClass = "bg-indigo-500/10 border-indigo-500/20"; textClass = "text-indigo-400"; }
    else if (points <= 4) { colorClass = "bg-red-500/10 border-red-500/20"; textClass = "text-red-400"; }

    return (
        <div className={`rounded-xl p-4 border ${colorClass} flex items-center justify-between`}>
            <div>
                <h3 className="font-medium text-white truncate max-w-[120px]" title={subject.name}>
                    {subject.name || "Unknown Subject"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                    {subject.credits} Credits • Grade {subject.grade} ({points} pts)
                </p>
            </div>
            <div className="text-right">
                <span className={`text-lg font-bold ${textClass}`}>
                    {contribution}%
                </span>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Impact
                </p>
            </div>
        </div>
    );
}
