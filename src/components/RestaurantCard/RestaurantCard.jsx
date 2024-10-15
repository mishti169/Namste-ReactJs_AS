import React from "react";
import { IMG_CDN_URL } from "../../config.js";

// const RestaurantCard  = (props) => {
// 	const { name, cuisines, avgRating, cloudinaryImageId } = props;

// 	return (
// 		<div className='card'>
// 			<img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
// 			<h2>{name}</h2>
// 			<h3>{cuisines.join(',')}</h3>
// 			<h4>{avgRating} stars</h4>
// 		</div>
// 	);
// };
// export default RestaurantCards;

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props;
  console.log(props.info, "I AM PROPS");

  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="logo" />
      <h2>{name}</h2>
      <h3>{cuisines.join(" ,  ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
