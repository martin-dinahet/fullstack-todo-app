import { useAuth } from "@/contexts/auth-context";
import React from "react";

export const IndexPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        <h1>Logged in as: {user?.username}</h1>
      </main>
    </>
  );
};
