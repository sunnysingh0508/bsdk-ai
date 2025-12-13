"use client";

import React from 'react';
import { Mail, MessageSquare, Bug, ExternalLink } from 'lucide-react';

export default function ContactSupport() {
    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 h-full">
            <h2 className="text-lg font-bold text-white mb-6">Contact Support</h2>

            <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#0E1017] rounded-[20px] border border-white/5 group hover:border-[#6366F1]/30 transition-colors cursor-pointer">
                    <div className="p-2.5 bg-[#6366F1]/10 rounded-xl">
                        <Mail className="w-5 h-5 text-[#6366F1]" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white mb-0.5">Email Support</h3>
                        <p className="text-xs text-gray-400 mb-2">support@bsdk.ai</p>
                        <div className="text-[10px] text-[#6366F1] bg-[#6366F1]/10 px-2 py-0.5 rounded-full inline-block font-medium">
                            Response in 24h
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0E1017] rounded-[20px] border border-white/5 opacity-70">
                    <div className="p-2.5 bg-[#3EF084]/10 rounded-xl">
                        <MessageSquare className="w-5 h-5 text-[#3EF084]" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white mb-0.5">Live Chat</h3>
                        <p className="text-xs text-gray-500">Available Mon-Fri</p>
                        <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full inline-block mt-2">
                            Coming Soon
                        </span>
                    </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5 mt-2">
                    <Bug className="w-4 h-4 text-gray-400" />
                    Report a Bug
                </button>
            </div>
        </div>
    );
}
