import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAssignment extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    subject: string;
    dueDate: Date;
    status: 'Pending' | 'In Progress' | 'Completed';
    progress: number; // 0 to 100
    priority?: 'Low' | 'Medium' | 'High';
    createdAt: Date;
    updatedAt: Date;
}

const AssignmentSchema: Schema<IAssignment> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    subject: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },
    progress: { type: Number, default: 0, min: 0, max: 100 },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
}, {
    timestamps: true,
});

const Assignment: Model<IAssignment> = mongoose.models.Assignment || mongoose.model<IAssignment>('Assignment', AssignmentSchema);

export default Assignment;
