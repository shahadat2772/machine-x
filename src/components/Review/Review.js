import React from "react";
import "./Review.css";

const Review = ({ reviewJT }) => {
  const { id, img, name, review, ratings } = reviewJT;
  return (
    <div className="reviewContainer">
      <div className="reviewHeader">
        <img src={img} alt="" />
        <p className="reviewerName">{name}</p>
      </div>
      <div className="ratings">
        <small>Ratings: 5/{ratings}</small>
      </div>
      <div className="body">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;
