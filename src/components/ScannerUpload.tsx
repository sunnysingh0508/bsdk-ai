import React, { useRef, useState } from 'react';
import { Camera, Upload, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScannerUploadProps {
    onFileSelect: (file: File) => void;
}

export default function ScannerUpload({ onFileSelect }: ScannerUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndUpload(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            validateAndUpload(e.target.files[0]);
        }
    };

    const validateAndUpload = (file: File) => {
        // Basic validation
        if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
            alert('Please upload an image or PDF file.');
            return;
        }
        onFileSelect(file);
    };

    return (
        <div
            className={cn(
                "border-2 border-dashed rounded-[24px] p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer h-96 group",
                isDragging ? "border-[#6366F1] bg-[#6366F1]/5" : "border-white/10 bg-[#181B23] hover:border-white/20 hover:bg-[#181B23]/80"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
                accept="image/*,application/pdf"
            />

            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A855F7] flex items-center justify-center mb-6 shadow-xl shadow-[#6366F1]/20 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-xl font-bold font-heading text-white mb-2">
                Drop your notes here or click to upload
            </h3>
            <p className="text-gray-400 mb-8 max-w-sm">
                Support for JPG, PNG, and PDF. We&apos;ll auto-enhance your documents for better readability.
            </p>

            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/5">
                <Upload className="w-5 h-5" />
                <span>Select File</span>
            </button>
        </div>
    );
}
