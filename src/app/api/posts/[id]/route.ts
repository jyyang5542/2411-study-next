import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const post = [
    { id: params.id, title: 'Sample Post1', content: 'Post content1' },
    { id: params.id, title: 'Sample Post2', content: 'Post content2' },
  ]
  return NextResponse.json(post)
}
