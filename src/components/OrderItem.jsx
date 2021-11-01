import React from "react";
import closeIcon from "@icons/icon_close.png";
import "@styles/OrderItem.scss";

const OrderItem = ({ product, removeFromCard }) => {
  const { title, id, price, images } = product;

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
