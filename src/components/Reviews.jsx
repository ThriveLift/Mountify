import React from "react";
import "./Reviews.css";
import reviews from "../constrants/reviews";
import backGroundImage from "../assets/blvck-paris-ckBxIZmpXJE-unsplash.jpg";

const Reviews = () => {
  return (
    <div className="mountify__reviews section__marginTop">
      <img
        className="mountify__review--backgroundImage"
        src={backGroundImage}
        alt=""
      />

      <h2 className="mountify__reviews-title">
        <span className="facebookText facebookTxt-bg">Facebook</span>
        Reviews
      </h2>

      <div className="mountify__reviews--cards">
        {reviews.map((review, index) => (
          <div key={index} className="mountify__reviews--review_card">
            <h3 className="mountify__reviews--review-name">{review.name}</h3>
            <div className="mountify__reviews--review-stars">
              {review.stars}
            </div>
            <p className="mountify__reviews--review-comment">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
