import React from "react";
import Time from "@components/Time";

import arrow from "@icons/flechita.svg";
import "@styles/SaleItem.scss";

export default function SaleItem() {
  return (
    <div className="Sale-Item">
      <p className="Sale-Info">
        <Time />
        <span>1 articles</span>
      </p>
      <div className="Sale-details">
        <p className="Sale-price">$ 125.00</p>
        <img className="Sale-icon" src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
