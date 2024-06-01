import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const notes = await getAllTodos();
  return NextResponse.json(notes);
}

export async function POST(request: Request) {
  const { title }: { title: string } = await request.json()
  // todoテーブルに追加
  const response = await prisma.todo.create({
    data: {
      title,
    },
  })
  return Response.json(response)
}

async function getAllTodos() {
  const notes = await prisma.todo.findMany();
  return notes;
}