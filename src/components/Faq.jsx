"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faq = ({ title, faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section className="faq_section">
      <div className="wrapper">
        <Heading title={title || "FAQ"} />
        <div className="faq_list">
          {faqs.map((faq, index) => (
            <div
              className={`faq_item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq_question" onClick={() => toggleFaq(index)}>
                {index + 1}. {faq.question}
                <span className="faq_toggle">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq_answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
