import React from 'react';
import AdminSidebar from '@/components/admin/Sidebar';
import AdminNavbar from '@/components/admin/Navbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#0E1017] font-sans">
            <AdminSidebar />
            <div className="flex-1 flex flex-col md:pl-64 transition-all duration-300">
                <AdminNavbar />
                <main className="flex-1 p-6 md:p-8 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
