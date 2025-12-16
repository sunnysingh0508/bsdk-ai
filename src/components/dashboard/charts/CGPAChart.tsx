export function CGPAChart({ cgpa }: { cgpa: number }) {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const progress = (cgpa / 10) * circumference;
    const dashoffset = circumference - progress;

    return (
        <div className="relative flex flex-col items-center justify-center">
            <div className="relative h-48 w-48">
                <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                        className="stroke-muted dark:stroke-muted"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        strokeWidth="10"
                    />
                    {/* Progress Circle */}
                    <circle
                        className="stroke-indigo-500 transition-all duration-1000 ease-out"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashoffset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-foreground">{cgpa}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">CGPA</span>
                </div>
            </div>

            {/* Legend / Breakdown (Static for now) */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div>
                    <p className="text-xs text-muted-foreground">Semester 1</p>
                    <p className="font-semibold text-indigo-600">8.2</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">Semester 2</p>
                    <p className="font-semibold text-purple-600">8.6</p>
                </div>
            </div>
        </div>
    );
}
