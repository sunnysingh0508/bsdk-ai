"use client";

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function FeedbackForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 h-full">
            <h2 className="text-lg font-bold text-white mb-2">Feedback & Suggestions</h2>
            <p className="text-xs text-gray-400 mb-6">Help us improve BSDK AI. We listen to every idea.</p>

            {submitted ? (
                <div className="flex flex-col items-center justify-center h-[200px] text-center animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-[#3EF084]/20 flex items-center justify-center mb-3">
                        <Send className="w-6 h-6 text-[#3EF084]" />
                    </div>
                    <h3 className="text-white font-bold">Feedback Sent!</h3>
                    <p className="text-sm text-gray-500 mt-1">Thanks for helping us grow.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-xs text-gray-500 font-medium ml-1">Subject</label>
                        <input
                            type="text"
                            placeholder="e.g. Feature Request"
                            className="w-full mt-1 bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7] placeholder:text-gray-600"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 font-medium ml-1">Message</label>
                        <textarea
                            placeholder="Tell us what's on your mind..."
                            rows={4}
                            className="w-full mt-1 bg-[#0E1017] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7] placeholder:text-gray-600 resize-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#A855F7] hover:bg-[#9333EA] text-white text-sm font-bold shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Send Feedback
                    </button>
                </form>
            )}
        </div>
    );
}
