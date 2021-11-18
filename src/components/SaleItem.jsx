import React from "react";
import Time from "@components/Time";

import arrow from "@icons/flechita.svg";
import "@styles/SaleItem.scss";

export default function SaleItem({ date, articles, total }) {
  return (
    <div className="Sale-Item">
      <p className="Sale-Info">
        <Time date={date} />
        <span>{articles} articles</span>
      </p>
      <div className="Sale-details">
        <p className="Sale-price">$ {total}</p>
        <img className="Sale-icon" src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
