"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Check } from "lucide-react"

interface SelectContextValue {
    value: string;
    onValueChange: (value: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextValue | undefined>(undefined);

const Select = ({ children, defaultValue, value, onValueChange }: any) => {
    const [open, setOpen] = React.useState(false);
    const [internalVal, setInternalVal] = React.useState(defaultValue || "");

    const val = value !== undefined ? value : internalVal;

    const handleValueChange = (newValue: string) => {
        if (value === undefined) setInternalVal(newValue);
        onValueChange?.(newValue);
        setOpen(false);
    };

    return (
        <SelectContext.Provider value={{ value: val, onValueChange: handleValueChange, open, setOpen }}>
            <div className="relative">{children}</div>
        </SelectContext.Provider>
    );
};

const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SelectContext)!;
    return (
        <button
            type="button"
            onClick={() => setOpen(!open)}
            ref={ref}
            className={cn(
                "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
    );
});
SelectTrigger.displayName = "SelectTrigger"

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
    placeholder?: string;
}

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(({ className, placeholder, ...props }, ref) => {
    const { value } = React.useContext(SelectContext)!;
    return (
        <span ref={ref} className={className} {...props}>
            {value || placeholder}
        </span>
    );
});
SelectValue.displayName = "SelectValue";

const SelectContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => {
    const { open } = React.useContext(SelectContext)!;
    if (!open) return null;
    return (
        <div
            ref={ref}
            className={cn(
                "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 w-full mt-1",
                className
            )}
            {...props}
        >
            <div className="p-1">{children}</div>
        </div>
    );
});
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(({ className, children, value, ...props }, ref) => {
    const { onValueChange, value: selectedValue } = React.useContext(SelectContext)!;
    return (
        <div
            ref={ref}
            onClick={(e) => {
                e.stopPropagation();
                onValueChange(value);
            }}
            className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-white/10 cursor-pointer",
                className
            )}
            {...props}
        >
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                {selectedValue === value && <Check className="h-4 w-4" />}
            </span>
            <span className="truncate">{children}</span>
        </div>
    );
});
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue }
