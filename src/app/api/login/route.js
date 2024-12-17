import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request) {
  const { username, password } = await request.json()

  if (
    username === process.env.AUTH_USERNAME &&
    password === process.env.AUTH_PASSWORD
  ) {
    const token = Math.random().toString(36).substr(2)
    cookies().set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    })

    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}

