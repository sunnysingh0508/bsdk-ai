import React from 'react';
import { Database, Download, Trash2, Cloud } from 'lucide-react';

export default function DataSettings() {
    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-[#3B82F6]" />
                <h2 className="text-lg font-bold text-white">Data & Backup</h2>
            </div>

            <div className="space-y-4">
                {/* Auto Backup */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#3B82F6]/10 rounded-lg">
                            <Cloud className="w-5 h-5 text-[#3B82F6]" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Auto-backup</p>
                            <p className="text-xs text-gray-500">Backing up daily at 2:00 AM</p>
                        </div>
                    </div>
                    <button className="text-xs text-[#3B82F6] font-medium hover:underline">
                        Configure
                    </button>
                </div>

                {/* Export */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg">
                            <Download className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Export Data</p>
                            <p className="text-xs text-gray-500">Download all your data in CSV format</p>
                        </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors">
                        Export
                    </button>
                </div>

                {/* Clear Cache */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg">
                            <Trash2 className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Clear Cache</p>
                            <p className="text-xs text-gray-500">Free up local storage space</p>
                        </div>
                    </div>
                    <button className="text-xs text-red-400 font-medium hover:text-red-300">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
