import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function SectionWrapper({
    children,
    className,
    id,
    ...props
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("w-full py-16 md:py-24 lg:py-32 overflow-hidden", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6">{children}</div>
        </section>
    );
}
