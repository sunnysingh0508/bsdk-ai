import { Badge } from "@/components/ui/Badge";
// import { AvatarGroup } from "@/components/ui/Avatar"; // We'll mock this for now or standard div
import { Clock } from "lucide-react";

interface Assignment {
    title: string;
    subject: string;
    due: string;
    status: "Pending" | "In Progress" | "Completed";
    progress: number;
}

export function AssignmentCard({ title, subject, due, status, progress }: Assignment) {
    const statusColor = {
        Pending: "bg-orange-100 text-orange-600",
        "In Progress": "bg-blue-100 text-blue-600",
        Completed: "bg-green-100 text-green-600",
    };

    return (
        <div className="rounded-xl border bg-card p-4 shadow-sm transition-all hover:shadow-md text-card-foreground flex flex-col gap-3">
            <div className="flex items-start justify-between">
                <Badge variant="outline" className="bg-gray-50 text-xs font-normal text-muted-foreground">{subject}</Badge>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${statusColor[status]}`}>
                    {status}
                </span>
            </div>

            <div>
                <h4 className="font-semibold text-foreground line-clamp-1" title={title}>{title}</h4>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{due}</span>
                </div>
            </div>

            <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{progress}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-gray-100">
                    <div
                        className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
