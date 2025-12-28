"use client";

import React, { useState, useRef } from 'react';
import { Camera, MapPin, GraduationCap } from 'lucide-react';

export default function ProfileHeader() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setProfileImage(result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="relative rounded-[24px] overflow-hidden bg-[#181B23] border border-white/5 mb-6 group">
            {/* Background Gradient Strip */}
            <div className="h-32 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20" />

            <div className="px-8 pb-8 flex flex-col md:flex-row items-start md:items-end gap-6 -mt-12">
                {/* Avatar */}
                <div className="relative group/avatar cursor-pointer">
                    <div className="w-32 h-32 rounded-full border-4 border-[#181B23] bg-indigo-100 flex items-center justify-center text-4xl font-bold text-[#6366F1] shadow-2xl overflow-hidden relative">
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            "S"
                        )}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity border-4 border-[#181B23]">
                        <Camera className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 pb-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-1">Sunny Singh</h1>
                            <p className="text-gray-400 mb-4">sunny@bsdk.ai</p>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center gap-1.5 text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                                    <GraduationCap className="w-4 h-4 text-[#6366F1]" />
                                    <span>B.Tech CSE</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                                    <MapPin className="w-4 h-4 text-[#A855F7]" />
                                    <span>Delhi Technological University</span>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] font-medium border border-[#6366F1]/20">
                                    Semester 6
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                accept="image/*"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5"
                            >
                                Change Photo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
