import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { LuCircleHelp, LuClock3 } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import toast from "react-hot-toast";

export default function DropdownNav() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="dropdown dropdown-center">
      <div tabIndex={0} role="button" className="text-2xl mb-3">
        <MdKeyboardArrowDown />
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content bg-white menu font-semibold text-[#222222] rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <Link to={"/Profile"}>
            <RxPerson />
            Profile
          </Link>
        </li>
        <li>
          <Link to={"/Cart"}>
            <LuClock3 />
            Order History
          </Link>
        </li>
        <li>
          <a>
            <IoLocationOutline />
            Address
          </a>
        </li>
        <li>
          <a>
            <LuCircleHelp />
            Help
          </a>
        </li>
        <li>
          <a onClick={handleLogout} className="text-red-500 cursor-pointer">
            <HiOutlineLogout /> Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}
