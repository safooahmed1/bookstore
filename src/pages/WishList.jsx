import Herosection from "../components/HeroSection/Herosection";
import Button from "../components/ui/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useWishlistStore } from "../store/wishlistStore";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const fallbackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s";

export default function WishList() {
  const items = useWishlistStore((s) => s.items);
  const removeItem = useWishlistStore((s) => s.removeItem);
  const addItem = useCartStore((s) => s.addItem);
  const totalItems = items.length;
  const totalPrice = items.reduce((sum, i) => sum + (i.price || 0), 0);

  const handleMoveToCart = (item) => {
    addItem(item, 1);
    removeItem(item.id);
    toast.success(`${item.title} moved to cart`);
  };

  const handleMoveAllToCart = () => {
    items.forEach((item) => addItem(item, 1));
    toast.success(`${totalItems} items moved to cart`);
  };

  return (
    <>
      <div>
        <Herosection h={"h-[120px]"} />
      </div>
      <div className="flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center p-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-4">Your wishlist is empty</p>
              <Link to="/book" className="text-mainColor hover:underline">
                Browse Books
              </Link>
            </div>
          ) : (
            <>
              <div className="w-full max-w-6xl space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-6 bg-white p-4 rounded-xl border"
                  >
                    <img
                      src={item.image || fallbackImg}
                      alt={item.title}
                      className="w-20 h-28 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm">Author: {item.author || "Unknown"}</p>
                      <p className="text-mainColor font-bold text-xl mt-1">${item.price}</p>
                    </div>
                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="px-4 py-2 bg-mainColor text-white rounded-lg hover:bg-pink-700 transition"
                    >
                      Move to cart
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center gap-3 mt-8">
                <button
                  onClick={handleMoveAllToCart}
                  className="font-bold h-12 btn bg-pink-200/50 border border-pink-400 text-pink-400 rounded-lg hover:bg-pink-300/50"
                >
                  Move all to cart
                </button>
                <Link to="/Cart">
                  <Button
                    isMainBtn
                    classn="w-100 rounded-lg"
                  >
                    <div className="flex justify-evenly items-center gap-10">
                      <div className="flex flex-col">
                        <span className="text-center">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
                        <span className="text-center">${totalPrice.toFixed(2)}</span>
                      </div>
                      <span>Check out</span>
                      <button className="btn border border-white bg-white text-pink-600">
                        <FaLongArrowAltRight />
                      </button>
                    </div>
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
