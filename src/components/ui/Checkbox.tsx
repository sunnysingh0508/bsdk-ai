import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, ...props }, ref) => {
        // We are using a visually hidden checkbox input and a custom styled label
        return (
            <label className="flex items-center space-x-2 cursor-pointer group">
                <div className="relative flex items-center">
                    <input
                        type="checkbox"
                        className="peer sr-only"
                        ref={ref}
                        {...props}
                    />
                    <div className={cn(
                        "h-5 w-5 rounded-md border border-gray-300 bg-white transition-all duration-200 peer-focus:ring-2 peer-focus:ring-primary/20 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center",
                        className
                    )}>
                        <Check className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" strokeWidth={3} />
                    </div>
                </div>
                {label && (
                    <span className="text-sm font-medium leading-none text-muted-foreground group-hover:text-foreground transition-colors selection:bg-none">
                        {label}
                    </span>
                )}
            </label>
        );
    }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
