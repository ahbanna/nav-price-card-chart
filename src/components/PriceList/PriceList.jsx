import React, { useEffect, useState } from "react";
import PriceCard from "../PirceCard/PriceCard";
import "./PriceList.css";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="all-pricing">
      <div className="pricing-heading">
        <h2>Pricing Plan</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-3 all-pricing">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
