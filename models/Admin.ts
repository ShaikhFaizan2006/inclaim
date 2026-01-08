import mongoose, { Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAdmin {
    email: string;
    password: string;
    createdAt: Date;
}

export interface IAdminMethods {
    comparePassword(candidatePassword: string): Promise<boolean>;
}

type AdminModel = Model<IAdmin, {}, IAdminMethods>;

const adminSchema = new Schema<IAdmin, AdminModel, IAdminMethods>({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Hash password before saving
adminSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare passwords
adminSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

// Prevent model recompilation in development
const Admin = (mongoose.models.Admin as AdminModel) ||
    mongoose.model<IAdmin, AdminModel>('Admin', adminSchema);

export default Admin;
