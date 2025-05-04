import { useAuth } from "@/contexts/auth-context";
import { useTodos } from "@/contexts/todo-context";
import React from "react";

export const IndexPage: React.FC = () => {
  const { user } = useAuth();
  const { todos } = useTodos();

  return (
    <>
      <main>
        <h1>Logged in as: {user?.username}</h1>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <p>{todo.content}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
