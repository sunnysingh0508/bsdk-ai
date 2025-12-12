import { SignupForm } from "@/components/auth/SignupForm";
import { AuthVisual } from "@/components/auth/AuthVisual";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const metadata = {
    title: "Sign Up - BSDK AI Smart College OS",
    description: "Create your account to start managing attendance, grades, and assignments.",
};

export default function SignupPage() {
    return (
        <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-[#F8F9FC] dark:bg-zinc-900">

            {/* Mobile Logo Link */}
            <div className="absolute left-4 top-4 md:left-8 md:top-8 z-20">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-foreground hidden md:block leading-none">
                            BSDK AI
                        </span>
                        <span className="text-[10px] font-medium text-muted-foreground hidden md:block leading-none">
                            BrightSight Student Development Kit – AI
                        </span>
                    </div>
                </Link>
            </div>

            {/* Left Column - Form */}
            <div className="flex min-h-screen w-full flex-col justify-center px-4 py-12 lg:px-8 relative z-10 bg-[#F8F9FC]">
                <SignupForm />
            </div>

            {/* Right Column - Visual (Hidden on mobile) */}
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r border-l border-white/50">
                <AuthVisual />
            </div>
        </div>
    );
}
