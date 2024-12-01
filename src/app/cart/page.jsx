"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Blue Flower Print Crop Top",
      price: 1000,
      quantity: 1,
      shipping: "FREE",
      size: "M",
      image:
        "https://res.cloudinary.com/dgzduwswb/image/upload/v1733051511/wv1p92bs7eowvqkfztcw.webp",
    },
    {
      id: 2,
      name: "Lavender Hoodie",
      price: 2050,
      quantity: 1,
      shipping: "FREE",
      size: "XXL",
      image:
        "https://res.cloudinary.com/dgzduwswb/image/upload/v1733051511/hueipuwax22ousd3nb5j.webp",
    },
  ]);

  const calculateSubTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + change),
            }
          : item
      )
    );
  };

  return (
    <section className="cart_detail pt-2 pb-0">
      <div className="wrapper">
        <div className="table_overflow">
          <table className="cart-table">
            <thead>
              <tr>
                <th>PRODUCT DETAILS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SHIPPING</th>
                <th>SUBTOTAL</th>
                <th style={{ textAlign: "center" }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="img_flex_detl">
                      <Image
                        src={item.image}
                        quality={100}
                        height={0}
                        width={0}
                        sizes="100vh"
                        alt={item.name}
                      />
                      <div>
                        <Link className="img_title" href={item.redirect || "#"}>
                          {item.name}
                        </Link>
                        <br /> <span className="img_span"> Color: Yellow</span>
                        <br />
                        <span className="img_span"> Size: {item.size}</span>
                      </div>
                    </div>
                  </td>
                  <td>Rs.{item.price}</td>
                  <td>
                    <div className="inc_flex">
                      <button
                        className="btn_increment"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="btn_increment">{item.quantity}</span>
                      <button
                        className="btn_increment"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{item.shipping}</td>
                  <td>Rs.{item.price * item.quantity}</td>
                  <td style={{ textAlign: "center" }}>
                    <button className="delete_btn">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg_cp">
        <div className="wrapper">
          <div className="cp_flex">
            <div className="coupon-section">
              <h3>Discount Codes</h3>
              <div className="btn_cp_dfl">
                <input type="text" placeholder="Enter your coupon code" />
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
              <Link href={"#"} className="btn btn-outline">
                Continue Shopping
              </Link>
            </div>

            <div className="cart-summary">
              <div className="crt_p">
                <div>
                  <span>Sub Total:</span> Rs.{calculateSubTotal()}
                </div>
                <div>
                  <span>Shipping:</span> Rs.00
                </div>
                <div>
                  <strong>Grand Total:</strong>{" "}
                  <strong>Rs.{calculateSubTotal()}</strong>
                </div>
              </div>
              <button className="btn btn-primary">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
