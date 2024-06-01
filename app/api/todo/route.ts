import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const notes = await getAllTodos();
  return NextResponse.json(notes);
}

// export async function POST(request: NextRequest) {
//   const { content } = await request.json();

//   await prisma.todo.create({
//     data: {
//       content: content,
//     },
//   });

//   const notes = await getAllNotes();
//   return NextResponse.json(notes);
// }

// export async function DELETE(request: NextRequest) {
//   const id = parseInt(request.nextUrl.searchParams.get('id')!);

//   await prisma.notes.delete({
//     where: {
//       id: id,
//     },
//   });

//   const notes = await getAllNotes();
//   return NextResponse.json(notes);
// }

async function getAllTodos() {
  const notes = await prisma.todo.findMany();
  return notes;
}