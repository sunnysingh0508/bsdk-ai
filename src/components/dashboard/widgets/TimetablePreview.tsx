import { Clock, MapPin } from "lucide-react";

const todayClasses = [
    { time: "09:00 - 10:00", subject: "Math", room: "Room 301", color: "bg-blue-100 text-blue-700" },
    { time: "11:00 - 12:00", subject: "Data Structures", room: "Lab A", color: "bg-purple-100 text-purple-700" },
    { time: "14:00 - 15:00", subject: "Physics", room: "Room 102", color: "bg-orange-100 text-orange-700" },
];

export function TimetablePreview() {
    return (
        <div className="space-y-3">
            {todayClasses.map((cls, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border bg-white p-3 hover:bg-gray-50 transition-colors">
                    <div className={`flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg text-xs font-bold leading-none ${cls.color}`}>
                        <span>{cls.time.split(":")[0]}</span>
                        <span>AM</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-sm">{cls.subject}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {cls.time}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {cls.room}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
