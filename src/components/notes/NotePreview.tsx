"use client";

import React from 'react';
import { X, Download, FileText, Image as ImageIcon, Calendar, Tag, Trash2 } from 'lucide-react';
import { Note } from './NoteCard';
import { cn } from '@/lib/utils';

interface NotePreviewProps {
    note: Note | null;
    onClose: () => void;
    onDelete: (id: string) => void;
}

export default function NotePreview({ note, onClose, onDelete }: NotePreviewProps) {
    if (!note) return null;

    const FileIcon = note.type === 'PDF' ? FileText : ImageIcon;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-[#181B23] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-[600px]">

                {/* Close Button Mobile */}
                <button onClick={onClose} className="absolute top-4 right-4 z-10 md:hidden p-2 bg-black/50 rounded-full text-white">
                    <X className="w-5 h-5" />
                </button>

                {/* Left: Preview Area */}
                <div className="flex-1 bg-[#0E1017] flex items-center justify-center p-8 relative">
                    <div className="w-full h-full bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4">
                        <div className={cn(
                            "p-6 rounded-2xl",
                            note.type === 'PDF' ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"
                        )}>
                            <FileIcon className="w-16 h-16" />
                        </div>
                        <p className="text-gray-500 text-sm">Preview not available in demo</p>
                    </div>
                </div>

                {/* Right: Details & Actions */}
                <div className="w-full md:w-[350px] flex flex-col border-l border-white/5 bg-[#181B23]">
                    {/* Header */}
                    <div className="p-6 border-b border-white/5 flex justify-between items-start">
                        <div>
                            <span className="text-[10px] uppercase font-bold text-[#6366F1] tracking-wider mb-1 block">
                                {note.subject}
                            </span>
                            <h2 className="text-xl font-bold text-white leading-tight">{note.title}</h2>
                        </div>
                        <button onClick={onClose} className="hidden md:block text-gray-400 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Metadata */}
                    <div className="p-6 space-y-6 flex-1 overflow-y-auto">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">Added on {note.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <FileIcon className="w-4 h-4" />
                                <span className="text-sm">{note.type} • {note.size}</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <Tag className="w-4 h-4 text-[#6366F1]" />
                                Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {note.tags.map(tag => (
                                    <span key={tag} className="text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-white/5 bg-[#0E1017]/30 space-y-3">
                        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#6366F1] hover:bg-[#5558e6] text-white font-bold transition-all shadow-lg shadow-[#6366F1]/20">
                            <Download className="w-4 h-4" />
                            Download Note
                        </button>
                        <button
                            onClick={() => { onDelete(note.id); onClose(); }}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-red-500/10 text-gray-400 hover:text-red-500 font-medium transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
