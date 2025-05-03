import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { IndexPage } from "@/pages/index";
import { MainLayout } from "@/layouts/main-layout";
import { RegisterPage } from "@/pages/register";
import { LoginPage } from "@/pages/login";
import { AuthProvider } from "@/contexts/auth-context";

import "./index.css";
import { ProtectedRoute } from "./layouts/protected-route";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route element={<ProtectedRoute />}>
              <Route index element={<IndexPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
