import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Check, ArrowRight, BookOpen, Clock, AlertCircle } from "lucide-react";

import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-background pb-20 pt-32 lg:pb-32 lg:pt-48">
            {/* Background Gradients */}
            <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-purple-200/40 blur-[100px]" />
            <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-[100px]" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                New: AI Timetable Generator 🚀
                            </Badge>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl/none">
                                Your Smart <span className="text-primary">College Life OS.</span>
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                                An all-in-one dashboard for students — calculate CGPA, track
                                attendance, check bunk limits, manage assignments, scan notes,
                                and get AI-generated timetables.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="/signup">
                                <Button size="lg" className="gap-2">
                                    Launch BSDK AI <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button size="lg" variant="secondary">
                                    Explore Features
                                </Button>
                            </Link>
                        </div>

                        <ul className="space-y-2 text-sm font-medium text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <Check className="h-3 w-3" />
                                </div>
                                AI-powered analytics
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <Check className="h-3 w-3" />
                                </div>
                                Visual timetable & smart tools
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <Check className="h-3 w-3" />
                                </div>
                                Instant class & assignment reminders
                            </li>
                        </ul>
                    </div>

                    {/* Right Visual (Floating Mockup) */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none perspective-[2000px]">
                        <div className="relative z-10 animate-float transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-12 preserve-3d">
                            {/* Main Dashboard Card */}
                            <Card className="relative flex h-[400px] w-full flex-col overflow-hidden rounded-3xl border border-border bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl md:h-[500px]">
                                {/* Header Mockup */}
                                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                                    <div className="h-4 w-24 rounded-full bg-muted" />
                                    <div className="flex gap-2">
                                        <div className="h-8 w-8 rounded-full bg-muted/50" />
                                        <div className="h-8 w-8 rounded-full bg-primary/20" />
                                    </div>
                                </div>

                                {/* Dashboard Grid Mockup */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* CGPA Card */}
                                    <div className="col-span-1 rounded-2xl bg-indigo-500/10 p-4 border border-indigo-500/20">
                                        <div className="mb-2 h-3 w-16 rounded-full bg-indigo-500/20" />
                                        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-indigo-500 border-t-transparent">
                                            <span className="text-xl font-bold text-indigo-400">9.2</span>
                                        </div>
                                    </div>

                                    {/* Attendance Card */}
                                    <div className="col-span-1 space-y-3 rounded-2xl bg-purple-500/10 p-4 border border-purple-500/20">
                                        <div className="flex items-center justify-between">
                                            <div className="h-3 w-20 rounded-full bg-purple-500/20" />
                                            <span className="text-xs font-bold text-purple-400">75%</span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-muted">
                                            <div className="h-2 w-3/4 rounded-full bg-purple-500" />
                                        </div>
                                        <div className="mt-2 text-xs text-muted-foreground">
                                            Safe to bunk: <b className="text-foreground">3</b> classes
                                        </div>
                                    </div>

                                    {/* Assignments */}
                                    <div className="col-span-2 rounded-2xl bg-card p-4 shadow-sm border border-border">
                                        <div className="mb-3 flex items-center gap-2">
                                            <BookOpen className="h-4 w-4 text-pink-500" />
                                            <span className="text-sm font-semibold text-foreground">Upcoming Deadlines</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between rounded-lg bg-muted/40 p-2">
                                                <span className="text-xs font-medium text-foreground">Data Structures</span>
                                                <Badge variant="secondary" className="text-[10px] bg-red-500/10 text-red-500 border border-red-500/20">Tomorrow</Badge>
                                            </div>
                                            <div className="flex items-center justify-between rounded-lg bg-muted/40 p-2">
                                                <span className="text-xs font-medium text-foreground">OS Project</span>
                                                <Badge variant="secondary" className="text-[10px] bg-muted text-muted-foreground">3 Days</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Floating Elements */}
                            <Card className="absolute -right-8 top-12 w-48 p-4 shadow-lg animate-float-delayed border border-border bg-slate-900/80 backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Next Class</p>
                                        <p className="text-sm font-bold text-foreground">Maths</p>
                                        <p className="text-[10px] text-green-500">In 10 mins</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="absolute -bottom-6 -left-8 w-56 p-4 shadow-lg animate-float border border-border bg-slate-900/80 backdrop-blur-md">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500">
                                        <AlertCircle className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Attendance Alert</p>
                                        <p className="text-xs text-muted-foreground">Low attendance in Physics (68%)</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
