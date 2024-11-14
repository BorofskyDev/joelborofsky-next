// app/api/login/route.js

import { NextResponse } from 'next/server'
import { initializeApp, cert, getApps } from 'firebase-admin/app'


// Initialize Firebase Admin SDK if not already initialized
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  })
}

export async function POST(request) {
  const { token } = await request.json()

  const response = NextResponse.json({ success: true })

  // Set the token in a secure, HTTP-only cookie
  response.cookies.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 5, // 5 days
    path: '/',
    sameSite: 'lax',
  })

  return response
}
