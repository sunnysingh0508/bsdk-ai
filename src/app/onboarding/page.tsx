"use client";

import React, { useState } from 'react';
import StepWelcome from '@/components/onboarding/StepWelcome';
import StepAcademic from '@/components/onboarding/StepAcademic';
import StepSubjects from '@/components/onboarding/StepSubjects';
import StepTimetable from '@/components/onboarding/StepTimetable';
import StepNotifications from '@/components/onboarding/StepNotifications';
import StepFinish from '@/components/onboarding/StepFinish';
import ProgressBar from '@/components/onboarding/ProgressBar';

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        academic: null,
        subjects: { subjects: [] },
        timetable: null,
        notifications: null
    });

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const updateData = (section: string, data: any) => {
        setFormData(prev => ({ ...prev, [section]: data }));
    };

    const RENDER_STEPS = [
        <StepWelcome key="welcome" onNext={nextStep} />,
        <StepAcademic key="academic" data={formData.academic} onUpdate={(d) => updateData('academic', d)} onNext={nextStep} onBack={prevStep} />,
        <StepSubjects key="subjects" data={formData.subjects} onUpdate={(d) => updateData('subjects', d)} onNext={nextStep} onBack={prevStep} />,
        <StepTimetable key="timetable" data={formData.timetable} onUpdate={(d) => updateData('timetable', d)} onNext={nextStep} onBack={prevStep} />,
        <StepNotifications key="notifications" data={formData.notifications} onUpdate={(d) => updateData('notifications', d)} onNext={nextStep} onBack={prevStep} />,
        <StepFinish key="finish" />
    ];

    // Steps excluding Welcome and Finish for the progress bar
    const TOTAL_PROGRESS_STEPS = 4;
    const showProgressBar = currentStep > 0 && currentStep < RENDER_STEPS.length - 1;
    const progressStep = currentStep; // 1-based index aligns with currentStep if Welcome is 0

    return (
        <main className="min-h-screen bg-[#0E1017] flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-2xl">

                {showProgressBar && (
                    <ProgressBar currentStep={progressStep} totalSteps={TOTAL_PROGRESS_STEPS} />
                )}

                <div className="bg-[#181B23] border border-white/5 rounded-[32px] p-6 md:p-12 shadow-2xl shadow-black/50 relative overflow-hidden">
                    {/* Decorative Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#6366F1]/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        {RENDER_STEPS[currentStep]}
                    </div>
                </div>

            </div>
        </main>
    );
}
