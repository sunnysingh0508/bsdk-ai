"use client";

import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import ReportSelector from '@/components/reports/ReportSelector';
import ReportConfig from '@/components/reports/ReportConfig';
import ReportPreview from '@/components/reports/ReportPreview';
import ExportActions from '@/components/reports/ExportActions';
import ReportHistory from '@/components/reports/ReportHistory';

export default function ReportsPage() {
    const [selectedReportId, setSelectedReportId] = useState('attendance');

    return (
        <main className="min-h-screen bg-[#0E1017] p-4 md:p-8 font-sans pb-20">
            <div className="max-w-7xl mx-auto animate-in fade-in duration-500">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#6366F1]/10 rounded-lg">
                        <FileText className="w-8 h-8 text-[#6366F1]" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold font-heading text-white">Export & Reports</h1>
                        <p className="text-gray-400">Generate detailed academic reports and export them in multiple formats.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                    {/* Left Column: Config */}
                    <div className="xl:col-span-5 space-y-6">
                        <ReportSelector
                            selectedReportId={selectedReportId}
                            onSelect={setSelectedReportId}
                        />
                        <ReportConfig />
                        <ReportHistory />
                    </div>

                    {/* Right Column: Preview & Actions */}
                    <div className="xl:col-span-7 space-y-6">
                        {/* Sticky Container attempt - simplified for stability */}
                        <div className="xl:sticky xl:top-8 space-y-6">
                            <ReportPreview />
                            <ExportActions />
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
