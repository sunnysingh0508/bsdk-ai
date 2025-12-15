"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background/95 backdrop-blur px-4 md:px-6">
            <div className="flex items-center gap-4">
                <button className="lg:hidden text-muted-foreground hover:text-foreground">
                    <Menu className="h-6 w-6" />
                </button>
                <div className="hidden md:flex items-center text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Dashboard</span>
                    <span className="mx-2">/</span>
                    <span>Overview</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block w-64">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-9 w-full rounded-full border border-input bg-muted/50 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                    />
                </div>

                <Link href="/notifications" className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted/50 transition-colors">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
                </Link>

                <Link href="/profile" className="h-8 w-8 rounded-full bg-primary p-[2px] cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="relative h-full w-full rounded-full bg-background overflow-hidden">
                        <Image
                            src="https://github.com/shadcn.png"
                            alt="User"
                            fill
                            className="object-cover"
                        />
                    </div>
                </Link>
            </div>
        </header>
    );
}
