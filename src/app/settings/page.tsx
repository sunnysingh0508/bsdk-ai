import React from 'react';
import { Settings } from 'lucide-react';

import ProfileSettings from '@/components/settings/ProfileSettings';
import AppearanceSettings from '@/components/settings/AppearanceSettings';
import NotificationSettings from '@/components/settings/NotificationSettings';
import AcademicSettings from '@/components/settings/AcademicSettings';
import SecuritySettings from '@/components/settings/SecuritySettings';
import DataSettings from '@/components/settings/DataSettings';
import DangerZone from '@/components/settings/DangerZone';

export default function SettingsPage() {
    return (
        <main className="min-h-screen bg-[#0E1017] p-4 md:p-8 font-sans pb-20">
            <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-[#6366F1]/10 rounded-lg">
                        <Settings className="w-8 h-8 text-[#6366F1]" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold font-heading text-white">Settings</h1>
                        <p className="text-gray-400">Manage your account preferences, appearance, notifications, and security.</p>
                    </div>
                </div>

                <ProfileSettings />
                <AppearanceSettings />
                <NotificationSettings />
                <AcademicSettings />
                <SecuritySettings />
                <DataSettings />
                <DangerZone />

                <div className="text-center text-xs text-gray-600 pt-8 pb-4">
                    BSDK AI v1.0.0 • Build 2025.12.13
                </div>

            </div>
        </main>
    );
}
