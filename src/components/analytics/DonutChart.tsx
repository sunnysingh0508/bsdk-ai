"use client";

import React from 'react';

interface DonutData {
    label: string;
    value: number;
    color: string;
}

export default function DonutChart({ data }: { data: DonutData[] }) {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    let currentAngle = 0;

    return (
        <div className="bg-card rounded-[24px] border border-border p-6 h-full flex flex-col">
            <h3 className="text-lg font-bold text-foreground mb-6">Time Distribution</h3>

            <div className="flex-1 flex items-center justify-center relative">
                <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
                    {data.map((item, i) => {
                        const percentage = item.value / total;
                        const dashArray = percentage * 314; // 2 * PI * R (R=50 approx, actually slightly less for stroke)
                        const gap = 314 - dashArray;

                        // Using stroke-dasharray logic
                        // C = 2 * PI * r. Let r=40. C ~ 251.2
                        // Let's use easy numbers. r=16 (approx 100 total viewbox). 
                        // Let's standard approach: r=15.9155 => C=100. easy percentage. 

                        // Using normalized circle radius for easier calc: r=15.9155 
                        // Circumference = 100.

                        const r = 40;
                        const c = 2 * Math.PI * r;
                        const dash = (item.value / total) * c;
                        const offset = -currentAngle * (Math.PI / 180) * r; // Very simplified logic check needed.

                        // Better approach: SVG path segments or just stroke-dasharray with offsets.
                        // Let's stick to simple segments for robustness.

                        const startAngle = currentAngle;
                        const angle = (item.value / total) * 360;
                        currentAngle += angle;

                        // Create Arc Path
                        // We need polar to cartesian
                        const x1 = 50 + 40 * Math.cos(Math.PI * startAngle / 180);
                        const y1 = 50 + 40 * Math.sin(Math.PI * startAngle / 180);
                        const x2 = 50 + 40 * Math.cos(Math.PI * (startAngle + angle) / 180);
                        const y2 = 50 + 40 * Math.sin(Math.PI * (startAngle + angle) / 180);

                        const largeArcFlag = angle > 180 ? 1 : 0;

                        const pathData = [
                            `M 50 50`,
                            `L ${x1} ${y1}`,
                            `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                            `Z`
                        ].join(" ");

                        // Simple Sector
                        return (
                            <path
                                key={i}
                                d={pathData}
                                fill={item.color}
                                strokeWidth="2"
                                className="hover:opacity-80 transition-opacity stroke-card"
                            />
                        );
                    })}

                    {/* Center Cutout */}
                    <circle cx="50" cy="50" r="28" className="fill-card" />
                </svg>

                {/* Inner Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-bold text-foreground">{total}h</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Total</span>
                </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-4 mt-6">
                {data.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}
