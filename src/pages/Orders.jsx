import React, { useContext } from "react";
import { ShoppingCartContext } from "@context/ShoppingCartContext";
import OrderItem from "@components/OrderItem";
import Time from "@components/Time";
import SaleItem from "@components/SaleItem";

import "@styles/Orders.scss";

// TODO: this component is for [orders - total-sales]
const Orders = () => {
  const { shopCart, totalPrice, totalItems } = useContext(ShoppingCartContext);
  console.log(shopCart);

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
