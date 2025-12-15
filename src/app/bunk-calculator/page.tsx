import { Metadata } from 'next';
import BunkCalculatorCard from '@/components/BunkCalculatorCard';

export const metadata: Metadata = {
    title: 'Bunk Calculator | BSDK AI',
    description: 'Calculate safe bunks and manage your attendance effectively.',
};

export default function BunkCalculatorPage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6">
            <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-500">
                <BunkCalculatorCard />
            </div>
        </main>
    );
}
