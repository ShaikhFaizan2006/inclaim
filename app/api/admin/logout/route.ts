import { NextResponse } from 'next/server';

/**
 * Logout endpoint - clears the admin token cookie
 */
export async function POST() {
    try {
        const response = NextResponse.json(
            { message: 'Logout successful' },
            { status: 200 }
        );

        // Clear the admin token cookie
        response.cookies.delete('adminToken');

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
