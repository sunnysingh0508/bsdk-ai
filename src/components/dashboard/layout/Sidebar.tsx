"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { useState } from "react";
import {
    LayoutDashboard,
    GraduationCap,
    CalendarCheck,
    Calculator,
    BookOpen,
    ScanLine,
    CalendarDays,
    ChartBar as BarChart,
    Settings,
    LogOut,
    User,
    CheckCircle,
    HelpCircle,
    Files,
    FileText,
    ChevronLeft,
    ChevronRight,
    Bell
} from "lucide-react";

const sidebarItems = [
    {
        category: "Analytics",
        items: [
            { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
            { name: "Analytics", href: "/analytics", icon: BarChart },
            { name: "Export & Reports", href: "/reports", icon: FileText },
            { name: "Attendance", href: "/attendance", icon: CheckCircle },
            { name: "CGPA Predictor", href: "/cgpa-predictor", icon: GraduationCap },
            { name: "Bunk Calculator", href: "/bunk-calculator", icon: Calculator },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Assignments", href: "/assignments", icon: BookOpen },
            { name: "Reminders", href: "/reminders", icon: Bell },
            { name: "Notes Library", href: "/notes", icon: Files },
            { name: "Timetable", href: "/timetable", icon: CalendarDays },
        ],
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            className={cn(
                "hidden h-screen flex-col border-r border-border bg-card/60 backdrop-blur-xl py-6 transition-all duration-300 lg:flex relative",
                collapsed ? "w-20" : "w-64"
            )}
        >
            {/* Collapse Toggle Button */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-9 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm hover:text-foreground transition-colors"
                title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
                {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
            </button>

            {/* Logo */}
            <div className={cn("px-6 pb-6 flex items-center", collapsed ? "justify-center px-0" : "")}>
                <Link href="/dashboard" className="flex items-center gap-2">
                    <Logo />
                    {!collapsed && (
                        <div className="flex flex-col animate-in fade-in duration-200">
                            <span className="text-xl font-bold tracking-tight text-foreground leading-none">
                                BSDK AI
                            </span>
                            <span className="text-[10px] font-medium text-muted-foreground leading-none">
                                BrightSight Student Development Kit – AI
                            </span>
                        </div>
                    )}
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-none">
                <nav className="space-y-6">
                    {sidebarItems.map((group) => (
                        <div key={group.category}>
                            {!collapsed && (
                                <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground animate-in fade-in">
                                    {group.category}
                                </h3>
                            )}
                            <div className="space-y-1">
                                {group.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            title={collapsed ? item.name : ""}
                                            className={cn(
                                                "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                                collapsed ? "justify-center px-2" : "gap-3",
                                                isActive
                                                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 dark:from-indigo-900/20 dark:to-purple-900/20 dark:text-indigo-400"
                                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                            )}
                                        >
                                            <item.icon
                                                className={cn(
                                                    "flex-shrink-0",
                                                    collapsed ? "h-5 w-5" : "h-4 w-4",
                                                    isActive ? "text-indigo-600 dark:text-indigo-400" : "text-muted-foreground"
                                                )}
                                            />
                                            {!collapsed && <span>{item.name}</span>}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Bottom Group */}
                    <div>
                        {!collapsed && (
                            <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground animate-in fade-in">
                                Settings
                            </h3>
                        )}
                        <div className="space-y-1">
                            <Link
                                href="/settings"
                                title={collapsed ? "Settings" : ""}
                                className={cn(
                                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
                                    collapsed ? "justify-center px-2" : "gap-3"
                                )}
                            >
                                <Settings className={cn("text-muted-foreground flex-shrink-0", collapsed ? "h-5 w-5" : "h-4 w-4")} />
                                {!collapsed && <span>Settings</span>}
                            </Link>
                            <Link
                                href="/help"
                                title={collapsed ? "Help & Support" : ""}
                                className={cn(
                                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
                                    collapsed ? "justify-center px-2" : "gap-3"
                                )}
                            >
                                <HelpCircle className={cn("text-muted-foreground flex-shrink-0", collapsed ? "h-5 w-5" : "h-4 w-4")} />
                                {!collapsed && <span>Help & Support</span>}
                            </Link>
                            <button
                                title={collapsed ? "Logout" : ""}
                                className={cn(
                                    "flex w-full items-center rounded-lg px-3 py-2 text-left text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors",
                                    collapsed ? "justify-center px-2" : "gap-3"
                                )}
                            >
                                <LogOut className={cn("flex-shrink-0", collapsed ? "h-5 w-5" : "h-4 w-4")} />
                                {!collapsed && <span>Logout</span>}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* User Mini Profile */}
            <div className="border-t border-border px-4 py-4">
                <div className={cn("flex items-center rounded-lg bg-muted/50 p-3", collapsed ? "justify-center p-2" : "gap-3")}>
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <User className="h-5 w-5" />
                    </div>
                    {!collapsed && (
                        <div className="flex-1 overflow-hidden animate-in fade-in">
                            <p className="truncate text-sm font-medium text-foreground">Sunny Singh</p>
                            <p className="truncate text-xs text-muted-foreground">sunny@bsdk.ai</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
