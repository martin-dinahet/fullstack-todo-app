import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    console.error(`Failed to fetch todos in @/app/api/todos/route.ts -- GET() : ${error}`);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    const { title } = await request.json();
    const todo = await prisma.todo.create({ data: { title } });
    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    console.error(`Failed to create todo in @/app/api/todos/route.ts -- POST() : ${error}`);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
