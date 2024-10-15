import React from "react";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props;
  console.log(props.info, "I AM PROPS");

  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="logo"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(" ,  ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
