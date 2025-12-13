import React from 'react';
import { BellOff } from 'lucide-react';

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 rounded-full bg-[#181B23] border border-white/5 flex items-center justify-center mb-4">
                <BellOff className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">You’re all caught up 🎉</h3>
            <p className="text-sm text-gray-500">No new notifications at the moment.</p>
        </div>
    );
}
