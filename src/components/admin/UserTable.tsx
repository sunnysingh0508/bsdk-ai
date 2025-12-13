"use client";

import React from 'react';
import { MoreVertical, CheckCircle, XCircle, Shield, Trash2, Ban } from 'lucide-react';
import { cn } from '@/lib/utils';

const MOCK_USERS = [
    { id: "USR001", name: "Sunny Singh", email: "sunny@example.com", college: "IIT Bombay", status: "Active", role: "Admin", lastActive: "Just now" },
    { id: "USR002", name: "Rahul Sharma", email: "rahul@example.com", college: "VIT Vellore", status: "Active", role: "User", lastActive: "2h ago" },
    { id: "USR003", name: "Priya Patel", email: "priya@example.com", college: "BITS Pilani", status: "Blocked", role: "User", lastActive: "5d ago" },
    { id: "USR004", name: "Amit Kumar", email: "amit@example.com", college: "SRM Univ", status: "Active", role: "User", lastActive: "1d ago" },
    { id: "USR005", name: "Neha Gupta", email: "neha@example.com", college: "Manipal", status: "Active", role: "User", lastActive: "3h ago" },
];

export default function UserTable() {
    return (
        <div className="bg-[#181B23] rounded-[24px] border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">All Users</h3>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white/5 rounded-xl text-sm text-white border border-white/5 hover:bg-white/10 transition-colors">
                        Filter
                    </button>
                    <button className="px-4 py-2 bg-[#6366F1] rounded-xl text-sm text-white font-bold hover:bg-[#5558e6] transition-colors shadow-lg shadow-[#6366F1]/20">
                        Add User
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-[#0E1017]/50 text-xs text-gray-500 uppercase tracking-wider">
                            <th className="p-4 pl-6 font-medium">User Details</th>
                            <th className="p-4 font-medium">College</th>
                            <th className="p-4 font-medium">Role</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium">Last Active</th>
                            <th className="p-4 pr-6 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {MOCK_USERS.map((user) => (
                            <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4 pl-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold text-white">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-300">{user.college}</td>
                                <td className="p-4">
                                    <span className={cn(
                                        "flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full text-xs font-medium border",
                                        user.role === "Admin"
                                            ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                            : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                                    )}>
                                        {user.role === "Admin" && <Shield className="w-3 h-3" />}
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className={cn(
                                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                                        user.status === "Active"
                                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                                            : "bg-red-500/10 text-red-400 border-red-500/20"
                                    )}>
                                        {user.status === "Active" ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-gray-500">{user.lastActive}</td>
                                <td className="p-4 pr-6 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button title="Suspend" className="p-2 text-gray-500 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                        <button title="Delete" className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
