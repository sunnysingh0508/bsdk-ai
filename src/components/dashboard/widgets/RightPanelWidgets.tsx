"use client";

import { Bell, Calendar, Sparkles, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ConnectConsentModal } from "@/components/calendar/ConnectConsentModal";
import Link from "next/link";

export function ReminderWidget() {
    const reminders = [
        "DSA Assignment due tomorrow",
        "Attendance low for Physics",
        "Timetable updated automatically",
    ];
    return (
        <div className="rounded-xl bg-card p-5 shadow-sm border border-border">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Bell className="h-4 w-4 text-indigo-500" /> Reminders
            </h3>
            <ul className="space-y-3">
                {reminders.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                        {r}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function MiniCalendar() {
    const [isConnected, setIsConnected] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleConnect = () => {
        setIsConnected(true);
        setShowModal(false);
    };

    // Google Icon for the modal
    const GoogleIcon = (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );

    return (
        <div className="rounded-xl bg-card p-5 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-4">
                <Link href="/calendar-sync" className="flex items-center gap-2 font-semibold hover:text-indigo-400 transition-colors">
                    <Calendar className="h-4 w-4 text-purple-500" /> Calendar
                </Link>
                {isConnected && (
                    <Link href="/calendar-sync">
                        <Button variant="ghost" className="h-6 w-6 rounded-full hover:bg-muted p-0">
                            <Plus className="h-3 w-3" />
                        </Button>
                    </Link>
                )}
            </div>

            {!isConnected ? (
                <div className="text-center p-6 bg-muted/30 rounded-lg border border-dashed border-border flex flex-col items-center">
                    <p className="text-xs text-muted-foreground mb-3">Sync your schedule</p>
                    <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-xs h-8 border-indigo-500/20 text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
                        onClick={() => setShowModal(true)}
                    >
                        Connect Calendar
                    </Button>
                </div>
            ) : (
                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/10">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-semibold text-indigo-500">Physics Lab</span>
                            <span className="text-[10px] text-muted-foreground">10:00 AM</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground">Room 302 • Prof. Sharma</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-medium text-foreground">Lunch Break</span>
                            <span className="text-[10px] text-muted-foreground">1:00 PM</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground">Cafeteria</p>
                    </div>
                </div>
            )}

            <ConnectConsentModal
                isOpen={showModal}
                providerName="Google Calendar"
                logo={GoogleIcon}
                onClose={() => setShowModal(false)}
                onConfirm={handleConnect}
            />
        </div>
    );
}

export function AISuggestionCard() {
    return (
        <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-5 text-white shadow-lg">
            <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Sparkles className="h-4 w-4 text-yellow-300" />
                </div>
                <span className="font-semibold">AI Assistant</span>
            </div>
            <p className="text-sm text-indigo-100 leading-relaxed">
                You have 2 hours of free time. I recommend studying <b>Math</b> or starting your <b>Physics assignment</b>.
            </p>
        </div>
    );
}
