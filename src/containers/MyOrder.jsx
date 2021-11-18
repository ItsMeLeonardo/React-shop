import React from "react";
import { Link } from "react-router-dom";
import useShoppingCart from "@hooks/useShoppingCart";
import useUser from "@hooks/useUser";

import OrderItem from "@components/OrderItem";
import arrowIcon from "@icons/flechita.svg";
import "@styles/MyOrder.scss";

const MyOrder = ({ hideMyOrder }) => {
  const { shopCart, totalPrice } = useShoppingCart();
  const { isLogged } = useUser();

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
        {shopCart.map((product) => (
          <OrderItem key={`orderItem-${product?.id}`} product={product} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${totalPrice}</p>
        </div>
        <Link to={isLogged ? "/checkout" : "/login"}>
          <button className="primary-button" onClick={hideMyOrder}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
