import { Subject, GRADE_POINTS } from "../types";

interface CGPADonutProps {
    cgpa: number;
    subjects: Subject[];
}

export function CGPADonut({ cgpa, subjects }: CGPADonutProps) {
    // Calculate total grade points avail (for chart distribution)
    const totalCredits = subjects.reduce((sum, sub) => sum + sub.credits, 0);

    // Create segments for the donut
    let startAngle = 0;
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    // Sort subjects by grade value to group colors nicely
    const sortedSubjects = [...subjects].sort((a, b) =>
        GRADE_POINTS[b.grade] - GRADE_POINTS[a.grade]
    );

    const segments = sortedSubjects.map((sub, index) => {
        const percentage = sub.credits / totalCredits;
        const dashArray = percentage * circumference;
        const gap = circumference - dashArray;
        const offset = -(startAngle / 360) * circumference;

        startAngle += percentage * 360;

        // Color logic based on grade
        const points = GRADE_POINTS[sub.grade];
        let colorClass = "text-red-500";
        if (points >= 9) colorClass = "text-purple-500"; // O, A+
        else if (points >= 8) colorClass = "text-indigo-500"; // A
        else if (points >= 7) colorClass = "text-blue-500"; // B+
        else if (points >= 6) colorClass = "text-cyan-500"; // B
        else if (points >= 5) colorClass = "text-yellow-500"; // C

        return (
            <circle
                key={sub.id}
                cx="100"
                cy="100"
                r={radius}
                fill="transparent"
                strokeWidth="12"
                stroke="currentColor"
                strokeDasharray={`${dashArray} ${gap}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className={`${colorClass} transition-all duration-1000 ease-out`}
                transform="rotate(-90 100 100)"
            />
        );
    });

    return (
        <div className="relative h-64 w-64 flex items-center justify-center">
            <svg className="h-full w-full" viewBox="0 0 200 200">
                {/* Background Circle */}
                <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="transparent"
                    strokeWidth="12"
                    stroke="currentColor"
                    className="text-white/5"
                />

                {/* Data Segments */}
                {totalCredits > 0 ? segments : (
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="transparent"
                        strokeWidth="12"
                        stroke="currentColor"
                        className="text-white/10"
                    />
                )}
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl font-bold text-white tracking-tighter drop-shadow-lg">
                    {cgpa.toFixed(2)}
                </span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">
                    Predicted CGPA
                </span>
            </div>
        </div>
    );
}
