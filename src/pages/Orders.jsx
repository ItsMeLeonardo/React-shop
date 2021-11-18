import React from "react";
import useShoppingCart from "@hooks/useShoppingCart";
import SaleItem from "@components/SaleItem";

import "@styles/Orders.scss";

// TODO: this component is for [orders - total-sales]
const Orders = () => {
  const { shopCart, totalPrice, totalItems } = useShoppingCart();

  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">Total orders</h1>
        <div className="Orders-content">
          <SaleItem />
        </div>
      </div>
    </div>
  );
};

export default Orders;
