import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuItemCard from "../MenuItemCard";

const Accordian = () => {
  const [open, setOpen] = useState(false);

  const handleAccordian = () => {
    setOpen(!open);
  }

  return (
    <div className="w-full py-4 border-b border-b-[lightgray]">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-bold">Veg Starters (11) </h3>
        <div className="cursor-pointer" onClick={handleAccordian}>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      <div className={["mt-2 flex-col gap-8", open ? "flex" : "hidden"].filter(Boolean).join(" ")}>
        <MenuItemCard />
        <MenuItemCard />
      </div>
    </div>
  );
};

export default Accordian;
