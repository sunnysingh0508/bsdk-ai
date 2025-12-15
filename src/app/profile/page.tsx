"use client";

import React from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileInfo from '@/components/profile/ProfileInfo';
import AcademicOverview from '@/components/profile/AcademicOverview';
import ActivityTimeline from '@/components/profile/ActivityTimeline';
import SecuritySummary from '@/components/profile/SecuritySummary';
import { LogOut, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-background p-4 md:p-8 font-sans pb-20">
            <div className="max-w-4xl mx-auto animate-in fade-in duration-500">

                <ProfileHeader />

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    <ProfileInfo />
                    <div className="space-y-6">
                        <AcademicOverview />
                        <ActivityTimeline />
                    </div>
                </div>

                <div className="space-y-6">
                    <SecuritySummary />

                    {/* Actions */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-[24px] border border-border">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-sm font-medium">
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                            <Link href="/settings" className="px-4 py-2 rounded-xl text-primary hover:text-primary/90 hover:bg-primary/10 transition-colors text-sm font-medium">
                                View Settings
                            </Link>
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-destructive hover:bg-destructive/10 transition-colors text-sm font-medium">
                            <Trash2 className="w-4 h-4" />
                            Delete Account
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}
