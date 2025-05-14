import { AddTodo } from "@/components/add-todo";
import { TodoList } from "@/components/todo-list";
import { fetchTodos } from "@/lib/api";

const Page: React.FC = async () => {
  const todos = await fetchTodos();

  return (
    <main className="w-screen min-h-screen flex justify-center items-center">
      <div className="card card-border shadow w-[400px]">
        <div className="card-body">
          <h1 className="card-title justify-center mb-6">Todo App</h1>
          <TodoList todos={todos} />
          <div className="divider"></div>
          <AddTodo />
        </div>
      </div>
    </main>
  );
};

export default Page;
