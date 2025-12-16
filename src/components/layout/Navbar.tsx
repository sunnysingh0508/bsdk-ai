import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Logo />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-foreground leading-none">
                            BSDK AI
                        </span>
                        <span className="text-[10px] font-medium text-muted-foreground leading-none">
                            BrightSight Student Development Kit – AI
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#features" className="hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="hover:text-primary transition-colors">
                        How it Works
                    </Link>
                    <Link href="#testimonials" className="hover:text-primary transition-colors">
                        Testimonials
                    </Link>
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
                        Log in
                    </Link>
                    <Link href="/signup">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
