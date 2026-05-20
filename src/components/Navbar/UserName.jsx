import { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import DropdownNav from "./DropdownNav";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store";
import { useProfile } from "../../hooks/useProfile";
import { useCartStore } from "../../store/cartStore";

export default function UserName() {
  const { isAuthenticated } = useAuthStore();
  const { data: profile } = useProfile();
  const totalItems = useCartStore((s) => s.getTotalItems());

  return (
    <div className="flex items-center w-full">
      <div className="flex items-center gap-3">
        <div className="flex gap-6 text-2xl pe-3 relative">
          <Link to={"/wishlist"} className="hover:text-[#ae1e5f] hover:drop-shadow-lg hover:drop-shadow-mainColor">
            <GrFavorite />
          </Link>
          <Link to={"/Cart"} className="hover:text-[#ae1e5f] hover:drop-shadow-lg hover:drop-shadow-mainColor relative">
            <RiShoppingCart2Line />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-mainColor text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#D9F99D] flex items-center justify-center text-[#0F172A] font-bold text-sm overflow-hidden">
          <img
            src={profile?.data?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcqkUHsDulyGaMQk4mV7s9_d8-FW0x8ZOQ&s"}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-right flex flex-col">
          <span className="text-white text-sm font-bold leading-tight">
            {profile?.data?.first_name || profile?.data?.name || "User"}
          </span>
          <span className="text-[#94A3B8] text-[10px]">
            {profile?.data?.email || ""}
          </span>
        </div>
        <DropdownNav />
      </div>
    </div>
  );
}
