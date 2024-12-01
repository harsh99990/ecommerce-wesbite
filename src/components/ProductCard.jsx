import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const ProductCard = ({
  image,
  title,
  description,
  price,
  originalPrice,
  discount,
  rating,
  redirectTo,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
  };
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
        <button
          className={`wishlist-icon ${isWishlisted ? "active" : ""}`}
          onClick={handleWishlistClick}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
        <div className="rating">
          <span>{rating}</span>
          <AiFillStar className="star-icon" />
        </div>
      </div>
      <div className="product-info">
        <Link href={redirectTo || "#"}>
          <h3 className="product-title">{title}</h3>
        </Link>
        <p className="product-description">{description}</p>
        <div className="price-section">
          <span className="current-price">Rs.{price}</span>
          <span className="original-price">Rs.{originalPrice}</span>
          <span className="discount">{discount} off</span>
        </div>
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
