import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, extractTokenFromHeader } from '@/lib/auth';

export async function GET(request: NextRequest) {
    try {
        // Extract token from Authorization header
        const authHeader = request.headers.get('Authorization');
        const token = extractTokenFromHeader(authHeader);

        if (!token) {
            return NextResponse.json(
                { message: 'No token provided' },
                { status: 401 }
            );
        }

        // Verify token
        const payload = verifyToken(token);

        if (!payload) {
            return NextResponse.json(
                { message: 'Invalid or expired token' },
                { status: 401 }
            );
        }

        // Return admin information
        return NextResponse.json(
            {
                message: 'Token is valid',
                admin: {
                    id: payload.adminId,
                    email: payload.email,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Token verification error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
