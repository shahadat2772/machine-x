import React from "react";

import useReviews from "../../hooks/useReviews/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="reviewsContainer">
      <p className="customerReviews">Customer reviews</p>
      <div>
        {reviews.map((review) => (
          <Review reviewJT={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
