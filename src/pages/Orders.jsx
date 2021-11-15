import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import "@styles/Orders.scss";
import { ShoppingCartContext } from "@context/ShoppingCartContext";
import Time from "@components/Time";

// TODO: this component is for [orders - total-sales]
const Orders = () => {
  const { shopCart, totalPrice, totalItems } = useContext(ShoppingCartContext);
  console.log(shopCart);

  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My orders</h1>
        <div className="Orders-content">
          <div className="Order-info">
            <header className="Order-data">
              <Time />
              <span className="Order-total-items">{totalItems} items</span>
            </header>
            <p>
              <span className="Order-Price">${totalPrice}</span>
            </p>
          </div>
          {shopCart?.map((item) => (
            <OrderItem key={item.id} product={item} dynamicItem={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
