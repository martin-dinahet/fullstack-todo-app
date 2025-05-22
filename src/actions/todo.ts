"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createTodoSchema = z.object({
  title: z.string().min(1),
});

export const createTodo = async (formData: FormData) => {
  const result = createTodoSchema.safeParse({
    title: formData.get("title"),
  });
  if (!result.success) {
    throw new Error(result.error.message);
  }
  const { title } = result.data;
  await prisma.todo.create({ data: { title } });
};
