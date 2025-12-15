import React from 'react';
import { Search, Filter, SortAsc, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AssignmentFiltersProps {
    onSearch: (query: string) => void;
    onFilterChange: (filter: string) => void;
    onSortChange: (sort: string) => void;
    onAddClick: () => void;
    currentFilter: string;
    currentSort: string;
}

export default function AssignmentFilters({
    onSearch,
    onFilterChange,
    onSortChange,
    onAddClick,
    currentFilter,
    currentSort
}: AssignmentFiltersProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search assignments..."
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full bg-card border border-input rounded-xl pl-12 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                {/* Filter Dropdown (Simulated with Select for simplicity) */}
                <div className="relative min-w-[140px]">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select
                        value={currentFilter}
                        onChange={(e) => onFilterChange(e.target.value)}
                        className="w-full bg-card border border-input rounded-xl pl-10 pr-8 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    >
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Overdue">Overdue</option>
                    </select>
                    {/* Custom Arrow because appearance-none removes it */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>

                {/* Sort Dropdown */}
                <div className="relative min-w-[140px]">
                    <SortAsc className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select
                        value={currentSort}
                        onChange={(e) => onSortChange(e.target.value)}
                        className="w-full bg-card border border-input rounded-xl pl-10 pr-8 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    >
                        <option value="DueDate">Due Date</option>
                        <option value="Priority">Priority</option>
                        <option value="Subject">Subject</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>

                {/* Add Button */}
                <button
                    onClick={onAddClick}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#818cf8] hover:from-[#5558e6] hover:to-[#6f7af2] text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-[#6366F1]/20 whitespace-nowrap"
                >
                    <Plus className="w-5 h-5" />
                    Add Assignment
                </button>
            </div>
        </div>
    );
}
