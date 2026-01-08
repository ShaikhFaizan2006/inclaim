import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyTokenEdge } from './lib/auth-edge';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only protect the dashboard route
    if (pathname.startsWith('/Admin/DashBoard')) {
        // Get token from cookie
        const token = request.cookies.get('adminToken')?.value;

        // If no token, redirect to login
        if (!token) {
            const loginUrl = new URL('/Admin', request.url);
            return NextResponse.redirect(loginUrl);
        }

        // Verify the token (Edge Runtime compatible)
        const payload = await verifyTokenEdge(token);

        // If token is invalid or expired, redirect to login
        if (!payload) {
            const loginUrl = new URL('/Admin', request.url);
            const response = NextResponse.redirect(loginUrl);
            // Clear the invalid token
            response.cookies.delete('adminToken');
            return response;
        }

        // Token is valid, allow access
        return NextResponse.next();
    }

    // Allow all other routes (including login page)
    return NextResponse.next();
}

// Configure which routes should be processed by this middleware
export const config = {
    matcher: [
        '/Admin/:path*',
    ],
};
