import { useState } from "react";
import CheckboxList from "./CheckboxList";
import Dropdown from "./Dropdown";
import { VscSettings } from "react-icons/vsc";

export default function FilterSidebar({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { label: "All categories", value: "", count: 1450 },
    { label: "Business", value: "Business", count: 140 },
    { label: "Kids", value: "Kids", count: 309 },
    { label: "Art", value: "Art", count: 102 },
    { label: "History", value: "History", count: 204 },
    { label: "Romance", value: "Romance", count: 89 },
    { label: "Fantasy", value: "Fantasy", count: 47 },
    { label: "Self Help", value: "Self Help", count: 163 },
    { label: "Cooking", value: "Cooking", count: 211 },
    { label: "Sports", value: "Sports", count: 92 },
  ];

  const Publisher = [
    { label: "Paulo Coelo", value: "Paulo Coelo", count: 210 },
    { label: "Jane Austen", value: "Jane Austen", count: 140 },
    { label: "Charles Dickens", value: "Charles Dickens", count: 309 },
    { label: "Mark Twain", value: "Mark Twain", count: 102 },
    { label: "Virginia Woolf", value: "Virginia Woolf", count: 204 },
    { label: "Leo Tolstoy", value: "Leo Tolstoy", count: 89 },
    { label: "Fyodor Dostoevsky", value: "Fyodor Dostoevsky", count: 47 },
    { label: "Haruki Murakami", value: "Haruki Murakami", count: 163 },
    { label: "Gabriel Márquez", value: "Gabriel Márquez", count: 211 },
    { label: "Chinua Achebe", value: "Chinua Achebe", count: 92 },
  ];

  const Year = [
    { label: "2024", value: "2024", count: 210 },
    { label: "2023", value: "2023", count: 140 },
    { label: "2022", value: "2022", count: 309 },
    { label: "2021", value: "2021", count: 102 },
    { label: "2020", value: "2020", count: 204 },
    { label: "2019", value: "2019", count: 89 },
    { label: "2018", value: "2018", count: 47 },
    { label: "2017", value: "2017", count: 163 },
    { label: "2016", value: "2016", count: 211 },
    { label: "2015", value: "2015", count: 92 },
  ];

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    onCategoryChange?.(value);
  };

  return (
    <aside className="w-93 p-10 flex flex-col bg-[#F5F5F5] border-r border-black/10">
      <h2 className="flex items-center gap-2 font-bold text-gray-500 mb-4">
        <VscSettings />
        Filter
      </h2>

      <Dropdown title="Categories" defaultOpen>
        <CheckboxList
          items={categories}
          selected={selectedCategory}
          onChange={handleCategoryChange}
        />
        <button className="text-pink-500 text-sm mt-3">Load More</button>
      </Dropdown>

      <Dropdown title="Publisher">
        <CheckboxList items={Publisher} />
        <button className="text-pink-500 text-sm mt-3">Load More</button>
      </Dropdown>

      <Dropdown title="Year">
        <CheckboxList items={Year} />
        <button className="text-pink-500 text-sm mt-3">Load More</button>
      </Dropdown>
    </aside>
  );
}
