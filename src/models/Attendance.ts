import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAttendance extends Document {
    userId: mongoose.Types.ObjectId;
    subject: string;
    attendedClasses: number;
    totalClasses: number;
    lastUpdated: Date;
}

const AttendanceSchema: Schema<IAttendance> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    attendedClasses: { type: Number, default: 0 },
    totalClasses: { type: Number, default: 0 },
}, {
    timestamps: { createdAt: true, updatedAt: 'lastUpdated' },
});

// Virtual for percentage
AttendanceSchema.virtual('percentage').get(function (this: IAttendance) {
    if (this.totalClasses === 0) return 0;
    return (this.attendedClasses / this.totalClasses) * 100;
});

const Attendance: Model<IAttendance> = mongoose.models.Attendance || mongoose.model<IAttendance>('Attendance', AttendanceSchema);

export default Attendance;
