import { createTodo } from "@/actions/create-todo";
import { useActionState } from "react";

export const CreateTodoForm: React.FC = ({}) => {
  const [data, action, isPending] = useActionState(createTodo, undefined);

  return (
    <div>
      <form action={action}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Do the dishes" required />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
