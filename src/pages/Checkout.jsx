import React, { useContext } from "react";
import useShoppingCart from "@hooks/useShoppingCart";
import OrderItem from "@components/OrderItem";
import Time from "@components/Time";

import arrowIcon from "@icons/flechita.svg";
import "@styles/Checkout.scss";
import { Link } from "react-router-dom";

// TODO: add modal to confirm [Thank you for your sale :D]
const Checkout = () => {
  const { shopCart, totalPrice, totalItems, pay } = useShoppingCart();

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <div className="Checkout-title-container" type="button">
          <Link to="/">
            <button className="Checkout-back">
              <img src={arrowIcon} alt="arrow" className="Checkout-arrow" />
            </button>
          </Link>
          <h1 className="Checkout-title">My order</h1>
        </div>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <Time />
              <span>{totalItems} articles</span>
            </p>
            <p>${totalPrice}</p>
          </div>
        </div>
        {shopCart?.map((product) => (
          <OrderItem
            key={`orderItem-${product?.id}`}
            dynamicItem={false}
            product={product}
          />
        ))}
        <Link to="/orders">
          <button onClick={pay} className="primary-button">
            Pay now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
