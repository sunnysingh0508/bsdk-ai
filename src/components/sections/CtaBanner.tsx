import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaBanner() {
    return (
        <section className="py-24 bg-white px-4">
            <div className="container mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-16 text-center shadow-2xl border border-border sm:px-16 sm:py-24">
                    <div className="relative z-10 mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Start managing college like a pro.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                            Join thousands of students who have already upgraded their academic life with BSDK AI.
                        </p>
                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="/signup">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Launch BSDK AI <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground">
                            Free forever. No credit card required.
                        </p>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                </div>
            </div>
        </section>
    );
}
