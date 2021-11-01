import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import closeIcon from "@icons/icon_close.png";
import "@styles/OrderItem.scss";

const OrderItem = ({ product }) => {
  const { title, id, price, images } = product;

  const { removeFromCard } = useContext(AppContext);

  return (
    <div className="OrderItem">
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img
        src={closeIcon}
        alt="close"
        onClick={() => removeFromCard(id)}
        className="btn"
      />
    </div>
  );
};

export default OrderItem;
