const fallbackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s";

export function ProductGallery({ mainImage, thumbnails = [] }) {
  const displayImages = thumbnails.length > 0 ? thumbnails : [mainImage];

  return (
    <div className="flex flex-col gap-4">
      <div className="w-100 h-150 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={mainImage || fallbackImg}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-2">
        {displayImages.slice(0, 4).map((img, i) => (
          <div
            key={i}
            className="w-20 h-20 overflow-hidden rounded-lg border cursor-pointer hover:border-mainColor transition"
          >
            <img
              src={img || fallbackImg}
              alt={`thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
