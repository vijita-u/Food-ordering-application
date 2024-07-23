import React from "react";
import vegIcon from "../assets/icons/veg.png";
import nonVegIcon from "../assets/icons/non-veg.png";
import StarIcon from "@mui/icons-material/Star";
import { MENU_IMG_URL } from "../utils/constants";
import { addItems, removeItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartItem = ({ data }) => {
  const rating = data?.ratings?.aggregatedRating?.rating;

  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    dispatch(addItems(data));
  };
  const handleRemoveItem = (data) => {
    dispatch(removeItems(data));
  };

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
                  : rating >= 2
                  ? "text-[#d2c128]"
                  : "text-[#cd2a2a]",
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
        <div className="min-h-[2rem] px-2 max-w-[100px] rounded-md border border-accent my-4">
          <div className="w-full flex justify-between items-center">
            <button className="!font-bold !min-w-0 flex items-center" onClick={()=>handleRemoveItem(data)}><RemoveIcon sx={{fontSize: 15}} /></button>
            <button className="!font-bold !text-[14px] !min-w-0 !cursor-default flex items-center">{data.quantity}</button>
            <button className="!font-bold !text-[14px] !min-w-0 flex items-center" onClick={()=>handleAddItem(data)}><AddIcon sx={{fontSize: 15}} /></button>
          </div>
        </div>
      </div>
      <div className=" w-[150px] h-[150px] flex-[0.2] overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-full"
          width={150}
          height={150}
          src={MENU_IMG_URL + data?.imageId}
          alt=""
        />
      </div>
    </div>
  );
};

export default CartItem;
