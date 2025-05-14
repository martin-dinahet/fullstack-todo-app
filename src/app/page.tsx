import { AddTodo } from "@/components/add-todo";
import { TodoList } from "@/components/todo-list";
import { createTodo, fetchTodos } from "@/lib/api";
import { CreateTodoDTO } from "@/lib/types";

const Page: React.FC = async () => {
  const todos = await fetchTodos();

  return (
    <main>
      <h1>Hello, World!</h1>
      <div>
        <h2>All Todos</h2>
        <TodoList todos={todos} />
      </div>
      <div>
        <h2>Create Todo</h2>
        <AddTodo />
      </div>
    </main>
  );
};

export default Page;
