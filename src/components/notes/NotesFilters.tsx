"use client";

import React from 'react';
import { Search, LayoutGrid, List, Filter, ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ViewMode = 'grid' | 'list';
export type SortOption = 'newest' | 'oldest' | 'alphabetical';

interface NotesFiltersProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedSubject: string;
    setSelectedSubject: (subject: string) => void;
    sortBy: SortOption;
    setSortBy: (sort: SortOption) => void;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    subjects: string[];
}

export default function NotesFilters({
    searchQuery,
    setSearchQuery,
    selectedSubject,
    setSelectedSubject,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    subjects
}: NotesFiltersProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-xl group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search notes by title, subject, or tag…"
                    className="w-full bg-card border border-input text-foreground text-sm rounded-xl py-2.5 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground"
                />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0">
                {/* Subject Filter */}
                <div className="relative">
                    <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="appearance-none bg-card border border-input text-foreground text-sm rounded-xl py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[140px]"
                    >
                        <option value="All">All Subjects</option>
                        {subjects.map(sub => (
                            <option key={sub} value={sub}>{sub}</option>
                        ))}
                    </select>
                    <Filter className="w-3.5 h-3.5 text-muted-foreground absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Sort */}
                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="appearance-none bg-card border border-input text-foreground text-sm rounded-xl py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[140px]"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="alphabetical">Alphabetical</option>
                    </select>
                    <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* View Toggle */}
                <div className="flex p-1 bg-card border border-input rounded-xl">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={cn(
                            "p-2 rounded-lg transition-all",
                            viewMode === 'grid' ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                        )}
                        title="Grid View"
                    >
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={cn(
                            "p-2 rounded-lg transition-all",
                            viewMode === 'list' ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                        )}
                        title="List View"
                    >
                        <List className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
