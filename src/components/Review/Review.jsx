import React from "react";
import "./Review.css";
import { useLocation } from "react-router-dom";
import data from "../../data/review-sample-1";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Review = () => {
  const query = useQuery();
  const reviewId = query.get("id");
  console.log(data);

  return <div>{data.content}</div>;
};

export default Review;
