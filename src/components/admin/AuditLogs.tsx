"use client";

import React from 'react';
import { Clock } from 'lucide-react';

export default function AuditLogs() {
    const logs = [
        { action: "Updated Global Settings", admin: "Sunny Singh", time: "2023-10-24 14:30", ip: "192.168.1.1" },
        { action: "Deleted User USR099", admin: "Sunny Singh", time: "2023-10-24 12:15", ip: "192.168.1.1" },
        { action: "Exported Full Report", admin: "System", time: "2023-10-24 09:00", ip: "127.0.0.1" },
        { action: "Role Changed: Mod -> Admin", admin: "Sunny Singh", time: "2023-10-23 18:45", ip: "192.168.1.1" },
    ];

    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 p-6">
            <h3 className="text-lg font-bold text-white mb-6">Admin Logs</h3>
            <div className="space-y-4">
                {logs.map((log, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#0E1017] border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-start gap-4 mb-2 sm:mb-0">
                            <div className="p-2 rounded-lg bg-white/5 text-gray-400 mt-1">
                                <Clock className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">{log.action}</p>
                                <p className="text-xs text-gray-500">by <span className="text-[#6366F1]">{log.admin}</span> • {log.ip}</p>
                            </div>
                        </div>
                        <div className="text-xs font-mono text-gray-600 bg-white/5 px-2 py-1 rounded ml-12 sm:ml-0 w-fit">
                            {log.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
