import BestSellerSection from "../components/Best Seller/BestSellerSection";
import MainBookCard from "../components/bookCard/MainBookCard";
import Herosection from "../components/HeroSection/Herosection";
import Assemble from "../components/sectionhome/Assemble";
import FlashSale from "../sections/FlashSale/FlashSale";

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
      <div className="container flex  m-auto p-20 gap-6">
        <MainBookCard />
        <MainBookCard />
      </div>
      <div>
        <FlashSale/>
      </div>
    </div>
  );
}
