"use client";

import React, { useState, useMemo } from 'react';
import { ClipboardList } from 'lucide-react';
import AssignmentStats from '@/components/AssignmentStats';
import AssignmentFilters from '@/components/AssignmentFilters';
import AssignmentCard, { Assignment, AssignmentPriority, AssignmentStatus } from '@/components/AssignmentCard';
import AssignmentModal from '@/components/AssignmentModal';

// Dummy Initial Data
const INITIAL_ASSIGNMENTS: Assignment[] = [
    {
        id: '1',
        title: 'Linear Algebra Worksheet 3',
        subject: 'Math',
        description: 'Complete problems 1-15 from Chapter 4.',
        dueDate: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
        status: 'Pending',
        priority: 'High',
        progress: 0,
    },
    {
        id: '2',
        title: 'Physics Lab Report',
        subject: 'Physics',
        description: 'Write up the results from the pendulum experiment.',
        dueDate: new Date(Date.now() - 86400000).toISOString(), // 1 day ago (Overdue)
        status: 'Overdue',
        priority: 'High',
        progress: 40,
    },
    {
        id: '3',
        title: 'History Essay Draft',
        subject: 'History',
        description: 'First draft of the research paper on industrial revolution.',
        dueDate: new Date(Date.now() + 86400000 * 5).toISOString(),
        status: 'In Progress',
        priority: 'Medium',
        progress: 60,
    },
    {
        id: '4',
        title: 'CS Algorithm Analysis',
        subject: 'CS',
        description: 'Submit the complexity analysis for the sorting algorithms.',
        dueDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
        status: 'Pending',
        priority: 'Medium',
        progress: 0,
    },
    {
        id: '5',
        title: 'English Lit Reading',
        subject: 'English',
        dueDate: new Date(Date.now() - 86400000 * 2).toISOString(),
        status: 'Completed',
        priority: 'Low',
        progress: 100,
    },
];

export default function AssignmentManagerPage() {
    const [assignments, setAssignments] = useState<Assignment[]>(INITIAL_ASSIGNMENTS);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentFilter, setCurrentFilter] = useState('All'); // All, Pending, Completed, Overdue
    const [currentSort, setCurrentSort] = useState('DueDate'); // DueDate, Priority, Subject
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    // Derived Statistics
    const stats = useMemo(() => {
        return {
            total: assignments.length,
            pending: assignments.filter(a => a.status === 'Pending' || a.status === 'In Progress').length,
            completed: assignments.filter(a => a.status === 'Completed').length,
            overdue: assignments.filter(a => a.status === 'Overdue').length,
        };
    }, [assignments]);

    // Handle Add/Edit Save
    const handleSave = (assignmentData: Omit<Assignment, 'id'>) => {
        if (editingId) {
            setAssignments(prev => prev.map(a => a.id === editingId ? { ...assignmentData, id: editingId } : a));
            setEditingId(null);
        } else {
            const newAssignment: Assignment = {
                ...assignmentData,
                id: Math.random().toString(36).substr(2, 9),
            };
            setAssignments(prev => [newAssignment, ...prev]);
        }
    };

    const handleEdit = (id: string) => {
        setEditingId(id);
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            setAssignments(prev => prev.filter(a => a.id !== id));
        }
    };

    const handleToggleComplete = (id: string) => {
        setAssignments(prev => prev.map(a => {
            if (a.id === id) {
                const newStatus = a.status === 'Completed' ? 'Pending' : 'Completed';
                return { ...a, status: newStatus, progress: newStatus === 'Completed' ? 100 : 0 };
            }
            return a;
        }));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingId(null);
    };

    // Filter & Sort Logic
    const filteredAssignments = useMemo(() => {
        let result = assignments.filter(a => {
            // Search
            const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.subject.toLowerCase().includes(searchQuery.toLowerCase());

            // Filter
            let matchesFilter = true;
            if (currentFilter === 'Pending') matchesFilter = a.status === 'Pending' || a.status === 'In Progress';
            else if (currentFilter === 'Completed') matchesFilter = a.status === 'Completed';
            else if (currentFilter === 'Overdue') matchesFilter = a.status === 'Overdue';

            return matchesSearch && matchesFilter;
        });

        // Sort
        result.sort((a, b) => {
            if (currentSort === 'DueDate') {
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            } else if (currentSort === 'Priority') {
                const priorityWeight = { 'High': 3, 'Medium': 2, 'Low': 1 };
                return priorityWeight[b.priority] - priorityWeight[a.priority];
            } else if (currentSort === 'Subject') {
                return a.subject.localeCompare(b.subject);
            }
            return 0;
        });

        // Always show overdue first unless filtering specifically
        if (currentSort === 'DueDate' && currentFilter === 'All') {
            // Sort by overdue status first, then by date logic above (already applied mostly)
            // But let's enforce overdue on top
            result.sort((a, b) => {
                const aIsOverdue = a.status === 'Overdue' ? 1 : 0;
                const bIsOverdue = b.status === 'Overdue' ? 1 : 0;
                if (aIsOverdue !== bIsOverdue) return bIsOverdue - aIsOverdue;
                // Maintain previous sort
                return 0; // The previous sort already handled the rest, but sort is unstable sometimes
                // Let's re-apply pure date sort for non-overdue if needed, but the previous sort is sufficient if stable.
                // Actually, simplest is to just do a multi-level sort
            });
        }

        return result;
    }, [assignments, searchQuery, currentFilter, currentSort]);


    return (
        <main className="min-h-screen bg-background p-4 md:p-8 font-sans pb-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold font-heading text-foreground">Assignment Manager</h1>
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <ClipboardList className="w-6 h-6 text-primary" />
                    </div>
                </div>
                <p className="text-muted-foreground mb-8 max-w-2xl">
                    Organize, track, and complete all your assignments before the deadline.
                </p>

                {/* Stats */}
                <AssignmentStats
                    total={stats.total}
                    pending={stats.pending}
                    completed={stats.completed}
                    overdue={stats.overdue}
                />

                {/* Controls */}
                <AssignmentFilters
                    currentFilter={currentFilter}
                    currentSort={currentSort}
                    onSearch={setSearchQuery}
                    onFilterChange={setCurrentFilter}
                    onSortChange={setCurrentSort}
                    onAddClick={() => setIsModalOpen(true)}
                />

                {/* List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {filteredAssignments.length > 0 ? (
                        filteredAssignments.map(assignment => (
                            <AssignmentCard
                                key={assignment.id}
                                assignment={assignment}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onToggleComplete={handleToggleComplete}
                            />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-muted-foreground border border-border rounded-3xl bg-muted/50">
                            <p className="text-lg">No assignments found matching your filters.</p>
                        </div>
                    )}
                </div>

                {/* Modal */}
                <AssignmentModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    initialData={editingId ? assignments.find(a => a.id === editingId) : null}
                />

            </div>
        </main>
    );
}
