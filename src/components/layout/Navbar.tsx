import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";


export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border bg-background/60 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center gap-2">

                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="BSDK AI Logo"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <span className="text-xl font-bold tracking-tight text-foreground leading-none">
                            BSDK AI
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
