import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useBestSeller } from "../../hooks/useProducts";
import { Link } from "react-router-dom";

const fallbackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s";

export default function BestSellerSwiper() {
  const { data, isLoading } = useBestSeller();
  const items = data?.data || [];

  if (isLoading) {
    return (
      <div className="flex gap-5 justify-center">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-43.25 h-65 rounded-xl bg-white/20 animate-pulse" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex gap-5 justify-center">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SwiperSlide key={i}>
            <div className="w-43.25 h-65 rounded-xl bg-white"></div>
          </SwiperSlide>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={16}
        slidesPerView={6}
        slidesPerGroup={1}
        loop={items.length > 6}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {items.map((book, i) => (
          <SwiperSlide key={book.id || i}>
            <Link to={`/product/${book.id}`}>
              <div className="w-full h-65 rounded-xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <img
                  src={book.image || fallbackImg}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-2 bg-white">
                  <p className="text-xs font-semibold truncate">{book.title}</p>
                  <p className="text-[10px] text-gray-500">${book.price}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
