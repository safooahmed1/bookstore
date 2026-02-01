import BestSellerSection from "../components/Best Seller/BestSellerSection";
import MainBookCard from "../components/bookCard/MainBookCard";
import Herosection from "../components/HeroSection/Herosection";
import Assemble from "../components/sectionhome/Assemble";

export default function HomePage() {
  return (
    <div className="">
      <div>
        <Herosection h="h-[500px]" showSearch={true} />
      </div>
      <div className="bg-[#F5F5F5] flex justify-center items-center">
        <Assemble />
      </div>
      <div className="w-full bg-[#3B2F4A]">
        <BestSellerSection />
      </div>
      <div className="container m-auto h-56">
        {/* <MainBookCard /> */}
      </div>
    </div>
  );
}
