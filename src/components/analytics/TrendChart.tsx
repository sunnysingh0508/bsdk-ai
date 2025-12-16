"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface TrendChartProps {
    title: string;
    data: number[];
    labels: string[];
    color: string;
    baseline?: number; // Optional baseline (e.g. 75%)
}

export default function TrendChart({ title, data, labels, color, baseline }: TrendChartProps) {
    // Normalize Data
    const max = Math.max(...data, baseline || 0);
    const min = 0; // Use 0 baseline for charts usually
    const range = max - min || 1;

    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((d - min) / range) * 80; // Keep some headroom
        return `${x},${y}`;
    }).join(' ');

    const baselineY = baseline ? 100 - ((baseline - min) / range) * 80 : null;

    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 p-6 h-full flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6">{title}</h3>

            <div className="flex-1 min-h-[200px] relative w-full">
                {/* Chart Area */}
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">

                    {/* Grid Lines (Horizontal) */}
                    {[0, 25, 50, 75, 100].map(p => (
                        <line
                            key={p}
                            x1="0" y1={p} x2="100" y2={p}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="0.5"
                        />
                    ))}

                    {/* Baseline */}
                    {baselineY !== null && (
                        <line
                            x1="0" y1={baselineY} x2="100" y2={baselineY}
                            stroke="#FF5A5A"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                            opacity="0.6"
                        />
                    )}

                    {/* Area */}
                    <defs>
                        <linearGradient id={`grad-${title.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                            <stop offset="100%" stopColor={color} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <polygon points={`0,100 ${points} 100,100`} fill={`url(#grad-${title.replace(/\s/g, '')})`} />

                    {/* Line */}
                    <polyline
                        points={points}
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-lg"
                    />

                    {/* Points */}
                    {data.map((d, i) => {
                        const x = (i / (data.length - 1)) * 100;
                        const y = 100 - ((d - min) / range) * 80;
                        return (
                            <circle
                                key={i}
                                cx={x} cy={y} r="1.5"
                                fill="#181B23"
                                stroke={color}
                                strokeWidth="1"
                                className="opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                            >
                                <title>{labels[i]}: {d}</title>
                            </circle>
                        );
                    })}
                </svg>

                {/* X Axis Labels */}
                <div className="flex justify-between mt-2 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                    {labels.map((label, i) => (
                        <span key={i} className={cn(
                            i === 0 || i === labels.length - 1 || i % 2 === 0 ? "opacity-100" : "opacity-0 md:opacity-50"
                        )}>
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
