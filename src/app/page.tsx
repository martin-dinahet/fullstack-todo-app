import { prisma } from "@/lib/prisma";

const IndexPage: React.FC = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default IndexPage;
