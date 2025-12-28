"use client";

import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, BookOpen, Hash, Edit2, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserProfile {
    fullName: string;
    email: string;
    phone: string;
    college: string;
    course: string;
    semester: string;
}

interface ProfileInfoProps {
    user: UserProfile;
    onUpdate: (data: UserProfile) => void;
}

export default function ProfileInfo({ user, onUpdate }: ProfileInfoProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<UserProfile>(user);

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSave = () => {
        onUpdate(formData);
        setIsEditing(false);
    };

    return (
        <div className="bg-[#181B23] rounded-[24px] p-6 border border-white/5 h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white">Basic Information</h2>
                <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                        isEditing
                            ? "bg-[#6366F1] text-white hover:bg-[#5558e6]"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
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
                        <label className="text-xs text-gray-500 font-medium flex items-center gap-2">
                            <BookOpen className="w-3.5 h-3.5" />
                            Semester
                        </label>
                        {isEditing ? (
                            <select
                                name="semester"
                                value={formData.semester}
                                onChange={handleChange}
                                className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                            </select>
                        ) : (
                            <div className="px-4 py-2.5 rounded-xl bg-[#0E1017] border border-transparent text-sm text-gray-300">
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
            <label className="text-xs text-gray-500 font-medium flex items-center gap-2">
                <Icon className="w-3.5 h-3.5" />
                {label}
            </label>
            {isEditing && !readOnly ? (
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-[#0E1017] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                />
            ) : (
                <div className={cn(
                    "px-4 py-2.5 rounded-xl bg-[#0E1017] border border-transparent text-sm",
                    readOnly ? "text-gray-500 cursor-not-allowed" : "text-gray-300"
                )}>
                    {value}
                </div>
            )}
        </div>
    )
}
