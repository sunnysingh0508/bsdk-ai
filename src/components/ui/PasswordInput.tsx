import * as React from "react";
import { Input, InputProps } from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends Omit<InputProps, "type"> {
    showStrengthMeter?: boolean;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, showStrengthMeter, value, onChange, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const [strength, setStrength] = React.useState(0);

        const calculateStrength = (val: string) => {
            let score = 0;
            if (!val) return 0;
            if (val.length > 5) score += 1;
            if (val.length > 7) score += 1;
            if (/[A-Z]/.test(val)) score += 1;
            if (/[0-9]/.test(val)) score += 1;
            if (/[^A-Za-z0-9]/.test(val)) score += 1;
            return score; // Max 5
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (showStrengthMeter) {
                setStrength(calculateStrength(e.target.value));
            }
            onChange?.(e);
        };

        const getStrengthColor = (score: number) => {
            if (score === 0) return "bg-gray-200";
            if (score <= 2) return "bg-red-500";
            if (score <= 4) return "bg-yellow-500";
            return "bg-green-500";
        };

        const getStrengthText = (score: number) => {
            if (score === 0) return "";
            if (score <= 2) return "Weak";
            if (score <= 4) return "Medium";
            return "Strong";
        };

        return (
            <div className="w-full space-y-2">
                <Input
                    type={showPassword ? "text" : "password"}
                    className={cn("pr-10", className)}
                    ref={ref}
                    onChange={handleInputChange}
                    value={value}
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
                    {...props}
                />
                {showStrengthMeter && (value as string)?.length > 0 && (
                    <div className="space-y-1">
                        <div className="flex h-1 w-full overflow-hidden rounded-full bg-gray-100">
                            <div
                                className={cn("h-full transition-all duration-500 ease-out", getStrengthColor(strength))}
                                style={{ width: `${(strength / 5) * 100}%` }}
                            />
                        </div>
                        <p className={cn("text-xs font-medium text-right transition-colors",
                            strength <= 2 ? "text-red-500" : strength <= 4 ? "text-yellow-600" : "text-green-600"
                        )}>
                            {getStrengthText(strength)}
                        </p>
                    </div>
                )}
            </div>
        );
    }
);
PasswordInput.displayName = "PasswordInput";
