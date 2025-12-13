"use client";

import React from 'react';
import NoteCard, { Note } from './NoteCard';
import { ViewMode } from './NotesFilters';
import { cn } from '@/lib/utils';
import EmptyState from './EmptyState';

interface NotesGridProps {
    notes: Note[];
    viewMode: ViewMode;
    onPreview: (note: Note) => void;
    onDelete: (id: string) => void;
}

export default function NotesGrid({ notes, viewMode, onPreview, onDelete }: NotesGridProps) {
    if (notes.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className={cn(
            "animate-in fade-in duration-500",
            viewMode === 'grid'
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-3"
        )}>
            {notes.map(note => (
                <NoteCard
                    key={note.id}
                    note={note}
                    viewMode={viewMode}
                    onPreview={onPreview}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
