import React from "react";

const ToggleBtn = ({checkedValue, handleToggle}) => {
  return (
    <div>
      <label htmlFor="toggleB" className="flex gap-2 items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" value={checkedValue} onChange={handleToggle} />
          <div className="block bg-white border w-14 h-6 rounded-full"></div>
          <div className={["absolute left-1 top-1 w-6 h-4 rounded-full transition", checkedValue == true ? "bg-green-700 translate-x-full" : "bg-[lightgray]"].filter(Boolean).join(" ")}></div>
        </div>
        <div className="text-[13px] text-gray-700 font-semibold">Veg Only</div>
      </label>
    </div>
  );
};

export default ToggleBtn;
