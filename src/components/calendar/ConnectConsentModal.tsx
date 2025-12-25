import { Button } from "@/components/ui/Button";
import { Check, X, Shield, Calendar, Clock, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConnectConsentModalProps {
    isOpen: boolean;
    providerName: string;
    logo: React.ReactNode;
    onClose: () => void;
    onConfirm: () => void;
}

export function ConnectConsentModal({
    isOpen,
    providerName,
    logo,
    onClose,
    onConfirm,
}: ConnectConsentModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md scale-100 transform overflow-hidden rounded-[24px] border border-white/10 bg-[#181B23] p-0 shadow-2xl transition-all animate-in zoom-in-95 duration-200">
                {/* Header with Provider Brand */}
                <div className="bg-white/5 p-6 text-center border-b border-white/5">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0E1017] p-3 shadow-inner">
                        {logo}
                    </div>
                    <h3 className="text-xl font-bold text-white">Connect {providerName}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        BSDK AI requests access to your calendar
                    </p>
                </div>

                {/* Permissions List */}
                <div className="p-6 space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Required Permissions
                    </h4>

                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 rounded-full bg-indigo-500/10 p-1 text-indigo-400">
                            <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">View and edit events</p>
                            <p className="text-xs text-muted-foreground">Sync classes, exams, and assignments.</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 rounded-full bg-indigo-500/10 p-1 text-indigo-400">
                            <Clock className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Manage reminders</p>
                            <p className="text-xs text-muted-foreground">Set and update study alerts.</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 rounded-full bg-green-500/10 p-1 text-[#3EF084]">
                            <Shield className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Secure Access</p>
                            <p className="text-xs text-muted-foreground">Encrypted connection. No email access.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="bg-white/5 p-6 border-t border-white/5 flex gap-3">
                    <Button
                        variant="ghost"
                        className="flex-1 text-muted-foreground hover:text-white hover:bg-white/5"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="flex-1 bg-[#6366F1] hover:bg-[#5558DD] text-white shadow-lg shadow-indigo-500/25"
                        onClick={onConfirm}
                    >
                        Allow Access
                    </Button>
                </div>
            </div>
        </div>
    );
}
