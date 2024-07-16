import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PaymentsIcon from "@mui/icons-material/Payments";
import ToggleBtn from "./atoms/ToggleBtn";
import { useEffect, useState } from "react";
import Accordian from "./atoms/Accordian";

const RestaurantMenu = () => {
  const [isVegOnly, setIsVegOnly] = useState(false);

  useEffect(() => {
    fetchMenuData();
  }, [])

  const fetchMenuData = async () => {
    const data = await fetch("")
  }

  const handleVegFilter = () => {
    setIsVegOnly(!isVegOnly);
  }

  return (
    <div className="flex justify-center mt-10">
      <div className=" w-[60%] h-[800px]">
        <p className="text-[12px] text-gray-400 font-normal">
          Home / Mumbai / <span className="text-black">Hotel Empire</span>
        </p>
        {/* First Card */}
        <div className="p-4 flex justify-between items-center border-b border-b-[lightgray]">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[17px]">Hotel Empire</h2>
            <div className="text-[12px] text-gray-400 leading-snug">
              <p>North Indian, Kebabs</p>
              <p>The Forum Mall</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border rounded-md shadow-md h-auto p-2">
            <div className="flex gap-1 items-center justify-center w-full h-[30px] border-b border-b-[lightgray] ">
              <StarIcon sx={{ color: "#0c4f1c", fontSize: 18 }} />
              <p className="text-[#0c4f1c] font-semibold">4.0</p>
            </div>
            <p className="text-[10px] text-gray-400 pt-1">10K+ ratings</p>
          </div>
        </div>
        {/* Second Card */}
        <div className="p-4 border-b border-b-[lightgray] flex gap-10 ">
          <div className="flex gap-2">
            <WatchLaterIcon sx={{ color: "#fb9334", fontSize: 22 }} />
            <p className="font-bold text-[14px] uppercase">20 mins</p>
          </div>
          <div className="flex gap-2">
            <PaymentsIcon sx={{ color: "#fb9334", fontSize: 22 }} />
            <p className="font-bold text-[14px] uppercase">₹450 for two</p>
          </div>
        </div>
        {/* Third Card */}
        <div className="p-4">
          <ToggleBtn checkedValue={isVegOnly} handleToggle={handleVegFilter} />
        </div>
        {/* Fourth Card - Menu */}
        <div className="p-4 my-4 border-y-[10px] border-y-[#e5e5e5] flex flex-col gap-8 ">
            <div className="flex flex-col items-start">
                <h2 className="font-extrabold">Starters & Soup</h2>
                <Accordian />
                <Accordian />
                <Accordian />
            </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
