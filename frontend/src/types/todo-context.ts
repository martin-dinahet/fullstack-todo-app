import { Todo } from "./todo";

export interface TodoContextType {
  todos: Array<Todo>;
  isLoading: boolean;
  getAllTodos: () => Promise<void>;
  createTodo: (todo: Todo) => Promise<void>;
  updateTodo: (todoId: string, todo: Todo) => Promise<void>;
  deleteTodo: (todoId: string) => Promise<void>;
}
