import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
    label: string;
    value: string;
    icon: LucideIcon;
    trend?: string;
    gradient: string;
}

export function StatCard({ label, value, icon: Icon, trend, gradient }: StatCardProps) {
    return (
        <div className={cn("relative overflow-hidden rounded-2xl p-6 text-white shadow-lg transition-transform hover:scale-[1.02]", gradient)}>
            {/* Background Icon Watermark */}
            <Icon className="absolute -right-4 -bottom-4 h-32 w-32 text-white/10 rotate-12" />

            <div className="relative z-10 flex flex-col gap-1">
                <p className="text-sm font-medium text-white/80">{label}</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl font-bold">{value}</h3>
                    {trend && <span className="text-sm font-medium text-white/90">{trend}</span>}
                </div>
            </div>
        </div>
    );
}
