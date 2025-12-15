"use client";

import React from 'react';
import { ShieldCheck, Key, Smartphone, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function SecuritySummary() {
    return (
        <div className="bg-card rounded-[24px] p-6 border border-border border-l-4 border-l-[#3EF084]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#3EF084]/10 rounded-2xl">
                        <ShieldCheck className="w-6 h-6 text-[#3EF084]" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-foreground mb-1">Account Security</h2>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <Key className="w-4 h-4 text-gray-500" />
                                <span>Password: Changed 3mo ago</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Smartphone className="w-4 h-4 text-gray-500" />
                                <span>2FA: Enabled</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-[#3EF084]" />
                                <span>Active Sessions: 2</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/settings" className="px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted text-foreground text-sm font-medium transition-colors border border-border whitespace-nowrap">
                        Manage Security
                    </Link>
                </div>
            </div>
        </div>
    );
}
