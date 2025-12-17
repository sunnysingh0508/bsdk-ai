import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { UserPlus, BrainCircuit, Layout } from "lucide-react";

const steps = [
    {
        title: "Setup Profile",
        description: "Add your subjects, upload your timetable, and set your basic academic details.",
        icon: UserPlus,
    },
    {
        title: "AI Analysis",
        description: "Let BSDK AI analyze your attendance trends, grades, and study patterns.",
        icon: BrainCircuit,
    },
    {
        title: "Get Insights",
        description: "Receive a fully personalized dashboard with predictions, reminders & insights.",
        icon: Layout,
    },
];

export function HowItWorks() {
    return (
        <SectionWrapper id="how-it-works" className="bg-background">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    How it Works
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Get started in minutes and take control of your college life.
                </p>
            </div>

            <div className="relative mx-auto max-w-4xl">
                {/* Connecting Line (Desktop) */}
                <div className="absolute left-0 top-12 hidden h-0.5 w-full bg-border md:block" />

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-card shadow-lg border border-border z-10 transition-transform duration-300 hover:scale-110">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                Step {index + 1}: {step.title}
                            </h3>
                            <p className="text-muted-foreground max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
