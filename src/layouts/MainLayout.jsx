import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="font-open min-h-screen flex flex-col">
      <Navbar />
      <div className="grow flex flex-col bg-[#F5F5F5] w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
