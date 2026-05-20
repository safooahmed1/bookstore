import MainRecomendedCard from "./MainRecomendedCard";
import { useRecommended } from "../../hooks/useProducts";

export default function SectionRecomendedCard() {
  const { data } = useRecommended();
  const items = data?.data || [];

  const displayItems = items.length > 0 ? items.slice(0, 2) : [null, null];

  return (
    <div className="text-[#222222] flex flex-col gap-10 w-full text-[26px] font-bold bg-backGrond justify-center">
      <h3>Recommended For You</h3>
      <div className="flex gap-6 w-full justify-between flex-col lg:flex-row">
        {displayItems.map((book, i) => (
          <MainRecomendedCard key={book?.id || i} book={book} />
        ))}
      </div>
    </div>
  );
}
