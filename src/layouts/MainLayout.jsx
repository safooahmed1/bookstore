import { Outlet } from "react-router-dom";
import Herosection from "../components/HeroSection/Herosection";
import Footer from "../components/footer/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="font-open">
        <div className="h-84.5">
          <Herosection />
        </div>
        <div className="flex justify-center bg-[#F5F5F5]">
          <div className="container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
