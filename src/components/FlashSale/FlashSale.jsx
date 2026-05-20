import FlashSaleHeader from "./FlashSaleHeader";
import FlashSaleSlider from "./FlashSaleSlider";
import { useFlashSale } from "../../hooks/useProducts";

import time from "../../assets/images/time.png";

export default function FlashSale() {
  const { data } = useFlashSale();
  const items = data?.data || [];

  return (
    <div className="w-full bg-[#F5F5F5] h-fit py-10 flex items-center border-t border-[#22222233]">
      <div className="container mx-auto px-4">
        <FlashSaleHeader
          title="Flash Sale"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est."
          time={time}
        />
        <div className="flex justify-center w-full">
          <FlashSaleSlider items={items} />
        </div>
      </div>
    </div>
  );
}
