import React from 'react';
import { RotateCw, RotateCcw, Crop, ZoomIn, ZoomOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImagePreviewProps {
    imageSrc: string;
    filters: {
        brightness: number;
        contrast: number;
        grayscale: number;
        blur: number; // for remove shadows simulation? or sharpness (negative blur not possible in CSS, but check alternatives)
    };
}

export default function ImagePreview({ imageSrc, filters }: ImagePreviewProps) {
    return (
        <div className="flex-1 bg-[#0E1017] rounded-[24px] overflow-hidden border border-white/5 relative flex flex-col h-[500px] md:h-auto">
            {/* Toolbar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-[#181B23]/90 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Zoom Out">
                    <ZoomOut className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Zoom In">
                    <ZoomIn className="w-4 h-4" />
                </button>
                <div className="w-px h-4 bg-white/10 self-center mx-1"></div>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Rotate Left">
                    <RotateCcw className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Rotate Right">
                    <RotateCw className="w-4 h-4" />
                </button>
                <div className="w-px h-4 bg-white/10 self-center mx-1"></div>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Crop">
                    <Crop className="w-4 h-4" />
                </button>
            </div>

            {/* Image Area */}
            <div className="flex-1 flex items-center justify-center p-8 bg-[url('/grid-pattern.svg')] bg-[length:20px_20px]">
                {/* Placeholder for grid pattern if missing. Usually just dark bg is fine. */}
                <div className="relative shadow-2xl shadow-black/50 max-h-full max-w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imageSrc}
                        alt="Preview"
                        className="max-h-full max-w-full object-contain rounded-sm transition-all duration-300"
                        style={{
                            filter: `brightness(${filters.brightness}%) contrast(${filters.contrast}%) grayscale(${filters.grayscale}%) blur(${filters.blur}px)`
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
