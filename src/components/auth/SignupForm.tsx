"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { OAuthButton } from "@/components/ui/OAuthButton";
import { Mail, User, Loader2 } from "lucide-react";

// Form Schema
const formSchema = z
    .object({
        fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
        email: z.string().email({ message: "Please enter a valid email address." }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." })
            .regex(/[0-9]/, { message: "Password must contain at least one number." })
            .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character." }),
        confirmPassword: z.string(),
        agreeTerms: z.boolean().optional().refine((val) => val === true, {
            message: "You must agree to the terms and privacy policy.",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"],
    });

type FormValues = z.infer<typeof formSchema>;

export function SignupForm() {
    const [isLoading, setIsLoading] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreeTerms: false,
        },
    });

    // Watch password to update visual meter in real-time
    const password = watch("password");

    async function onSubmit(data: FormValues) {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log(data);
            setIsLoading(false);
        }, 2000);
    }

    return (
        <div className="mx-auto w-full max-w-[400px] space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    Create Your Account
                </h1>
                <p className="text-muted-foreground">
                    Start managing your college life with smart tools and insights.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Full Name"
                    placeholder="Enter Full Name"
                    type="text"
                    icon={<User className="h-4 w-4" />}
                    error={errors.fullName?.message}
                    {...register("fullName")}
                />

                <Input
                    label="Email Address"
                    placeholder="Enter Email Address"
                    type="email"
                    icon={<Mail className="h-4 w-4" />}
                    error={errors.email?.message}
                    {...register("email")}
                />

                <PasswordInput
                    label="Password"
                    placeholder="Enter Password"
                    error={errors.password?.message}
                    showStrengthMeter
                    {...register("password")}
                />

                <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                />

                <div className="flex items-start space-x-2 pt-2">
                    <Checkbox
                        id="agreeTerms"
                        className="mt-1"
                        {...register("agreeTerms", {
                            // Manual coercion because Checkbox uses native input which implies boolean | string
                            setValueAs: (v) => v === true || v === "true"
                        })}
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-muted-foreground leading-snug">
                        I agree to the <Link href="/terms" className="underline hover:text-foreground">Terms</Link> & <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
                        {errors.agreeTerms && <p className="text-red-500 font-medium mt-1">{errors.agreeTerms.message}</p>}
                    </label>
                </div>

                <Button
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-200/50 mt-2"
                    size="lg"
                    disabled={isLoading || !isValid}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating Account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </Button>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#F8F9FC] px-2 text-muted-foreground">Or</span>
                </div>
            </div>

            <div className="space-y-3">
                <OAuthButton provider="google" />
                <OAuthButton provider="github" />
            </div>

            <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-80 transition-opacity"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}
