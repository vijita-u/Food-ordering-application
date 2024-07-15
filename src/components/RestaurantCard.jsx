import React from "react";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const RestaurantCard = () => {
  return (
    <div className="rounded-lg w-[300px] h-[390px] overflow-hidden">
      <div className="h-[150px] w-full bg-[#e9e8e8] flex items-center justify-center">
        <img
          className="object-cover h-full w-full"
          src={
            "https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg"
          }
          alt=""
        />
      </div>
      <div className="relative h-[240px] flex flex-col gap-2 items-center justify-center py-3 px-4 bg-white text-center">
        <p className="absolute top-1 right-2 text-[12px] font-semibold text-[#c72c2c]">20 mins</p>
        <h3 className="font-semibold text-[18px]">McDonald's</h3>
        <div className="flex items-center gap-1 text-[14px]">
            <StarOutlinedIcon sx={{ color: "#fb9334", fontSize: 22}} />
            <p>4.5</p>
        </div>
        <p className="text-[18px] text-accent font-medium">₹ 300 <span className=" text-[12px]">for two</span></p>
        <p className="text-[13px] text-[#747474]">Burger, Fast Food, Beverages, Continental</p>
        <button className="btn-secondary mt-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default RestaurantCard;

// Include delivery time also
