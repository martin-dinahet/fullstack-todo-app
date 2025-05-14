"use client";

import { Todo } from "@/generated/prisma";

type Props = {
  todos: Array<Todo>;
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
