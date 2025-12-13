"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    Settings,
    Shield,
    FileText,
    Bell,
    LogOut,
    TrendingUp,
    BookOpen,
    StickyNote,
    Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
    {
        category: "Core",
        items: [
            { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
            { name: "Users", href: "/admin/users", icon: Users },
            { name: "Analytics", href: "/admin/analytics", icon: TrendingUp },
            { name: "Reports", href: "/admin/reports", icon: FileText },
        ]
    },
    {
        category: "Management",
        items: [
            { name: "Assignments", href: "/admin/assignments", icon: BookOpen },
            { name: "Notes", href: "/admin/notes", icon: StickyNote },
            { name: "Timetables", href: "/admin/timetables", icon: Calendar },
            { name: "Notifications", href: "/admin/notifications", icon: Bell },
        ]
    },
    {
        category: "System",
        items: [
            { name: "System Settings", href: "/admin/settings", icon: Settings },
            { name: "Admin Logs", href: "/admin/logs", icon: Shield },
            { name: "Roles & Permissions", href: "/admin/roles", icon: Shield },
        ]
    }
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden h-screen w-64 flex-col bg-[#0E1017] border-r border-white/5 md:flex fixed left-0 top-0 overflow-y-auto">
            {/* Brand */}
            <div className="flex h-16 items-center border-b border-white/5 px-6">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
                    <Shield className="h-6 w-6 text-[#6366F1]" />
                    <span>BSDK Admin</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-8 px-4 py-6">
                {sidebarItems.map((group) => (
                    <div key={group.category}>
                        <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            {group.category}
                        </h3>
                        <div className="space-y-1">
                            {group.items.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200",
                                            isActive
                                                ? "bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white shadow-lg shadow-[#6366F1]/20"
                                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-gray-500 group-hover:text-white")} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-white/5 p-4">
                <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
}
