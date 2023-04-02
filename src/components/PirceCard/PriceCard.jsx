import React from "react";
import "./PriceCard.css";

import { CheckIcon } from "@heroicons/react/24/solid";

const PriceCard = (props) => {
  const { planName, features, price } = props.price;
  console.log(planName);
  return (
    <div className="single-card">
      <h3>
        <span>$</span>
        {price}
        <span> /Month</span>
      </h3>
      <h2>{planName}</h2>
      <h4>Features</h4>
      {features.map((feature) => (
        <p className="flex">
          <CheckIcon className="h-6 w-6 text-white pr-4" />
          {feature}
        </p>
      ))}
      <button className=" buy-now-btn w-64 rounded-full bg-white text-black font-bold py-2">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
