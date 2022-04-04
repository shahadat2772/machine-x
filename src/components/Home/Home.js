import React from "react";
import "./Home.css";
import macbookpro from "../images/macbookpro1.png";
import "./Home.css";
import useReviews from "../../hooks/useReviews/useReviews";
import Review from "../Review/Review";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  const threeReview = reviews.slice(0, 3);

  return (
    // Main Home Container
    <div className="homeContainer">
      <div className="homeSec1Container">
        {/* Section-1 feature side */}
        <div className="homeSec1Text">
          <p>M1 Max MacBook Pro</p>
          <ul>
            <li>
              Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and
              machine learning performance
            </li>
            <li>
              Up to 10-core CPU delivers up to 2x faster performance to fly
              through pro workflows quicker than ever
            </li>
            <li>
              Up to 32-core GPU with up to 4x faster performance for
              graphics-intensive apps and games
            </li>
            <li>
              16-core Neural Engine for up to 5x faster machine learning
              performance
            </li>
            <li>Longer battery life, up to 21 hours</li>
            <li>
              Up to 64GB of unified memory so everything you do is fast and
              fluid
            </li>
            <li>
              Up to 8TB of superfast SSD storage launches apps and opens files
              in an instant
            </li>
            <li>
              Stunning 16-inch Liquid Retina XDR display with extreme dynamic
              range and contrast ratio
            </li>
            <li>
              1080p FaceTime HD camera with advanced image signal processor for
              sharper video calls
            </li>
          </ul>
        </div>
        {/* Section-1 Img */}
        <div className="homeSec1Img">
          <img src={macbookpro} alt="" />
        </div>
      </div>
      {/* Review section in HOME */}
      <div className="reviewsContainer">
        <p className="customerReviews">Customer Reviews</p>
        {threeReview.map((review) => (
          <Review key={review.id} reviewJT={review}></Review>
        ))}
        <div className="seeMoreBtn">
          <Link to="/reviews">See More...</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
