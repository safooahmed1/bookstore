import CartTable from "../components/CartPage/CartTable";
import Herosection from "../components/HeroSection/Herosection";
import PaymentSummary from "../components/PaymentSummary/PaymentSummary";
import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const tax = subtotal * 0.05;
  const shipping = items.length > 0 ? "Free Delivery" : "$0";
  const total = subtotal + tax;

  return (
    <>
      <div>
        <Herosection h={"h-[120px]"} />
      </div>
      <div className="flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center">
          <CartTable />
          {items.length > 0 && (
            <PaymentSummary
              subtotal={subtotal}
              tax={tax}
              shipping={shipping}
              total={total}
            />
          )}
        </div>
      </div>
    </>
  );
}
