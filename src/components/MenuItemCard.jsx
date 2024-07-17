import React from "react";
import vegIcon from "../assets/icons/veg.png";
import nonVegIcon from "../assets/icons/non-veg.png";
import StarIcon from "@mui/icons-material/Star";
// import { MENU_IMG_URL } from "../utils/constants";

// imageId

const MenuItemCard = ({ data }) => {
  const rating = data?.ratings?.aggregatedRating?.rating;

  return (
    <div className="flex items-center justify-between border-b border-b-[lightgray] pt-5 last-of-type:border-none first-of-type:border-t-[5px] first-of-type:border-t-[lightgray] ">
      <div className=" flex flex-[0.8] flex-col gap-1">
        <img
          src={data?.isVeg == 1 ? vegIcon : nonVegIcon}
          width={20}
          height={20}
        />
        <h2 className="text-[17px] font-bold text-gray-600">{data?.name}</h2>
        <p className="text-[14px] font-bold">
          ₹ {data?.price / 100 || data?.defaultPrice / 100}
        </p>
        {rating && (
          <div className="flex items-center gap-1">
            <StarIcon sx={{ color: "#0c4f1c", fontSize: 15 }} />
            <p
              className={[
                "text-[12px] font-semibold",
                rating >= 4
                  ? "text-[#0c4f1c]"
                  : rating >= 3
                  ? "text-[#1BA672]"
                  : rating >= 2 ? "text-[#d2c128]" : "text-[#cd2a2a]" ,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {rating}
            </p>
          </div>
        )}
        <p className="text-[14px] text-[#696868] w-[60%]">
          {data?.description}
        </p>
        <button className="btn-secondary w-10 my-4">Add to cart</button>
      </div>
      <div className=" w-[150px] h-[150px] flex-[0.2] overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-full"
          width={150}
          height={150}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${data?.imageId}` }
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuItemCard;
