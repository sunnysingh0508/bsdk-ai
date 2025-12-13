import React from 'react';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Mock Data
const RECENT_SCANS = [
    { id: 1, title: 'Linear Algebra Ch 4', subject: 'Math', date: '2 hours ago', thumbnail: 'bg-indigo-500/20' },
    { id: 2, title: 'Physics Formulas', subject: 'Physics', date: 'Yesterday', thumbnail: 'bg-purple-500/20' },
    { id: 3, title: 'History Notes', subject: 'History', date: '3 days ago', thumbnail: 'bg-orange-500/20' },
];

export default function RecentScans() {
    return (
        <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold font-heading text-white">Recent Scans</h2>
                <Link href="#" className="text-sm text-[#6366F1] hover:underline flex items-center gap-1">
                    View All <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {RECENT_SCANS.map((scan) => (
                    <div key={scan.id} className="group bg-[#181B23] p-4 rounded-[20px] border border-white/5 hover:border-white/10 transition-all cursor-pointer hover:-translate-y-1">
                        <div className={cn("h-32 rounded-xl mb-4 flex items-center justify-center", scan.thumbnail)}>
                            <FileText className="w-10 h-10 text-white/50" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1 group-hover:text-[#6366F1] transition-colors">{scan.title}</h3>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">{scan.subject}</span>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {scan.date}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
