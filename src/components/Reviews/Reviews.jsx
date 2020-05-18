import React from "react";
import "./Reviews.css";
import { Link } from "react-router-dom";
import reviewsData from "../../data/reviews-list-sample";

const Reviews = () => {
  return (
    <ul>
      {reviewsData.reviews.map((review) => (
        <li key={review.id}>
          <Link to={`/review?id=${review.id}`}>
            <h3>{review.title}</h3>
          </Link>
          <p>{review.author}</p>
          <p>{review.date}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
