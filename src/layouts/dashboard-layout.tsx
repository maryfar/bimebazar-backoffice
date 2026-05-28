import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

function DashboardLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F1F1F1]">
      <Header showActions />

      <div className="flex w-full">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
