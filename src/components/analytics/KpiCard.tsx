"use client";

import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral';
    data: number[]; // Sparkline data (normalized 0-100 ideally, or raw)
    icon: LucideIcon;
    color: string;
}

export default function KpiCard({ title, value, change, trend, data, icon: Icon, color }: KpiCardProps) {
    // Simple Sparkline Logic
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((d - min) / range) * 100;
        return `${x},${y}`;
    }).join(' ');

    const isPositive = trend === 'up';

    return (
        <div className="relative overflow-hidden bg-card rounded-[24px] border border-border p-6 group hover:border-border/80 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-2xl bg-muted/50 border border-border">
                    <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div className={cn(
                    "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
                    isPositive ? "text-[#3EF084] bg-[#3EF084]/10" : "text-[#FF5A5A] bg-[#FF5A5A]/10"
                )}>
                    {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {change}
                </div>
            </div>

            <div className="mb-1">
                <h3 className="text-3xl font-bold text-foreground tracking-tight">{value}</h3>
                <p className="text-sm text-muted-foreground font-medium">{title}</p>
            </div>

            {/* Sparkline Overlay */}
            <div className="absolute bottom-0 right-0 w-32 h-16 opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                    <polyline
                        points={points}
                        fill="none"
                        stroke={color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <defs>
                        <linearGradient id={`grad-${title}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                            <stop offset="100%" stopColor={color} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <polygon points={`0,100 ${points} 100,100`} fill={`url(#grad-${title})`} opacity="0.5" />
                </svg>
            </div>
        </div>
    );
}
