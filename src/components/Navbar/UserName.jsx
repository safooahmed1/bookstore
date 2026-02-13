import { GrFavorite } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import img from "../../assets/images/sectionlogo/7098886df02b2521176bde95e31347ff1428d87f.jpg";
import DropdownNav from "./DropdownNav";
import axios from "axios";
import { useAuthStore } from "../../store";
import { useEffect, useState } from "react";
import { domain } from "../../store/domain";

export default function UserName() {
  const token = useAuthStore((state) => state.token);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get( domain + "/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(res.data);
      } catch (err) {
        console.log("Error", err);
      }
    };

    if (token) {
      getProfile();
    }
  }, [token]);
  let imgD = false;

  return (
    <>
      <div className="flex items-center  w-full">
        <div className="flex items-center gap-3">
          <div className="flex gap-6 text-2xl pe-3">
            <GrFavorite />
            <RiShoppingCart2Line />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#D9F99D] flex items-center justify-center text-[#0F172A] font-bold text-sm">
            {imgD ? (
              <img src={img} alt="" className="w-full rounded-full" />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcqkUHsDulyGaMQk4mV7s9_d8-FW0x8ZOQ&s"
                alt=""
                className="w-full rounded-full"
              />
            )}
          </div>
          {profile && (
            <div className="text-right flex flex-col">
              <span className="text-white text-sm font-bold leading-tight">
                {profile.first_name}
              </span>
              <span className="text-[#94A3B8] text-[10px]">
                {profile.email}
              </span>
            </div>
          )}
          <DropdownNav />
        </div>
      </div>
    </>
  );
}
