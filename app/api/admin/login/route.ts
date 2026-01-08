import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        // Connect to database
        await connectDB();

        // Parse request body
        const { email, password } = await request.json();

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find admin by email
        const admin = await Admin.findOne({ email: email.toLowerCase() });

        if (!admin) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Verify password
        const isPasswordValid = await admin.comparePassword(password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Generate JWT token
        const token = generateToken({
            adminId: admin._id.toString(),
            email: admin.email,
        });

        // Create response with token
        const response = NextResponse.json(
            {
                message: 'Login successful',
                token,
                admin: {
                    id: admin._id,
                    email: admin.email,
                },
            },
            { status: 200 }
        );

        // Set HTTP-only cookie for middleware
        response.cookies.set('adminToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
