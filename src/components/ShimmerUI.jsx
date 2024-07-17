import React from "react";
import { useLocation } from "react-router-dom";

const ShimmerRestoCards = () => {
  return (
    <div className="bg-[#e3e2e2] rounded-lg w-[300px] h-[390px]">
      <div className="h-[150px] w-full"></div>
      <div className="h-[200px] w-full"></div>
    </div>
  );
};

const ShimmerMenuCards = () => {
  return (
    <div className="h-[35px] bg-[#e3e2e2]"></div>
  )
}

const ShimmerUI = () => {
  const location = useLocation();
  // console.log(location.pathname.slice(0, 12));
  const currentPath = location.pathname.slice(0, 12);

  const cards = new Array(24).fill(undefined);

  return (
    <>
      {currentPath === "/" ? (
        <div className="flex gap-7 flex-wrap items-center justify-center">
          {cards.map((_, i) => (
            <ShimmerRestoCards key={i} />
          ))}
        </div>
      ) : currentPath === "/restaurants" ? (
        <div className="flex justify-center mt-10">
          <div className=" w-[60%] h-auto flex flex-col gap-2">
            <div className="h-[18px] w-[40%] bg-[#e3e2e2]"></div>
            <div className="h-[100px] bg-[#e3e2e2]"></div>
            <div className="h-[45px] bg-[#e3e2e2]"></div>
            <div className="h-[35px] bg-[#e3e2e2]"></div>
            <div className="my-8 flex flex-col">
              {cards.map((_, i) => (
                <ShimmerMenuCards key={i} />
              ))}
            </div>
          </div>
        </div>
      ) : <div></div>}
    </>
  );
};

export default ShimmerUI;
