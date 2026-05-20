import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCartStore } from "../../store/cartStore";

const fallbackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s";

export function CartRow({ item }) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  if (!item) return null;

  const { id, title, author, price, quantity, image, description } = item;
  const total = price * quantity;

  return (
    <tbody className="grid grid-cols-14 items-center h-75.5 p-4 bg-white mb-5 rounded-xl">
      <td className="col-span-6 h-full flex gap-4">
        <img
          src={image || fallbackImg}
          alt={title}
          className="w-43.5 h-full object-cover rounded-lg"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-gray-600 text-lg">{title}</h3>
            <p className="text-sm text-gray-500">Author: {author || "Unknown"}</p>
            <p className="text-sm text-gray-400 mt-2 max-w-sm line-clamp-2">
              {description || ""}
            </p>
          </div>
          <div className="mt-3 flex flex-col gap-4 text-sm">
            <span className="px-3 w-40 py-1 border rounded-md text-gray-500">
              Free Shipping
            </span>
          </div>
        </div>
      </td>

      <td className="col-span-2 flex justify-center items-center gap-3">
        <button
          onClick={() => updateQuantity(id, quantity - 1)}
          className="w-6 h-6 rounded-full border flex items-center justify-center text-pink-500 border-pink-500 hover:bg-pink-50"
        >
          <FiMinus size={14} />
        </button>

        <span className="text-lg text-gray-600 font-medium">{quantity}</span>

        <button
          onClick={() => updateQuantity(id, quantity + 1)}
          className="w-6 h-6 rounded-full border flex items-center justify-center text-pink-500 border-pink-500 hover:bg-pink-50"
        >
          <FiPlus size={14} />
        </button>
      </td>

      <td className="col-span-2 text-gray-600 text-center text-xl font-semibold">
        ${price}
      </td>

      <td className="col-span-2 flex justify-center items-center">
        <span className="text-xl text-gray-600 font-semibold">${total.toFixed(2)}</span>
      </td>

      <td className="col-span-2 flex justify-center items-center">
        <button
          onClick={() => removeItem(id)}
          className="text-pink-500 hover:text-pink-700 transition"
        >
          <FiTrash2 size={18} />
        </button>
      </td>
    </tbody>
  );
}
