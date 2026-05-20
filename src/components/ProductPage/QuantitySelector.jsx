import { useState } from "react";

export function QuantitySelector({ onChange, max = 99 }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (newQty) => {
    if (newQty < 1 || newQty > max) return;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => handleChange(quantity - 1)}
        className="text-red-400 w-8 h-8 border rounded-full hover:bg-red-50 transition"
      >
        -
      </button>
      <span className="text-black font-medium">{quantity}</span>
      <button
        onClick={() => handleChange(quantity + 1)}
        className="text-red-400 w-8 h-8 border rounded-full hover:bg-red-50 transition"
      >
        +
      </button>
    </div>
  );
}
