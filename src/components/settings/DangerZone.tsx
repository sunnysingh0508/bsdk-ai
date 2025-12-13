import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function DangerZone() {
    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-red-500/20 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />

            <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h2 className="text-lg font-bold text-white">Danger Zone</h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-sm font-bold text-white">Delete Account</h3>
                    <p className="text-xs text-gray-400 mt-1 max-w-sm">
                        Once you delete your account, there is no going back. Please be certain. All your data including grades, attendance, and notes will be permanently removed.
                    </p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 text-sm font-bold transition-all whitespace-nowrap">
                    Delete Account
                </button>
            </div>
        </div>
    );
}
