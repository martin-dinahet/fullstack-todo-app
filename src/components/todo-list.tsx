"use client";

import { Todo } from "@/generated/prisma";
import { TodoDisplay } from "./todo-display";

type Props = {
  todos: Array<Todo>;
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoDisplay todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
