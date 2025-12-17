import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
    const links = {
        product: [
            { label: "Dashboard", href: "#" },
            { label: "CGPA Predictor", href: "#" },
            { label: "Attendance Manager", href: "#" },
            { label: "Bunk Calculator", href: "/bunk-calculator" },
            { label: "Assignment Tracker", href: "/assignments" },
            { label: "Notes Scanner", href: "/notes-scanner" },
            { label: "Timetable Generator", href: "/timetable" },
        ],
        resources: [
            { label: "Blog", href: "#" },
            { label: "Documentation", href: "#" },
            { label: "FAQs", href: "#" },
        ],
        company: [
            { label: "About", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Careers", href: "#" },
        ],
        legal: [
            { label: "Terms", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Cookies", href: "#" },
        ],
    };

    return (
        <footer className="w-full border-t border-border bg-background py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Logo />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-foreground leading-none">
                                    BSDK AI
                                </span>
                                <span className="text-[10px] font-medium text-muted-foreground leading-none">
                                    BrightSight Student Development Kit – AI
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            Your Smart College Life OS. Managing attendance, grades, and assignments so you can focus on what matters.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Product</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {links.product.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {links.resources.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="font-semibold text-foreground mt-8 mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {links.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {links.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>© 2025 BSDK AI — Smart College Life OS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
