import Image from "next/image";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <div className={`relative ${className} overflow-hidden rounded-lg shadow-md`}>
            <Image
                src="/logo.png"
                alt="BSDK AI Logo"
                fill
                className="object-cover"
            />
        </div>
    );
}
