import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Dropdown({
  title,
  defaultOpen = false,
  children,
  className,
  onSelect,
  items,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [selected, setSelected] = useState("");

  const handleSelect = (item) => {
    setSelected(item.label);
    setOpen(false);
    onSelect?.(item.value);
  };

  return (
    <div
      className={`${className ? className : "bg-white"} rounded-xl border mb-3`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 font-medium"
      >
        <span
          className={`${open ? "text-[#D9176C80]" : "text-gray-400"}`}
        >
          {selected || title}
        </span>
        <span
          className={`transition-transform text-2xl ${
            open ? "rotate-90 text-[#D9176C80]" : "text-gray-400"
          }`}
        >
          <MdOutlineKeyboardArrowRight />
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4">
          {items ? (
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleSelect(item)}
                  className="cursor-pointer text-gray-500 hover:text-mainColor hover:bg-pink-50 px-2 py-1 rounded transition"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
}
