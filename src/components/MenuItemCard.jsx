import React from "react";
import vegIcon from "../assets/icons/veg.png"
import nonVegIcon from "../assets/icons/non-veg.png"
import StarIcon from "@mui/icons-material/Star";

const MenuItemCard = () => {
  return (
    <div className="flex items-center justify-between border-b border-b-[lightgray] pt-5 last-of-type:border-none first-of-type:border-t-[5px] first-of-type:border-t-[lightgray] ">
      <div className="flex flex-col gap-1">
        <img src={vegIcon} width={20} height={20} />
        <h2 className="text-[17px] font-bold text-gray-600">Paneer Chilly Dry</h2>
        <p className="text-[14px] font-bold">₹ 169</p>
        <div className="flex items-center gap-1">
        <StarIcon sx={{ color: "#0c4f1c", fontSize: 15 }} />
        <p className="text-[#0c4f1c] text-[12px] font-semibold">4.0</p>
        </div>
        <p className="text-[14px] text-[#696868]">Serves 1 | (Peppery & non Spicy) Mix veg fried balls, onion and capsicum tossed in classic Manchurian sauce.293.31kcal</p>
        <button className="btn-secondary w-10 my-4">Add to cart</button>
      </div>
      <div className="w-[150px] h-[150px] overflow-hidden rounded-lg">
        <img
        className="object-cover w-full h-full"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/7a046613-a2a6-465a-9318-3c1ece7d3985_f901ec18-a1b4-4298-921b-703087e0b253.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuItemCard;
