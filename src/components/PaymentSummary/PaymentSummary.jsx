import SummaryCard from "./SummaryCard";
import PromoCode from "./PromoCode";
import toast from "react-hot-toast";

export default function PaymentSummary({ subtotal, tax, shipping, total }) {
  const handleApplyPromo = (code) => {
    toast.success(`Promo code "${code}" applied!`);
  };

  return (
    <div className="flex w-full max-w-6xl bg-[#3B2F4A1A] justify-center mb-28.75 p-10 md:p-20 flex-col md:flex-row gap-10 md:gap-39 rounded-xl">
      <div className="w-full md:w-129">
        <h2 className="text-2xl text-gray-600 font-bold mb-3">
          Payment Summary
        </h2>
        <p className="text-gray-500 mb-10 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est.
        </p>
        <PromoCode onApply={handleApplyPromo} />
      </div>

      <SummaryCard
        subtotal={subtotal}
        tax={tax}
        shipping={shipping}
        total={total}
      />
    </div>
  );
}
