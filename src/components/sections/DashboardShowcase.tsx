import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";

export function DashboardShowcase() {
    return (
        <SectionWrapper className="bg-background pt-0">
            <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-4">
                    Powerful Interface
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Designed for speed and clarity.
                </h2>
            </div>

            <div className="relative mx-auto max-w-5xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
                {/* Browser Window Controls */}
                <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>

                {/* Mockup Canvas */}
                <div className="aspect-[16/9] w-full bg-slate-900/50 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5" />

                    {/* Abstract UI Representation */}
                    <div className="relative z-10 w-3/4 h-3/4 bg-card rounded-lg shadow-lg border border-border flex flex-col p-6 transition-transform duration-700 group-hover:scale-[1.02]">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="h-4 w-32 bg-muted rounded-full" />
                            <div className="h-8 w-8 bg-indigo-500/20 rounded-full" />
                        </div>
                        {/* Content */}
                        <div className="flex-1 grid grid-cols-3 gap-6">
                            <div className="col-span-2 space-y-4">
                                <div className="h-32 w-full bg-indigo-500/10 rounded-lg animate-pulse" />
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-muted/50 rounded" />
                                    <div className="h-4 w-5/6 bg-muted/50 rounded" />
                                    <div className="h-4 w-4/6 bg-muted/50 rounded" />
                                </div>
                            </div>
                            <div className="col-span-1 space-y-4">
                                <div className="h-24 w-full bg-purple-500/10 rounded-lg" />
                                <div className="h-40 w-full bg-pink-500/10 rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Overlay Labels */}
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
                        <div className="bg-card/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-sm font-medium text-muted-foreground border border-border">
                            Real-time analytics
                        </div>
                        <div className="bg-card/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-sm font-medium text-muted-foreground border border-border">
                            Streamlined workflow
                        </div>
                        <div className="bg-card/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-sm font-medium text-muted-foreground border border-border hidden sm:block">
                            Visual insights
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
