"use client";

import React, { useState } from 'react';
import { Shield, Key, Smartphone, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SecuritySettings() {
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <div className="bg-card rounded-[24px] p-6 border border-border space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">Privacy & Security</h2>
            </div>

            {/* Password & 2FA */}
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-muted/50 rounded-lg">
                            <Key className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Password</p>
                            <p className="text-xs text-muted-foreground">Last changed 3 months ago</p>
                        </div>
                    </div>
                    <button className="text-xs font-medium text-foreground bg-muted px-3 py-1.5 rounded-lg hover:bg-muted/80 transition-colors">
                        Change
                    </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-muted/50 rounded-lg">
                            <Smartphone className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Two-Factor Auth</p>
                            <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setTwoFactor(!twoFactor)}
                        className={cn(
                            "w-11 h-6 rounded-full transition-colors relative",
                            twoFactor ? "bg-[#3EF084]" : "bg-muted"
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
                <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Active Sessions</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <LaptopIcon />
                        <div>
                            <p className="text-sm font-medium text-foreground">Windows PC - Chrome</p>
                            <p className="text-xs text-[#3EF084]">Active now • New Delhi, IN</p>
                        </div>
                    </div>
                    <button className="text-xs text-muted-foreground hover:text-foreground">
                        Log out
                    </button>
                </div>
            </div>

            <div className="pt-2">
                <button className="w-full py-2.5 rounded-xl border border-white/10 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                    <LogOut className="w-4 h-4" />
                    Log out of all devices
                </button>
            </div>
        </div>
    );
}

function LaptopIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /></svg>
    )
}
