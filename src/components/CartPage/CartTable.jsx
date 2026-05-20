import { CartRow } from "./CartRow";
import { useCartStore } from "../../store/cartStore";

export default function CartTable() {
  const items = useCartStore((s) => s.items);

  return (
    <div className="flex justify-center items-center p-6 w-full">
      <table className="w-full max-w-6xl">
        <thead>
          <tr className="grid grid-cols-14 p-6 text-gray-500 font-medium">
            <th className="col-span-6 text-start">Item</th>
            <th className="col-span-2 text-center">Quantity</th>
            <th className="col-span-2 text-center">Price</th>
            <th className="col-span-2 text-center">Total Price</th>
            <th className="col-span-1 text-center"></th>
          </tr>
        </thead>
        {items.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={14} className="text-center py-20 text-gray-400 text-lg">
                Your cart is empty
              </td>
            </tr>
          </tbody>
        ) : (
          items.map((item) => <CartRow key={item.id} item={item} />)
        )}
      </table>
    </div>
  );
}
