import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Herosection from "../components/HeroSection/Herosection";
import BookCard from "../components/ui/BookCard";
import Dropdown from "../components/ui/Dropdown";
import FilterSidebar from "../components/ui/FilterSidebar";
import Navbtn from "../components/ui/Navbtn";
import Pagination from "../components/ui/Pagination";
import Search from "../components/ui/Search";
import { useProducts } from "../hooks/useProducts";

export default function BookPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const s = searchParams.get("search");
    if (s) setSearch(s);
  }, [searchParams]);

  const { data, isLoading } = useProducts({ page, search, category, sort });

  const products = data?.data || [];
  const totalPages = data?.meta?.last_page || 1;

  const handleSearch = (val) => {
    setSearch(val);
    setPage(1);
    if (val) {
      setSearchParams({ search: val });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="">
      <div>
        <Herosection h={"h-[120px]"} />
      </div>
      <div className="flex gap-6">
        <FilterSidebar onCategoryChange={setCategory} />
        <div className="flex-1">
          <div className="flex gap-7 p-6 mt-9 justify-around flex-col lg:flex-row">
            <div className="w-full lg:w-139.5">
              <Search value={search} onChange={handleSearch} />
            </div>
            <div className="w-full lg:w-50">
              <Dropdown
                title="Sort by"
                className="bg-[#0000001A]"
                onSelect={setSort}
                items={[
                  { label: "Price: Low to High", value: "price_asc" },
                  { label: "Price: High to Low", value: "price_desc" },
                  { label: "Newest", value: "newest" },
                  { label: "Best Rating", value: "rating" },
                ]}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between flex-col">
            <div className="p-10 pt-0 flex flex-col gap-2 container">
              <div className="p-3">
                <Navbtn onCategoryChange={setCategory} activeCategory={category} />
              </div>
              {isLoading ? (
                <div className="flex justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mainColor"></div>
                </div>
              ) : products.length === 0 ? (
                <div className="text-center py-20 text-gray-400 text-lg">
                  No books found
                </div>
              ) : (
                products.map((book) => <BookCard key={book.id} book={book} />)
              )}
            </div>
            {totalPages > 1 && (
              <div className="flex items-center justify-center p-7 mt-7">
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
