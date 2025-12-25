import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export function SyncPreview() {
    const events = [
        {
            bsdkItem: "Calculus Lecture",
            type: "Class",
            calendarTitle: "[Class] Calculus",
            time: "Mon, 10:00 AM",
            calendar: "Google Calendar"
        },
        {
            bsdkItem: "DSA Problem Set",
            type: "Assignment",
            calendarTitle: "[Due] DSA Problem Set",
            time: "Tue, 11:59 PM",
            calendar: "Google Calendar"
        },
        {
            bsdkItem: "Physics Midterm",
            type: "Exam",
            calendarTitle: "🔴 Physics Midterm",
            time: "Fri, 02:00 PM",
            calendar: "Google Calendar"
        }
    ];

    return (
        <div className="rounded-[24px] border border-white/5 bg-[#181B23] p-6">
            <h3 className="mb-4 font-semibold text-lg text-white">Event Mapping Preview</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase text-muted-foreground bg-white/5 rounded-lg">
                        <tr>
                            <th className="px-4 py-3 rounded-l-lg">BSDK AI Item</th>
                            <th className="px-4 py-3">Mapping</th>
                            <th className="px-4 py-3">Calendar Event Title</th>
                            <th className="px-4 py-3">Date & Time</th>
                            <th className="px-4 py-3 rounded-r-lg">Calendar Name</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {events.map((event, index) => (
                            <tr key={index} className="hover:bg-white/5 transition-colors">
                                <td className="px-4 py-3 font-medium text-white">
                                    <div className="flex flex-col">
                                        <span>{event.bsdkItem}</span>
                                        <Badge variant="outline" className="w-fit mt-1 text-[10px] h-5">{event.type}</Badge>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-muted-foreground">
                                    <ArrowRight className="h-4 w-4" />
                                </td>
                                <td className="px-4 py-3 text-white">{event.calendarTitle}</td>
                                <td className="px-4 py-3 text-muted-foreground">{event.time}</td>
                                <td className="px-4 py-3 text-muted-foreground">{event.calendar}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
