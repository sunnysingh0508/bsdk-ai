import React from 'react';
import { Sun, Contrast, Zap, Eye, Sliders } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnhancementToolsProps {
    filters: {
        brightness: number;
        contrast: number;
        grayscale: number;
        blur: number;
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        brightness: number;
        contrast: number;
        grayscale: number;
        blur: number;
    }>>;
}

export default function EnhancementTools({ filters, setFilters }: EnhancementToolsProps) {

    const handleEnhance = () => {
        // Auto enhance simulation
        setFilters({
            brightness: 110,
            contrast: 120,
            grayscale: 0,
            blur: 0
        });
    };

    const handleToggleBW = () => {
        setFilters(prev => ({ ...prev, grayscale: prev.grayscale === 100 ? 0 : 100 }));
    };

    const handleChange = (key: keyof typeof filters, value: number) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 space-y-6">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold flex items-center gap-2 text-white">
                    <Sliders className="w-4 h-4 text-[#6366F1]" />
                    Enhancements
                </h3>
                <button
                    onClick={handleEnhance}
                    className="text-xs font-medium text-[#6366F1] bg-[#6366F1]/10 px-3 py-1.5 rounded-full hover:bg-[#6366F1]/20 transition-colors flex items-center gap-1"
                >
                    <Zap className="w-3 h-3" /> Auto Enhance
                </button>
            </div>

            {/* Sliders */}
            <div className="space-y-5">

                {/* Brightness */}
                <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span className="flex items-center gap-1"><Sun className="w-3 h-3" /> Brightness</span>
                        <span>{filters.brightness}%</span>
                    </div>
                    <input
                        type="range"
                        min="50"
                        max="150"
                        value={filters.brightness}
                        onChange={(e) => handleChange('brightness', Number(e.target.value))}
                        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#6366F1]"
                    />
                </div>

                {/* Contrast */}
                <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span className="flex items-center gap-1"><Contrast className="w-3 h-3" /> Contrast</span>
                        <span>{filters.contrast}%</span>
                    </div>
                    <input
                        type="range"
                        min="50"
                        max="150"
                        value={filters.contrast}
                        onChange={(e) => handleChange('contrast', Number(e.target.value))}
                        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#6366F1]"
                    />
                </div>
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                    onClick={handleToggleBW}
                    className={cn("flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all",
                        filters.grayscale === 100
                            ? "bg-[#6366F1]/10 border-[#6366F1] text-[#6366F1]"
                            : "bg-[#0E1017] border-white/5 text-gray-400 hover:border-white/10"
                    )}
                >
                    <Eye className="w-5 h-5" />
                    <span className="text-xs font-medium">B&W Mode</span>
                </button>

                <button
                    className={cn("flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all bg-[#0E1017] border-white/5 text-gray-400 hover:border-white/10 opacity-50 cursor-not-allowed")}
                    title="Coming soon"
                >
                    <Zap className="w-5 h-5" />
                    <span className="text-xs font-medium">Remove Shadows</span>
                </button>
            </div>
        </div>
    );
}
