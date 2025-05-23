"use server";

import { Todo } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateTodo = async (todo: Partial<Todo>) => {
  await prisma.todo.update({ where: { id: todo.id }, data: { ...todo } });
  revalidatePath("/");
};
