import { Todo } from "@/generated/prisma";

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <li>
        <p>{todo.status}</p>
        <p>{todo.title}</p>
      </li>
    </div>
  );
};
