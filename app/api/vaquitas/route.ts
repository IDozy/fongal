// File: C:/Users/ahuat/Desktop/fongal/app/api/vaquitas/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello from vaquitas route' });
}
