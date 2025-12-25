import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export function SecurityNotice() {
    return (
        <div className="rounded-[24px] border border-white/5 bg-[#181B23] p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-[#3EF084]">
                    <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-white">Privacy & Security</h3>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
                Your data is secure. BSDK AI adheres to strict privacy standards when accessing your calendar.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                    <Lock className="h-5 w-5 text-indigo-400 shrink-0" />
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium text-white">Secure Connection</h4>
                        <p className="text-xs text-muted-foreground">
                            Encrypted 256-bit SSL connection for all data transfers.
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <EyeOff className="h-5 w-5 text-indigo-400 shrink-0" />
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium text-white">Limited Access</h4>
                        <p className="text-xs text-muted-foreground">
                            We never read your emails or delete events without explicit consent.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
