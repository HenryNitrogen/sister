import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const videos = await prisma.video.findMany()
    return NextResponse.json(videos)
  } catch (error: unknown) {
    console.error('Failed to fetch videos:', error)
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 })
  }
}