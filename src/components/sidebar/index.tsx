import { NavLink } from "react-router-dom";

import clsx from "clsx";

import { MENU_ITEMS } from "@/router/menu-items";
import { useAuthStore } from "@/store/auth.store";

function Sidebar() {
  const user = useAuthStore((state) => state.user);

  const allowedItems = MENU_ITEMS.filter((item) =>
    item.roles.includes(user!.role),
  );

  return (
    <aside className="w-32 md:w-64 min-h-screen bg-[#EBEBEB]  p-3">
      <nav className="space-y-1">
        {allowedItems.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="outline-none focus:outline-none focus:ring-0"
            >
              {({ isActive }) => (
                <div
                  className={clsx(
                    "flex items-center gap-4 rounded-xl py-3 px-4",
                    isActive ? "bg-gray-100 cursor-pointer" : "text-gray-700",
                  )}
                >
                  <img src={item.icon} alt={item.label} className="h-5 w-5" />

                  <span
                    className={clsx(
                      "text-xs",
                      isActive
                        ? "font-bold text-gray-900"
                        : "font-semibold text-gray-800",
                    )}
                  >
                    {item.label}
                  </span>
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
