import { LoginForm } from "@/components/auth/LoginForm";
import { AuthVisual } from "@/components/auth/AuthVisual";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const metadata = {
    title: "Login - BSDK AI Smart College OS",
    description: "Login to your dashboard to manage attendance, assignments, and grades.",
};

export default function LoginPage() {
    return (
        <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

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
            <div className="flex h-full w-full flex-col justify-center px-4 lg:p-8 relative z-10 bg-background">
                <LoginForm />
            </div>

            {/* Right Column - Visual (Hidden on mobile) */}
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <AuthVisual />
            </div>
        </div>
    );
}
