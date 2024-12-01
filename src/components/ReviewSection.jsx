"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import Heading from "./Heading";

const ReviewSection = ({ reviews }) => {
  return (
    <section className="review_section">
      <div className="wrapper">
        <Heading title={"Customers Review"} />
        <div className="orflow_hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              579: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  image={review.image}
                  name={review.name}
                  rating={review.rating}
                  review={review.review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
