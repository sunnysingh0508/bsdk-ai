import { Sidebar } from "@/components/dashboard/layout/Sidebar";
import { Navbar } from "@/components/dashboard/layout/Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-[#F7F8FC] dark:bg-zinc-950">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
