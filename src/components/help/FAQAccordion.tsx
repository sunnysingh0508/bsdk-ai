"use client";

import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-card border border-border rounded-[20px] overflow-hidden transition-all"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left"
                    >
                        <span className={cn(
                            "font-medium text-foreground transition-colors",
                            openIndex === index ? "text-primary" : ""
                        )}>
                            {item.question}
                        </span>
                        <div className={cn(
                            "p-1 rounded-lg transition-colors",
                            openIndex === index ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                        )}>
                            {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                    </button>

                    <div
                        className={cn(
                            "px-5 text-muted-foreground text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out",
                            openIndex === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                        )}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}
