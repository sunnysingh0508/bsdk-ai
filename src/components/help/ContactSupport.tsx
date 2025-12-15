"use client";

import React from 'react';
import { Mail, MessageSquare, Bug, ExternalLink } from 'lucide-react';

export default function ContactSupport() {
    return (
        <div className="bg-card rounded-[24px] p-6 border border-border h-full">
            <h2 className="text-lg font-bold text-foreground mb-6">Contact Support</h2>

            <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-[20px] border border-border group hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="p-2.5 bg-primary/10 rounded-xl">
                        <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-foreground mb-0.5">Email Support</h3>
                        <p className="text-xs text-muted-foreground mb-2">support@bsdk.ai</p>
                        <div className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full inline-block font-medium">
                            Response in 24h
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-[20px] border border-border opacity-70">
                    <div className="p-2.5 bg-[#3EF084]/10 rounded-xl">
                        <MessageSquare className="w-5 h-5 text-[#3EF084]" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-foreground mb-0.5">Live Chat</h3>
                        <p className="text-xs text-muted-foreground">Available Mon-Fri</p>
                        <span className="text-[10px] text-muted-foreground bg-muted/20 px-2 py-0.5 rounded-full inline-block mt-2">
                            Coming Soon
                        </span>
                    </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-muted/30 hover:bg-muted text-foreground text-sm font-medium transition-colors border border-border mt-2">
                    <Bug className="w-4 h-4 text-muted-foreground" />
                    Report a Bug
                </button>
            </div>
        </div>
    );
}
