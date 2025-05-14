import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, { params }: Params): Promise<NextResponse> => {
  try {
    const todo = await prisma.todo.findUnique({ where: { id: params.id } });
    if (!todo) return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    console.error(`Failed to fetch todo in @/app/api/todos/[id]/route.ts -- GET() : ${error}`);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};

export const PATCH = async (request: Request, { params }: Params): Promise<NextResponse> => {
  try {
    const { title, completed } = await request.json();
    const todoToUpdate = await prisma.todo.findUnique({ where: { id: params.id } });
    if (!todoToUpdate) return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    const updatedTodo = await prisma.todo.update({
      where: { id: params.id },
      data: {
        title,
        completed,
      },
    });
    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.error(`Failed to update todo in @/app/api/todos/[id]/route.ts -- PATCH() : ${error}`);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};

export const DELETE = async (request: Request, { params }: Params): Promise<NextResponse> => {
  try {
    const todoToDelete = await prisma.todo.findUnique({ where: { id: params.id } });
    if (!todoToDelete) return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    await prisma.todo.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Todo deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(`Faield to delete todo in @/app/api/todos/[id]/route.ts -- DELETE() : ${error}`);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
