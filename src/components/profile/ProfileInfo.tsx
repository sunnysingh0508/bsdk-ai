"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, BookOpen, Hash, Edit2, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProfileInfo() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "Sunny Singh",
        email: "sunny@bsdk.ai",
        phone: "+91 98765 43210",
        college: "Delhi Technological University",
        course: "B.Tech Computer Science",
        semester: "6"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // Logic to save would go here
    };

    return (
        <div className="bg-card rounded-[24px] p-6 border border-border h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-foreground">Basic Information</h2>
                <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                        isEditing
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                >
                    {isEditing ? <Save className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
                    {isEditing ? "Save Changes" : "Edit Profile"}
                </button>
            </div>

            <div className="space-y-5">
                <InputField
                    icon={User}
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    isEditing={isEditing}
                    onChange={handleChange}
                />
                <InputField
                    icon={Mail}
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    isEditing={false} // Email typically not editable directly
                    onChange={handleChange}
                    readOnly
                />
                <InputField
                    icon={Phone}
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    isEditing={isEditing}
                    onChange={handleChange}
                />
                <div className="h-px bg-white/5 my-2" />
                <InputField
                    icon={BookOpen}
                    label="College / University"
                    name="college"
                    value={formData.college}
                    isEditing={isEditing}
                    onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-4">
                    <InputField
                        icon={Hash}
                        label="Course / Branch"
                        name="course"
                        value={formData.course}
                        isEditing={isEditing}
                        onChange={handleChange}
                    />
                    <div className="space-y-2">
                        <label className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                            <BookOpen className="w-3.5 h-3.5" />
                            Semester
                        </label>
                        {isEditing ? (
                            <select
                                name="semester"
                                value={formData.semester}
                                onChange={handleChange}
                                className="w-full bg-background border border-input rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                            </select>
                        ) : (
                            <div className="px-4 py-2.5 rounded-xl bg-background border border-transparent text-sm text-muted-foreground">
                                Semester {formData.semester}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputField({ icon: Icon, label, value, isEditing, onChange, name, readOnly }: any) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                <Icon className="w-3.5 h-3.5" />
                {label}
            </label>
            {isEditing && !readOnly ? (
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-background border border-input rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
            ) : (
                <div className={cn(
                    "px-4 py-2.5 rounded-xl bg-background border border-transparent text-sm",
                    readOnly ? "text-muted-foreground cursor-not-allowed" : "text-foreground"
                )}>
                    {value}
                </div>
            )}
        </div>
    )
}
