export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="join text-[#D9176C] flex gap-6">
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage <= 1}
        className="join-item btn bg-[#F5F5F5] border border-amber-50 text-[#D9176C] flex gap-1 disabled:opacity-50"
      >
        « Previous
      </button>
      <div>
        {pages.slice(0, 5).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={`join-item btn border border-amber-50 ${
              currentPage === page
                ? "btn-error text-white"
                : "bg-[#FFFFFF] text-[#D9176C]"
            }`}
          >
            {page}
          </button>
        ))}
        {totalPages > 5 && (
          <button className="join-item btn bg-[#FFFFFF] text-[#D9176C] border border-amber-50">
            ...
          </button>
        )}
      </div>
      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="join-item btn bg-[#F5F5F5] flex gap-1 text-[#D9176C] border border-amber-50 disabled:opacity-50"
      >
        Next »
      </button>
    </div>
  );
}
