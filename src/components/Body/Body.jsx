import React, {
  useState,
  useEffect,
} from "react";
import { restaurantList } from "../../config.js";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
// import axios from 'axios';
import Shimmer from "../Shimmer/Shimmer.jsx";

function filterData(
  searchText,
  restaurants
) {
  const filteredData =
    restaurants.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        );
    });
  console.log(filteredData);
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] =
    useState("");
  const [restaurants, setRestaurants] =
    useState(restaurantList);

  useEffect(() => {
    console.log("useeffect");
    // getRestaurantsData();
  }, []);

  // async function getRestaurantsData() {
  // 	const data = await fetch(
  // 		'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
  // 	);
  // 	const json = await data.json();
  // 	// setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  // 	console.log('i am data mm', json);
  // }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(
              e.target.value
            );
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(
              searchText,
              restaurants
            );
            setRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map(
          (currRestaurant) => {
            return (
              <RestaurantCard
                key={
                  currRestaurant.info.id
                }
                {...currRestaurant.info}
              />
            );
          }
        )}
      </div>
    </>
  );
};
export default Body;
