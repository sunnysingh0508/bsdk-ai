import React from 'react';
import { FolderOpen } from 'lucide-react';

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center animate-in fade-in duration-500">
            <div className="w-20 h-20 rounded-[24px] bg-[#181B23] border border-white/5 flex items-center justify-center mb-6 shadow-xl shadow-black/20">
                <FolderOpen className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No notes found</h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-6">
                We couldn't find any notes matching your search. Scan or upload your first note to get started.
            </p>
            <button className="px-6 py-2.5 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] text-white font-medium transition-all shadow-lg shadow-[#6366F1]/20">
                Upload Note
            </button>
        </div>
    );
}
