import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Body header - "Food Delivery Restaurants in Mumbai" | search + top rated restaurants */}
      <div className="mt-20 flex items-center justify-between">
        <h1 className="font-bold text-[1.6rem]">
          Food Delivery Restaurants in Mumbai
        </h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 bg-accent rounded-md pr-2 overflow-hidden">
            <input type="text" className="outline-none px-2 py-1" />
            <SearchOutlinedIcon sx={{ fontSize: "large" }} />
          </div>
          <button className="btn-secondary">Top Rated Restaurants</button>
        </div>
      </div>
      {/* RestoCard container */}
      <div className="flex gap-7 flex-wrap">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
