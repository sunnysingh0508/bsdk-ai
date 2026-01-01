import { LoginForm } from "@/components/auth/LoginForm";
import { AuthVisual } from "@/components/auth/AuthVisual";
import Link from "next/link";
import Image from "next/image";


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

                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="BSDK AI Logo"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <span className="text-xl font-bold tracking-tight text-foreground hidden md:block leading-none">
                            BSDK AI
                        </span>
                    </div>
                </Link>
            </div>

            {/* Left Column - Form */}
            <div className="flex h-full w-full flex-col justify-center px-4 lg:p-8 relative z-10 bg-white dark:bg-zinc-900">
                <LoginForm />
            </div>

            {/* Right Column - Visual (Hidden on mobile) */}
            <div className="relative hidden h-full flex-col bg-slate-50 p-0 text-white lg:flex">
                <AuthVisual />
            </div>
        </div>
    );
}
