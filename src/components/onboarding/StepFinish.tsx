"use client";

import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StepFinish() {
    return (
        <div className="text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-[#3EF084]/20 rounded-full mx-auto mb-8 flex items-center justify-center animate-bounce">
                <CheckCircle className="w-12 h-12 text-[#3EF084]" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                You’re all set 🎉
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-sm mx-auto">
                Your dashboard is ready to go. Start managing your college life like a pro.
            </p>

            <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] text-white font-bold transition-all shadow-lg shadow-[#6366F1]/25 group"
            >
                Go to Dashboard
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
