import { Outlet } from "react-router-dom";
import Herosection from "../components/HeroSection/Herosection";
import Footer from "../components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="font-open min-h-screen flex flex-col">
      <div className="h-84.5">
        <Herosection />
      </div>

      <div className="grow flex flex-col bg-[#F5F5F5] w-full">
          <Outlet />
      </div>

      <Footer />
    </div>
  );
}
