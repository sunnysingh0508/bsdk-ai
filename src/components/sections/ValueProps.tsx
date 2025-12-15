import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Layers, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

const valueProps = [
    {
        title: "All Your Tools in One Place",
        description:
            "No need to use multiple apps. BSDK AI integrates attendance, assignments, and grades into a single streamlined dashboard.",
        icon: Layers,
        color: "bg-primary/10 text-primary",
    },
    {
        title: "Smart Insights",
        description:
            "AI analyzes your data to give you accurate CGPA forecasts, bunk limits, and workload predictions before it's too late.",
        icon: Sparkles,
        color: "bg-primary/10 text-primary",
    },
    {
        title: "Personalized Workflow",
        description:
            "The system adapts to your unique timetable, study habits, and subjects, creating a truly custom experience.",
        icon: Zap,
        color: "bg-primary/10 text-primary",
    },
];

export function ValueProps() {
    return (
        <SectionWrapper className="bg-white">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Why Students Choose BSDK AI?
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {valueProps.map((prop, index) => (
                    <Link href="/login" key={index} className="block group">
                        <Card className="p-8 border-none shadow-none bg-background h-full transition-all hover:bg-muted/50 cursor-pointer">
                            <div
                                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${prop.color}`}
                            >
                                <prop.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                {prop.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {prop.description}
                            </p>
                        </Card>
                    </Link>
                ))}
            </div>
        </SectionWrapper>
    );
}
