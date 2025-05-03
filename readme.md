# ⚡ Fullstack App Quickstart

A modern fullstack starter built to scale — fast to spin up, easy to extend, and cleanly architected.
Built by a developer who cares about performance, DX, scalability, and writing code that other devs actually enjoy working with.

## 🙋‍♂️ About This Project

This isn’t just a toy app. It’s a reflection of how I think about architecture, tooling, and developer experience.

I built this to:

🚀 Set up fullstack apps fast without cutting corners

🔐 Implement secure, scalable auth from day one

⚙️ Lean into type safety, modular design, and clean abstraction layers

🧪 Ship with real testing and CI-readiness — not just “it works on my machine”

🐳 Make local dev feel like production with Dockerized services

This project shows how I approach real-world software: from infra and config to UI/UX and clean API design.

## 🛠️ Tech Stack

### Frontend

Vite + React + TypeScript

TailwindCSS + ShadCN UI for scalable, consistent UI

React Router for SPA routing

pnpm for fast, monorepo-style package management

### Backend

NestJS (modular, testable Node.js framework)

TypeORM + MySQL for persistence

Full-featured Auth with JWT, DTOs, and custom decorators

Dockerized for parity across dev/stage/prod

## 🧠 Skills Demonstrated

### 🏗️ Fullstack Architecture

Built from scratch with clear separation of concerns

Uses domain-driven module structure (auth, users, database)

Abstracted providers for swappable database configs

### 🔐 Security & Auth

Built-in JWT-based sign-in and sign-up

Guards and decorators follow NestJS best practices

Typesafe contracts between client and server

### 🎨 UI/UX Engineering

Reusable UI components built with ShadCN & Tailwind

Route protection and auth context on the frontend

Minimalist, scalable design pattern for layout and navigation

### ⚙️ DevOps & DX

Full Docker setup for frontend, backend, and DB

Zero local config: just docker-compose up --build

Environment variables handled cleanly per service

Thoughtful error handling, logging, and fallback flows

### 🧪 Run It Yourself

```sh
git clone https://github.com/your-username/fullstack-app-quickstart
cd fullstack-app-quickstart
docker-compose up --build
```

Frontend: http://localhost:5173

Backend: http://localhost:3000

DB: MySQL (mysql/mysql)

## ✨ Want to Work Together?

I build apps like this because I care about code quality, performance, and great UX — not just shipping fast, but shipping well.

If you're looking for someone who can:

Lead or support fullstack app development

Balance speed with maintainability

Write clean, scalable TypeScript across the stack

Set up CI/CD, testing, Docker, auth, and more…

Let’s talk. This repo isn’t just a project — it’s a sample of how I work.
