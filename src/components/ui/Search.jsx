import { CiSearch } from "react-icons/ci";
import { GrMicrophone } from "react-icons/gr";

export default function Search({ isMainBtn, width }) {
  return (
    <>
      <div className="flex z-10 relative items-center">
        <input
          type="text"
          placeholder="Search"
          id="fname"
          className=" px-4 py-3 bg-[#FFFFFF] text-[#22222280] placeholder:text-[20px] placeholder:text-start placeholder:ps-6 text-center rounded-l-4xl w-134"
        />
        <div className="text-[#22222280] absolute text-xl right-15 pe-4">
          <GrMicrophone />
        </div>

        <button
          className={`w-${width} px-4 py-3 capitalize rounded-r-4xl
    ${
      isMainBtn
        ? "bg-mainColor text-white hover:bg-white hover:ring-2 hover:ring-inset hover:ring-mainColor hover:text-mainColor"
        : "bg-white text-mainColor hover:bg-mainColor hover:text-white"
    }
  `}
        >
          <div className="text-2xl">
            <CiSearch />
          </div>
        </button>
      </div>
    </>
  );
}
