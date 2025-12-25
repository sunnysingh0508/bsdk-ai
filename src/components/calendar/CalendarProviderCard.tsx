import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalendarProviderCardProps {
    providerName: "Google Calendar" | "Outlook Calendar";
    logo: React.ReactNode;
    isConnected: boolean;
    lastSynced?: string;
    onConnect: () => void;
    onDisconnect: () => void;
    onSyncNow?: () => void;
}

export function CalendarProviderCard({
    providerName,
    logo,
    isConnected,
    lastSynced,
    onConnect,
    onDisconnect,
    onSyncNow,
}: CalendarProviderCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-[24px] border border-white/5 bg-[#181B23] p-6 shadow-lg transition-all hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/20">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 p-2.5 shadow-inner">
                        {logo}
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white tracking-tight">{providerName}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            {isConnected ? (
                                <span className="flex items-center text-xs font-medium text-[#3EF084]">
                                    <CheckCircle className="mr-1 h-3 w-3" /> Connected
                                </span>
                            ) : (
                                <span className="flex items-center text-xs font-medium text-muted-foreground">
                                    <AlertCircle className="mr-1 h-3 w-3" /> Not Connected
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                {isConnected && (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-white"
                        onClick={onSyncNow}
                        title="Sync Now"
                    >
                        <RefreshCw className="h-4 w-4" />
                    </Button>
                )}
            </div>

            <div className="mt-6 flex items-center justify-between">
                {isConnected && lastSynced && (
                    <p className="text-xs text-muted-foreground">
                        Last synced: <span className="text-indigo-400">{lastSynced}</span>
                    </p>
                )}
                <div className={cn("flex gap-3 w-full", isConnected ? "justify-end w-auto" : "")}>
                    {isConnected ? (
                        <Button
                            variant="destructive"
                            className="bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 border-none px-6 rounded-xl"
                            onClick={onDisconnect}
                        >
                            Disconnect
                        </Button>
                    ) : (
                        <Button
                            className="w-full bg-[#6366F1] hover:bg-[#5558DD] text-white shadow-lg shadow-indigo-500/25 rounded-xl h-11 pointer-events-auto"
                            onClick={onConnect}
                        >
                            Connect Calendar
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
