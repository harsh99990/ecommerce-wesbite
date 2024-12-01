import Link from "next/link";
import React from "react";

const Heading = ({ title, redirectTo, isButton, buttonText, buttonClass }) => {
  return (
    <div className="heading_flex">
      <h2>{title}</h2>
      {isButton && (
        <Link href={redirectTo || "#"} className={`btn ${buttonClass}`}>
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Heading;
