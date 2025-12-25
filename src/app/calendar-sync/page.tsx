"use client";

import { useState } from "react";
import { CalendarProviderCard } from "@/components/calendar/CalendarProviderCard";
import { SyncSettings } from "@/components/calendar/SyncSettings";
import { SyncPreview } from "@/components/calendar/SyncPreview";
import { SecurityNotice } from "@/components/calendar/SecurityNotice";
import { ConnectConsentModal } from "@/components/calendar/ConnectConsentModal";

type ProviderType = "Google Calendar" | "Outlook Calendar" | null;

export default function CalendarSyncPage() {
    const [googleConnected, setGoogleConnected] = useState(false);
    const [outlookConnected, setOutlookConnected] = useState(false);
    const [lastSynced, setLastSynced] = useState<string | undefined>(undefined);

    // Modal State
    const [connectingProvider, setConnectingProvider] = useState<ProviderType>(null);

    const handleInitialConnect = (provider: "Google Calendar" | "Outlook Calendar") => {
        setConnectingProvider(provider);
    };

    const handleConfirmConnect = () => {
        if (!connectingProvider) return;

        // Simulate connection delay
        setTimeout(() => {
            if (connectingProvider === "Google Calendar") {
                setGoogleConnected(true);
                setLastSynced("Just now");
            } else if (connectingProvider === "Outlook Calendar") {
                setOutlookConnected(true);
            }
            setConnectingProvider(null);
        }, 800);
    };

    const handleDisconnectGoogle = () => {
        if (confirm("Are you sure you want to disconnect Google Calendar?")) {
            setGoogleConnected(false);
            setLastSynced(undefined);
        }
    };

    // Google Calendar Icon
    const GoogleIcon = (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
        </svg>
    );

    // Outlook Icon
    const OutlookIcon = (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="16" rx="2" className="text-[#0078D4] fill-[#0078D4]" stroke="none" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const isAnyConnected = googleConnected || outlookConnected;

    return (
        <div className="min-h-screen bg-[#0E1017] p-4 md:p-8 animate-in fade-in duration-500">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Calendar Sync</h1>
                    <p className="text-muted-foreground mt-1 text-lg">
                        Keep your academic schedule synced with your personal calendar.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Left Column: Providers & Preview */}
                    <div className="space-y-8 lg:col-span-7">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-white">Connected Calendars</h2>
                            <CalendarProviderCard
                                providerName="Google Calendar"
                                logo={GoogleIcon}
                                isConnected={googleConnected}
                                lastSynced={googleConnected ? lastSynced : undefined}
                                onConnect={() => handleInitialConnect("Google Calendar")}
                                onDisconnect={handleDisconnectGoogle}
                                onSyncNow={() => setLastSynced("Just now")}
                            />

                            <CalendarProviderCard
                                providerName="Outlook Calendar"
                                logo={OutlookIcon}
                                isConnected={outlookConnected}
                                onConnect={() => handleInitialConnect("Outlook Calendar")}
                                onDisconnect={() => setOutlookConnected(false)}
                            />
                        </div>

                        {/* Empty State / Preview */}
                        {!isAnyConnected ? (
                            <div className="rounded-[24px] border border-dashed border-white/10 bg-[#181B23]/50 p-12 text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                                    <span className="text-3xl">📅</span>
                                </div>
                                <h3 className="text-lg font-medium text-white">No calendar connected</h3>
                                <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
                                    Connect your calendar to sync classes and reminders automatically.
                                </p>
                            </div>
                        ) : (
                            <div className="animate-in slide-in-from-bottom-4 duration-500">
                                <SyncPreview />
                            </div>
                        )}
                    </div>

                    {/* Right Column: Settings & Security */}
                    <div className="space-y-8 lg:col-span-5">
                        <SyncSettings isConnected={isAnyConnected} />
                        <SecurityNotice />
                    </div>
                </div>

                {/* Consent Modal */}
                <ConnectConsentModal
                    isOpen={!!connectingProvider}
                    providerName={connectingProvider || ""}
                    logo={connectingProvider === "Google Calendar" ? GoogleIcon : OutlookIcon}
                    onClose={() => setConnectingProvider(null)}
                    onConfirm={handleConfirmConnect}
                />
            </div>
        </div>
    );
}
