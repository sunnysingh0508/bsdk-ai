import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

interface SyncSettingsProps {
    className?: string;
    isConnected: boolean;
}

export function SyncSettings({ className, isConnected }: SyncSettingsProps) {
    if (!isConnected) {
        return (
            <div className={`rounded-[24px] border border-white/5 bg-[#181B23] p-8 text-center ${className}`}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-muted-foreground">
                    <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Sync Locked</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Connect a calendar to unlock synchronization settings and preferences.
                </p>
            </div>
        );
    }

    return (
        <div className={`rounded-[24px] border border-white/5 bg-[#181B23] p-6 ${className}`}>
            <h3 className="mb-6 font-semibold text-lg text-white">Sync Preferences</h3>

            <div className="space-y-6">
                {/* Sync Options Toggles */}
                <div className="space-y-4">
                    <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Sync Options</h4>

                    <div className="flex items-center justify-between">
                        <Label htmlFor="sync-classes" className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-white">Sync Classes</span>
                            <span className="text-xs text-muted-foreground">Import class schedule to calendar</span>
                        </Label>
                        <Switch id="sync-classes" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label htmlFor="sync-assignments" className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-white">Sync Assignments</span>
                            <span className="text-xs text-muted-foreground">Add due dates and deadlines</span>
                        </Label>
                        <Switch id="sync-assignments" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label htmlFor="sync-exams" className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-white">Sync Exams</span>
                            <span className="text-xs text-muted-foreground">Exam dates and locations</span>
                        </Label>
                        <Switch id="sync-exams" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label htmlFor="sync-reminders" className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-white">Sync Reminders</span>
                            <span className="text-xs text-muted-foreground">Personal study reminders</span>
                        </Label>
                        <Switch id="sync-reminders" />
                    </div>
                </div>

                <div className="h-px bg-white/5" />

                {/* Sync Direction */}
                <div className="space-y-3">
                    <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Sync Direction</h4>
                    <RadioGroup defaultValue="one-way">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="one-way" id="one-way" className="border-muted-foreground text-[#6366F1]" />
                            <Label htmlFor="one-way" className="text-sm text-white">One-way (BSDK AI → Calendar)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="two-way" id="two-way" className="border-muted-foreground text-[#6366F1]" />
                            <Label htmlFor="two-way" className="text-sm text-white">Two-way (Calendar ↔ BSDK AI)</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="h-px bg-white/5" />

                {/* Sync Frequency */}
                <div className="space-y-3">
                    <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Sync Frequency</h4>
                    <Select defaultValue="realtime">
                        <SelectTrigger className="w-full bg-white/5 border-white/10 text-white rounded-xl">
                            <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#181B23] border-white/10 text-white">
                            <SelectItem value="realtime">Real-time (Recommended)</SelectItem>
                            <SelectItem value="hourly">Every hour</SelectItem>
                            <SelectItem value="daily">Once daily</SelectItem>
                            <SelectItem value="manual">Manual sync only</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
