import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import {
    BarChart3,
    CalendarDays,
    Clock,
    ScanLine,
    LayoutDashboard
} from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "CGPA Predictor",
        description: "AI-powered grade analytics & forecasting to keep your goals on track.",
        icon: BarChart3,
        color: "from-indigo-500 to-blue-500",
        bg: "bg-indigo-50",
        iconColor: "text-indigo-600",
    },
    {
        title: "Attendance Manager",
        description: "Track your presence and instantly see how many classes you can safely skip.",
        icon: Clock,
        color: "from-purple-500 to-pink-500",
        bg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        title: "Assignment Manager",
        description: "Automatically organizes all your deadlines so you never miss a submission.",
        icon: CalendarDays,
        color: "from-pink-500 to-rose-500",
        bg: "bg-pink-50",
        iconColor: "text-pink-600",
    },
    {
        title: "Notes Scanner",
        description: "Upload handwritten notes to enhance, export, and organize them digitally.",
        icon: ScanLine,
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        title: "AI Timetable",
        description: "Generates the perfect study plan for your week based on your subjects.",
        icon: LayoutDashboard,
        color: "from-emerald-500 to-green-500",
        bg: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
];

export function FeaturesGrid() {
    return (
        <SectionWrapper id="features" className="bg-white">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Everything you need to <span className="text-primary">excel.</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A complete suite of tools designed specifically for the modern student.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <Link href="/login" key={index} className="block group">
                        <Card
                            className="group relative overflow-hidden p-6 border-gray-100 h-full transition-all hover:shadow-lg"
                            hoverEffect
                        >
                            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg} ${feature.iconColor}`}>
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {feature.description}
                            </p>
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                        </Card>
                    </Link>
                ))}
            </div>
        </SectionWrapper>
    );
}
