import BestSellerSection from "../components/Best Seller/BestSellerSection";
import MainBookCard from "../components/bookCard/MainBookCard";

export default function HomePage() {
  return (
    <div className="">
      <div className="container m-auto">
        <MainBookCard />
      </div>
      <div className="w-full bg-[#3B2F4A]">
        <BestSellerSection />
      </div>
      <div className="container m-auto h-56">
        
      </div>
    </div>
  );
}
