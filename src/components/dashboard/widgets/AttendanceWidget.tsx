import { cn } from "@/lib/utils";

interface SubjectAttendance {
    subject: string;
    percentage: number;
    bunkable: number;
}

export function AttendanceWidget({ attendance }: { attendance: SubjectAttendance[] }) {
    const getZoneColor = (pct: number) => {
        if (pct >= 85) return "bg-green-500";
        if (pct >= 75) return "bg-yellow-500";
        return "bg-red-500";
    };

    return (
        <div className="space-y-4">
            {attendance.map((item) => (
                <div key={item.subject} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{item.subject}</span>
                        <div className="flex items-center gap-2">
                            <span className={cn("text-xs font-bold", item.percentage < 75 ? "text-red-500" : "text-muted-foreground")}>
                                {item.percentage}%
                            </span>
                            {item.bunkable > 0 && (
                                <span className="rounded bg-green-500/10 px-1 py-0.5 text-[10px] font-bold text-green-600 dark:text-green-400">
                                    {item.bunkable} safe bunks
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                        <div
                            className={cn("h-full rounded-full transition-all duration-500", getZoneColor(item.percentage))}
                            style={{ width: `${item.percentage}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
