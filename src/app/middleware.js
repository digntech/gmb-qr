import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname
  const isGmbPath = path.startsWith('/gmb')
  const token = request.cookies.get('auth_token')?.value

  if (isGmbPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/gmb/:path*',
}

