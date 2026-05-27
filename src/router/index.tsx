import { createBrowserRouter, Navigate } from "react-router-dom";

import ProtectedRoute from "@/components/guards/protected-route";
import RoleGuard from "@/components/guards/role-guard";

import AuthLayout from "@/layouts/auth-layout";
import DashboardLayout from "@/layouts/dashboard-layout";

import LoginPage from "@/pages/login";
import TasksPage from "@/pages/tasks";
import TaskDetailsPage from "@/pages/task-details";
import ComingSoonPage from "@/pages/coming-soon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/home",
            element: <ComingSoonPage title="خانه" />,
          },
          {
            path: "/orders",
            element: <ComingSoonPage title="سفارشات" />,
          },

          {
            path: "/customers",
            element: <ComingSoonPage title="مشتریان" />,
          },
          {
            path: "/tasks/:id",
            element: <TaskDetailsPage />,
          },

          {
            element: <RoleGuard allowedRoles={["admin"]} />,

            children: [
              {
                path: "/tasks",
                element: <TasksPage />,
              },
            ],
          },

          {
            element: <RoleGuard allowedRoles={["user"]} />,

            children: [
              {
                path: "/tasks/my-tasks",
                element: <TasksPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
