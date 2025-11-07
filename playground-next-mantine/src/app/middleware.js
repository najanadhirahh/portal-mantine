import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  const isPublic = pathname.startsWith('/signin') || pathname.startsWith('/register') || pathname.startsWith('/forgot-password');

  // If logged in and tries to go to public route → redirect to dashboard
  if (token && isPublic) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If not logged in and tries to access private route → redirect to signin
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
