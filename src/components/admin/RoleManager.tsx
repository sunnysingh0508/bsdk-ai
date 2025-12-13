"use client";

import React from 'react';
import { Shield, Check } from 'lucide-react';

export default function RoleManager() {
    const permissions = [
        "Manage Users", "View Analytics", "Export Reports", "System Settings", "Content Moderation"
    ];

    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Roles & Permissions</h3>
                <button className="text-sm text-[#6366F1] hover:underline font-medium">
                    + Create Role
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-white/5 text-xs text-gray-500 uppercase tracking-wider">
                            <th className="p-4 font-medium">Permission</th>
                            <th className="p-4 font-medium text-center text-purple-400">Super Admin</th>
                            <th className="p-4 font-medium text-center text-indigo-400">Admin</th>
                            <th className="p-4 font-medium text-center text-gray-400">Moderator</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                        {permissions.map((perm, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-medium">{perm}</td>
                                <td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-[#3EF084]" /></td>
                                <td className="p-4 text-center">
                                    {i < 4 ? <Check className="w-4 h-4 mx-auto text-[#6366F1]" /> : <span className="w-1.5 h-1.5 rounded-full bg-gray-700 mx-auto block" />}
                                </td>
                                <td className="p-4 text-center">
                                    {i === 4 ? <Check className="w-4 h-4 mx-auto text-gray-400" /> : <span className="w-1.5 h-1.5 rounded-full bg-gray-700 mx-auto block" />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
