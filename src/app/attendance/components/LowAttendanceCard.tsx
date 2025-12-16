import { AlertTriangle } from "lucide-react";

interface SubjectData {
    subject: string;
    attended: number;
    total: number;
}

export function LowAttendanceCard({ data }: { data: SubjectData }) {
    const percentage = data.total > 0 ? (data.attended / data.total) * 100 : 0;

    return (
        <div className="flex items-center gap-4 rounded-2xl bg-[#FF5A5A]/10 border border-[#FF5A5A]/20 p-4 pr-6 min-w-[280px]">
            <div className="h-10 w-10 rounded-full bg-[#FF5A5A]/20 flex items-center justify-center text-[#FF5A5A]">
                <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
                <h4 className="text-sm font-semibold text-white">{data.subject}</h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-[#FF5A5A]">
                        {percentage.toFixed(1)}%
                    </span>
                    <span className="text-[10px] bg-[#FF5A5A] text-[#0D0F15] px-1.5 py-0.5 rounded font-bold uppercase">
                        Low Attendance
                    </span>
                </div>
            </div>
        </div>
    );
}
