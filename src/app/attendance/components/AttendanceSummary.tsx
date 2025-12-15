interface AttendanceSummaryProps {
    average: number;
    totalSubjects: number;
    totalAttended: number;
    totalClasses: number;
}

export function AttendanceSummary({ average, totalSubjects, totalAttended, totalClasses }: AttendanceSummaryProps) {
    return (
        <div className="rounded-[24px] bg-card p-6 border border-border shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <div className="h-32 w-32 rounded-full border-8 border-primary" />
            </div>

            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Overall Attendance Summary
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-foreground mb-1">{average.toFixed(1)}%</span>
                    <span className="text-xs text-muted-foreground">Average Attendance</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-foreground mb-1">{totalSubjects}</span>
                    <span className="text-xs text-muted-foreground">Total Subjects</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-foreground mb-1">
                        {totalAttended} <span className="text-lg text-muted-foreground font-normal">/ {totalClasses}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">Classes Attended</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#3EF084] mb-1">75%</span>
                    <span className="text-xs text-muted-foreground">Required Percentage</span>
                </div>
            </div>
        </div>
    );
}
