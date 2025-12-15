import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                    {
                        "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 border-0":
                            variant === "primary",
                        "bg-secondary text-secondary-foreground border border-input shadow-sm hover:bg-secondary/80":
                            variant === "secondary",
                        "bg-background border border-input text-foreground hover:bg-muted":
                            variant === "outline",
                        "bg-transparent text-foreground hover:bg-muted":
                            variant === "ghost",

                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-6 text-base": size === "md",
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
