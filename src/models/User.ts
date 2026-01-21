import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    user_id: string; // Unique ID from Auth provider or generated
    name: string;
    email: string;
    password?: string; // Optional if using OAuth
    image?: string;
    college?: string;
    branch?: string;
    semester?: string;
    cgpa?: number;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    image: { type: String },
    college: { type: String },
    branch: { type: String },
    semester: { type: String },
    cgpa: { type: Number, default: 0 },
}, {
    timestamps: true,
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
