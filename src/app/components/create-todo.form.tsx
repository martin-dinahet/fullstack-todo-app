import { createTodo } from "@/actions/create-todo";
import { executeAction } from "@/lib/execute-action";

export const CreateTodoForm: React.FC = ({}) => {
  const action = async (formData: FormData) => {
    "use server";
    const result = await executeAction(() => createTodo(formData));
    if (!result.success) throw new Error("Failed to create todo");
  };

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
