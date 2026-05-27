import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/store/auth.store";

import type { Role } from "@/types/auth";

import { DEFAULT_ROUTE_BY_ROLE } from "@/router/default-routes";

interface RoleGuardProps {
  allowedRoles: Role[];
}

function RoleGuard({ allowedRoles }: RoleGuardProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={DEFAULT_ROUTE_BY_ROLE[user.role]} replace />;
  }

  return <Outlet />;
}

export default RoleGuard;
