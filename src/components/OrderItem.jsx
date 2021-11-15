import React, { useContext } from "react";
import { ShoppingCartContext } from "@context/ShoppingCartContext";

import closeIcon from "@icons/icon_close.png";
import "@styles/OrderItem.scss";
import Button from "./Button";

const hiddenTitle = (title) => {
  if (title.length > 27) {
    return title.slice(0, 25) + "...";
  }
  return title;
};

const OrderItem = ({ product, dynamicItem = true } = {}) => {
  const { title, id, price, image, quantity } = product;

  const { removeFromCart, addToCart, removeOneFromCart } =
    useContext(ShoppingCartContext);

  return (
    <div className="OrderItem">
      <figure>
        <img src={image} alt={title} />
      </figure>

      <div className="OrderItem-content-quantity">
        {dynamicItem && (
          <Button type="small" onClick={() => addToCart(product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Button>
        )}

        <span className="OrderItem-quantity">{quantity}</span>

        {dynamicItem && (
          <Button type="small" onClick={() => removeOneFromCart(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </Button>
        )}
      </div>

      <p>{hiddenTitle(title)}</p>
      <p>${price * quantity}</p>

      {dynamicItem && (
        <img
          src={closeIcon}
          alt="close"
          onClick={() => removeFromCart(id)}
          className="btn"
        />
      )}
    </div>
  );
};

export default OrderItem;
