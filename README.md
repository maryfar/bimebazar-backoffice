# BimeBazar Backoffice

A back-office dashboard built with React, TypeScript, and Tailwind CSS.

---

## Requirements

* Node.js `v22.12.0` or higher
* npm, yarn, or pnpm

---

## Installation & Setup

```bash
git clone <repository-url>

cd bimebazar-backoffice

npm install

npm run dev
```

---

## Test Accounts

| Role  | Phone Number  | Password | Name           |
| ----- | ------------- | -------- | -------------- |
| Admin | `09120000001` | `123456` | Mehrdad Rezaei |
| User  | `09120000002` | `123456` | Maryam Farhadi |

---

## Tech Stack

* Vite
* React
* TypeScript
* React Router DOM v6
* Zustand
* Tailwind CSS
* React Hook Form
* Zod

---

## Project Structure

```bash
src/
├── assets/          # Static assets and images
├── components/      # Reusable components
│   ├── guards/      # Route guards (ProtectedRoute, RoleGuard)
│   ├── icons/       # SVG icons
│   ├── tasks/       # Task-related components
│   └── ui/          # Shared UI components
├── constants/       # Application constants
├── layouts/         # Main layouts (AuthLayout, DashboardLayout)
├── mocks/           # Mock data for development
├── pages/           # Application pages
│   ├── login/       # Login page
│   ├── tasks/       # Tasks list page
│   └── task-details/# Task details page
├── router/          # Routing configuration
├── store/           # Zustand stores
├── types/           # TypeScript types
└── utils/           # Utility/helper functions
```

---

## Features

* Authentication & role-based access
* Task management UI
* Protected routes
* Form validation with Zod
* Global state management with Zustand

---

## Scripts

```bash
npm run dev       # Start development server

```
