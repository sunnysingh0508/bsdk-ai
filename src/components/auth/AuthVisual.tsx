import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Clock, AlertCircle, PieChart } from "lucide-react";

export function AuthVisual() {
    return (
        <div className="relative hidden h-full w-full flex-col items-center justify-center bg-slate-50 lg:flex overflow-hidden border-l border-gray-200">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-slate-50/50" />
            <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[100px]" />
            <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-400/20 blur-[100px]" />

            <div className="relative z-10 w-full max-w-[500px] p-8 perspective-[1000px]">
                {/* Realistic Glass Dashboard Grid */}
                <div className="grid grid-cols-2 gap-4 transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2 preserve-3d">

                    {/* Stat 1: CGPA */}
                    <Card className="col-span-1 p-5 bg-white/80 backdrop-blur-md border border-white/60 shadow-xl shadow-indigo-100/50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-semibold text-slate-500">Current CGPA</span>
                            <PieChart className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div className="text-3xl font-bold text-slate-900">9.2</div>
                        <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700 text-[10px] border border-green-200 shadow-sm">+0.4 from last sem</Badge>
                    </Card>

                    {/* Stat 2: Assignments */}
                    <Card className="col-span-1 p-5 bg-white/60 backdrop-blur-md border border-white/60 shadow-xl shadow-purple-100/50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-semibold text-slate-500">Pending Tasks</span>
                            <BookOpen className="h-4 w-4 text-pink-600" />
                        </div>
                        <div className="text-3xl font-bold text-slate-900">4</div>
                        <p className="mt-2 text-[10px] text-red-500 font-medium">2 deadlines today</p>
                    </Card>

                    {/* Wide Card: Schedule */}
                    <Card className="col-span-2 p-5 bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl shadow-indigo-200/40">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-9 w-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Next Class: Data Structures</p>
                                <p className="text-xs text-slate-500 font-medium">Lecture Hall 301 • 10:30 AM</p>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                        </div>
                    </Card>

                    {/* Floating Notification */}
                    <Card className="absolute -right-12 top-10 w-52 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-float bg-white border border-white/50 backdrop-blur-xl hidden xl:flex items-center gap-3 rounded-2xl">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                        <div>
                            <p className="text-xs font-bold text-slate-800">Attendance Updated</p>
                            <p className="text-[10px] text-slate-500">Just now</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
