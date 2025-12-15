"use client";

import React, { useState } from 'react';
import { Camera, User } from 'lucide-react';

export default function ProfileSettings() {
    const [name, setName] = useState("Sunny Singh");
    const [college] = useState("Delhi Technological University");
    const [semester, setSemester] = useState("6");

    return (
        <div className="bg-card rounded-[24px] p-6 border border-border space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">Profile Settings</h2>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative group cursor-pointer">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold border-2 border-transparent group-hover:border-primary transition-all">
                        {name.charAt(0)}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div>
                    <button className="text-sm font-medium text-primary hover:text-primary/90 hover:underline mb-1">
                        Change Photo
                    </button>
                    <p className="text-xs text-muted-foreground">
                        JPG, GIF or PNG. Max size of 800K
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-background border border-input rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div>
                    <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Email Address</label>
                    <input
                        type="email"
                        value="sunny@bsdk.ai"
                        readOnly
                        className="w-full bg-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-muted-foreground cursor-not-allowed"
                    />
                </div>
                <div>
                    <label className="text-xs text-muted-foreground font-medium mb-1.5 block">College / University</label>
                    <input
                        type="text"
                        value={college}
                        readOnly
                        className="w-full bg-background border border-input rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div>
                    <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Semester</label>
                    <select
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        className="w-full bg-background border border-input rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                            <option key={sem} value={sem}>Semester {sem}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex justify-end pt-2">
                <button className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
