import { Todo } from "@/types/todo";

export interface User {
  id: string;
  username: string;
  email: string;
  todos: Array<Todo>;
}
