import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCartStore } from "../../store/cartStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const fallbackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s";

const FlashSaleSlider = ({ items = [] }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = (book, e) => {
    e.preventDefault();
    addItem(
      {
        id: book.id,
        title: book.title,
        price: book.flash_price || book.price,
        image: book.image,
        author: book.author,
      },
      1
    );
    toast.success(`${book.title} added to cart`);
  };

  return (
    <div className="relative px-12 w-full max-w-6xl mx-auto">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:bg-gray-50 transition-all"
        onClick={() => swiperRef?.slidePrev()}
      >
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        spaceBetween={40}
        modules={[Navigation]}
        className="rounded-xl"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {(items.length > 0 ? items : [1, 2, 3, 4]).map((item, index) => {
          const book = item.id ? item : null;
          return (
            <SwiperSlide key={book?.id || index}>
              <Link to={book ? `/product/${book.id}` : "#"}>
                <div className="bg-[#3B334B] w-fit text-white p-5 rounded-2xl flex gap-5 relative group shadow-xl">
                  <img
                    src={book?.image || fallbackImg}
                    className="w-43.75 h-60 rounded-lg object-cover"
                    alt={book?.title || "Book"}
                  />
                  <div className="flex-1 flex flex-col justify-between py-1 h-40">
                    <div>
                      <h3 className="text-[18px] font-bold leading-tight">
                        {book?.title || "Rich Dad And Poor Dad"}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 italic">
                        Author: {book?.author || "Robert T. Kiyosaki"}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="text-yellow-400 text-sm">
                          {"★".repeat(Math.round(book?.rating || 4))}
                        </span>
                        <span className="text-gray-400 text-[10px]">
                          ({book?.review_count || 180} Review)
                        </span>
                      </div>
                      <div className="mt-3 flex items-baseline gap-2">
                        {book?.old_price && (
                          <span className="text-gray-400 line-through text-xs">
                            ${book.old_price}
                          </span>
                        )}
                        <span className="text-xl font-bold">
                          ${book?.flash_price || book?.price || "30.00"}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-[#524965] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#F59E0B] h-full w-[70%] rounded-full"></div>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">
                        {book?.stock_count || 4} books left
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(book, e)}
                    className="absolute bottom-4 right-5 bg-[#D1295C] p-2.5 rounded-xl hover:scale-110 transition-transform"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:bg-gray-50 transition-all"
        onClick={() => swiperRef?.slideNext()}
      >
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default FlashSaleSlider;
