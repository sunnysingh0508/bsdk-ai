"use client";

import React from 'react';
import { Camera, MapPin, GraduationCap } from 'lucide-react';

export default function ProfileHeader() {
    return (
        <div className="relative rounded-[24px] overflow-hidden bg-card border border-border mb-6 group">
            {/* Background Gradient Strip */}
            <div className="h-32 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20" />

            <div className="px-8 pb-8 flex flex-col md:flex-row items-start md:items-end gap-6 -mt-12">
                {/* Avatar */}
                <div className="relative group/avatar cursor-pointer">
                    <div className="w-32 h-32 rounded-full border-4 border-card bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary shadow-2xl">
                        S
                    </div>
                    <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity border-4 border-card">
                        <Camera className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 pb-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground mb-1">Sunny Singh</h1>
                            <p className="text-muted-foreground mb-4">sunny@bsdk.ai</p>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                    <GraduationCap className="w-4 h-4 text-primary" />
                                    <span>B.Tech CSE</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                    <MapPin className="w-4 h-4 text-purple-500" />
                                    <span>Delhi Technological University</span>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                                    Semester 6
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted text-foreground text-sm font-medium transition-colors border border-border">
                                Change Photo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
