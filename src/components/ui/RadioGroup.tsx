"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react";

interface RadioGroupContextValue {
    value: string;
    onValueChange: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | undefined>(undefined);

const RadioGroup = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value?: string; defaultValue?: string; onValueChange?: (value: string) => void }
>(({ className, value, defaultValue, onValueChange, ...props }, ref) => {
    const [currentValue, setCurrentValue] = React.useState(value || defaultValue || "");

    const handleValueChange = (newValue: string) => {
        if (value === undefined) {
            setCurrentValue(newValue);
        }
        onValueChange?.(newValue);
    };

    React.useEffect(() => {
        if (value !== undefined) setCurrentValue(value);
    }, [value]);

    return (
        <RadioGroupContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
            <div className={cn("grid gap-2", className)} ref={ref} {...props} />
        </RadioGroupContext.Provider>
    )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, value, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext);
    const checked = context?.value === value;

    return (
        <button
            type="button"
            role="radio"
            aria-checked={checked}
            ref={ref}
            onClick={() => context?.onValueChange(value)}
            className={cn(
                "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center",
                className
            )}
            {...props}
        >
            {checked && <div className="h-2.5 w-2.5 rounded-full bg-current fill-current" />}
        </button>
    )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
