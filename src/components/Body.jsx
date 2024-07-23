import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [topRatedFilter, setTopRatedFilter] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { restaurantListData } = useRestaurantList();

  useEffect(() => {
    if (restaurantListData?.length > 0) {
      setFilteredList(restaurantListData);
    }
  }, [restaurantListData]);


  const handleTopRatedFilter = () => {
    setTopRatedFilter(!topRatedFilter);
    if (!topRatedFilter) {
      const filteredList = restaurantListData?.filter(
        (restaurant) => restaurant?.info?.avgRating >= 4.3
      );
      setFilteredList(filteredList);
    } else {
      setFilteredList(restaurantListData);
    }
  };

  const handleSearch = (searchValue) => {
    const filteredList = restaurantListData?.filter(
      (restaurant) =>
        restaurant?.info?.name.toLowerCase()?.includes(searchValue) ||
        restaurant?.info?.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchValue)
    );
    setFilteredList(filteredList);
    searchValue.length == 1 && setFilteredList(restaurantListData);
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Body header - "Food Delivery Restaurants in Mumbai" | search + top rated restaurants */}
      <div className="mt-20 flex flex-col gap-4 md:flex-row items-center justify-between">
        <h1 className="font-bold text-[1.6rem]">
          Food Delivery Restaurants in Mumbai
        </h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 bg-accent rounded-md pr-2 overflow-hidden">
            <input
              type="search"
              results="5"
              className="outline-none px-2 py-1"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e?.target?.value);
                handleSearch(searchValue);
              }}
            />
            <SearchOutlinedIcon sx={{ fontSize: "large" }} />
          </div>
          <button
            className={topRatedFilter == true ? "btn-primary" : "btn-secondary"}
            onClick={handleTopRatedFilter}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {/* RestoCard container */}
      {restaurantListData?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="justify-center flex gap-7 flex-wrap items-center ">
          {filteredList?.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info?.id}
                to={`/restaurants/${restaurant?.info?.id}`}
              >
                <RestaurantCard data={restaurant?.info} />
              </Link>
            );
          })}
          <div className="h-[150px] w-[300px] rounded-lg"></div>
          <div className="h-[150px] w-[300px] rounded-lg"></div>
          <div className="h-[150px] w-[300px] rounded-lg"></div>
        </div>
      )}
    </div>
  );
};

export default Body;