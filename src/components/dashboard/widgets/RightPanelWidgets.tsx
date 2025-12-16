import { Bell, Calendar, Sparkles } from "lucide-react";

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
    return (
        <div className="rounded-xl bg-card p-5 shadow-sm border border-border">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-purple-500" /> Calendar
            </h3>
            <div className="text-center text-sm text-muted-foreground p-8 bg-muted/50 rounded-lg border border-dashed border-border">
                Calendar Widget Placeholder
            </div>
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
