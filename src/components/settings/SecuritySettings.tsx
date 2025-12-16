"use client";

import React, { useState } from 'react';
import { Shield, Key, Smartphone, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SecuritySettings() {
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-[#6366F1]" />
                <h2 className="text-lg font-bold text-white">Privacy & Security</h2>
            </div>

            {/* Password & 2FA */}
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#0E1017] rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg">
                            <Key className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Password</p>
                            <p className="text-xs text-gray-500">Last changed 3 months ago</p>
                        </div>
                    </div>
                    <button className="text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors">
                        Change
                    </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#0E1017] rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg">
                            <Smartphone className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Two-Factor Auth</p>
                            <p className="text-xs text-gray-500">Add an extra layer of security</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setTwoFactor(!twoFactor)}
                        className={cn(
                            "w-11 h-6 rounded-full transition-colors relative",
                            twoFactor ? "bg-[#3EF084]" : "bg-white/10"
                        )}
                    >
                        <div className={cn(
                            "w-4 h-4 rounded-full bg-white absolute top-1 transition-all",
                            twoFactor ? "left-6" : "left-1"
                        )} />
                    </button>
                </div>
            </div>

            {/* Sessions */}
            <div>
                <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Active Sessions</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <LaptopIcon />
                        <div>
                            <p className="text-sm font-medium text-white">Windows PC - Chrome</p>
                            <p className="text-xs text-[#3EF084]">Active now • New Delhi, IN</p>
                        </div>
                    </div>
                    <button className="text-xs text-gray-500 hover:text-white">
                        Log out
                    </button>
                </div>
            </div>

            <div className="pt-2">
                <button className="w-full py-2.5 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                    <LogOut className="w-4 h-4" />
                    Log out of all devices
                </button>
            </div>
        </div>
    );
}

function LaptopIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /></svg>
    )
}
