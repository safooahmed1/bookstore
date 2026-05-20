import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import toast from "react-hot-toast";

export function ActionButtons({ product }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleItem = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist);

  if (!product || !product.id) return null;

  const handleAddToCart = () => {
    addItem(product, 1);
    toast.success(`${product.title || "Product"} added to cart`);
  };

  const handleToggleWishlist = () => {
    toggleItem(product);
    toast.success(
      isInWishlist(product.id)
        ? "Removed from wishlist"
        : "Added to wishlist"
    );
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleAddToCart}
        className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
      >
        Add To Cart
      </button>
      <button
        onClick={handleToggleWishlist}
        className={`text-lg px-4 py-2 rounded-lg border transition ${
          isInWishlist(product.id)
            ? "bg-pink-600 text-white border-pink-600"
            : "bg-white text-pink-500 border-pink-500 hover:bg-pink-50"
        }`}
      >
        {isInWishlist(product.id) ? "♥" : "♡"}
      </button>
    </div>
  );
}
