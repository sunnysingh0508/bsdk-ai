"use client";

import React, { useState, useRef } from 'react';
import { Camera, Save, Download, ArrowLeft } from 'lucide-react';
import ScannerUpload from '@/components/ScannerUpload';
import ImagePreview from '@/components/ImagePreview';
import EnhancementTools from '@/components/EnhancementTools';
import ExportOptions from '@/components/ExportOptions';
import RecentScans from '@/components/RecentScans';

export default function NotesScannerPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filters, setFilters] = useState({
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        blur: 0
    });

    const handleFileSelect = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                setSelectedImage(e.target.result as string);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleBack = () => {
        setSelectedImage(null);
        setFilters({ brightness: 100, contrast: 100, grayscale: 0, blur: 0 });
    };

    const handleSave = () => {
        alert("Notes saved to library! (Simulation)");
        handleBack();
    };

    return (
        <main className="min-h-screen bg-[#0E1017] p-4 md:p-8 font-sans pb-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    {selectedImage && (
                        <button onClick={handleBack} className="p-2 -ml-2 hover:bg-white/10 rounded-full text-white transition-colors">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    )}
                    <h1 className="text-3xl font-bold font-heading text-white">Notes Scanner</h1>
                    {!selectedImage && (
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="p-2 bg-[#6366F1]/10 rounded-lg hover:bg-[#6366F1]/20 transition-colors"
                        >
                            <Camera className="w-6 h-6 text-[#6366F1]" />
                        </button>
                    )}
                </div>

                {/* Hidden File Input for Header Button */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            handleFileSelect(e.target.files[0]);
                        }
                    }}
                    className="hidden"
                    accept="image/*,application/pdf"
                />
                <p className="text-gray-400 mb-8 max-w-2xl">
                    {selectedImage
                        ? "Enhance your scan to ensure maximum readability before saving."
                        : "Scan handwritten or printed notes and convert them into clean, readable digital documents."
                    }
                </p>

                {!selectedImage ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <ScannerUpload onFileSelect={handleFileSelect} />
                        <RecentScans />
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in zoom-in duration-300">
                        {/* Left: Preview (2 Cols) */}
                        <div className="lg:col-span-2 space-y-6">
                            <ImagePreview imageSrc={selectedImage} filters={filters} />

                            {/* Save Action for Mobile (Hidden on Desktop usually, but good to have) */}
                            {/* Let's keep actions in the right panel for consistency, or sticky bottom */}
                        </div>

                        {/* Right: Tools (1 Col) */}
                        <div className="space-y-6">
                            <EnhancementTools filters={filters} setFilters={setFilters} />
                            <ExportOptions />

                            {/* Final Actions */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#181B23] border border-white/10 text-white hover:bg-white/5 font-medium transition-colors">
                                    <Download className="w-5 h-5" />
                                    Download
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-bold shadow-lg shadow-[#6366F1]/20 hover:shadow-[#6366F1]/40 transition-all"
                                >
                                    <Save className="w-5 h-5" />
                                    Save Notes
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}
