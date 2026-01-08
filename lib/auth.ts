import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

if (!process.env.JWT_SECRET) {
    console.warn('⚠️ JWT_SECRET not found in environment variables. Using fallback.');
}

export interface JWTPayload {
    adminId: string;
    email: string;
}

/**
 * Generate a JWT token for an admin
 */
export function generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d', // Token expires in 7 days
    });
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): JWTPayload | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
        return decoded;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}

/**
 * Extract token from Authorization header
 */
export function extractTokenFromHeader(authHeader: string | null): string | null {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    return authHeader.substring(7);
}
