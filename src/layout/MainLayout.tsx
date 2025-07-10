import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
