"use client";

import React, { useState } from 'react';
import { HelpCircle, Rocket, User, Calculator, BookOpen, ScanLine, Calendar } from 'lucide-react';
import SearchBar from '@/components/help/SearchBar';
import HelpCategoryCard from '@/components/help/HelpCategoryCard';
import FAQAccordion from '@/components/help/FAQAccordion';
import ContactSupport from '@/components/help/ContactSupport';
import FeedbackForm from '@/components/help/FeedbackForm';

const FAQs = [
    { question: "How does the attendance tracker work?", answer: "The attendance tracker allows you to log your daily classes. Based on your inputs, it calculates your current percentage and tells you how many classes you can afford to bunk or need to attend to maintain your target." },
    { question: "How is CGPA calculated?", answer: "We use the standard university formula: (Sum of (Grade Point × Credit)) / (Sum of Credits). You can input your expected grades in the CGPA Predictor tool to estimate your score." },
    { question: "How do I reset my password?", answer: "Go to Settings > Privacy & Security to change your password. If you are logged out, click 'Forgot Password' on the login screen." },
    { question: "Can I edit my timetable later?", answer: "Yes! Navigate to the Timetable Generator page and click 'Edit Configuration' to modify your subjects, hours, or preferences." },
    { question: "How do notifications work?", answer: "You receive alerts for upcoming assignments, low attendance warnings, and timetable changes. You can customize which alerts to receive in Settings > Notifications." },
];

const CATEGORIES = [
    { icon: Rocket, title: "Getting Started", description: "New to BSDK AI? Start here." },
    { icon: User, title: "Account & Login", description: "Manage profile and security." },
    { icon: Calculator, title: "Attendance & Bunk", description: "Master your attendance logic." },
    { icon: BookOpen, title: "Assignments", description: "Track deadlines efficiently." },
    { icon: ScanLine, title: "Notes Scanner", description: "Digitize your handwritten notes." },
    { icon: Calendar, title: "Timetable", description: "Auto-generate your schedule." },
];

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFAQs = FAQs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-background p-4 md:p-8 font-sans pb-20">
            <div className="max-w-5xl mx-auto animate-in fade-in duration-500">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HelpCircle className="w-8 h-8 text-primary" />
                        <h1 className="text-3xl font-bold font-heading text-foreground">Help & Support</h1>
                    </div>
                    <p className="text-muted-foreground mb-8">We’re here to help you get the most out of BSDK AI.</p>
                    <SearchBar onSearch={setSearchQuery} />
                </div>

                {/* Categories (Hide on Search) */}
                {!searchQuery && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {CATEGORIES.map((cat, i) => (
                            <HelpCategoryCard key={i} {...cat} onClick={() => { }} />
                        ))}
                    </div>
                )}

                {/* FAQs */}
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-xl font-bold text-foreground mb-6 text-center">
                        {searchQuery ? "Search Results" : "Frequently Asked Questions"}
                    </h2>
                    {filteredFAQs.length > 0 ? (
                        <FAQAccordion items={filteredFAQs} />
                    ) : (
                        <div className="text-center py-10">
                            <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center mx-auto mb-4">
                                <HelpCircle className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h3 className="text-foreground font-bold mb-1">No results found</h3>
                            <p className="text-sm text-muted-foreground">Try searching with different keywords.</p>
                        </div>
                    )}
                </div>

                {/* Contact & Feedback */}
                <div className="grid md:grid-cols-2 gap-6">
                    <ContactSupport />
                    <FeedbackForm />
                </div>

                {/* Links */}
                <div className="flex justify-center gap-6 mt-12 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
                    <span className="text-muted-foreground/10">•</span>
                    <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                    <span className="text-muted-foreground/10">•</span>
                    <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
                </div>

            </div>
        </main>
    );
}
