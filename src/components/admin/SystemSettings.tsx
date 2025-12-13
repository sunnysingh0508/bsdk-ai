"use client";

import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, AlertTriangle, Save } from 'lucide-react';

export default function SystemSettings() {
    const [settings, setSettings] = useState({
        maintenance: false,
        registrations: true,
        notifications: true,
        betaFeatures: false
    });

    return (
        <div className="space-y-6">

            {/* General Settings */}
            <div className="bg-[#181B23] rounded-[24px] border border-white/5 p-6">
                <h3 className="text-lg font-bold text-white mb-6">General Settings</h3>
                <div className="space-y-4">
                    {[
                        { id: 'registrations', label: 'Allow New Registrations', desc: 'Enable or disable new user signups.' },
                        { id: 'notifications', label: 'Global Notifications', desc: 'Send system-wide alerts to all users.' },
                        { id: 'betaFeatures', label: 'Enable Beta Features', desc: 'Show experimental features to users.' },
                    ].map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-[#0E1017] rounded-xl border border-white/5">
                            <div>
                                <p className="font-bold text-white">{item.label}</p>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                            <button
                                onClick={() => setSettings(p => ({ ...p, [item.id]: !p[item.id as keyof typeof settings] }))}
                                className={`text-2xl transition-colors ${settings[item.id as keyof typeof settings] ? 'text-[#6366F1]' : 'text-gray-600'}`}
                            >
                                {settings[item.id as keyof typeof settings] ? <ToggleRight className="w-10 h-10" /> : <ToggleLeft className="w-10 h-10" />}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-end">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] text-white font-bold transition-all shadow-lg shadow-[#6366F1]/20">
                        <Save className="w-4 h-4" />
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-[#181B23] rounded-[24px] border border-red-500/20 overflow-hidden">
                <div className="p-6 border-b border-red-500/10 bg-red-500/5">
                    <div className="flex items-center gap-2 text-red-500 mb-1">
                        <AlertTriangle className="w-5 h-5" />
                        <h3 className="text-lg font-bold">Danger Zone</h3>
                    </div>
                    <p className="text-sm text-red-400/70">Irreversible actions. Proceed with caution.</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between p-4 border border-red-500/10 rounded-xl hover:bg-red-500/5 transition-colors">
                        <div>
                            <p className="font-bold text-white">Maintenance Mode</p>
                            <p className="text-xs text-gray-500">Disable access for all non-admin users.</p>
                        </div>
                        <button className="px-4 py-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium">
                            Enable Maintenance
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-red-500/10 rounded-xl hover:bg-red-500/5 transition-colors">
                        <div>
                            <p className="font-bold text-white">Reset Platform Data</p>
                            <p className="text-xs text-gray-500">Clear all user generated content (Database wipe).</p>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors text-sm font-bold shadow-lg shadow-red-500/20">
                            Reset Data
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
