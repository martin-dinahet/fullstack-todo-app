import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({ todos }, { status: 200 });
  } catch (error) {
    console.error(`Error querying db in @/app/api/todos/route.ts -- GET() : ${error}`);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
