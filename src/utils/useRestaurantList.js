import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

const useRestaurantList = () => {
  const [restaurantListData, setRestaurantListData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();

    const unfilteredData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantListData(unfilteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {restaurantListData};
};

export default useRestaurantList;
