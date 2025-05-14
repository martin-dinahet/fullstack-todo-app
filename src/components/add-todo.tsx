"use client";

import { createTodo } from "@/lib/api";
import { CreateTodoDTO } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const AddTodo: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (createTodoDTO: CreateTodoDTO) => {
    await createTodo(createTodoDTO);
    router.refresh();
  };

  return (
    <form action={() => handleSubmit({ title })}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">Create Todo</button>
    </form>
  );
};
