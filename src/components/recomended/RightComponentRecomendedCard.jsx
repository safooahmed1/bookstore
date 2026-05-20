import Button from "../ui/Button";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function RightComponentRecomendedCard({ book }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleItem = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist);

  if (!book) {
    return (
      <div className="flex flex-col gap-6 flex-1">
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/3" />
          <div className="h-3 bg-gray-200 rounded w-full" />
        </div>
      </div>
    );
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(
      {
        id: book.id,
        title: book.title,
        price: book.price,
        image: book.image,
        author: book.author,
      },
      1
    );
    toast.success(`${book.title} added to cart`);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleItem({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
      author: book.author,
    });
    toast.success(
      isInWishlist(book.id) ? "Removed from wishlist" : "Added to wishlist"
    );
  };

  return (
    <Link to={`/product/${book.id}`} className="flex flex-col gap-6 flex-1">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-[18px]">{book.title}</h3>
          <h4 className="font-normal text-[14px] text-[#22222280]">
            Author:{" "}
            <span className="text-[#222222]">{book.author || "Unknown"}</span>
          </h4>
        </div>
        <p className="text-[14px] font-normal text-[#22222280] line-clamp-3">
          {book.description || ""}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-yellow-300">
                {"★".repeat(Math.round(book.rating || 4))}
              </span>
              <span className="font-semibold text-[#22222280] text-[12px]">
                ({book.review_count || 0} Review)
              </span>
            </div>
            <h4 className="text-[14px] text-[#22222280]">
              Rate:{" "}
              <span className="text-[#222222] font-semibold">
                {book.rating || 0}
              </span>
            </h4>
          </div>
          <h3 className="text-[26px] text-[#222222] font-semibold">
            ${book.price}
          </h3>
        </div>
        <div className="flex justify-between gap-4" onClick={(e) => e.preventDefault()}>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-mainColor text-white font-semibold flex items-center justify-center gap-2 text-[16px] rounded-lg px-4 py-3 hover:bg-white hover:text-mainColor hover:shadow hover:shadow-mainColor border border-mainColor transition"
          >
            Add To Cart
            <LuShoppingCart />
          </button>
          <button
            onClick={handleToggleWishlist}
            className={`px-4 py-3 rounded-lg border transition text-xl ${
              isInWishlist(book.id)
                ? "bg-mainColor text-white border-mainColor"
                : "bg-white text-mainColor border-mainColor hover:bg-mainColor hover:text-white"
            }`}
          >
            <MdFavoriteBorder />
          </button>
        </div>
      </div>
    </Link>
  );
}
