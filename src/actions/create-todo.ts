"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createTodoSchema = z.object({
  title: z.string().min(1),
});

export const createTodo = async (_prev: unknown, formData: FormData) => {
  const parsed = createTodoSchema.safeParse({
    title: formData.get("title"),
  });
  if (!parsed.success) return { ok: false, error: "Invalid form data" };
  await prisma.todo.create({ data: { title: parsed.data.title } });
  revalidatePath("/");
  return { ok: true };
};
