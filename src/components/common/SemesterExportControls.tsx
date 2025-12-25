"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

interface SemesterExportControlsProps {
    onSemesterChange?: (value: string) => void;
    onExport?: () => void;
    isExporting?: boolean;
    className?: string;
}

export function SemesterExportControls({
    onSemesterChange,
    onExport,
    isExporting = false,
    className = "",
}: SemesterExportControlsProps) {
    const [semester, setSemester] = useState("this-semester");
    const [showCustomRange, setShowCustomRange] = useState(false);
    const [dateRange, setDateRange] = useState({ start: "", end: "" });

    const handleSemesterChange = (value: string) => {
        setSemester(value);
        if (value === "custom-range") {
            setShowCustomRange(true);
        } else {
            if (onSemesterChange) {
                onSemesterChange(value);
            }
        }
    };

    const handleApplyCustomRange = () => {
        setShowCustomRange(false);
        if (onSemesterChange) {
            onSemesterChange("custom-range");
        }
    };

    return (
        <div className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end ${className}`}>
            {/* Control Bar Container */}
            <div className="flex flex-col gap-3 rounded-[16px] bg-[#141821] p-2 shadow-sm border border-white/5 sm:flex-row sm:items-center">

                {/* Semester Dropdown */}
                <div className="w-full sm:w-[180px]">
                    <Select value={semester} onValueChange={handleSemesterChange}>
                        <SelectTrigger className="h-10 rounded-full border-white/5 bg-[#0E1017] px-4 text-sm text-white hover:bg-white/5 hover:border-white/10 focus:ring-indigo-500/50 transition-all duration-200">
                            <span className="truncate">
                                {semester === "this-semester" && "This Semester"}
                                {semester === "last-semester" && "Last Semester"}
                                {semester === "custom-range" && (
                                    dateRange.start && dateRange.end
                                        ? `${new Date(dateRange.start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date(dateRange.end).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
                                        : "Custom Range"
                                )}
                            </span>
                        </SelectTrigger>
                        <SelectContent className="border-white/10 bg-[#141821] text-white rounded-xl">
                            <SelectItem value="this-semester" className="focus:bg-indigo-500/20 focus:text-indigo-300">This Semester</SelectItem>
                            <SelectItem value="last-semester" className="focus:bg-indigo-500/20 focus:text-indigo-300">Last Semester</SelectItem>
                            <SelectItem value="custom-range" className="focus:bg-indigo-500/20 focus:text-indigo-300">Custom Range</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Divider (Desktop only) */}
                <div className="hidden h-6 w-px bg-white/10 sm:block" />

                {/* Export Button */}
                <Button
                    onClick={onExport}
                    disabled={isExporting}
                    className="h-10 rounded-full bg-[#6366F1] px-6 font-medium text-white shadow-lg shadow-indigo-500/20 hover:bg-[#5558DD] hover:scale-[1.02] hover:shadow-indigo-500/30 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 transition-all duration-200"
                >
                    {isExporting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Exporting...
                        </>
                    ) : (
                        <>
                            <Download className="mr-2 h-4 w-4" />
                            Export Report
                        </>
                    )}
                </Button>
            </div>

            {/* Custom Range Modal */}
            {showCustomRange && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="w-full max-w-sm rounded-[20px] border border-white/10 bg-[#141821] p-6 shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-white">Select Custom Range</h3>
                            <p className="text-sm text-gray-400">Choose a date range for your report.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Start Date</label>
                                <input
                                    type="date"
                                    value={dateRange.start}
                                    onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                                    className="w-full rounded-xl border border-white/10 bg-[#0E1017] p-3 text-sm text-white placeholder-gray-500 outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">End Date</label>
                                <input
                                    type="date"
                                    value={dateRange.end}
                                    onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                                    className="w-full rounded-xl border border-white/10 bg-[#0E1017] p-3 text-sm text-white placeholder-gray-500 outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <Button
                                variant="ghost"
                                onClick={() => setShowCustomRange(false)}
                                className="flex-1 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleApplyCustomRange}
                                className="flex-1 rounded-xl bg-[#6366F1] hover:bg-[#5558DD] text-white shadow-lg shadow-indigo-500/20"
                            >
                                Apply Range
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
