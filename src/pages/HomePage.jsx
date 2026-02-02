import BestSellerSection from "../components/Best Seller/BestSellerSection";
import FlashSale from "../components/FlashSale/FlashSale";
import Herosection from "../components/HeroSection/Herosection";
import SectionRecomendedCard from "../components/recomended/SectionRecomendedCard";
import Assemble from "../components/sectionhome/Assemble";

export default function HomePage() {
  return (
    <div className="">
      <div>
        <Herosection h="h-[804px]" showSearch={true} />
      </div>
      <div className="bg-[#F5F5F5] flex justify-center items-center">
        <Assemble />
      </div>
      <div className="w-full bg-[#3B2F4A]">
        <BestSellerSection />
      </div>
      <div className="container flex bg-backGrond h-164.75 m-auto py-4">
        <SectionRecomendedCard />
      </div>
      <div className="w-full m-auto">
        <FlashSale />
      </div>
    </div>
  );
}
