import { NextResponse } from 'next/server';

export async function POST(request) {
    // Parse the request body
    const { username, password } = await request.json();

    // Hardcoded user credentials
    const validUsername = 'user';
    const validPassword = 'password123';

    // Check if the provided credentials are valid
    if (username === validUsername && password === validPassword) {
        return NextResponse.json({ token: 'mock-jwt-token' });
    }

    // If credentials are invalid, return a 401 error
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
