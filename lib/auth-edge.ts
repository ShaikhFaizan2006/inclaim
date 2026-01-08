import { jwtVerify, SignJWT } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

// Convert secret to Uint8Array for jose
const secret = new TextEncoder().encode(JWT_SECRET);

export interface JWTPayload {
    adminId: string;
    email: string;
}

/**
 * Generate a JWT token for an admin (Edge Runtime compatible)
 */
export async function generateTokenEdge(payload: JWTPayload): Promise<string> {
    const token = await new SignJWT({ ...payload })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('7d')
        .sign(secret);

    return token;
}

/**
 * Verify and decode a JWT token (Edge Runtime compatible)
 */
export async function verifyTokenEdge(token: string): Promise<JWTPayload | null> {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload as JWTPayload;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}
