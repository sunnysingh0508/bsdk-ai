"use client";

import React from 'react';
import { Search, Bell, Shield, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AdminNavbar() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    return (
        <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-white/5 bg-[#0E1017]/80 px-6 backdrop-blur-xl transition-all">
            {/* Breadcrumb & Search */}
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="hover:text-white transition-colors cursor-pointer">Admin</span>
                    {pathSegments.slice(1).map(seg => (
                        <React.Fragment key={seg}>
                            <span>/</span>
                            <span className="capitalize text-white font-medium">{seg}</span>
                        </React.Fragment>
                    ))}
                </div>

                <div className="hidden md:flex relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#6366F1] transition-colors" />
                    <input
                        type="text"
                        placeholder="Search users, logs, reports..."
                        className="bg-[#181B23] border border-white/5 rounded-xl py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#6366F1] w-64 transition-all"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border border-[#0E1017]"></span>
                </button>

                <div className="h-8 w-[1px] bg-white/5 mx-2" />

                <button className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#A855F7] flex items-center justify-center shadow-lg shadow-[#6366F1]/20">
                        <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left hidden sm:block">
                        <p className="text-xs font-bold text-white">Sunny Singh</p>
                        <p className="text-[10px] text-[#3EF084] font-medium uppercase tracking-wider">Super Admin</p>
                    </div>
                    <ChevronDown className="w-3 h-3 text-gray-500" />
                </button>
            </div>
        </header>
    );
}
