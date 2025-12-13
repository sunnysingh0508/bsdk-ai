"use client";

import React, { useState, useMemo } from 'react';
import { Files } from 'lucide-react';
import NotesFilters, { SortOption, ViewMode } from '@/components/notes/NotesFilters';
import NotesGrid from '@/components/notes/NotesGrid';
import NotePreview from '@/components/notes/NotePreview';
import { Note } from '@/components/notes/NoteCard';

// Mock Data
const MOCK_NOTES: Note[] = [
    { id: '1', title: 'Data Structures Unit 1', subject: 'Data Structures', tags: ['Graph', 'Trees', 'BFS'], date: '2 days ago', size: '2.4 MB', type: 'PDF' },
    { id: '2', title: 'OS Process Scheduling', subject: 'Operating Systems', tags: ['Scheduling', 'CPU'], date: '5 days ago', size: '1.8 MB', type: 'Image' },
    { id: '3', title: 'DBMS Normalization', subject: 'DBMS', tags: ['SQL', '3NF', 'BCNF'], date: '1 week ago', size: '3.1 MB', type: 'PDF' },
    { id: '4', title: 'React Hooks Cheatsheet', subject: 'Web Development', tags: ['Frontend', 'React'], date: '2 weeks ago', size: '500 KB', type: 'Image' },
    { id: '5', title: 'Computer Networks - OSI Model', subject: 'Networks', tags: ['OSI', 'TCP/IP'], date: '3 weeks ago', size: '4.2 MB', type: 'PDF' },
];

const SUBJECTS = Array.from(new Set(MOCK_NOTES.map(n => n.subject)));

export default function NotesPage() {
    const [notes, setNotes] = useState<Note[]>(MOCK_NOTES);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("All");
    const [sortBy, setSortBy] = useState<SortOption>("newest");
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [previewNote, setPreviewNote] = useState<Note | null>(null);

    // Filter & Sort Logic
    const filteredNotes = useMemo(() => {
        let result = notes.filter(note => {
            const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                note.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesSubject = selectedSubject === 'All' || note.subject === selectedSubject;
            return matchesSearch && matchesSubject;
        });

        // Sorting (Mock implementation)
        if (sortBy === 'alphabetical') {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }
        // Newest/Oldest logic would require real dates, keeping it simple for mock
        if (sortBy === 'oldest') {
            result.reverse();
        }

        return result;
    }, [notes, searchQuery, selectedSubject, sortBy]);

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this note?")) {
            setNotes(prev => prev.filter(n => n.id !== id));
        }
    };

    return (
        <main className="min-h-screen bg-[#0E1017] p-4 md:p-8 font-sans pb-20">
            <div className="max-w-7xl mx-auto animate-in fade-in duration-500">

                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#6366F1]/10 rounded-lg">
                        <Files className="w-8 h-8 text-[#6366F1]" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold font-heading text-white">Notes Library</h1>
                    </div>
                </div>
                <p className="text-gray-400 mb-8 ml-14">
                    Access, organize, and manage all your scanned and uploaded notes in one place.
                </p>

                {/* Controls */}
                <NotesFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedSubject={selectedSubject}
                    setSelectedSubject={setSelectedSubject}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    subjects={SUBJECTS}
                />

                {/* Grid */}
                <NotesGrid
                    notes={filteredNotes}
                    viewMode={viewMode}
                    onPreview={setPreviewNote}
                    onDelete={handleDelete}
                />

                {/* Preview Modal */}
                {previewNote && (
                    <NotePreview
                        note={previewNote}
                        onClose={() => setPreviewNote(null)}
                        onDelete={handleDelete}
                    />
                )}

            </div>
        </main>
    );
}
