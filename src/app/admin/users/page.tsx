"use client";

import React from 'react';
import UserTable from '@/components/admin/UserTable';

export default function UserManagementPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-white font-heading">User Management</h1>
                <p className="text-gray-400 mt-1">Manage user access, roles, and status.</p>
            </div>

            <UserTable />
        </div>
    );
}
