import { Outlet } from "react-router-dom";
import Header from "@/components/header";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
