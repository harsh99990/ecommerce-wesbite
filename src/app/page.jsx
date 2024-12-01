"use client";
import Faq from "@/components/Faq";
import ReviewSection from "@/components/ReviewSection";
import React from "react";
import { faqsData, productData, reviews, popularData } from "./data";
import Heading from "@/components/Heading";
import Image from "next/image";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";
import b4 from "../assets/images/b4.png";
import b5 from "../assets/images/b5.png";
import b6 from "../assets/images/b6.png";
import b7 from "../assets/images/b7.png";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import c7 from "../assets/images/c7.png";
import c8 from "../assets/images/c8.png";
import banner from "../assets/images/banner.webp";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { LiaRupeeSignSolid, LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "@/components/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <React.Fragment>
      <div className="banner-container">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 3000,
          }}
          className="hero_banner_swiper"
          loop={true}
        >
          <SwiperSlide>
            <div className="banner-slide">
              <div className="content">
                <h1>
                  Lorem ipsum <br /> dolor sit.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Varius eu sed
                  adipiscing pellentesque feugiat gravida tincidunt lobortis mi.
                  Nisi sollicitudin in dictumst elementum amet nulla. Malesuada
                  tempor consequat dui fringilla pretium. Egestas nibh et sociis
                  enim nisl aliquet ultrices.
                </p>
                <div className="bn_slide">
                  <button className="btn btn-outline">Explore</button>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dgzduwswb/image/upload/v1733051445/samples/chair-and-coffee-table.jpg"
                  alt="Shoe"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide">
              <div className="content">
                <h1>
                  Lorem ipsum <br /> dolor sit.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Varius eu sed
                  adipiscing pellentesque feugiat gravida tincidunt lobortis mi.
                  Nisi sollicitudin in dictumst elementum amet nulla. Malesuada
                  tempor consequat dui fringilla pretium. Egestas nibh et sociis
                  enim nisl aliquet ultrices.
                </p>
                <div className="bn_slide">
                  <button className="btn btn-outline">Explore</button>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dgzduwswb/image/upload/v1733051446/cld-sample-5.jpg"
                  alt="Shoe"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide">
              <div className="content">
                <h1>
                  Lorem ipsum <br /> dolor sit.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Varius eu sed
                  adipiscing pellentesque feugiat gravida tincidunt lobortis mi.
                  Nisi sollicitudin in dictumst elementum amet nulla. Malesuada
                  tempor consequat dui fringilla pretium. Egestas nibh et sociis
                  enim nisl aliquet ultrices.
                </p>
                <div className="bn_slide">
                  <button className="btn btn-outline">Explore</button>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dgzduwswb/image/upload/v1733051446/cld-sample-3.jpg"
                  alt="Shoe"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="navigation_btn_flex">
          <div className="swiper-button-prev-custom">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next-custom">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <section className="hc_section">
        <div className="wrapper">
          <div className="hc_grid">
            <div className="hc_item">
              <p className="hc_title">95%</p>
              <p className="hc_desc">Happy Customer</p>
            </div>
            <div className="hc_item">
              <p className="hc_title">1 Million+</p>
              <p className="hc_desc">Yearly Sale</p>
            </div>
            <div className="hc_item">
              <p className="hc_title">20K+</p>
              <p className="hc_desc">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cat_section">
        <div className="wrapper">
          <Heading title={"Categories"} />
          <div className="cat_grid">
            <Link href={"#"} className="cat_list">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                src={c1}
                alt="Men"
              />
              <p className="cat_title">Men</p>
            </Link>
            <Link href={"#"} className="cat_list">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                src={c2}
                alt="Women"
              />
              <p className="cat_title">Women</p>
            </Link>
            <Link href={"#"} className="cat_list">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                src={c3}
                alt="Women"
              />
              <p className="cat_title">Women</p>
            </Link>
            <Link href={"#"} className="cat_list">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                src={c4}
                alt="Cosmetics"
              />
              <p className="cat_title">Cosmetics</p>
            </Link>
            <Link href={"#"} className="cat_list">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                src={c5}
                alt="Accessories"
              />
              <p className="cat_title">Accessories</p>
            </Link>
            <Link href={"#"} className="cat_list">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                src={c6}
                alt="Home"
              />
              <p className="cat_title">Home</p>
            </Link>
            <Link href={"#"} className="cat_list">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                src={c7}
                alt="Footwears"
              />
              <p className="cat_title">Footwears</p>
            </Link>
            <Link href={"#"} className="cat_list">
              <Image
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                src={c8}
                alt="Sports"
              />
              <p className="cat_title">Sports</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="feature_section">
        <div className="wrapper">
          <Heading
            title={"Feature Products"}
            isButton
            buttonText={"View All"}
            redirectTo={"#"}
            buttonClass={"btn-primary"}
          />
          <div className="product_grid">
            {productData.map((product, id) => (
              <ProductCard
                key={id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                redirectTo={product.href}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="e_offer">
        <div className="wrapper">
          <div className="e_offer_flex">
            <div className="e_off_item">
              <LiaShippingFastSolid className="e_off_ic" />
              <div className="e_off_content">
                <p className="e_head">Free Shipping</p>
                <p className="e_desc">Above all Orders over 200rs.</p>
              </div>
            </div>
            <div className="e_off_item">
              <LiaRupeeSignSolid className="e_off_ic" />
              <div className="e_off_content">
                <p className="e_head">Money Guarantee</p>
                <p className="e_desc">45 Days for Exchange</p>
              </div>
            </div>
            <div className="e_off_item">
              <BiSupport className="e_off_ic" />
              <div className="e_off_content">
                <p className="e_head">Online Support</p>
                <p className="e_desc">24/7 Customer Care</p>
              </div>
            </div>
            <div className="e_off_item">
              <MdPayment className="e_off_ic" />
              <div className="e_off_content">
                <p className="e_head">Flexible Payment</p>
                <p className="e_desc">Pay with multiple Credit Card</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner_section">
        <div className="wrapper">
          <Link href={"#"}>
            <Image
              src={banner}
              quality={100}
              sizes="100vh"
              height={0}
              width={0}
            />
          </Link>
        </div>
      </section>
      <section className="feature_section populat_section">
        <div className="wrapper">
          <Heading
            title={"Most Popular Products"}
            isButton
            buttonText={"View All"}
            redirectTo={"#"}
            buttonClass={"btn-primary"}
          />
          <div className="product_grid">
            {popularData.map((product, id) => (
              <ProductCard
                key={id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                redirectTo={product.href}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="brand_section">
        <div className="wrapper">
          <Heading title={"Popular Brands"} />
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={5000}
          grabCursor={false}
          breakpoints={{
            320: { slidesPerView: 2.5 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
        >
          <SwiperSlide className="b_img">
            <Image src={b1} alt="Brand 1" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b2} alt="Brand 2" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b3} alt="Brand 3" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b4} alt="Brand 4" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b5} alt="Brand 5" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b6} alt="Brand 6" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b7} alt="Brand 7" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b1} alt="Brand 1" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b2} alt="Brand 2" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b3} alt="Brand 3" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b4} alt="Brand 4" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b5} alt="Brand 5" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b6} alt="Brand 6" sizes="100vh" />
          </SwiperSlide>
          <SwiperSlide className="b_img">
            <Image src={b7} alt="Brand 7" sizes="100vh" />
          </SwiperSlide>
        </Swiper>
      </section>
      <Faq faqs={faqsData} />
      <ReviewSection reviews={reviews} />
    </React.Fragment>
  );
}
