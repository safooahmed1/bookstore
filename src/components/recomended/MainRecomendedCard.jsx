import RightComponentRecomendedCard from "./RightComponentRecomendedCard";

const fallbackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s";

export default function MainRecomendedCard({ book }) {
  if (!book) {
    return (
      <div className="flex gap-10 p-10 bg-white justify-between w-full text-[#222222] rounded-xl">
        <div className="w-40 h-60 bg-gray-200 rounded-xl animate-pulse" />
        <div className="flex-1 space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-6 p-6 bg-white justify-between w-full text-[#222222] rounded-xl shadow-sm">
      <div className="w-40 h-60 overflow-hidden rounded-xl flex-shrink-0">
        <img
          src={book.image || fallbackImg}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <RightComponentRecomendedCard book={book} />
    </div>
  );
}
