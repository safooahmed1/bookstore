import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/533643aa8db82414f48d43a992d009dda3961386.png";
import Search from "../ui/Search";

export default function Hero({ showSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e?.key === "Enter" || !e?.key) {
      if (searchTerm.trim()) {
        navigate(`/book?search=${encodeURIComponent(searchTerm.trim())}`);
      }
    }
  };

  return (
    <div
      className="relative h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
        {showSearch === true ? (
          <div className="w-full max-w-lg px-4">
            <Search
              isMainBtn
              width="fit"
              value={searchTerm}
              onChange={setSearchTerm}
              onSearch={handleSearch}
            />
          </div>
        ) : showSearch === false ? (
          <div className="text-white text-center w-163">
            <h1 className="text-[48px] font-bold">About Bookshop</h1>
            <p className="text-[24px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
