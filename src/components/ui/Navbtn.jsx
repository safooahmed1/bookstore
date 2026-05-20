import { useState } from "react";
import BtnBook from "./BtnBook";
import { useCategories } from "../../hooks/useProducts";

export default function Navbtn({ onCategoryChange, activeCategory }) {
  const { data } = useCategories();
  const categories = data?.data || [];

  const links = categories.length > 0
    ? categories.map((c) => ({
        name: c.name || c,
        value: c.id || c.name || c,
      }))
    : [
        { name: "Business", value: "Business" },
        { name: "Self Help", value: "Self Help" },
        { name: "History", value: "History" },
        { name: "Romance", value: "Romance" },
        { name: "Fantasy", value: "Fantasy" },
        { name: "Art", value: "Art" },
        { name: "Music", value: "Music" },
        { name: "Kids", value: "Kids" },
        { name: "Cooking", value: "Cooking" },
      ];

  return (
    <div className="flex flex-wrap gap-3 p-4">
      <div
        onClick={() => onCategoryChange?.("")}
        className="cursor-pointer"
      >
        <BtnBook isMainBtn={!activeCategory}>All</BtnBook>
      </div>
      {links.map((el, index) => (
        <div
          key={index}
          onClick={() => onCategoryChange?.(el.value)}
          className="cursor-pointer"
        >
          <BtnBook isMainBtn={activeCategory === el.value}>
            {el.name}
          </BtnBook>
        </div>
      ))}
    </div>
  );
}
