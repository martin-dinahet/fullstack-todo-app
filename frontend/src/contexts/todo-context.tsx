import React from "react";
import { TodoContextType } from "@/types/todo-context";
import { Todo } from "@/types/todo";
import { toast } from "sonner";
import { useAuth } from "./auth-context";

const TodoContext = React.createContext<TodoContextType>({
  todos: [],
  isLoading: true,
  getAllTodos: async () => {},
  createTodo: async () => {},
  updateTodo: async () => {},
  deleteTodo: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const { token } = useAuth();
  const [todos, setTodos] = React.useState<Array<Todo>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const initTodos = async () => {
      await getAllTodos();
    };
    initTodos();
  }, []);

  const getAllTodos = async () => {
    if (!token) return;
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      toast.error("Failed to load todos.");
      setIsLoading(false);
      return;
    }
    const todos = await response.json();
    setTodos(todos);
    setIsLoading(false);
  };

  const createTodo = async (todo: Todo) => {
    if (!token) return;
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      toast.error("Failed to create todo.");
      setIsLoading(false);
      return;
    }
    const newTodo = await response.json();
    setTodos((prev) => [...prev, newTodo]);
    setIsLoading(false);
    toast.success("Todo created successfully.");
  };

  const updateTodo = async (todoId: string, todo: Todo) => {
    if (!token) return;
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/todos", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      toast.error("Failed to update todo.");
      setIsLoading(false);
      return;
    }
    const updatedTodo = await response.json();
    setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setIsLoading(false);
    toast.success("Todo updated successfully.");
  };

  const deleteTodo = async (todoId: string) => {
    if (!token) return;
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/todos", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      toast.error("Failed to delete todo.");
      setIsLoading(false);
      return;
    }
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
    setIsLoading(false);
    toast.success("Todo deleted successfully.");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        isLoading,
        getAllTodos,
        createTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => React.useContext(TodoContext);
