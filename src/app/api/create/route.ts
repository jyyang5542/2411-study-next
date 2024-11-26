import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const newItem = { id: Date.now().toString(), ...body }
  return NextResponse.json(newItem)
}
