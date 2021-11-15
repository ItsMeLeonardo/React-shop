import React, { useContext } from "react";
import { ShoppingCartContext } from "@context/ShoppingCartContext";
import Time from "@components/Time";

import "@styles/Checkout.scss";

// TODO: complete checkout page
const Checkout = () => {
  const { shopCart, totalPrice, totalItems } = useContext(ShoppingCartContext);

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <Time />
              <span>{totalItems} articles</span>
            </p>
            <p>${totalPrice}</p>
          </div>
        </div>
        {shopCart.map((product) => (
          <OrderItem key={`orderItem-${product?.id}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
