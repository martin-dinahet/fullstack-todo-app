export const fetchTodos = async () => {
  const response = await fetch("http://localhost:3000/api/todos");
  if (!response.ok) throw new Error("Error fetching todos in @/lib/api.ts -- fetchTodos()");
  return await response.json();
};
