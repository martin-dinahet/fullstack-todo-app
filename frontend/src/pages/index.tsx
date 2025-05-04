import { useAuth } from "@/contexts/auth-context";
import { useTodos } from "@/contexts/todo-context";
import React from "react";

export const IndexPage: React.FC = () => {
  const { user } = useAuth();
  const { todos } = useTodos();

  return (
    <>
      <main></main>
    </>
  );
};
