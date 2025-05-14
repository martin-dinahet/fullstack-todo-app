import { CreateTodoDTO, UpdateTodoDTO } from "./types";

export const fetchTodos = async () => {
  const response = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    cache: "no-store",
  });
  if (!response.ok) console.error("Error fetching todos in @/lib/api.ts -- fetchTodos()");
  return await response.json();
};

export const createTodo = async (createTodoDTO: CreateTodoDTO) => {
  const response = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createTodoDTO),
  });
  if (!response.ok) console.error("Error creating todo in @/lib/api.ts -- createTodo()");
  return await response.json();
};

export const fetchTodo = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!response.ok) console.error("Error fetching todo in @/lib/api.ts -- fetchTodo()");
  return await response.json();
};

export const updateTodo = async (id: string, updateTodoDTO: UpdateTodoDTO) => {
  const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PATCH",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateTodoDTO),
  });
  if (!response.ok) console.error("Error updating todo in @/lib/api.ts -- udpateTodo()");
  return await response.json();
};

export const deleteTodo = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });
  if (!response.ok) console.error("Error deleting todo in @/lib/api,ts -- deleteTodo()");
};
