import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantData = (resId) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();

    const menuData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const relevantMenuData = menuData?.filter((data) => data?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    setRestaurantMenu(relevantMenuData);
    setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
  };

  return {restaurantData, restaurantMenu};
};


export default useRestaurantData;