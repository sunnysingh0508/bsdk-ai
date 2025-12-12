import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Clock, AlertCircle, PieChart } from "lucide-react";

export function AuthVisual() {
    return (
        <div className="relative hidden h-full w-full flex-col items-center justify-center bg-muted lg:flex overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[#F8F9FC]" />
            <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-[100px]" />
            <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-100/50 blur-[100px]" />

            <div className="relative z-10 w-full max-w-[500px] p-8 perspective-[1000px]">
                {/* Simple Glass Dashboard Grid similar to Hero but compact */}
                <div className="grid grid-cols-2 gap-4 transition-transform duration-500 hover:rotate-y-3 hover:rotate-x-3 preserve-3d">

                    {/* Stat 1: CGPA */}
                    <Card className="col-span-1 p-5 glass border-white/60 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-semibold text-muted-foreground">Current CGPA</span>
                            <PieChart className="h-4 w-4 text-indigo-500" />
                        </div>
                        <div className="text-3xl font-bold text-foreground">9.2</div>
                        <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700 text-[10px]">+0.4 from last sem</Badge>
                    </Card>

                    {/* Stat 2: Assignments */}
                    <Card className="col-span-1 p-5 glass border-white/60 shadow-lg bg-white/50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-semibold text-muted-foreground">Pending Tasks</span>
                            <BookOpen className="h-4 w-4 text-pink-500" />
                        </div>
                        <div className="text-3xl font-bold text-foreground">4</div>
                        <p className="mt-2 text-[10px] text-red-500 font-medium">2 deadlines today</p>
                    </Card>

                    {/* Wide Card: Schedule */}
                    <Card className="col-span-2 p-5 glass border-white/60 shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                                <Clock className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">Next Class: Data Structures</p>
                                <p className="text-xs text-muted-foreground">Lecture Hall 301 • 10:30 AM</p>
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500" />
                        </div>
                    </Card>

                    {/* Floating Notification */}
                    <Card className="absolute -right-12 top-10 w-48 p-3 shadow-xl animate-float glass border-white/80 hidden xl:block">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <p className="text-xs font-medium text-foreground">Attendance Updated</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
