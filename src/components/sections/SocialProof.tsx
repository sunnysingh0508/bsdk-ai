import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";

const stats = [
    { value: "10,000+", label: "Students" },
    { value: "95%", label: "Accuracy" },
    { value: "7", label: "Core Tools" },
    { value: "4.9★", label: "Rating" },
];

const testimonials = [
    {
        quote: "Finally, an app that actually understands college life. The UI is honestly better than Notion.",
        author: "Rahul S.",
        role: "CS Student",
        bg: "bg-indigo-50",
    },
    {
        quote: "The bunk calculator saved my attendance multiple times. I know exactly when I can skip now.",
        author: "Priya M.",
        role: "Engineering Student",
        bg: "bg-purple-50",
    },
    {
        quote: "Assignments are under control for the first time! The reminders are a lifesaver.",
        author: "Aditya K.",
        role: "Medical Student",
        bg: "bg-pink-50",
    },
];

export function SocialProof() {
    return (
        <SectionWrapper id="testimonials" className="bg-background">
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-24 border-b border-border pb-16">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {stat.value}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Loved by students everywhere.
                </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((t, index) => (
                    <Card key={index} className={`p-8 border-none ${t.bg === "bg-indigo-50" ? "bg-indigo-500/10" : t.bg === "bg-purple-50" ? "bg-purple-500/10" : "bg-pink-500/10"}`}>
                        <div className="flex gap-1 mb-4 text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                        </div>
                        <p className="mb-6 text-foreground italic font-medium leading-relaxed">
                            "{t.quote}"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-muted to-muted/80" />
                            <div>
                                <p className="font-bold text-sm text-foreground">{t.author}</p>
                                <p className="text-xs text-muted-foreground">{t.role}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
