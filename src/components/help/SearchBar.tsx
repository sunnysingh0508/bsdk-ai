"use client";

import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
        <div className="relative max-w-2xl mx-auto mb-10 group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400 group-focus-within:text-[#6366F1] transition-colors" />
            </div>
            <input
                type="text"
                placeholder="Search for help, features, or common questions…"
                onChange={(e) => onSearch(e.target.value)}
                className="w-full bg-[#181B23] border border-white/5 text-white text-base rounded-[20px] py-4 pl-12 pr-4 shadow-lg shadow-black/20 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1]/50 transition-all placeholder:text-gray-500"
            />
        </div>
    );
}
