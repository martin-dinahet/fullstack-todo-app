import { Todo } from "@/generated/prisma";

export type CreateTodoDTO = Pick<Todo, "title">;
export type UpdateTodoDTO = Pick<Todo, "title" | "completed">;
