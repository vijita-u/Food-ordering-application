import React from "react";

const ShimmerCards = () => {
  return (
    <div className="bg-[#e3e2e2] rounded-lg w-[300px] h-[390px]">
      <div className="h-[150px] w-full"></div>
      <div className="h-[200px] w-full"></div>
    </div>
  );
};

const ShimmerUI = () => {
    const cards = new Array(8).fill(undefined)

  return (
    <div className="flex gap-7 flex-wrap items-center justify-center">
        {cards.map((_, i) => <ShimmerCards key={i} />)}
        
    </div>
  );
};

export default ShimmerUI;
