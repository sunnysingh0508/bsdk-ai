"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HelpCategoryCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    onClick: () => void;
}

export default function HelpCategoryCard({ icon: Icon, title, description, onClick }: HelpCategoryCardProps) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-start text-left p-6 bg-[#181B23] border border-white/5 rounded-[24px] hover:bg-[#1C2029] hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group"
        >
            <div className="p-3 bg-white/5 rounded-2xl mb-4 group-hover:bg-[#6366F1]/10 transition-colors">
                <Icon className="w-6 h-6 text-gray-300 group-hover:text-[#6366F1] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </button>
    );
}
