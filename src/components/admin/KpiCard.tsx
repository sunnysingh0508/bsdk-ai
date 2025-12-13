"use client";

import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral';
    icon: LucideIcon;
    color: string;
}

export default function KpiCard({ title, value, change, trend, icon: Icon, color }: KpiCardProps) {
    const isPositive = trend === 'up';

    return (
        <div className="relative overflow-hidden bg-[#181B23] rounded-[24px] border border-white/5 p-6 group hover:border-white/10 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon className="w-16 h-16" style={{ color }} />
            </div>

            <div className="flex flex-col h-full justify-between relative z-10">
                <div className="p-3 w-fit rounded-2xl bg-[#0E1017] border border-white/5 mb-4">
                    <Icon className="w-6 h-6" style={{ color }} />
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-white tracking-tight mb-1">{value}</h3>
                    <p className="text-sm text-gray-500 font-medium mb-3">{title}</p>

                    <div className={cn(
                        "inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
                        isPositive ? "text-[#3EF084] bg-[#3EF084]/10" : "text-[#FF5A5A] bg-[#FF5A5A]/10"
                    )}>
                        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {change}
                        <span className="font-normal opacity-70 ml-1">vs last week</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
