import { BookOpen, GraduationCap, CalendarOff } from "lucide-react";
import Link from "next/link";
import { StatCard } from "@/components/dashboard/widgets/StatCard";
import { AssignmentCard } from "@/components/dashboard/widgets/AssignmentCard";
import { AttendanceWidget } from "@/components/dashboard/widgets/AttendanceWidget";
import { TimetablePreview } from "@/components/dashboard/widgets/TimetablePreview";
import { ReminderWidget, MiniCalendar, AISuggestionCard } from "@/components/dashboard/widgets/RightPanelWidgets";
import { CGPAChart } from "@/components/dashboard/charts/CGPAChart";
import { ProductivityChart } from "@/components/dashboard/charts/ProductivityChart";

export default function DashboardPage() {
    const assignments = [
        { title: "Calculus Problem Set 3", subject: "Math", due: "2 days", status: "In Progress", progress: 60 },
        { title: "Sorting Algorithms IO", subject: "DSA", due: "Tomorrow", status: "Pending", progress: 10 },
        { title: "Physics Lab Report", subject: "Physics", due: "4 days", status: "Completed", progress: 100 },
    ] as const;

    const attendanceData = [
        { subject: "Mathematics", percentage: 88, bunkable: 2 },
        { subject: "Data Structures", percentage: 72, bunkable: 0 },
        { subject: "Physics", percentage: 92, bunkable: 3 },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Welcome Back 👋</h1>
                    <p className="text-muted-foreground">Your Smart College Life OS Dashboard</p>
                </div>
                <div className="hidden md:block">
                    <span className="text-sm text-muted-foreground">Today: {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-3">
                <StatCard
                    label="Upcoming Classes Today"
                    value="3"
                    icon={BookOpen}
                    trend="+2 from yesterday"
                    gradient="bg-gradient-to-br from-purple-500 to-pink-500"
                />
                <StatCard
                    label="Pending Assignments"
                    value="5"
                    icon={GraduationCap}
                    trend="2 due tomorrow"
                    gradient="bg-gradient-to-br from-indigo-500 to-blue-500"
                />
                <StatCard
                    label="Safe Bunks Available"
                    value="2"
                    icon={CalendarOff}
                    trend="+1 since last week"
                    gradient="bg-gradient-to-br from-orange-400 to-yellow-400"
                />
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* Main Content Info (Left 3 Cols) */}
                <div className="space-y-8 lg:col-span-3">
                    {/* Row 1: Assignments & Attendance */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Assignments Widget */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="font-bold text-lg text-foreground">Assignments Overview</h2>
                                <Link href="/assignments" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">View All</Link>
                            </div>
                            <div className="grid gap-4">
                                {assignments.map((assignment, i) => (
                                    <AssignmentCard key={i} {...assignment} />
                                ))}
                            </div>
                        </div>

                        {/* Attendance Widget */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="font-bold text-lg text-foreground">Attendance & Bunk Status</h2>
                                <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">Manage</button>
                            </div>
                            <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
                                <AttendanceWidget attendance={attendanceData} />
                            </div>

                            <div className="pt-4">
                                <h2 className="font-bold text-lg mb-4 text-foreground">Timetable Preview</h2>
                                <TimetablePreview />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Charts */}
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
                            <h2 className="font-bold text-lg mb-6">CGPA Insights</h2>
                            <CGPAChart cgpa={8.4} />
                        </div>
                        <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
                            <h2 className="font-bold text-lg mb-2">Weekly Study Insights</h2>
                            <ProductivityChart />
                        </div>
                    </div>
                </div>

                {/* Right Sidebar Tools (1 Col) */}
                <div className="space-y-6 lg:col-span-1">
                    <AISuggestionCard />
                    <h2 className="font-bold text-lg text-foreground">AI Recommendations</h2>
                    <div className="space-y-6">
                        <MiniCalendar />
                        <ReminderWidget />
                    </div>
                </div>
            </div>
        </div>
    );
}
