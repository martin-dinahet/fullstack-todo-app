import React from "react";

import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <Outlet />
        <Toaster />
      </div>
    </>
  );
};
