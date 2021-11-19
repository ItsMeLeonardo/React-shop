import React from "react";
import { Link, useParams } from "react-router-dom";
import Time from "@components/Time";
import OrderItem from "@components/OrderItem";
import useOrders from "@hooks/useOrders";

import arrowIcon from "@icons/flechita.svg";

export default function OrderDetail() {
  const { orderId, userId } = useParams();

  const { orders, loading } = useOrders({ userId });
  const order = orders.find((order) => order?.id == orderId);

  // console.log(order.id);
  if (loading) return <div>Cargando...</div>;

  // FIXME: persistent data before reload or refresh the page
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <div className="Checkout-title-container" role="button">
          <Link to="/orders">
            <button className="Checkout-back">
              <img src={arrowIcon} alt="arrow" className="Checkout-arrow" />
            </button>
          </Link>
          <h1 className="Checkout-title">N° Order {order?.id}</h1>
        </div>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <Time />
              <span>{order?.quantity} articles</span>
            </p>
            <p>${order?.totalPrice}</p>
          </div>
        </div>
        {order?.productsData?.map((product) => (
          <OrderItem
            key={`orderItem-${product?.id}`}
            dynamicItem={false}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
