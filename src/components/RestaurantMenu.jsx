import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PaymentsIcon from "@mui/icons-material/Payments";
import ToggleBtn from "./atoms/ToggleBtn";
import { useEffect, useState } from "react";
import Accordian from "./atoms/Accordian";
import ShimmerUI from "./ShimmerUI";
import { Link, useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [isVegOnly, setIsVegOnly] = useState(false);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9707178&lng=73.01200519999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    const menuData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setRestaurantMenu(menuData);
    setRestaurantMenu(menuData?.splice(3, menuData?.length - 3));
    setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
  };

  const handleVegFilter = () => {
    setIsVegOnly(!isVegOnly);
  };

  return (
    <>
      {restaurantData?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="flex justify-center mt-10">
          <div className=" w-[60%] h-auto">
            <p className="text-[12px] text-gray-400 font-normal">
              <Link to="/" className="hover:text-black">Home</Link> / Mumbai /{" "}
              <span className="text-black">{restaurantData?.name}</span>
            </p>
            {/* First Card */}
            <div className="p-4 flex justify-between items-center border-b border-b-[lightgray]">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-[17px]">
                  {restaurantData?.name}
                </h2>
                <div className="text-[12px] text-gray-400 leading-snug">
                  <p>{restaurantData?.cuisines?.join(", ")}</p>
                  <p>{restaurantData?.areaName}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-md shadow-md h-auto p-2">
                <div className="flex gap-1 items-center justify-center w-full h-[30px] border-b border-b-[lightgray] ">
                  <StarIcon sx={{ color: "#0c4f1c", fontSize: 18 }} />
                  <p
                    className={[
                      "font-semibold",
                      restaurantData?.avgRatingString >= 4
                        ? "text-[#0c4f1c]"
                        : restaurantData?.avgRatingString >= 3
                        ? "text-[#72ad70]"
                        : "text-[#8a7820]",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {restaurantData?.avgRatingString}
                  </p>
                </div>
                <p className="text-[10px] text-gray-400 pt-1">
                  {restaurantData?.totalRatingsString}
                </p>
              </div>
            </div>
            {/* Second Card */}
            <div className="p-4 border-b border-b-[lightgray] flex gap-10 ">
              <div className="flex gap-2">
                <WatchLaterIcon sx={{ color: "#fb9334", fontSize: 22 }} />
                <p className="font-bold text-[14px] uppercase">
                  {restaurantData?.sla?.deliveryTime} mins
                </p>
              </div>
              <div className="flex gap-2">
                <PaymentsIcon sx={{ color: "#fb9334", fontSize: 22 }} />
                <p className="font-bold text-[14px] uppercase">
                  ₹{restaurantData?.costForTwo / 100} for two
                </p>
              </div>
            </div>
            {/* Third Card */}
            <div className="p-4">
              <ToggleBtn
                checkedValue={isVegOnly}
                handleToggle={handleVegFilter}
              />
            </div>
            {/* Fourth Card - Menu */}
            <div className="p-4 my-4 border-y-[10px] border-y-[#e5e5e5] flex flex-col gap-8 ">
              {restaurantMenu?.map((mainMenu) => {
                const categories = mainMenu?.card?.card?.categories;
                const title = mainMenu?.card?.card?.title;
                const items = mainMenu?.card?.card?.itemCards;
                const vegItems = items?.filter(
                  (menuItem) => menuItem?.card?.info?.isVeg === 1
                );
                return (
                  <div className="flex flex-col items-start">
                    <h2 className="font-extrabold">{title}</h2>
                    <div className="w-full">
                      {items ? (
                        <Accordian
                          title={title}
                          data={isVegOnly ? vegItems : items}
                        />
                      ) : (
                        categories?.map((items) => {
                          const unfilteredData = items?.itemCards;
                          const vegOnlyData = unfilteredData?.filter(
                            (menuItem) => menuItem?.card?.info?.isVeg === 1
                          );
                          return (
                            <Accordian
                                key={items?.title}
                              title={items?.title}
                              data={isVegOnly ? vegOnlyData : unfilteredData}
                            />
                          );
                        })
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
