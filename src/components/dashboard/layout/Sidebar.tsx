"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import {
    LayoutDashboard,
    GraduationCap,
    CalendarCheck,
    Calculator,
    BookOpen,
    ScanLine,
    CalendarDays,
    Settings,
    LogOut,
    User,
} from "lucide-react";

const sidebarItems = [
    {
        category: "Analytics",
        items: [
            { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
            { name: "CGPA Predictor", href: "/cgpa", icon: GraduationCap },
            { name: "Attendance Tracker", href: "/attendance", icon: CalendarCheck },
            { name: "Bunk Calculator", href: "/dashboard/bunk-calc", icon: Calculator },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Assignments", href: "/dashboard/assignments", icon: BookOpen },
            { name: "Notes Scanner", href: "/dashboard/notes", icon: ScanLine },
            { name: "Timetable", href: "/dashboard/timetable", icon: CalendarDays },
        ],
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden h-screen w-64 flex-col border-r bg-white py-6 dark:bg-zinc-900 lg:flex">
            {/* Logo */}
            <div className="px-6 pb-6">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <Logo />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-foreground leading-none">
                            BSDK AI
                        </span>
                        <span className="text-[10px] font-medium text-muted-foreground leading-none">
                            BrightSight Student Development Kit – AI
                        </span>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
                <nav className="space-y-6">
                    {sidebarItems.map((group) => (
                        <div key={group.category}>
                            <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                {group.category}
                            </h3>
                            <div className="space-y-1">
                                {group.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                                isActive
                                                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 dark:from-indigo-900/20 dark:to-purple-900/20 dark:text-indigo-400"
                                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                            )}
                                        >
                                            <item.icon
                                                className={cn(
                                                    "h-4 w-4",
                                                    isActive ? "text-indigo-600 dark:text-indigo-400" : "text-muted-foreground"
                                                )}
                                            />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Bottom Group */}
                    <div>
                        <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Settings
                        </h3>
                        <div className="space-y-1">
                            <Link
                                href="/dashboard/settings"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                            >
                                <Settings className="h-4 w-4 text-muted-foreground" />
                                Settings
                            </Link>
                            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                                <LogOut className="h-4 w-4" />
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* User Mini Profile */}
            <div className="border-t px-4 py-4">
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-zinc-800">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <User className="h-5 w-5" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="truncate text-sm font-medium text-foreground">Sunny Singh</p>
                        <p className="truncate text-xs text-muted-foreground">sunny@bsdk.ai</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
