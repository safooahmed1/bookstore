import PriceRow from "./PriceRow";
import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SummaryCard({ subtotal, shipping, tax, total }) {
  const clearCart = useCartStore((s) => s.clearCart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="w-full md:w-106">
      <div className="space-y-3">
        <PriceRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
        <PriceRow label="Shipping" value={shipping} />
        <PriceRow label="Tax" value={`$${tax.toFixed(2)}`} />
      </div>

      <hr className="text-[#22222233] my-5" />

      <PriceRow label="Total" value={`$${total.toFixed(2)}`} highlight />

      <div className="mt-6 space-y-3">
        <button
          onClick={handleCheckout}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition"
        >
          Check out
        </button>

        <button
          onClick={() => navigate("/book")}
          className="w-full border border-pink-600 text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition"
        >
          Keep Shopping
        </button>
      </div>
    </div>
  );
}
