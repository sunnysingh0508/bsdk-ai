import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline" | "secondary";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "bg-primary/10 text-primary": variant === "default",
                    "bg-secondary/10 text-secondary": variant === "secondary",
                    "text-foreground border border-border": variant === "outline",
                },
                className
            )}
            {...props}
        />
    );
}

export { Badge };
