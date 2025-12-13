"use client";

import React, { useState } from 'react';
import { Camera, User } from 'lucide-react';

export default function ProfileSettings() {
    const [name, setName] = useState("Sunny Singh");
    const [college] = useState("Delhi Technological University");
    const [semester, setSemester] = useState("6");

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <User className="w-5 h-5 text-[#6366F1]" />
                <h2 className="text-lg font-bold text-white">Profile Settings</h2>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative group cursor-pointer">
                    <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-[#6366F1] text-2xl font-bold border-2 border-transparent group-hover:border-[#6366F1] transition-all">
                        {name.charAt(0)}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div>
                    <button className="text-sm font-medium text-[#6366F1] hover:text-[#5558e6] hover:underline mb-1">
                        Change Photo
                    </button>
                    <p className="text-xs text-gray-500">
                        JPG, GIF or PNG. Max size of 800K
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                    />
                </div>
                <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address</label>
                    <input
                        type="email"
                        value="sunny@bsdk.ai"
                        readOnly
                        className="w-full bg-[#0E1017]/50 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-500 cursor-not-allowed"
                    />
                </div>
                <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">College / University</label>
                    <input
                        type="text"
                        value={college}
                        readOnly
                        className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                    />
                </div>
                <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Semester</label>
                    <select
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                            <option key={sem} value={sem}>Semester {sem}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex justify-end pt-2">
                <button className="px-6 py-2.5 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] text-white text-sm font-bold shadow-lg shadow-[#6366F1]/20 transition-all">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
