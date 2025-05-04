import { User } from "@/types/user";

export interface Todo {
  id: string;
  content: string;
  author: User;
}
