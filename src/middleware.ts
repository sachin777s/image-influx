import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
}

export const config = {
    matcher: [
        "/edit-profile",
        "/profile"
    ]
}