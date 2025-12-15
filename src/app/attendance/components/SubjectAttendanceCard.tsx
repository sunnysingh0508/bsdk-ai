import { cn } from "@/lib/utils";

interface SubjectData {
    id: string;
    subject: string;
    attended: number;
    total: number;
}

export function SubjectAttendanceCard({ data }: { data: SubjectData }) {
    const percentage = data.total > 0 ? (data.attended / data.total) * 100 : 0;

    let status = "SAFE";
    let colorClass = "text-[#3EF084]"; // Green
    let bgClass = "bg-[#3EF084]";
    let statusBg = "bg-[#3EF084]/10 border-[#3EF084]/20 text-[#3EF084]";

    if (percentage < 75) {
        status = "DANGER";
        colorClass = "text-[#FF5A5A]"; // Red
        bgClass = "bg-[#FF5A5A]";
        statusBg = "bg-[#FF5A5A]/10 border-[#FF5A5A]/20 text-[#FF5A5A]";
    } else if (percentage < 80) {
        status = "WARNING";
        colorClass = "text-[#F7D25D]"; // Yellow
        bgClass = "bg-[#F7D25D]";
        statusBg = "bg-[#F7D25D]/10 border-[#F7D25D]/20 text-[#F7D25D]";
    }

    return (
        <div className="rounded-[24px] bg-card p-5 border border-border shadow-lg relative overflow-hidden group hover:border-primary/50 transition-all">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-foreground truncate max-w-[140px]" title={data.subject}>
                    {data.subject}
                </h3>
                <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full border", statusBg)}>
                    {status}
                </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-2 flex justify-between items-end">
                <span className={cn("text-3xl font-bold", colorClass)}>
                    {percentage.toFixed(0)}%
                </span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-5">
                <div
                    className={cn("h-full rounded-full transition-all duration-1000 ease-out", bgClass)}
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {/* Counts Row */}
            <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                <div className="flex flex-col">
                    <span className="mb-0.5">Attended</span>
                    <span className="text-foreground font-medium">{data.attended}</span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="mb-0.5">Total</span>
                    <span className="text-foreground font-medium">{data.total}</span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="mb-0.5">Required</span>
                    <span className="text-foreground font-medium">75%</span>
                </div>
            </div>
        </div>
    );
}
