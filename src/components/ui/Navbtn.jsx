import { useState } from "react";
import BtnBook from "./BtnBook";

export default function Navbtn() {
  const [activeCategory, setActiveCategory] = useState("Business");

  const links = [
    { name: "Business", books: "" },
    { name: "Self Help", books: "" },
    { name: "History", books: "" },
    { name: " Romance", books: "" },
    { name: "Fantasy", books: "" },
    { name: "Art", books: "" },
    { name: "Music", books: "" },
    { name: "Kids", books: "" },
    { name: "Cooking", books: "" },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-3 p-4">
        {links.map((el, index) => (
          <div key={index} onClick={() => setActiveCategory(el.name)}>
            <BtnBook
              // لو الاسم بتاع اللينك هو هو اللي في الـ state، يبقى هو الـ Active
              isMainBtn={activeCategory === el.name}
            >
              {el.name}
            </BtnBook>
          </div>
        ))}
      </div>
    </>
  );
}
