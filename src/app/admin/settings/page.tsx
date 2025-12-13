"use client";

import React from 'react';
import SystemSettings from '@/components/admin/SystemSettings';
import RoleManager from '@/components/admin/RoleManager';
import AuditLogs from '@/components/admin/AuditLogs';

export default function SettingsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-white font-heading">System Settings</h1>
                <p className="text-gray-400 mt-1">Configure platform rules, roles, and security.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <SystemSettings />
                    <AuditLogs />
                </div>
                <div className="space-y-8">
                    <RoleManager />
                </div>
            </div>
        </div>
    );
}
