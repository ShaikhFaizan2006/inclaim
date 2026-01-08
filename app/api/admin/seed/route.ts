import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

/**
 * Seed endpoint to create initial admin account
 * WARNING: Remove or protect this endpoint in production!
 */
export async function GET() {
    try {
        // Connect to database
        await connectDB();

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email: 'admin@insurecare.com' });

        if (existingAdmin) {
            return NextResponse.json(
                {
                    message: 'Admin account already exists',
                    email: 'admin@insurecare.com'
                },
                { status: 200 }
            );
        }

        // Create new admin
        const admin = new Admin({
            email: 'admin@insurecare.com',
            password: 'Admin@123', // This will be hashed automatically by the pre-save hook
        });

        await admin.save();

        return NextResponse.json(
            {
                message: 'Admin account created successfully',
                email: admin.email,
                note: 'Please change the default password after first login',
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Seed error:', error);
        return NextResponse.json(
            { message: 'Failed to create admin account', error: String(error) },
            { status: 500 }
        );
    }
}
