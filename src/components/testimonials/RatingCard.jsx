import React from "react";

const RatingCard = ({ username, review, rating }) => {
  return (
    <article>
      <img src="" alt="User Picture" />
      <div>
        <h3>{username}</h3>
        <p>{review}</p>
        <div className="stars">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </article>
  );
};

export default RatingCard;
