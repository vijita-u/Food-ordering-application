import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [topRatedFilter, setTopRatedFilter] = useState(false);

  useEffect(() => {
    fetchData();
    console.log(listOfRestaurants);
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9707178&lng=73.01200519999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // Convert this data into json format
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0].info
    );
    const unfilteredData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(unfilteredData);

    console.log(topRatedFilter);
  };

  const handleTopRatedFilter = () => {
    setTopRatedFilter(!topRatedFilter);
    if (!topRatedFilter) {
      const filteredList = listOfRestaurants.filter(
        (restaurant) => restaurant?.info?.avgRating >= 4.3
      );
      setListOfRestaurants(filteredList);
    } else {
      fetchData(); // Reset to the unfiltered list when the filter is turned off
    }
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
            <input type="text" className="outline-none px-2 py-1" />
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
      <div className="flex gap-7 flex-wrap items-center justify-center">
        {listOfRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} data={restaurant.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
