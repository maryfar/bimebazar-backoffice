import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      <Header showActions />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
