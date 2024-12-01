import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ image, name, rating, review }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="review_card">
      <div className="detail_flex">
        <div className="review_image">
          <Image
            src={image}
            height={0}
            width={0}
            quality={100}
            sizes="100vh"
            alt={name}
          />
        </div>
        <div className="review_rating">{renderStars(rating)}</div>
      </div>
      <h3 className="review_name">{name}</h3>
      <p className="review_text">{review}</p>
    </div>
  );
};

export default ReviewCard;
