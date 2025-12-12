"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";

// Form Schema
const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." }),
    rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
    const router = useRouter(); // Initialize router
    const [isLoading, setIsLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [rootError, setRootError] = React.useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors }, // removed isValid to allow submit attempt
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            email: "demo@bsdk.ai", // Pre-filled for convenience
            password: "password123",
            rememberMe: false,
        },
    });

    async function onSubmit(data: FormValues) {
        setIsLoading(true);
        setRootError(null);

        // Simulate API call
        setTimeout(() => {
            if (data.email === "demo@bsdk.ai" && data.password === "password123") {
                router.push("/dashboard");
            } else {
                setRootError("Invalid credentials. Try demo@bsdk.ai / password123");
                setIsLoading(false);
            }
        }, 1500);
    }

    return (
        <div className="mx-auto w-full max-w-[400px] space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Welcome Back
                </h1>
                <p className="text-muted-foreground">
                    Login to access your dashboard.
                </p>

                {/* Dev Hint */}
                <div className="mt-2 rounded-lg bg-indigo-50 p-2 text-xs text-indigo-600 border border-indigo-100">
                    <b>Dev Hint:</b> Use <code>demo@bsdk.ai</code> / <code>password123</code>
                </div>
            </div>

            {/* Global Error */}
            {rootError && (
                <div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {rootError}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Email Address"
                    placeholder="student@example.com"
                    type="email"
                    icon={<Mail className="h-4 w-4" />}
                    error={errors.email?.message}
                    {...register("email")}
                />

                <Input
                    label="Password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    icon={<Lock className="h-4 w-4" />}
                    rightElement={
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-muted-foreground hover:text-foreground focus:outline-none"
                        >
                            {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                            ) : (
                                <Eye className="h-4 w-4" />
                            )}
                        </button>
                    }
                    error={errors.password?.message}
                    {...register("password")}
                />

                <div className="flex items-center justify-between text-sm">
                    <Checkbox
                        label="Remember me"
                        {...register("rememberMe")}
                    />
                    <Link
                        href="/forgot-password"
                        className="font-medium text-primary hover:text-primary/90 hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-200"
                    size="lg"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Logging in...
                        </>
                    ) : (
                        "Login to Dashboard"
                    )}
                </Button>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#F8F9FC] px-2 text-muted-foreground">Or</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full bg-white font-normal text-muted-foreground hover:bg-gray-50">
                    {/* Google Icon SVG */}
                    <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Google
                </Button>
                <Button variant="outline" className="w-full bg-[#24292F] text-white hover:bg-[#24292F]/90 hover:text-white border-transparent">
                    {/* GitHub Icon SVG */}
                    <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    GitHub
                </Button>
            </div>

            <p className="px-8 text-center text-sm text-muted-foreground">
                Don’t have an account?{" "}
                <Link
                    href="/signup"
                    className="underline underline-offset-4 hover:text-primary text-primary font-medium"
                >
                    Create an account
                </Link>
            </p>
        </div>
    );
}
