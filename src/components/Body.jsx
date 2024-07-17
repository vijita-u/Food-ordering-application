import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [topRatedFilter, setTopRatedFilter] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9707178&lng=73.01200519999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // Convert this data into json format
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants[0].info
    // );
    const unfilteredData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(unfilteredData);
    setFilteredList(unfilteredData);
  };

  const handleTopRatedFilter = () => {
    setTopRatedFilter(!topRatedFilter);
    if (!topRatedFilter) {
      const filteredList = listOfRestaurants.filter(
        (restaurant) => restaurant?.info?.avgRating >= 4.3
      );
      setFilteredList(filteredList);
    } else {
      setFilteredList(listOfRestaurants);
    }
  };

  const handleSearch = (searchValue) => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchValue) ||
        restaurant?.info?.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchValue)
    );
    setFilteredList(filteredList);
    searchValue.length == 1 && setFilteredList(listOfRestaurants);
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Body header - "Food Delivery Restaurants in Mumbai" | search + top rated restaurants */}
      <div className="mt-20 flex items-center justify-between">
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
                setSearchValue(e.target.value);
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
      {listOfRestaurants?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="flex gap-7 flex-wrap items-center ">
          {filteredList?.map((restaurant) => {
            return (
              <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`}>
              <RestaurantCard data={restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
