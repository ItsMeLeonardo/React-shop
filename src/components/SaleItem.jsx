import React from "react";
import Time from "@components/Time";

import arrow from "@icons/flechita.svg";
import "@styles/SaleItem.scss";
import { Link } from "react-router-dom";

export default function SaleItem({ date, articles, total, id, idUser }) {
  return (
    <Link to={`orders/${idUser}/${id}`} className="Sale-Item">
      <p className="Sale-Info">
        <Time date={date} />
        <span>{articles} articles</span>
      </p>
      <div className="Sale-details">
        <p className="Sale-price">$ {total || "000"}</p>
        <img className="Sale-icon" src={arrow} alt="arrow" />
      </div>
    </Link>
  );
}
