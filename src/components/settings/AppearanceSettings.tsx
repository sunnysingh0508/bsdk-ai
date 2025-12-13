"use client";

import React, { useState } from 'react';
import { Palette, Moon, Sun, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AppearanceSettings() {
    const [theme, setTheme] = useState<'Dark' | 'Light' | 'System'>('Dark');
    const [accent, setAccent] = useState<'Indigo' | 'Purple' | 'Green'>('Indigo');
    const [animations, setAnimations] = useState(true);

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-[#A855F7]" />
                <h2 className="text-lg font-bold text-white">Appearance & Theme</h2>
            </div>

            {/* Theme Toggle */}
            <div>
                <label className="text-xs text-gray-500 font-medium mb-3 block">Theme Preference</label>
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { id: 'Dark', icon: Moon },
                        { id: 'Light', icon: Sun },
                        { id: 'System', icon: Laptop },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setTheme(item.id as any)}
                            className={cn(
                                "flex flex-col items-center justify-center gap-2 py-3 rounded-xl border transition-all",
                                theme === item.id
                                    ? "bg-[#6366F1]/10 border-[#6366F1] text-[#6366F1]"
                                    : "bg-[#0E1017] border-white/5 text-gray-400 hover:border-white/10"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-xs font-medium">{item.id}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Accent Color */}
            <div>
                <label className="text-xs text-gray-500 font-medium mb-3 block">Accent Color</label>
                <div className="flex gap-4">
                    {[
                        { id: 'Indigo', color: '#6366F1' },
                        { id: 'Purple', color: '#A855F7' },
                        { id: 'Green', color: '#3EF084' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setAccent(item.id as any)}
                            className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",
                                accent === item.id ? "border-white" : "border-transparent"
                            )}
                            style={{ backgroundColor: item.color }}
                        >
                            {accent === item.id && <div className="w-2 h-2 bg-white rounded-full" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Toggles */}
            <div className="flex items-center justify-between py-2">
                <div>
                    <p className="text-sm font-medium text-white">Reduce Animations</p>
                    <p className="text-xs text-gray-500">Minimize motion for better performance.</p>
                </div>
                <button
                    onClick={() => setAnimations(!animations)}
                    className={cn(
                        "w-11 h-6 rounded-full transition-colors relative",
                        !animations ? "bg-[#3EF084]" : "bg-white/10"
                    )}
                >
                    <div className={cn(
                        "w-4 h-4 rounded-full bg-white absolute top-1 transition-all",
                        !animations ? "left-6" : "left-1"
                    )} />
                </button>
            </div>
        </div>
    );
}
