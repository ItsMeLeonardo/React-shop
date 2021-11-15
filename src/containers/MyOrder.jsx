import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "@context/ShoppingCartContext";

import OrderItem from "@components/OrderItem";
import arrowIcon from "@icons/flechita.svg";
import "@styles/MyOrder.scss";

const MyOrder = ({ hideMyOrder }) => {
  const { shopCart, totalPrice } = useContext(ShoppingCartContext);

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
        <Link to="/checkout">
          <button className="primary-button">Checkout</button>
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
