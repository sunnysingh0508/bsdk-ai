"use client";

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function InsightsCard() {
    const insights = [
        "Your attendance in **Operating Systems** is dropping on Mondays. Consider revising your schedule.",
        "Increasing daily study time by **30 mins** could improve your projected CGPA by **+0.2**.",
        "You typically complete assignments **2 days** before deadlines. Great consistency!",
    ];

    return (
        <div className="relative overflow-hidden rounded-[24px] p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-[#181B23] rounded-[23px] p-6 h-full relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="flex items-center gap-2 mb-6 relative z-10">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg shadow-indigo-500/20">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        AI Insights
                    </h3>
                </div>

                <div className="space-y-4 relative z-10">
                    {insights.map((text, i) => (
                        <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                            <p className="text-sm text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{
                                // Dangerously set HTML needed for bolding specific words easily without parsing
                                __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                            }} />
                        </div>
                    ))}
                </div>

                <button className="w-full mt-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5 flex items-center justify-center gap-2 group">
                    View All Recommendations
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
