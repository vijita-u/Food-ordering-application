import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const RestaurantCard = ({ data }) => {
  return (
    <div className="rounded-lg w-[300px] h-[390px] overflow-hidden">
      <div className="h-[150px] w-full bg-[#e9e8e8] flex items-center justify-center">
        <img
          className="object-contain h-full w-full"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ data.cloudinaryImageId
          }
          alt=""
        />
      </div>
      <div className="relative h-[240px] flex flex-col gap-2 items-center justify-center pb-3 px-4 bg-white text-center">
        <p className="absolute top-3 right-4 text-[12px] font-semibold text-[#c72c2c]">
          {data.sla.deliveryTime} mins
        </p>
        <div>
        <h3 className="font-semibold text-[18px]">{data.name}</h3>
        <p className="text-[12px] capitalize">{data.areaName}</p>
        </div>
        <div className="absolute top-3 left-4 flex items-center gap-1 text-[12px]">
          <StarOutlinedIcon sx={{ color: "#fb9334", fontSize: 18 }} />
          <p>{data.avgRatingString}</p>
        </div>
        <p className="text-[14px] text-accent font-medium">
          {data.costForTwo.split(" ")[0]}{" "}
          <span className=" text-[12px]">for two</span>
        </p>
        <p className="text-[13px] text-[#747474]">{data.cuisines.join(", ")}</p>
        <button className="btn-secondary mt-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default RestaurantCard;

// Include delivery time also
