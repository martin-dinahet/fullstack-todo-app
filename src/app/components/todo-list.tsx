import { Todo } from "@/generated/prisma";
import { TodoItem } from "./todo-item";

type Props = {
  todos: Array<Todo>;
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo: Todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
};
