import React from "react";

import { useAuth } from "@/contexts/auth-context";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/custom/header";

export const ProtectedRoute: React.FC = () => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
