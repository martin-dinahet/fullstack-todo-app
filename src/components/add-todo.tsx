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
    <form action={() => handleSubmit({ title })} className="flex items-end gap-2">
      <div className="flex flex-col w-full">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          className="input w-full"
          id="title"
          placeholder="Do the dishes"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn">
        Create Todo
      </button>
    </form>
  );
};
