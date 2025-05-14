"use client";

import { Todo } from "@/generated/prisma";
import { useState } from "react";
import { Pen, Trash } from "lucide-react";
import { Check } from "lucide-react";
import { deleteTodo, updateTodo } from "@/lib/api";
import { useRouter } from "next/navigation";

type Props = {
  todo: Todo;
};

export const TodoDisplay: React.FC<Props> = ({ todo, ...props }) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [completed, setCompleted] = useState<boolean>(todo.completed);
  const [editing, setEditing] = useState<boolean>(false);
  const router = useRouter();

  const handleEdit = async () => {
    if (!editing) {
      setEditing(true);
      return;
    }
    await updateTodo(todo.id, { title, completed });
    setEditing(!editing);
  };

  const handleTick = async () => {
    setCompleted(!completed);
    await updateTodo(todo.id, { title, completed });
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    router.refresh();
  };

  return (
    <div {...props} className="flex w-full jusfify-between items-center gap-2">
      <input
        type="checkbox"
        name="completed"
        id="completed"
        className="checkbox"
        checked={completed}
        onChange={handleTick}
      />
      <div className="w-full">
        {editing && (
          <input
            type="text"
            name="title"
            id="title"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
        {!editing && <p className={completed ? "line-through" : ""}>{title}</p>}
      </div>
      <button className="btn" onClick={handleEdit}>
        {!editing && <Pen />}
        {editing && <Check />}
      </button>
      <button className="btn btn-error" onClick={handleDelete}>
        <Trash />
      </button>
    </div>
  );
};
