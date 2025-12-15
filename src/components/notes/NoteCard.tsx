"use client";

import React from 'react';
import { FileText, Image as ImageIcon, Download, Trash2, Eye, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ViewMode } from './NotesFilters';

export interface Note {
    id: string;
    title: string;
    subject: string;
    tags: string[];
    date: string;
    size: string;
    type: 'PDF' | 'Image';
    previewUrl?: string; // Optional if you have thumbnails
}

interface NoteCardProps {
    note: Note;
    viewMode: ViewMode;
    onPreview: (note: Note) => void;
    onDelete: (id: string) => void;
}

export default function NoteCard({ note, viewMode, onPreview, onDelete }: NoteCardProps) {
    const FileIcon = note.type === 'PDF' ? FileText : ImageIcon;

    if (viewMode === 'list') {
        return (
            <div
                onClick={() => onPreview(note)}
                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:bg-muted/50 hover:border-border/80 transition-all cursor-pointer"
            >
                <div className={cn(
                    "p-2.5 rounded-lg shrink-0",
                    note.type === 'PDF' ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"
                )}>
                    <FileIcon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="md:col-span-2">
                        <h3 className="text-sm font-bold text-foreground truncate">{note.title}</h3>
                        <p className="text-xs text-muted-foreground truncate">{note.tags.join(', ')}</p>
                    </div>
                    <div className="hidden md:block">
                        <span className={cn(
                            "text-[10px] font-medium px-2 py-0.5 rounded-full border",
                            getTagColor(note.subject)
                        )}>
                            {note.subject}
                        </span>
                    </div>
                    <div className="hidden md:flex flex-col items-end text-xs text-muted-foreground">
                        <span>{note.date}</span>
                        <span>{note.size}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={(e) => { e.stopPropagation(); /* download logic */ }}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                        <Download className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onDelete(note.id); }}
                        className="p-1.5 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="group bg-card border border-border rounded-[24px] overflow-hidden hover:border-border/80 hover:-translate-y-1 transition-all duration-300">
            {/* Preview Area */}
            <div className="relative aspect-[4/3] bg-muted/50 p-6 flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => onPreview(note)}>
                {/* Mock Preview Content */}
                <div className="w-full h-full bg-white/5 rounded-xl border border-white/5 flex flex-col p-4 gap-2 opacity-50 group-hover:opacity-70 transition-opacity">
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                    <div className="h-2 w-full bg-white/10 rounded-full mt-4" />
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-[2px]">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4" />
                        Preview
                    </button>
                </div>

                <div className="absolute top-3 right-3">
                    <span className={cn(
                        "text-[10px] font-bold px-2 py-1 rounded-lg bg-black/60 text-white backdrop-blur-md"
                    )}>
                        {note.type}
                    </span>
                </div>
            </div>

            {/* Info Area */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div className="min-w-0 pr-2">
                        <h3 className="text-base font-bold text-foreground truncate mb-1" title={note.title}>{note.title}</h3>
                        <span className={cn(
                            "inline-block text-[10px] font-medium px-2 py-0.5 rounded-full border mb-2",
                            getTagColor(note.subject)
                        )}>
                            {note.subject}
                        </span>
                    </div>
                    <button
                        onClick={(e) => { e.preventDefault(); /* menu logic */ }}
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4 max-h-[44px] overflow-hidden">
                    {note.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-[11px] text-muted-foreground">{note.date}</span>
                    <div className="flex gap-1">
                        <button
                            onClick={() => onDelete(note.id)}
                            className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-red-400 transition-colors"
                            title="Delete"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <button
                            className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                            title="Download"
                        >
                            <Download className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getTagColor(subject: string) {
    // Simple hashing simulation for consistent colors
    const colors = [
        "bg-blue-500/10 text-blue-400 border-blue-500/20",
        "bg-purple-500/10 text-purple-400 border-purple-500/20",
        "bg-green-500/10 text-green-400 border-green-500/20",
        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        "bg-pink-500/10 text-pink-400 border-pink-500/20",
        "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    ];
    let hash = 0;
    for (let i = 0; i < subject.length; i++) {
        hash = subject.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}
