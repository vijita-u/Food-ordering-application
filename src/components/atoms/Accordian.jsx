import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuItemCard from "../MenuItemCard";

const Accordian = ({ title, data }) => {
  const [open, setOpen] = useState(false);

  console.log(data)

  const handleAccordian = () => {
    setOpen(!open);
  };

  return (
    <>
    {
        data?.length !== 0 && (
<div className="w-full py-4 border-b border-b-[lightgray]">
        <div
          className="flex items-center justify-between"
          onClick={handleAccordian}
        >
          <h3 className="text-[15px] font-bold">{title}</h3>
          <div className="cursor-pointer">
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
        </div>
        <div
          className={["mt-2 flex-col gap-8", open ? "flex" : "hidden"]
            .filter(Boolean)
            .join(" ")}
        >
          {data?.map((menuItem) => (
            <MenuItemCard key={menuItem?.card?.info?.id} data={menuItem?.card?.info} />
          ))}
        </div>
      </div>
        )
    }
      
    </>
  );
};

export default Accordian;
