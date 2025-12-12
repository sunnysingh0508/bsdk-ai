"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Mail, Loader2, ArrowLeft } from "lucide-react";

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ForgotPasswordForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(data: FormValues) {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log(data);
            setIsLoading(false);
            setIsSuccess(true);
        }, 2000);
    }

    if (isSuccess) {
        return (
            <div className="mx-auto w-full max-w-[400px] space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <Mail className="h-8 w-8" />
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Check your inbox 📬
                    </h1>
                    <p className="text-muted-foreground">
                        We’ve sent a password reset link to your email.
                    </p>
                </div>
                <Link href="/login" className="block w-full">
                    <Button size="lg" className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-200/50">
                        Return to Login
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-[400px] space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    Forgot Your Password?
                </h1>
                <p className="text-muted-foreground">
                    No worries! Enter your registered email and we’ll send you a reset link.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Email Address"
                    placeholder="student@example.com"
                    type="email"
                    icon={<Mail className="h-4 w-4" />}
                    error={errors.email?.message}
                    {...register("email")}
                />

                <Button
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-200/50 mt-2"
                    size="lg"
                    disabled={isLoading || !isValid}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Link...
                        </>
                    ) : (
                        "Send Reset Link"
                    )}
                </Button>
            </form>

            <div className="flex flex-col items-center gap-4 text-sm">
                <Link
                    href="/login"
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Return to Login
                </Link>
                <Link
                    href="/contact"
                    className="text-indigo-500 hover:text-indigo-600 font-medium"
                >
                    Need help?
                </Link>
            </div>
        </div>
    );
}
