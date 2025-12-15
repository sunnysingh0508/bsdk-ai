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
        <div className="bg-card rounded-[24px] p-6 border border-border h-full">
            <h2 className="text-lg font-bold text-foreground mb-2">Feedback & Suggestions</h2>
            <p className="text-xs text-muted-foreground mb-6">Help us improve BSDK AI. We listen to every idea.</p>

            {submitted ? (
                <div className="flex flex-col items-center justify-center h-[200px] text-center animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-[#3EF084]/20 flex items-center justify-center mb-3">
                        <Send className="w-6 h-6 text-[#3EF084]" />
                    </div>
                    <h3 className="text-foreground font-bold">Feedback Sent!</h3>
                    <p className="text-sm text-muted-foreground mt-1">Thanks for helping us grow.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-xs text-muted-foreground font-medium ml-1">Subject</label>
                        <input
                            type="text"
                            placeholder="e.g. Feature Request"
                            className="w-full mt-1 bg-background border border-input rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-muted-foreground"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs text-muted-foreground font-medium ml-1">Message</label>
                        <textarea
                            placeholder="Tell us what's on your mind..."
                            rows={4}
                            className="w-full mt-1 bg-background border border-input rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-muted-foreground resize-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Send Feedback
                    </button>
                </form>
            )}
        </div>
    );
}
