import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import OrderItem from "@components/OrderItem";
import arrowIcon from "@icons/flechita.svg";
import "@styles/MyOrder.scss";

const MyOrder = ({ hideMyOrder }) => {
  const { state, totalPrice } = useContext(AppContext);

  return (
    <aside className="MyOrder">
      <div
        className="title-container-my-order"
        type="button"
        onClick={hideMyOrder}
      >
        <img src={arrowIcon} alt="arrow" />
        <p className="title-myOrder">My order</p>
      </div>
      <div className="my-order-content">
        {state.card.map((product) => (
          <OrderItem key={`orderItem-${product?.id}`} product={product} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${totalPrice}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
