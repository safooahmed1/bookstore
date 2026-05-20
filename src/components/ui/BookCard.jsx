import { MdOutlineShoppingCart } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import toast from "react-hot-toast";

const fallbackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s";

export default function BookCard({ book }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleItem = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist);

  if (!book) return null;

  const {
    id,
    title,
    description,
    author,
    publication_year,
    price,
    old_price,
    rating,
    review_count,
    discount_code,
    discount_percent,
    image,
  } = book;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem({ id, title, price, image, author }, 1);
    toast.success(`${title} added to cart`);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleItem({ id, title, price, image, author });
    toast.success(isInWishlist(id) ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="w-full flex flex-col lg:flex-row gap-8 border p-2 rounded-2xl bg-white">
        <div className="h-63.75 w-full lg:w-48 overflow-hidden rounded-xl">
          <img
            src={image || fallbackImg}
            alt={title}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        <div className="lg:w-3/4 w-full flex flex-col justify-between">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="md:w-2/3">
              <h1 className="text-[18px] font-bold text-[#222222]">
                {title}
              </h1>
              <p className="text-[#22222280] mt-2 text-sm line-clamp-2">
                {description}
              </p>
            </div>

            {discount_code && (
              <div className="flex items-start md:items-center">
                <div className="border border-[#EBC305] rounded-xl bg-white px-3 py-2 h-fit">
                  <h1 className="text-[#EBC305] text-sm font-semibold">
                    {discount_percent}% Discount code: {discount_code}
                  </h1>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-yellow-400">
                  {"★".repeat(Math.round(rating || 0))}
                  {"☆".repeat(5 - Math.round(rating || 0))}
                </span>
                <span className="font-semibold text-[#22222280] text-[12px]">
                  ({review_count || 0} Review)
                </span>
              </div>

              <div className="flex items-center gap-2 text-[16px] mt-1">
                <span className="text-[#00000080]">Rate:</span>
                <span className="text-[#222222] font-semibold">
                  {rating || 0}
                </span>
              </div>

              <div className="w-55 flex flex-col mt-2">
                <div className="text-[#22222280] text-sm flex justify-between">
                  <span>Author</span>
                  <span>Year</span>
                </div>
                <div className="text-[#222222] font-semibold text-sm flex justify-between">
                  <span>{author || "Unknown"}</span>
                  <span>{publication_year || ""}</span>
                </div>
              </div>
            </div>

            <div className="md:w-auto w-full flex flex-col gap-4 md:items-end">
              <h1 className="text-[#222222] font-semibold text-[28px]">
                ${price}
              </h1>

              <div className="flex flex-row gap-4" onClick={(e) => e.preventDefault()}>
                <button
                  onClick={handleAddToCart}
                  className="bg-mainColor text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-mainColor hover:shadow hover:shadow-mainColor border border-mainColor transition"
                >
                  <MdOutlineShoppingCart size={20} />
                  <span className="font-semibold">Add To Cart</span>
                </button>

                <button
                  onClick={handleToggleWishlist}
                  className={`px-4 py-3 rounded-lg border transition ${
                    isInWishlist(id)
                      ? "bg-mainColor text-white border-mainColor"
                      : "bg-white text-mainColor border-mainColor hover:bg-mainColor hover:text-white"
                  }`}
                >
                  <GrFavorite size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
