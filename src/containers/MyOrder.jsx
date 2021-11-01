import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import OrderItem from "@components/OrderItem";
import arrowIcon from "@icons/flechita.svg";
import "@styles/MyOrder.scss";

const MyOrder = () => {
  const { state, total } = useContext(AppContext);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrowIcon} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.card.map((product) => (
          <OrderItem key={`orderItem-${product?.id}`} product={product} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${total}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
