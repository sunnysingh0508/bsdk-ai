import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { ValueProps } from "@/components/sections/ValueProps";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <FeaturesGrid />
        <DashboardShowcase />
        <ValueProps />
        <HowItWorks />
        <SocialProof />
        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
