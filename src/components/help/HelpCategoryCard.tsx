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
            className="flex flex-col items-start text-left p-6 bg-card border border-border rounded-[24px] hover:bg-muted/50 hover:border-border/80 hover:-translate-y-1 transition-all duration-300 group"
        >
            <div className="p-3 bg-muted/50 rounded-2xl mb-4 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </button>
    );
}
