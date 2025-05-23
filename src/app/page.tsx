import { prisma } from "@/lib/prisma";
import { TodoList } from "./components/todo-list";
import { CreateTodoForm } from "./components/create-todo.form";

const IndexPage: React.FC = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <TodoList todos={todos} />
      <CreateTodoForm />
    </div>
  );
};

export default IndexPage;
